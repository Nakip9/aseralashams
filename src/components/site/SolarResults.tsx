"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, BatteryCharging, Calculator, Check, ClipboardCopy, Info, ListChecks, MessageCircle, ShieldCheck, Sun, Zap } from "lucide-react";
import { COMPANY } from "./data";
import { BATTERIES, SYSTEM_ACCESSORIES, buildSolarQuote, panelConfigurations, solarWhatsAppUrl } from "@/lib/solar-calculator";
import type { ApplianceLoad, SolarSettings, calculateSolarSystem } from "@/lib/solar-calculator";
import styles from "./SolarCalculator.module.css";

const number = (value: number, digits = 2) => new Intl.NumberFormat("en-US", { maximumFractionDigits: digits }).format(value);
const minimum = (value: number) => number(Math.ceil(value * 100) / 100);

interface SolarResultsProps {
  loads: ApplianceLoad[];
  settings: SolarSettings;
  location: string;
  result: ReturnType<typeof calculateSolarSystem> | null;
  errors: string[];
  onPanelChange: (watts: number) => void;
}

export function SolarResults({ loads, settings, location, result, errors, onPanelChange }: SolarResultsProps) {
  const [copiedQuote, setCopiedQuote] = useState("");
  const [copyError, setCopyError] = useState(false);
  const previewRef = useRef<HTMLDetailsElement>(null);
  const quote = result ? buildSolarQuote(loads, settings, location) : "";
  const battery = BATTERIES[settings.battery];
  const whatsappUrl = solarWhatsAppUrl(COMPANY.whatsapp, quote);
  const copied = quote.length > 0 && copiedQuote === quote;

  function openPreview() {
    if (previewRef.current) {
      previewRef.current.open = true;
      previewRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  async function copyQuote() {
    try {
      await navigator.clipboard.writeText(quote);
      setCopiedQuote(quote);
      setCopyError(false);
    } catch {
      setCopyError(true);
      openPreview();
    }
  }

  return <>
    <aside id="solar-results" className={styles.results} aria-label="نتيجة حساب المنظومة">
      <div className={styles.resultHeader}>
        <div className={styles.resultHeading}><span className={styles.liveDot} /> تتحدث النتيجة مع كل تعديل</div>
        <div className={styles.resultTitle}><h2>ملخص منظومتك</h2><span className={styles.resultSeal}><Sun size={22} /></span></div>
        <p>احتياجك واضح. واختيار الموديلات علينا.</p>
        {result && <div className={styles.totalLoad} aria-live="polite">
          <span>إجمالي قدرة أجهزتك المتزامنة</span>
          <div><strong>{number(result.runningWatts)}</strong><span>واط <small> / {number(result.runningWatts / 1000)} kW</small></span></div>
          <div className={styles.energyStats}>
            <div><span>متوسط الطاقة اليومي</span><b dir="ltr">{number(result.averageWh / 1000)} <small>kWh</small></b></div>
            <div><span>طاقة يوم الاستخدام الأعلى</span><b dir="ltr">{number(result.designWh / 1000)} <small>kWh</small></b></div>
          </div>
        </div>}
      </div>

      <div className={styles.resultBody}>
        {!result ? <div className={styles.resultEmpty}>
          <div className={styles.emptyOrbit}><Calculator size={32} /></div>
          <h3>{loads.length ? "لنكمل البيانات أولاً" : "منظومتك تبدأ بأجهزتك"}</h3>
          <p>{loads.length ? "صحّح القيم التالية لتظهر المقاسات المناسبة." : "أضف أحمالك لنحسب قدرة الألواح وسعة البطارية والانفرتر، ونجهّز طلبك للشركة."}</p>
          {loads.length > 0 && <ul role="alert">{errors.map((error) => <li key={error}>{error}</li>)}</ul>}
          <div className={styles.emptyParts}><Sun size={23} /><span /><BatteryCharging size={23} /><span /><Zap size={23} /></div>
        </div> : <>
          <div className={styles.summaryCaption}><ListChecks size={16} /> المقاسات الأساسية المطلوبة <span>تقديرية</span></div>
          <div className={styles.equipmentCards}>
            <section className={styles.equipmentCard}>
              <div className={styles.equipmentIcon}><Sun size={23} /></div>
              <div><h3>إجمالي قدرة الألواح</h3><strong>{number(Math.ceil(result.pvWatts))} <small>واط ذروة على الأقل</small></strong><p>اختيارك: <bdi>{result.panelCount} × {settings.panelWatts}W</bdi> = <bdi>{number(result.arrayWatts)}W</bdi></p></div>
            </section>
            <section className={`${styles.equipmentCard} ${styles.batteryCard}`}>
              <div className={styles.equipmentIcon}><BatteryCharging size={23} /></div>
              <div><h3>السعة الاسمية للبطاريات</h3><strong>{minimum(result.nominalBatteryWh / 1000)} <small>kWh على الأقل</small></strong><p>نحو <bdi>{Math.ceil(result.nominalBatteryWh / result.bankVoltage)}Ah</bdi> عند <bdi>{result.bankVoltage}V</bdi></p><p>الترشيح: {result.batteryCount} بطارية × <bdi>{number(battery.voltage * battery.ah / 1000)} kWh</bdi> = <bdi>{number(result.installedBatteryWh / 1000)} kWh</bdi></p></div>
            </section>
            <section className={`${styles.equipmentCard} ${styles.inverterCard}`}>
              <div className={styles.equipmentIcon}><Zap size={23} /></div>
              <div><h3>قدرة الانفرتر / المحوّل</h3><strong>{result.inverterKw} <small>كيلوواط أو أعلى</small></strong><p>موجة جيبية نقية · نظام بطاريات فئة 48V</p><p>مستمر ≥ <bdi>{minimum(result.minimumInverterVa / 1000)} kVA</bdi> · بدء ≥ <bdi>{minimum(result.surgeVa / 1000)} kVA</bdi></p></div>
            </section>
          </div>

          <fieldset className={styles.panelOptions}>
            <legend>كيف نوزّع قدرة الألواح؟</legend>
            <p>اختر مقاساً، وسنحسب العدد والإجمالي تلقائياً.</p>
            <div className={styles.panelGrid}>
              {panelConfigurations(result.pvWatts, settings.panelWatts).map((option) => <label key={option.watts} className={styles.panelOption}>
                <input type="radio" name="panel-distribution" value={option.watts} checked={settings.panelWatts === option.watts} onChange={() => onPanelChange(option.watts)} aria-label={`${option.count} ألواح بقدرة ${option.watts} واط`} />
                <span className={styles.optionCheck}><Check size={11} /></span>
                <span className={styles.optionEquation}><b>{option.count}</b><span> × </span><b>{option.watts}</b><small> واط</small></span>
                <span className={styles.optionTotal}>الإجمالي <bdi>{number(option.totalWatts)}W</bdi></span>
              </label>)}
            </div>
            <small>بدائل حسابية حسب القدرة، وليست تأكيداً للتوفر أو توافق التوصيل. يعتمد الفريق جهد الألواح والسلاسل حسب MPPT. <b>الواط للقدرة، والفولت للجهد.</b></small>
          </fieldset>

          <div className={styles.quoteBox}>
            <div className={styles.quoteHeading}><MessageCircle size={23} /><div><h3>كل احتياجك… في رسالة واحدة</h3><p>الأحمال، الألواح، البطاريات، الانفرتر والملحقات.</p></div></div>
            <a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer">اطلب منظومتك عبر واتساب <ArrowUpLeft size={19} /></a>
            <small>ضغطة واحدة تفتح الملخص لدى عصر الشمس؛ تؤكد الإرسال داخل واتساب.</small>
            <div className={styles.quoteActions}><button onClick={copyQuote}>{copied ? <Check size={15} /> : <ClipboardCopy size={15} />}{copied ? "تم نسخ الملخص" : "نسخ الملخص"}</button><button onClick={openPreview} aria-controls="quote-details">معاينة محتوى الرسالة <ArrowUpLeft size={14} /></button></div>
            <span role="status" className={styles.copyStatus}>{copyError ? "تعذر النسخ التلقائي. افتح معاينة الرسالة وانسخ النص يدوياً." : copied ? "تم نسخ ملخص المنظومة" : ""}</span>
          </div>

          <details className={styles.accessories} open>
            <summary><ShieldCheck size={18} /> وماذا يشمل عرض السعر أيضاً؟</summary>
            <div className={styles.accessoryGrid}>{SYSTEM_ACCESSORIES.map((item, i) => <div key={item.title}><span>{String(i + 1).padStart(2, "0")}</span><div><h4>{item.title}</h4><p>{item.detail}</p></div></div>)}</div>
            <p className={styles.accessoryNote}>المقاطع والأطوال وتصنيفات الحماية والكميات النهائية يحددها المهندس بعد المعاينة.</p>
          </details>

          <details className={styles.resultChecks}>
            <summary>تفاصيل البطاريات وحدود الاختيار</summary>
            <ul>
              <li>المقاس الافتراضي: {battery.label}. إجمالي البنك {result.parallelStrings * battery.ah}Ah عند {result.bankVoltage}V؛ {result.parallelStrings} مجموعة، كل مجموعة {battery.series} بطارية.</li>
              <li>التغطية: {settings.autonomyDays} {settings.storageMode === "night" ? "ليلة (12 ساعة لكل ليلة)" : "يوم كامل دون شحن"}. طاقة AC المتاحة تقريباً {number(result.usableBatteryAcWh / 1000)} kWh قبل الاستهلاك الذاتي للانفرتر.</li>
              <li>عدد البطاريات بحسب الطاقة؛ يراجع حد تيار BMS والتوازي والتوافق. التيار عند الجهد الاسمي نحو {result.batteryCurrentA}A عند قدرة الانفرتر المقترحة، و{result.surgeCurrentA}A عند بدء الأحمال المدخلة. يزداد التيار عند انخفاض الجهد.</li>
              <li>حد القدرة المستمرة {number(Math.ceil(result.minimumInverterWatts))}W. يتحقق الفني من تصنيفات W وVA ومدة تحمل بدء المحركات وخفض القدرة بالحرارة.</li>
              <li>قد يزيد عدد الألواح بعد مطابقة Voc في البرد وVmp وجهد بدء MPPT والتيارات. تُراجع الظلال والموسم وخطة إعادة شحن البطاريات بعد الأيام الغائمة.</li>
              {settings.battery === "lead200" && <li>تتأثر سعة الرصاص بسرعة التفريغ والحرارة والعمر؛ السعة الفعلية قد تقل عن الاسمية.</li>}
            </ul>
          </details>
          <details className={styles.breakdown}><summary>توزيع الاستهلاك على الأجهزة</summary>{result.rows.filter((row) => row.averageWh > 0).sort((a, b) => b.averageWh - a.averageWh).map((row) => <div key={row.id}><div className={styles.barLabel}><span>{row.name}</span><b>{number(row.averageWh / result.averageWh * 100, 1)}%</b></div><div className={styles.barTrack}><span style={{ width: `${row.averageWh / result.averageWh * 100}%` }} /></div></div>)}</details>
          <details ref={previewRef} id="quote-details" className={styles.quotePreview}><summary>معاينة رسالة واتساب كاملة</summary><label className={styles.field}><span className="sr-only">ملخص طلب المنظومة</span><textarea readOnly value={quote} rows={12} /></label></details>
        </>}
        <div className={styles.advice}><Info size={17} /><p>تقدير أولي حسب البيانات المدخلة. نؤكد المقاسات والموديلات والأسعار بعد مراجعة ملصقات الأجهزة والموقع.</p></div>
        <Link href="/products" className={styles.catalogLink}>اكتشف منتجات عصر الشمس <ArrowUpLeft size={15} /></Link>
      </div>
    </aside>
    {result && <div className={styles.mobileDock}><a href="#solar-results"><Calculator size={17} /> الملخص</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> اطلب عبر واتساب</a></div>}
  </>;
}

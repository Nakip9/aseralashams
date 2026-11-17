"use client";

import { useState } from "react";
import { ArrowDown, BatteryCharging, Calculator, CheckCircle2, House, Info, MapPin, Plus, RotateCcw, SlidersHorizontal, Sun, Trash2, Zap, Tv, Refrigerator, Lightbulb, Smartphone, Laptop, WashingMachine, Blend, Fan, Boxes } from "lucide-react";
import { SolarResults } from "./SolarResults";
import { APPLIANCE_PRESETS, BATTERIES, DEFAULT_SOLAR_SETTINGS, calculateSolarSystem, householdExample, validateSolarInputs } from "@/lib/solar-calculator";
import type { ApplianceLoad, SolarSettings } from "@/lib/solar-calculator";
import styles from "./SolarCalculator.module.css";

const presetIcons = [Tv, Refrigerator, Lightbulb, Smartphone, Laptop, WashingMachine, Blend, Fan, Boxes];

const number = (value: number, digits = 2) => new Intl.NumberFormat("en-US", { maximumFractionDigits: digits }).format(value);

function NumericField({ label, value, onChange, min, max, step = "any", hint }: {
  label: string; value: number; onChange: (n: number) => void; min: number; max: number; step?: number | "any"; hint?: string;
}) {
  return <label className={styles.field}><span>{label}</span><input type="number" inputMode="decimal" min={min} max={max} step={step} value={Number.isFinite(value) ? Number(value.toFixed(4)) : ""} onChange={(event) => onChange(event.target.value === "" ? NaN : Number(event.target.value))} aria-invalid={!Number.isFinite(value) || value < min || value > max} />{hint && <small>{hint}</small>}</label>;
}

export function SolarCalculator() {
  const [loads, setLoads] = useState<ApplianceLoad[]>([]);
  const [settings, setSettings] = useState<SolarSettings>({ ...DEFAULT_SOLAR_SETTINGS });
  const [location, setLocation] = useState("");
  const [example, setExample] = useState(false);
  const errors = validateSolarInputs(loads, settings);
  const result = errors.length ? null : calculateSolarSystem(loads, settings);
  const battery = BATTERIES[settings.battery];
  const edit = (id: string, patch: Partial<ApplianceLoad>) => { setLoads((rows) => rows.map((row) => row.id === id ? { ...row, ...patch } : row)); };
  const setting = <K extends keyof SolarSettings>(key: K, value: SolarSettings[K]) => { setSettings((current) => ({ ...current, [key]: value })); };
  const loadExample = () => { setLoads(householdExample()); setSettings({ ...DEFAULT_SOLAR_SETTINGS }); setExample(true); };


  return <div className={styles.calculator}>
    <section className={styles.hero}>
      <div className={styles.heroPhoto} /><div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div>
          <div className={styles.eyebrow}><Sun size={16} /> حاسبة عصر الشمس</div>
          <h1>طاقة على <em>مقاسك.</em><br />ابدأ بأحمال منزلك.</h1>
          <p>أجهزتك تحكي احتياجك. نحسب إجمالي الأحمال، ونرتّب لك الألواح والبطاريات والانفرتر في ملخص واحد، جاهز لطلب عرض سعر.</p>
          <a href="#load-builder" className={styles.heroButton}>احسب منظومتك الآن <ArrowDown size={17} /></a><div className={styles.heroProof}><span><CheckCircle2 size={14} /> نتيجة فورية</span><span><CheckCircle2 size={14} /> خيارات مرنة</span><span><CheckCircle2 size={14} /> طلب عبر واتساب</span></div>
        </div>
        <div className={styles.heroSystem}>
          <div className={styles.systemTop}><span><span className={styles.liveDot} /> من الاحتياج إلى الحل</span><span dir="ltr">ASR AL-SHAMS</span></div>
          <div className={styles.systemHome}><House size={27} /><div><strong>أحمالك اليومية</strong><span>هي نقطة البداية لمنظومتك</span></div></div>
          <div className={styles.systemConnector} />
          <div className={styles.systemComponents}>
            <div><span><Sun size={29} /></span><strong>ألواح شمسية</strong><small>قدرة توليد تناسبك</small></div>
            <div><span><BatteryCharging size={29} /></span><strong>بطاريات</strong><small>طاقة وقت الحاجة</small></div>
            <div><span><Zap size={29} /></span><strong>انفرتر</strong><small>تشغيل مستقر لأجهزتك</small></div>
          </div>
          <div className={styles.systemFooter}><CheckCircle2 size={17} /> ملخص متكامل. خيارات واضحة.</div>
        </div>
      </div>
    </section>

    <div className={styles.workspace}>
      <div className={styles.steps}><span><b>01</b><span>أضف أجهزتك<small>القدرة وساعات الاستخدام</small></span></span><span><b>02</b><span>اكتشف احتياجك<small>ألواح وبطاريات وانفرتر</small></span></span><span><b>03</b><span>اطلب منظومتك<small>ملخص كامل عبر واتساب</small></span></span></div>
      <div className={styles.layout}>
        <div className={styles.editor}>
          <section id="load-builder" className={styles.card}>
            <div className={styles.sectionHeading}><div><span className={styles.kicker}>01 / الأحمال الكهربائية</span><h2>ماذا تريد أن تشغّل؟</h2></div><Calculator size={25} /></div>
            <p className={styles.muted}>اختر جهازاً لإضافته، ثم عدّل القيم حسب ملصقه الكهربائي واستخدامك الفعلي.</p>
            <div className={styles.presets}>{APPLIANCE_PRESETS.map((preset, i) => { const Icon = presetIcons[i]; return <button key={preset.name} disabled={loads.length >= 50} onClick={() => setLoads((rows) => [...rows, { ...preset, quantity: 1, id: crypto.randomUUID() }])}><Icon size={21} /><span>{i === 8 ? "جهاز آخر" : preset.name}</span><Plus size={12} /></button>; })}</div>
            <div className={styles.exampleBar}><div><strong>تحتاج نقطة بداية؟</strong><span>جرّب مثال منزل: ثلاجة، تلفزيون، 8 لمبات وأجهزة يومية.</span></div><button onClick={loadExample}><RotateCcw size={15} /> تحميل المثال</button></div>
            {example && <div className={styles.notice}><Info size={18} /><p>هذا مثال قابل للتعديل، وليس مواصفات مؤكدة للعميل. افترضنا للتلفزيون 5 ساعات، وللثلاجة 120W أثناء التشغيل بنسبة تشغيل 40% وبدء ×5. الغسالة 500W بدون تسخين؛ وزن 8 كجم لا يحدد الواط. شواحن الهواتف 10W، اللابتوب 65W والعصارة 400W قيم افتراضية. صحّحها قبل طلب التسعير.</p></div>}
            {loads.length === 0 ? <div className={styles.empty}><House size={38} strokeWidth={1.2} /><h3>ابدأ بأول جهاز في منزلك</h3><p>أضف جهازاً من الأعلى أو حمّل المثال لتشاهد كيف تعمل الحاسبة.</p></div> : <div className={styles.loads}>
              {loads.map((load, index) => <article className={styles.loadCard} key={load.id}>
                <div className={styles.loadTop}><span className={styles.loadIndex}>{String(index + 1).padStart(2, "0")}</span><label className={styles.nameField}><span className="sr-only">اسم الجهاز {index + 1}</span><input maxLength={80} value={load.name} onChange={(e) => edit(load.id, { name: e.target.value })} /></label><button className={styles.remove} onClick={() => { setLoads((rows) => rows.filter((row) => row.id !== load.id)); }} aria-label={`حذف ${load.name}`}><Trash2 size={16} /></button></div>
                <div className={styles.loadFields}>
                  <NumericField label="قدرة الجهاز (واط)" value={load.watts} min={1} max={100000} onChange={(watts) => edit(load.id, { watts })} />
                  <NumericField label="العدد" value={load.quantity} min={1} max={1000} step={1} onChange={(quantity) => edit(load.id, { quantity })} />
                  <NumericField label="ساعات يوم الاستخدام" value={load.hours} min={0} max={24} onChange={(hours) => edit(load.id, { hours })} />
                  <NumericField label="مرة كل كم يوم؟" hint="1 = يومياً، 7 = مرة أسبوعياً" value={load.everyDays} min={1} max={365} step={1} onChange={(everyDays) => edit(load.id, { everyDays })} />
                </div>
                <details className={styles.loadDetails}><summary>تشغيل متقطع، استهلاك ليلي وبدء المحركات</summary><div className={styles.advancedLoad}>
                  <NumericField label="نسبة التشغيل الفعلي %" value={load.dutyPercent} min={1} max={100} hint="للثلاجة: نسبة الوقت الذي يعمل فيه الضاغط. اترك 100% للأجهزة المستمرة." onChange={(dutyPercent) => edit(load.id, { dutyPercent })} />
                  <NumericField label="حصة الاستهلاك الليلي %" value={load.nightPercent} min={0} max={100} hint="تستخدم عند اختيار تغطية الليل فقط." onChange={(nightPercent) => edit(load.id, { nightPercent })} />
                  <NumericField label="معامل قدرة بدء التشغيل" value={load.surgeFactor} min={1} max={10} hint="مثال ×5 للمحرك افتراض أولي؛ تحقق من تيار البدء ومدته من الشركة المصنّعة." onChange={(surgeFactor) => edit(load.id, { surgeFactor })} />
                </div></details>
                {result && <div className={styles.rowEnergy}>متوسط الاستهلاك <b dir="ltr">{number(result.rows[index].averageWh)} Wh</b> / يوم</div>}
              </article>)}
              <a href="#solar-results" className={styles.viewResults}>شاهد ملخص منظومتك <ArrowDown size={15} /></a><div className={styles.loadFoot}><span>{loads.length} أنواع أجهزة · 5 دقائق = 0.0833 ساعة</span><button onClick={() => { setLoads([]); setExample(false); }}>مسح الأحمال</button></div>
            </div>}
          </section>

          <section className={styles.card}>
            <div className={styles.sectionHeading}><div><span className={styles.kicker}>02 / احتياج المنظومة</span><h2>مصمّمة على استخدامك</h2></div><SlidersHorizontal size={25} /></div>
            <div className={styles.settingsGrid}>
              <label className={styles.field}><span><MapPin size={14} /> المدينة / المنطقة</span><input placeholder="مثال: صنعاء" maxLength={100} value={location} onChange={(e) => { setLocation(e.target.value); }} /><small>للمعاينة وعرض السعر؛ لا يغيّر الإشعاع تلقائياً.</small></label>
              <NumericField label="ساعات الشمس المكافئة / يوم" value={settings.sunHours} min={1} max={8} hint="افتراض 5 ساعات، وليست ساعات النهار. تُراجع حسب الموقع وأسوأ موسم." onChange={(v) => setting("sunHours", v)} />
              <NumericField label="قدرة لوح مخصصة (واط)" hint="أو اختر أحد التوزيعات من ملخص المنظومة." value={settings.panelWatts} min={100} max={1000} onChange={(v) => setting("panelWatts", v)} />
              <label className={styles.field}><span>مقاس البطارية الافتراضي</span><select value={settings.battery} onChange={(e) => setting("battery", e.target.value as SolarSettings["battery"])}>{Object.entries(BATTERIES).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select><small>مقاس للحساب، وليس تأكيداً لتوفر موديل بعينه.</small></label>
              <label className={styles.field}><span>ماذا تغطي البطارية؟</span><select value={settings.storageMode} onChange={(e) => setting("storageMode", e.target.value as SolarSettings["storageMode"])}><option value="full-day">يوماً كاملاً دون شحن شمسي</option><option value="night">الاستهلاك الليلي فقط (12 ساعة)</option></select></label>
              <NumericField label={settings.storageMode === "night" ? "عدد الليالي الاحتياطية" : "أيام الاستقلالية دون شحن"} value={settings.autonomyDays} min={1} max={7} step={1} onChange={(v) => setting("autonomyDays", v)} />
            </div>
            <details className={styles.advanced}><summary><SlidersHorizontal size={16} /> افتراضات هندسية قابلة للتعديل</summary><div className={styles.settingsGrid}>
              <NumericField label="فواقد الألواح والمنظم %" value={settings.pvLossPercent} min={5} max={60} hint="حرارة وغبار وأسلاك ومنظم؛ لا تشمل البطارية والانفرتر." onChange={(v) => setting("pvLossPercent", v)} />
              <NumericField label="هامش احتياط الطاقة %" value={settings.reservePercent} min={0} max={50} onChange={(v) => setting("reservePercent", v)} />
              <NumericField label="كفاءة الانفرتر %" value={settings.inverterEfficiency} min={60} max={99} onChange={(v) => setting("inverterEfficiency", v)} />
              <NumericField label="استهلاك الانفرتر الذاتي (واط)" value={settings.inverterIdleWatts} min={0} max={200} hint="نفترض بقاءه قيد التشغيل طوال اليوم." onChange={(v) => setting("inverterIdleWatts", v)} />
              <NumericField label="معامل قدرة الأحمال PF" value={settings.powerFactor} min={0.5} max={1} onChange={(v) => setting("powerFactor", v)} />
            </div><p>عمق التفريغ المفترض {battery.dod * 100}%، كفاءة تفريغ البطارية {battery.dischargeEfficiency * 100}%، وكفاءة دورة الشحن والتفريغ {battery.roundTripEfficiency * 100}%. تُراجع القيم مع ورقة مواصفات البطارية.</p></details>
          </section>

          <section className={styles.method}>
            <h2>كيف نحسب منظومتك؟</h2>
            <p>الطاقة اليومية = الواط × العدد × ساعات التشغيل × نسبة التشغيل. نعرض المتوسط حسب تكرار الاستخدام، ونصمّم على يوم تعمل فيه جميع الأجهزة، بما فيها الغسالة والعصارة. نفترض تزامن الأحمال وبدء المحركات معاً، مع احتياط 25% للقدرة المستمرة.</p>
            <p>الألواح تغطي طاقة يوم التصميم وفواقد التحويل والتخزين وهامش الاحتياط. البطاريات تُحسب على مدة الاستقلالية وعمق التفريغ. زيادة أيام الاحتياط تكبّر البطارية؛ ولا تعني إعادة شحنها بالكامل في يوم واحد بعد استنزافها.</p>
            <details><summary>تفاصيل المعادلات والمراجع</summary><p>الألواح Wp = [(طاقة الأحمال Wh ÷ كفاءة الانفرتر) + استهلاكه الذاتي × 24] × هامش الاحتياط ÷ (ساعات الشمس × كفاءة الألواح والمنظم × كفاءة دورة البطارية). هذا افتراض محافظ بمرور كل الطاقة عبر التخزين.</p><p>البطارية الاسمية Wh = [(طاقة الفترة ÷ كفاءة الانفرتر) + استهلاكه الذاتي × ساعات الفترة] × عدد الفترات × هامش الاحتياط ÷ (عمق التفريغ × كفاءة تفريغ البطارية). تُقرّب الكميات إلى وحدات كاملة.</p><p>الأرقام الافتراضية اختيارات أولية للحاسبة، وليست قياسات للموقع أو توصية من جهة مرجعية بموديل معين.</p><div className={styles.sourceLinks}><a href="https://www.victronenergy.com/media/pg/Energy_Storage_System/en/system-design.html" target="_blank" rel="noopener noreferrer">Victron · أسس تصميم المنظومة</a><a href="https://www.nrel.gov/docs/fy14osti/62641.pdf" target="_blank" rel="noopener noreferrer">NREL · نمذجة إنتاج الألواح والفواقد</a></div></details>
          </section>
        </div>

        <SolarResults loads={loads} settings={settings} location={location} result={result} errors={errors} onPanelChange={(watts) => setting("panelWatts", watts)} />
      </div>
    </div>

  </div>;
}

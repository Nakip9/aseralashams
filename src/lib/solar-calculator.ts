/** Preliminary off-grid energy sizing. See docs/solar-calculator.md for assumptions. */
export interface ApplianceLoad {
  id: string;
  name: string;
  watts: number;
  quantity: number;
  hours: number;
  everyDays: number;
  dutyPercent: number;
  nightPercent: number;
  surgeFactor: number;
}

export interface SolarSettings {
  sunHours: number;
  panelWatts: number;
  pvLossPercent: number;
  reservePercent: number;
  inverterEfficiency: number;
  inverterIdleWatts: number;
  powerFactor: number;
  autonomyDays: number;
  storageMode: "full-day" | "night";
  battery: "lfp100" | "lfp200" | "lead200";
}

export const BATTERIES = {
  lfp100: { label: "ليثيوم LiFePO₄ · 51.2V / 100Ah", voltage: 51.2, ah: 100, series: 1, dod: 0.8, dischargeEfficiency: 0.95, roundTripEfficiency: 0.9 },
  lfp200: { label: "ليثيوم LiFePO₄ · 51.2V / 200Ah", voltage: 51.2, ah: 200, series: 1, dod: 0.8, dischargeEfficiency: 0.95, roundTripEfficiency: 0.9 },
  lead200: { label: "رصاص عميق التفريغ · 12V / 200Ah", voltage: 12, ah: 200, series: 4, dod: 0.5, dischargeEfficiency: 0.85, roundTripEfficiency: 0.8 },
} as const;

export const DEFAULT_SOLAR_SETTINGS: SolarSettings = {
  sunHours: 5, panelWatts: 550, pvLossPercent: 20, reservePercent: 20,
  inverterEfficiency: 90, inverterIdleWatts: 20, powerFactor: 0.8,
  autonomyDays: 1, storageMode: "full-day", battery: "lfp100",
};

export const APPLIANCE_PRESETS: Omit<ApplianceLoad, "id">[] = [
  { name: "تلفزيون", watts: 50, quantity: 1, hours: 5, everyDays: 1, dutyPercent: 100, nightPercent: 80, surgeFactor: 1 },
  { name: "ثلاجة", watts: 120, quantity: 1, hours: 24, everyDays: 1, dutyPercent: 40, nightPercent: 50, surgeFactor: 5 },
  { name: "لمبات LED", watts: 12, quantity: 8, hours: 6, everyDays: 1, dutyPercent: 100, nightPercent: 100, surgeFactor: 1 },
  { name: "شاحن هاتف", watts: 10, quantity: 5, hours: 2, everyDays: 1, dutyPercent: 100, nightPercent: 50, surgeFactor: 1 },
  { name: "لابتوب", watts: 65, quantity: 1, hours: 4, everyDays: 1, dutyPercent: 100, nightPercent: 50, surgeFactor: 1 },
  { name: "غسالة بدون تسخين", watts: 500, quantity: 1, hours: 1.5, everyDays: 4, dutyPercent: 100, nightPercent: 0, surgeFactor: 3 },
  { name: "عصارة فواكه", watts: 400, quantity: 1, hours: 5 / 60, everyDays: 3, dutyPercent: 100, nightPercent: 0, surgeFactor: 2 },
  { name: "مروحة", watts: 60, quantity: 1, hours: 8, everyDays: 1, dutyPercent: 100, nightPercent: 50, surgeFactor: 2 },
  { name: "جهاز إضافي", watts: 100, quantity: 1, hours: 1, everyDays: 1, dutyPercent: 100, nightPercent: 50, surgeFactor: 1 },
];

export function householdExample(): ApplianceLoad[] {
  return APPLIANCE_PRESETS.slice(0, 7).map((load, i) => ({ ...load, id: `example-${i}` }));
}

/** Energy-equivalent choices, not a claim of electrical/string compatibility or stock. */
export function panelConfigurations(requiredWatts: number, selectedWatts = 550) {
  if (!Number.isFinite(requiredWatts) || requiredWatts <= 0 || !Number.isFinite(selectedWatts) || selectedWatts < 100 || selectedWatts > 1000) {
    throw new Error("قدرة الألواح المطلوبة وقدرة اللوح يجب أن تكونا قيمتين صحيحتين.");
  }
  return [...new Set([200, 400, 500, 550, 600, 1000, selectedWatts])]
    .sort((a, b) => a - b)
    .map((watts) => {
      const count = Math.ceil(requiredWatts / watts);
      return { watts, count, totalWatts: count * watts };
    });
}

export const SYSTEM_ACCESSORIES = [
  { title: "منظم شحن MPPT", detail: "مدمج في الانفرتر أو خارجي عند الحاجة، مطابق لقدرة الألواح وجهدها وتيارها." },
  { title: "هياكل وقواعد تثبيت", detail: "مناسبة لعدد الألواح ونوع السطح واتجاه التركيب وأحمال الرياح." },
  { title: "كابلات ووصلات", detail: "كابلات شمسية وبطاريات وAC، ووصلات متوافقة؛ الأطوال والمقاطع بعد المعاينة." },
  { title: "لوحة حماية وفصل", detail: "قواطع وفيوزات وفواصل DC وAC وحماية زيادة الجهد حسب تصميم المنظومة." },
  { title: "تأريض وربط الحماية", detail: "للأجهزة والهياكل، مع تقييم حماية الصواعق حسب الموقع." },
  { title: "تركيب وبرمجة واختبار", detail: "ضبط الشحن وBMS واختبار التشغيل والتسليم بواسطة الفريق الفني." },
] as const;

export function solarWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function validateSolarInputs(loads: ApplianceLoad[], settings: SolarSettings): string[] {
  const errors: string[] = [];
  const between = (n: number, min: number, max: number) => Number.isFinite(n) && n >= min && n <= max;
  if (!loads.length) errors.push("أضف جهازاً واحداً على الأقل لبدء الحساب.");
  if (loads.length > 50) errors.push("الحد الأقصى 50 نوع جهاز في الحساب الواحد.");
  for (const [i, load] of loads.entries()) {
    const label = load.name.trim() || `الجهاز ${i + 1}`;
    if (!load.name.trim()) errors.push(`اكتب اسم الجهاز ${i + 1}.`);
    if (!between(load.watts, 1, 100000)) errors.push(`${label}: أدخل قدرة بين 1 و100000 واط.`);
    if (!between(load.quantity, 1, 1000) || !Number.isInteger(load.quantity)) errors.push(`${label}: العدد يجب أن يكون صحيحاً بين 1 و1000.`);
    if (!between(load.hours, 0, 24)) errors.push(`${label}: ساعات التشغيل بين 0 و24.`);
    if (!between(load.everyDays, 1, 365) || !Number.isInteger(load.everyDays)) errors.push(`${label}: تكرار الاستخدام عدد أيام صحيح بين 1 و365.`);
    if (!between(load.dutyPercent, 1, 100) || !between(load.nightPercent, 0, 100)) errors.push(`${label}: راجع نسبة التشغيل ونسبة الاستهلاك الليلي.`);
    if (!between(load.surgeFactor, 1, 10)) errors.push(`${label}: معامل بدء التشغيل بين 1 و10.`);
  }
  const ranges: [number, number, number, string][] = [
    [settings.sunHours, 1, 8, "ساعات الشمس المكافئة"], [settings.panelWatts, 100, 1000, "قدرة اللوح"],
    [settings.pvLossPercent, 5, 60, "فواقد الألواح"], [settings.reservePercent, 0, 50, "هامش الاحتياط"],
    [settings.inverterEfficiency, 60, 99, "كفاءة الانفرتر"], [settings.inverterIdleWatts, 0, 200, "استهلاك الانفرتر الذاتي"],
    [settings.powerFactor, 0.5, 1, "معامل القدرة"], [settings.autonomyDays, 1, 7, "أيام الاستقلالية"],
  ];
  for (const [value, min, max, label] of ranges) if (!between(value, min, max)) errors.push(`${label}: أدخل قيمة بين ${min} و${max}.`);
  if (!Object.hasOwn(BATTERIES, settings.battery)) errors.push("اختر نوع البطارية.");
  if (!["full-day", "night"].includes(settings.storageMode)) errors.push("اختر نطاق تغطية البطارية.");
  if (loads.length && !loads.some((load) => load.hours > 0)) errors.push("حدد ساعات تشغيل أكبر من صفر لجهاز واحد على الأقل.");
  return errors;
}

export function calculateSolarSystem(loads: ApplianceLoad[], settings: SolarSettings) {
  const errors = validateSolarInputs(loads, settings);
  if (errors.length) throw new Error(errors.join("\n"));
  const battery = BATTERIES[settings.battery];
  const reserve = 1 + settings.reservePercent / 100;
  const inverterEfficiency = settings.inverterEfficiency / 100;
  const rows = loads.map((load) => {
    const runningWatts = load.hours > 0 ? load.watts * load.quantity : 0;
    const useDayWh = runningWatts * load.hours * load.dutyPercent / 100;
    return { ...load, runningWatts, useDayWh, averageWh: useDayWh / load.everyDays, nightWh: useDayWh * load.nightPercent / 100 };
  });
  const sum = (key: "runningWatts" | "useDayWh" | "averageWh" | "nightWh") => rows.reduce((total, row) => total + row[key], 0);
  const averageWh = sum("averageWh");
  // Size for all listed appliances being used on the same day, not the lower multi-day average.
  const designWh = sum("useDayWh");
  const nightWh = sum("nightWh");
  const runningWatts = sum("runningWatts");
  const surgeWatts = rows.reduce((total, row) => total + row.runningWatts * row.surgeFactor, 0);
  const minimumInverterWatts = runningWatts * 1.25;
  const inverterKw = [1, 2, 3, 5, 6, 8, 10, 12, 15, 20].find((kw) => kw * 1000 >= minimumInverterWatts) ?? Math.ceil(minimumInverterWatts / 1000);
  const minimumInverterVa = minimumInverterWatts / settings.powerFactor;
  const surgeVa = surgeWatts / settings.powerFactor;
  // Conservative allowance: all energy passes through storage. PV loss excludes inverter and battery losses.
  const dailyDcWh = designWh / inverterEfficiency + settings.inverterIdleWatts * 24;
  const pvWatts = dailyDcWh * reserve / (battery.roundTripEfficiency * settings.sunHours * (1 - settings.pvLossPercent / 100));
  const panelCount = Math.ceil(pvWatts / settings.panelWatts);
  const arrayWatts = panelCount * settings.panelWatts;
  const backupWh = settings.storageMode === "night" ? nightWh : designWh;
  const backupHours = settings.storageMode === "night" ? 12 : 24;
  const nominalBatteryWh = (backupWh / inverterEfficiency + settings.inverterIdleWatts * backupHours) * settings.autonomyDays * reserve / (battery.dod * battery.dischargeEfficiency);
  const bankVoltage = battery.voltage * battery.series;
  const stringWh = bankVoltage * battery.ah;
  const parallelStrings = Math.ceil(nominalBatteryWh / stringWh);
  const batteryCount = parallelStrings * battery.series;
  const installedBatteryWh = parallelStrings * stringWh;
  const usableBatteryAcWh = installedBatteryWh * battery.dod * battery.dischargeEfficiency * inverterEfficiency;
  const batteryCurrentA = Math.ceil((inverterKw * 1000 / inverterEfficiency + settings.inverterIdleWatts) / bankVoltage);
  const surgeCurrentA = Math.ceil((surgeWatts / inverterEfficiency + settings.inverterIdleWatts) / bankVoltage);
  return { rows, averageWh, designWh, nightWh, runningWatts, surgeWatts, surgeVa, minimumInverterWatts, minimumInverterVa, inverterKw,
    pvWatts, panelCount, arrayWatts, nominalBatteryWh, bankVoltage, parallelStrings, batteryCount, installedBatteryWh, usableBatteryAcWh, batteryCurrentA, surgeCurrentA };
}

export function buildSolarQuote(loads: ApplianceLoad[], settings: SolarSettings, location: string) {
  const r = calculateSolarSystem(loads, settings);
  const battery = BATTERIES[settings.battery];
  const options = panelConfigurations(r.pvWatts, settings.panelWatts);
  const f = (n: number) => Number(n.toFixed(2)).toString();
  const up = (n: number) => f(Math.ceil(n * 100) / 100);
  return [
    "☀️ *طلب عرض سعر منظومة شمسية — عصر الشمس*",
    `الموقع: ${location.trim() || "لم يحدد"}`,
    "",
    "*١. إجمالي أحمالي*",
    `إجمالي قدرة الأجهزة المتزامنة: ${f(r.runningWatts)} واط (${f(r.runningWatts / 1000)} kW).`,
    `قدرة بدء الأحمال المقدّرة: ${f(r.surgeWatts)} واط.`,
    `متوسط الاستهلاك: ${f(r.averageWh / 1000)} kWh/يوم؛ يوم التصميم الأعلى: ${f(r.designWh / 1000)} kWh.`,
    ...loads.map((l) => `• ${l.name}: ${l.quantity} × ${f(l.watts)}W، ${f(l.hours)} ساعة ${l.everyDays === 1 ? "يومياً" : `كل ${l.everyDays} يوم`}، تشغيل ${l.dutyPercent}%، ليلي ${l.nightPercent}%، بدء ×${l.surgeFactor}${l.hours === 0 ? " (مستبعد من الحساب)" : ""}`),
    "",
    "*٢. الألواح الشمسية*",
    `إجمالي القدرة المطلوبة: لا يقل عن ${Math.ceil(r.pvWatts)} واط ذروة (Wp)، شاملاً الفواقد والاحتياط.`,
    `التوزيع المختار: ${r.panelCount} × ${settings.panelWatts}W = ${f(r.arrayWatts)} واط (${f(r.arrayWatts / 1000)} kWp).`,
    `بدائل حسابية: ${options.filter((option) => option.watts !== settings.panelWatts).map((option) => `${option.count} × ${option.watts}W = ${option.totalWatts}W`).join("؛ ")}.`,
    "يختار الفريق الموديل والتوزيع حسب التوفر وMPPT. الواط قدرة؛ فولت الألواح وجهد السلاسل يحددان من المواصفات والتوصيل، ولا تتكافأ التوزيعات كهربائياً بالضرورة.",
    "",
    "*٣. البطاريات*",
    `السعة الاسمية المطلوبة: ≥ ${up(r.nominalBatteryWh / 1000)} kWh، أي نحو ${Math.ceil(r.nominalBatteryWh / r.bankVoltage)}Ah عند ${r.bankVoltage}V.`,
    `التوزيع بحسب الطاقة: ${r.batteryCount} × ${battery.label} = ${f(r.installedBatteryWh / 1000)} kWh اسمية (${r.parallelStrings * battery.ah}Ah عند ${r.bankVoltage}V).`,
    `التجميع: ${r.parallelStrings} مجموعة، ${battery.series} بطارية لكل مجموعة. العدد النهائي يعتمد أيضاً على تيار التفريغ وBMS.`,
    `التغطية: ${settings.autonomyDays} ${settings.storageMode === "night" ? "ليلة (12 ساعة لكل ليلة)" : "يوم كامل دون شحن"}؛ تفريغ ${battery.dod * 100}%.`,
    "",
    "*٤. الانفرتر / المحوّل*",
    `فئة ${r.inverterKw} kW أو أعلى، موجة جيبية نقية، متوافق مع بنك ${r.bankVoltage}V.`,
    `الحدود المطلوبة: مستمر ≥ ${Math.ceil(r.minimumInverterWatts)}W و${up(r.minimumInverterVa / 1000)} kVA؛ بدء ≥ ${up(r.surgeVa / 1000)} kVA للمدة المطلوبة.`,
    `تيار البنك التقديري: ${r.batteryCurrentA}A عند قدرة الانفرتر الاسمية؛ ${r.surgeCurrentA}A عند بدء الأحمال المدخلة. يراجع عند أدنى جهد تشغيل.`,
    "",
    "*٥. ملحقات وخدمات يشملها عرض السعر*",
    ...SYSTEM_ACCESSORIES.map((item) => `• ${item.title}: ${item.detail}`),
    "الكميات والأطوال وتصنيفات الحماية تحدد بالمعاينة والمخطط الكهربائي.",
    "",
    "*أساس الحساب*",
    `الافتراضات: ${settings.sunHours} ساعات شمس مكافئة، فواقد ألواح ${settings.pvLossPercent}%، احتياط ${settings.reservePercent}%، كفاءة انفرتر ${settings.inverterEfficiency}%، استهلاك ذاتي ${settings.inverterIdleWatts}W، معامل قدرة ${settings.powerFactor}.`,
    "تقدير أولي يفترض تزامن الأحمال وبدء المحركات. يرجى تأكيد القيم من ملصقات الأجهزة ومعاينة الموقع، ثم تزويدي بالموديلات والأسعار والضمان وتكلفة التركيب.",
  ].join("\n");
}

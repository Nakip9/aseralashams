/**
 * Centralized content data for Asr Al-Shams.
 * Extracted from https://aseralshams.com/ and structured for the redesigned site.
 * All Arabic content preserved verbatim from the source.
 */

export const COMPANY = {
  name: "عصر الشمس",
  fullName: "عصر الشمس للاستيراد والتجارة",
  latinName: "Asr Al-Shams",
  tagline: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
  about: {
    short:
      "شركة عصر الشمس للاستيراد والتجارة هي إحدى الشركات الرائدة في اليمن، متخصصة في مجال الطاقة المتجددة. نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها.",
    long: "نحن ملتزمون بتوفير أحدث التقنيات العالمية، بما في ذلك ألواح الطاقة الشمسية بأحدث خلايا (N-Type / HJT / ABC)، والمحولات الأوروبية والصينية المتقدمة (On-Grid / Off-Grid / Hybrid)، بالإضافة إلى كافة أنواع بطاريات الليثيوم والكابلات المتخصصة. نقدم خدمات متكاملة تشمل ما بعد البيع ومتابعة تنفيذ المشاريع لضمان تحقيق أقصى استفادة لعملائنا.",
  },
  address: "شارع خولان – بعد جولة الجوازات، صنعاء، اليمن",
  phones: ["776284444", "780177177"],
  whatsapp: "+967780177177",
  emails: ["info@aseralshams.com", "maged@aseralshams.com"],
  socials: {
    facebook: "https://www.facebook.com/aseralshamscom",
    linkedin: "https://www.linkedin.com/company/asr-alshams/",
    whatsapp: "https://wa.me/+967780177177",
  },
};

export const STATS = [
  { value: 30, suffix: "+", label: "عاماً ضمان أداء الألواح" },
  { value: 98, suffix: "%", label: "كفاءة تحويل الانفرترات" },
  { value: 10, suffix: "+", label: "سنوات عمر البطاريات" },
  { value: 750, suffix: "+", label: "كيلوواط في مشروع واحد" },
];

export const BRANDS = [
  {
    name: "AE Solar",
    arabic: "ألــواح أي سـولار العـالمـية",
    role: "الــوكيل المعتمد فــي اليمــن",
    category: "الألواح الشمسية",
    description: "ألواح شمسية عالية الكفاءة بتقنيات HJT و TOPCON، مع كفاءة تصل إلى 23.21% وضمان أداء يصل إلى 30 عاماً.",
    logo: "/agencies/agency-3.png",
    accent: "from-red-500 to-rose-600",
    established: "ألمانيا · منذ 2003",
  },
  {
    name: "Sinexcel",
    arabic: "انفــرترات سنــكسـل iSUNA",
    role: "موزع معتمد",
    category: "الانفرترات وتخزين الطاقة",
    description: "انفرترات هجينة On-Grid / Off-Grid بكفاءة تحويل تصل إلى 98%، بمراقبة عن بعد وتحكم ذكي ونطاق سعات من 3 إلى 50 كيلوواط.",
    logo: "/agencies/agency-2.png",
    accent: "from-brand-blue to-emerald-500",
    established: "الصين · عالمياً",
  },
  {
    name: "TOP CABLE",
    arabic: "كابلات توب كيبل الإسبانية",
    role: "موزع معتمد",
    category: "الكابلات الكهربائية والشمسية",
    description: "كابلات AC وكابلات طاقة شمسية متينة مصممة للظروف البيئية القاسية، مقاومة للأشعة فوق البنفسجية مع عزل مزدوج وأمان عالي.",
    logo: "/agencies/agency-1.png",
    accent: "from-brand-blue to-blue-700",
    established: "إسبانيا · منذ 1980",
  },
  {
    name: "Sunwoda",
    arabic: "بطاريات ليثيوم صنودا",
    role: "موزع معتمد",
    category: "بطاريات الليثيوم وتخزين الطاقة",
    description: "بطاريات ليثيوم أيون عالية السعة بأنظمة إدارة ذكية (BMS)، تصميم قابل للتوسعة وعمر افتراضي يصل إلى 10 سنوات.",
    logo: "/agencies/agency-4.png",
    accent: "from-red-500 to-rose-600",
    established: "الصين · منذ 1997",
  },
];

export const SERVICES = [
  {
    icon: "Sun",
    title: "تركيب الأنظمة الشمسية",
    description:
      "نقوم بتركيب أنظمة الطاقة الشمسية للمنازل والشركات والمصانع بكفاءة واحترافية عالية، مع التزام كامل بأعلى معايير الجودة والسلامة.",
  },
  {
    icon: "Wrench",
    title: "الصيانة والدعم الفني",
    description:
      "نوفر خدمات صيانة دورية ودعم فني مستمر لضمان استمرارية عمل أنظمتكم الشمسية بأقصى كفاءة على مدار العام.",
  },
  {
    icon: "Lightbulb",
    title: "استشارات الطاقة",
    description:
      "نقدم استشارات متخصصة لمساعدتك في اختيار النظام الأمثل وفقاً لاحتياجاتك وميزانيتك، مع دراسة جدوى كاملة.",
  },
  {
    icon: "Zap",
    title: "أنظمة الطاقة الهجينة",
    description:
      "تصميم وتركيب أنظمة الطاقة الهجينة (PV-Diesel) التي تجمع بين الطاقة الشمسية والمصادر التقليدية لأقصى استقرار.",
  },
  {
    icon: "Factory",
    title: "حلول الطاقة للمصانع",
    description:
      "حلول طاقة شمسية متكاملة للمصانع والمنشآت الصناعية لتخفيض تكاليف الطاقة وتحقيق الاستدامة التشغيلية.",
  },
  {
    icon: "Home",
    title: "أنظمة المنازل",
    description:
      "دمج أنظمة الطاقة الشمسية مع حلول المنازل الذكية لكفاءة استهلاك الطاقة وتوفير فوري في فواتير الكهرباء.",
  },
];

export const WHY_US = [
  {
    icon: "Award",
    title: "جودة عالمية",
    description:
      "نعمل مع أفضل العلامات التجارية العالمية من حيث الجودة والكفاءة، ونوفّر منتجات معتمدة بشهادات ضمان موثقة.",
  },
  {
    icon: "Users",
    title: "فريق متخصص",
    description:
      "فريق عمل متكامل من إداريين ومهندسين وفنيين متخصصين في الطاقة المتجددة بخبرات تراكمية تمتد لسنوات.",
  },
  {
    icon: "Handshake",
    title: "شراكات موثوقة",
    description:
      "شراكات استراتيجية مع أكبر الشركات العالمية في مجال الطاقة الشمسية كـ AE Solar و Sinexcel و Sunwoda و TOP CABLE.",
  },
  {
    icon: "Headphones",
    title: "دعم فني متكامل",
    description:
      "خدمة ما بعد البيع ودعم فني متواصل لضمان رضاكم التام، مع صيانة دورية ومراقبة عن بعد لكل الأنظمة المركّبة.",
  },
];

export const NAV_LINKS = [
  { href: "#home", route: "/", label: "الرئيسية" },
  { href: "#about", route: "/about", label: "من نحن" },
  { href: "#products", route: "/products", label: "منتجاتنا" },
  { href: "#services", route: "/#services", label: "خدماتنا" },
  { href: "#projects", route: "/projects", label: "مشاريعنا" },
  { href: "#contact", route: "/contact", label: "تواصل معنا" },
];

export const locales = ["en", "pt", "zh", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { label: string; name: string; html: string; og: string }
> = {
  en: { label: "EN", name: "English", html: "en", og: "en_US" },
  pt: { label: "PT", name: "Português", html: "pt-BR", og: "pt_BR" },
  zh: { label: "中", name: "中文", html: "zh-CN", og: "zh_CN" },
  de: { label: "DE", name: "Deutsch", html: "de", og: "de_DE" },
  fr: { label: "FR", name: "Français", html: "fr", og: "fr_FR" },
};

export const getLocale = (pathname: string): Locale => {
  const segment = pathname.split("/")[1];
  return locales.includes(segment as Locale) && segment !== "en"
    ? (segment as Locale)
    : "en";
};

export const stripLocale = (pathname: string) => {
  const path = pathname.replace(/\/$/, "") || "/";
  const locale = getLocale(path);
  return locale === "en" ? path : path.slice(locale.length + 1) || "/";
};

export const localizePath = (path: string, locale: Locale) => {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const suffixAt = path.search(/[?#]/u);
  const pathname = suffixAt < 0 ? path : path.slice(0, suffixAt);
  const suffix = suffixAt < 0 ? "" : path.slice(suffixAt);
  const base = stripLocale(pathname || "/");
  return `${locale === "en" ? base : `/${locale}${base === "/" ? "" : base}`}${suffix}`;
};

export const commonCopy = {
  en: {
    description:
      "A cosmic bureaucracy held together by tea, bread, potassium, and an extraordinary faith in a traffic cone.",
    defaultTitle: "A cosmic bureaucracy",
    skip: "Skip to content",
    homeLabel: "All Hail the Cone — home",
    menu: "Menu",
    navigation: "Main navigation",
    links: [
      ["The lore", "/lore"],
      ["The characters", "/characters"],
      ["The world", "/world"],
      ["Gallery", "/gallery"],
      ["Canon", "/canon"],
    ],
    project: "The project",
    footerNavigation: "Footer navigation",
    footerLine: "Different creatures.\nSame inexplicable direction.",
    community: "Find your place in the cosmos",
    footerLinks: ["About", "Identity", "Privacy"],
    discord: "Official Discord",
    pause: "Pause atmosphere",
    motto: "THE CONE REMAINS.",
    creator: "An experience created by Vemryx",
    language: "Language",
    canon: "Canon",
    ogAlt: "The crowned capybara and the founding figures of Higher Ground.",
  },
  pt: {
    description:
      "Uma burocracia cósmica sustentada por chá, pão, potássio e uma fé extraordinária em um cone de trânsito.",
    defaultTitle: "Uma burocracia cósmica",
    skip: "Pular para o conteúdo",
    homeLabel: "All Hail the Cone — início",
    menu: "Menu",
    navigation: "Navegação principal",
    links: [
      ["A lore", "/lore"],
      ["Personagens", "/characters"],
      ["O mundo", "/world"],
      ["Galeria", "/gallery"],
      ["Cânone", "/canon"],
    ],
    project: "O projeto",
    footerNavigation: "Navegação do rodapé",
    footerLine: "Criaturas diferentes.\nA mesma direção inexplicável.",
    community: "Encontre seu lugar no cosmos",
    footerLinks: ["Sobre", "Identidade", "Privacidade"],
    discord: "Discord oficial",
    pause: "Pausar atmosfera",
    motto: "O CONE PERMANECE.",
    creator: "Uma experiência criada pela Vemryx",
    language: "Idioma",
    canon: "Cânone",
    ogAlt: "A capivara coroada e as figuras fundadoras de Higher Ground.",
  },
  zh: {
    description:
      "一个由茶、面包、钾，以及对交通锥非同寻常的信仰维系的宇宙官僚体系。",
    defaultTitle: "宇宙官僚体系",
    skip: "跳到正文",
    homeLabel: "All Hail the Cone — 首页",
    menu: "菜单",
    navigation: "主导航",
    links: [
      ["世界设定", "/lore"],
      ["角色", "/characters"],
      ["世界", "/world"],
      ["画廊", "/gallery"],
      ["正史", "/canon"],
    ],
    project: "项目",
    footerNavigation: "页脚导航",
    footerLine: "不同的生灵。\n同一个难以解释的方向。",
    community: "在宇宙中找到你的位置",
    footerLinks: ["关于", "视觉识别", "隐私"],
    discord: "官方 Discord",
    pause: "暂停氛围动画",
    motto: "交通锥依然存在。",
    creator: "由 Vemryx 打造的体验",
    language: "语言",
    canon: "正史",
    ogAlt: "头戴王冠的水豚与 Higher Ground 的创始角色。",
  },
  de: {
    description:
      "Eine kosmische Bürokratie, zusammengehalten von Tee, Brot, Kalium und außergewöhnlichem Glauben an einen Verkehrskegel.",
    defaultTitle: "Eine kosmische Bürokratie",
    skip: "Zum Inhalt springen",
    homeLabel: "All Hail the Cone — Startseite",
    menu: "Menü",
    navigation: "Hauptnavigation",
    links: [
      ["Die Lore", "/lore"],
      ["Figuren", "/characters"],
      ["Die Welt", "/world"],
      ["Galerie", "/gallery"],
      ["Kanon", "/canon"],
    ],
    project: "Das Projekt",
    footerNavigation: "Fußnavigation",
    footerLine: "Verschiedene Wesen.\nDieselbe unerklärliche Richtung.",
    community: "Finde deinen Platz im Kosmos",
    footerLinks: ["Über uns", "Identität", "Datenschutz"],
    discord: "Offizieller Discord",
    pause: "Atmosphäre pausieren",
    motto: "DER KEGEL BLEIBT.",
    creator: "Ein Erlebnis von Vemryx",
    language: "Sprache",
    canon: "Kanon",
    ogAlt:
      "Das gekrönte Wasserschwein und die Gründungsfiguren von Higher Ground.",
  },
  fr: {
    description:
      "Une bureaucratie cosmique soutenue par le thé, le pain, le potassium et une foi extraordinaire en un cône de signalisation.",
    defaultTitle: "Une bureaucratie cosmique",
    skip: "Aller au contenu",
    homeLabel: "All Hail the Cone — accueil",
    menu: "Menu",
    navigation: "Navigation principale",
    links: [
      ["Le récit", "/lore"],
      ["Personnages", "/characters"],
      ["Le monde", "/world"],
      ["Galerie", "/gallery"],
      ["Canon", "/canon"],
    ],
    project: "Le projet",
    footerNavigation: "Navigation de pied de page",
    footerLine: "Des créatures différentes.\nLa même direction inexplicable.",
    community: "Trouvez votre place dans le cosmos",
    footerLinks: ["À propos", "Identité", "Confidentialité"],
    discord: "Discord officiel",
    pause: "Suspendre l’atmosphère",
    motto: "LE CÔNE DEMEURE.",
    creator: "Une expérience créée par Vemryx",
    language: "Langue",
    canon: "Canon",
    ogAlt: "Le capybara couronné et les figures fondatrices de Higher Ground.",
  },
} as const;

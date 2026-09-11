import type { Locale } from ".";

type HomeCopy = {
  heroEyebrow: string;
  heroDescription: string;
  enter: string;
  meetCone: string;
  note: readonly [string, string];
  founding: string;
  scroll: string;
  established: string;
  welcome: string;
  vast: readonly [string, string];
  intro: readonly [string, string, string];
  orientation: string;
  coneEyebrow: string;
  coneTitle: readonly [string, string, string];
  coneBody: readonly [string, string, string];
  regarding: string;
  observations: string;
  observationTabs: readonly [string, string, string];
  observationText: readonly [string, string, string];
  administration: string;
  beings: readonly [string, string];
  meetFigures: string;
  beyond: string;
  roads: readonly [string, string];
  floating: readonly [string, string];
  explore: string;
  fieldRecord: string;
  fragments: string;
  explanation: readonly [string, string];
  consult: string;
  collection: string;
  evidence: string;
  picture: readonly [string, string];
  galleryBody: string;
  openGallery: string;
  room: string;
  stranger: readonly [string, string];
  invitation: readonly [string, string];
  join: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    heroEyebrow: "A most extraordinary ordinary universe",
    heroDescription:
      "A cosmic bureaucracy held together by tea, bread, potassium, and an extraordinary faith in a traffic cone.",
    enter: "Enter the universe",
    meetCone: "Meet the Cone",
    note: ["Good tea. Greater mysteries.", "All paperwork in order. Mostly."],
    founding: "THE FOUNDING ARCHIVE / VOL. I",
    scroll: "Scroll to discover",
    established: "EST. IN THIS DIMENSION · 2026",
    welcome: "Welcome to Higher Ground",
    vast: ["The universe is vast.", "The kettle is on."],
    intro: [
      "After The Ascension, scattered worlds discovered the same direction. Their Gates stabilized. Their horizons did not.",
      "Its sovereign is a capybara. Its infrastructure runs on potassium. Its future rests, to an unusual extent, on a pigeon’s ability to keep the portal routes supplied.",
      "And at the heart of it all: one orange cone.",
    ],
    orientation: "A brief orientation",
    coneEyebrow: "An object of considerable significance",
    coneTitle: [
      "It does not answer.",
      "It points.",
      "The direction continues.",
    ],
    coneBody: [
      "It does not speak. It does not govern.",
      "It stabilized worlds and submitted no explanation.",
      "Higher Ground gathered around what followed.",
    ],
    regarding: "Regarding the Sacred Cone",
    observations: "Cone observations",
    observationTabs: ["The object", "The care", "The unknown"],
    observationText: [
      "A familiar shape. Extraordinary attention. A ceremonial view of the Cone.",
      "The Keepers tend The Sanctuary. Whether this is faith or protocol remains unresolved.",
      "Origin, purpose, and the sender of the signal remain unrecorded. The archive is still open.",
    ],
    administration: "The administration of Higher Ground",
    beings: ["Extraordinary beings.", "Perfectly normal jobs."],
    meetFigures: "Meet the central figures",
    beyond: "Beyond the familiar sky",
    roads: ["Some roads", "lead further."],
    floating: [
      "Floating kingdoms. Uncharted crossings.",
      "Somewhere, your tea is still warm.",
    ],
    explore: "Explore the known universe",
    fieldRecord: "FIELD RECORD / THE FLOATING REALMS",
    fragments: "Fragments from the archive",
    explanation: ["Not everything", "has an explanation."],
    consult: "Consult the canon",
    collection: "From the official collection",
    evidence: "Evidence of the impossible",
    picture: ["It begins", "with a picture."],
    galleryBody:
      "Explore the artworks that gave this universe its shape. Every island, every creature, every very important cone.",
    openGallery: "Open the gallery",
    room: "There is room at the table",
    stranger: ["A stranger today.", "Part of the universe tomorrow."],
    invitation: [
      "The archive is open. Bring your curiosity.",
      "Bread is appreciated, but not required.",
    ],
    join: "Join the unfolding story",
  },
  pt: {
    heroEyebrow: "Um universo extraordinariamente comum",
    heroDescription:
      "Uma burocracia cósmica sustentada por chá, pão, potássio e uma fé extraordinária em um cone de trânsito.",
    enter: "Entrar no universo",
    meetCone: "Conhecer o Cone",
    note: ["Bom chá. Mistérios maiores.", "Toda a papelada em ordem. Quase."],
    founding: "O ARQUIVO FUNDADOR / VOL. I",
    scroll: "Role para descobrir",
    established: "EST. NESTA DIMENSÃO · 2026",
    welcome: "Bem-vindo a Higher Ground",
    vast: ["O universo é vasto.", "A chaleira está no fogo."],
    intro: [
      "Depois de The Ascension, mundos dispersos descobriram a mesma direção. Seus Gates se estabilizaram. Seus horizontes, não.",
      "Seu soberano é uma capivara. Sua infraestrutura funciona com potássio. Seu futuro depende, em medida incomum, da capacidade de um pombo de manter abastecidas as rotas dos portais.",
      "E no centro de tudo: um cone laranja.",
    ],
    orientation: "Uma breve orientação",
    coneEyebrow: "Um objeto de importância considerável",
    coneTitle: ["Ele não responde.", "Ele aponta.", "A direção continua."],
    coneBody: [
      "Ele não fala. Ele não governa.",
      "Ele estabilizou mundos e não apresentou explicação.",
      "Higher Ground se reuniu ao redor do que veio depois.",
    ],
    regarding: "Sobre o Cone Sagrado",
    observations: "Observações sobre o Cone",
    observationTabs: ["O objeto", "O cuidado", "O desconhecido"],
    observationText: [
      "Uma forma familiar. Atenção extraordinária. Uma visão cerimonial do Cone.",
      "Os Keepers cuidam do Sanctuary. Se isso é fé ou protocolo continua sem resposta.",
      "A origem, o propósito e quem envia o sinal permanecem sem registro. O arquivo continua aberto.",
    ],
    administration: "A administração de Higher Ground",
    beings: ["Seres extraordinários.", "Empregos perfeitamente normais."],
    meetFigures: "Conheça as figuras centrais",
    beyond: "Além do céu familiar",
    roads: ["Alguns caminhos", "levam mais longe."],
    floating: [
      "Reinos flutuantes. Travessias não mapeadas.",
      "Em algum lugar, seu chá ainda está quente.",
    ],
    explore: "Explore o universo conhecido",
    fieldRecord: "REGISTRO DE CAMPO / THE FLOATING REALMS",
    fragments: "Fragmentos do arquivo",
    explanation: ["Nem tudo", "tem uma explicação."],
    consult: "Consulte o cânone",
    collection: "Da coleção oficial",
    evidence: "Evidências do impossível",
    picture: ["Tudo começa", "com uma imagem."],
    galleryBody:
      "Explore as obras que deram forma a este universo. Cada ilha, cada criatura, cada cone muito importante.",
    openGallery: "Abrir a galeria",
    room: "Há lugar à mesa",
    stranger: ["Um estranho hoje.", "Parte do universo amanhã."],
    invitation: [
      "O arquivo está aberto. Traga sua curiosidade.",
      "Pão é bem-vindo, mas não obrigatório.",
    ],
    join: "Faça parte da história",
  },
  zh: {
    heroEyebrow: "一个极不寻常的寻常宇宙",
    heroDescription:
      "一个由茶、面包、钾，以及对交通锥非同寻常的信仰维系的宇宙官僚体系。",
    enter: "进入宇宙",
    meetCone: "认识交通锥",
    note: ["好茶。更大的谜团。", "所有文书均已就绪。基本如此。"],
    founding: "创世档案 / 第一卷",
    scroll: "滚动探索",
    established: "本维度建立于 · 2026",
    welcome: "欢迎来到 Higher Ground",
    vast: ["宇宙浩瀚。", "水已经烧开。"],
    intro: [
      "The Ascension 之后，分散的世界发现了同一个方向。Gates 稳定了，地平线却没有。",
      "这里的君主是一只水豚，基础设施以钾驱动，而未来在不同寻常的程度上取决于一只鸽子能否保障传送门路线的供应。",
      "而一切的中心：一个橙色交通锥。",
    ],
    orientation: "简要指引",
    coneEyebrow: "一件意义重大的物体",
    coneTitle: ["它不作回答。", "它指出方向。", "方向仍在延伸。"],
    coneBody: [
      "它不说话，也不统治。",
      "它稳定了诸多世界，却没有提交任何说明。",
      "Higher Ground 因随后发生的一切聚集于此。",
    ],
    regarding: "关于圣锥",
    observations: "交通锥观察记录",
    observationTabs: ["物体", "照料", "未知"],
    observationText: [
      "熟悉的形状，非凡的关注。这是交通锥的仪式性视图。",
      "Keepers 照料着 Sanctuary。那究竟是信仰还是协议，仍无定论。",
      "起源、目的以及信号发送者均未记录。档案仍然开放。",
    ],
    administration: "Higher Ground 行政体系",
    beings: ["非凡的生灵。", "完全正常的工作。"],
    meetFigures: "认识核心角色",
    beyond: "熟悉天空之外",
    roads: ["有些道路", "通向更远之处。"],
    floating: ["漂浮王国。未知航路。", "在某处，你的茶依然温热。"],
    explore: "探索已知宇宙",
    fieldRecord: "实地记录 / THE FLOATING REALMS",
    fragments: "档案片段",
    explanation: ["并非一切", "都有解释。"],
    consult: "查阅正史",
    collection: "来自官方收藏",
    evidence: "不可能之事的证据",
    picture: ["一切始于", "一幅图像。"],
    galleryBody:
      "探索塑造了这个宇宙的作品：每座岛屿、每个生灵，以及每一个极其重要的交通锥。",
    openGallery: "打开画廊",
    room: "桌边仍有位置",
    stranger: ["今天的陌生人。", "明天的宇宙一员。"],
    invitation: [
      "档案已经开放。带上你的好奇心。",
      "欢迎携带面包，但并非必需。",
    ],
    join: "加入仍在展开的故事",
  },
  de: {
    heroEyebrow: "Ein höchst außergewöhnlich gewöhnliches Universum",
    heroDescription:
      "Eine kosmische Bürokratie, zusammengehalten von Tee, Brot, Kalium und außergewöhnlichem Glauben an einen Verkehrskegel.",
    enter: "Das Universum betreten",
    meetCone: "Den Kegel kennenlernen",
    note: [
      "Guter Tee. Größere Geheimnisse.",
      "Alle Unterlagen in Ordnung. Meistens.",
    ],
    founding: "DAS GRÜNDUNGSARCHIV / BAND I",
    scroll: "Scrollen und entdecken",
    established: "GEGR. IN DIESER DIMENSION · 2026",
    welcome: "Willkommen in Higher Ground",
    vast: ["Das Universum ist weit.", "Der Kessel steht bereit."],
    intro: [
      "Nach The Ascension entdeckten verstreute Welten dieselbe Richtung. Ihre Gates stabilisierten sich. Ihre Horizonte nicht.",
      "Ihr Souverän ist ein Wasserschwein. Ihre Infrastruktur läuft mit Kalium. Ihre Zukunft hängt in ungewöhnlichem Maß davon ab, dass eine Taube die Portalrouten versorgt.",
      "Und im Zentrum von allem: ein orangefarbener Kegel.",
    ],
    orientation: "Eine kurze Orientierung",
    coneEyebrow: "Ein Objekt von beträchtlicher Bedeutung",
    coneTitle: [
      "Er antwortet nicht.",
      "Er weist den Weg.",
      "Die Richtung setzt sich fort.",
    ],
    coneBody: [
      "Er spricht nicht. Er herrscht nicht.",
      "Er stabilisierte Welten und gab keine Erklärung ab.",
      "Higher Ground versammelte sich um das, was folgte.",
    ],
    regarding: "Über den Heiligen Kegel",
    observations: "Beobachtungen des Kegels",
    observationTabs: ["Das Objekt", "Die Fürsorge", "Das Unbekannte"],
    observationText: [
      "Eine vertraute Form. Außergewöhnliche Aufmerksamkeit. Eine zeremonielle Ansicht des Kegels.",
      "Die Keepers pflegen The Sanctuary. Ob dies Glaube oder Protokoll ist, bleibt offen.",
      "Ursprung, Zweck und Absender des Signals sind nicht verzeichnet. Das Archiv bleibt offen.",
    ],
    administration: "Die Verwaltung von Higher Ground",
    beings: ["Außergewöhnliche Wesen.", "Völlig normale Berufe."],
    meetFigures: "Die zentralen Figuren kennenlernen",
    beyond: "Jenseits des vertrauten Himmels",
    roads: ["Manche Wege", "führen weiter."],
    floating: [
      "Schwebende Königreiche. Unkartierte Übergänge.",
      "Irgendwo ist dein Tee noch warm.",
    ],
    explore: "Das bekannte Universum erkunden",
    fieldRecord: "FELDBERICHT / THE FLOATING REALMS",
    fragments: "Fragmente aus dem Archiv",
    explanation: ["Nicht alles", "hat eine Erklärung."],
    consult: "Den Kanon einsehen",
    collection: "Aus der offiziellen Sammlung",
    evidence: "Belege des Unmöglichen",
    picture: ["Es beginnt", "mit einem Bild."],
    galleryBody:
      "Entdecke die Werke, die diesem Universum Gestalt gaben. Jede Insel, jedes Wesen, jeder äußerst wichtige Kegel.",
    openGallery: "Galerie öffnen",
    room: "Am Tisch ist noch Platz",
    stranger: ["Heute ein Fremder.", "Morgen Teil des Universums."],
    invitation: [
      "Das Archiv ist offen. Bring deine Neugier mit.",
      "Brot ist willkommen, aber nicht erforderlich.",
    ],
    join: "Teil der entstehenden Geschichte werden",
  },
  fr: {
    heroEyebrow: "Un univers ordinaire des plus extraordinaires",
    heroDescription:
      "Une bureaucratie cosmique soutenue par le thé, le pain, le potassium et une foi extraordinaire en un cône de signalisation.",
    enter: "Entrer dans l’univers",
    meetCone: "Rencontrer le Cône",
    note: [
      "Bon thé. Plus grands mystères.",
      "Tous les documents sont en ordre. Presque.",
    ],
    founding: "LES ARCHIVES FONDATRICES / VOL. I",
    scroll: "Faire défiler pour découvrir",
    established: "ÉTABLI DANS CETTE DIMENSION · 2026",
    welcome: "Bienvenue à Higher Ground",
    vast: ["L’univers est vaste.", "La bouilloire est prête."],
    intro: [
      "Après The Ascension, des mondes dispersés découvrirent la même direction. Leurs Gates se stabilisèrent. Leurs horizons, non.",
      "Son souverain est un capybara. Son infrastructure fonctionne au potassium. Son avenir dépend, dans une mesure inhabituelle, de la capacité d’un pigeon à approvisionner les routes des portails.",
      "Et au cœur de tout cela : un cône orange.",
    ],
    orientation: "Une brève orientation",
    coneEyebrow: "Un objet d’une importance considérable",
    coneTitle: ["Il ne répond pas.", "Il indique.", "La direction continue."],
    coneBody: [
      "Il ne parle pas. Il ne gouverne pas.",
      "Il a stabilisé des mondes sans fournir d’explication.",
      "Higher Ground s’est rassemblé autour de ce qui a suivi.",
    ],
    regarding: "À propos du Cône sacré",
    observations: "Observations du Cône",
    observationTabs: ["L’objet", "Le soin", "L’inconnu"],
    observationText: [
      "Une forme familière. Une attention extraordinaire. Une vue cérémonielle du Cône.",
      "Les Keepers entretiennent The Sanctuary. Foi ou protocole : la question reste ouverte.",
      "L’origine, le but et l’émetteur du signal restent inconnus. Les archives demeurent ouvertes.",
    ],
    administration: "L’administration de Higher Ground",
    beings: ["Des êtres extraordinaires.", "Des emplois parfaitement normaux."],
    meetFigures: "Rencontrer les figures centrales",
    beyond: "Au-delà du ciel familier",
    roads: ["Certains chemins", "mènent plus loin."],
    floating: [
      "Royaumes flottants. Traversées inexplorées.",
      "Quelque part, votre thé est encore chaud.",
    ],
    explore: "Explorer l’univers connu",
    fieldRecord: "RAPPORT DE TERRAIN / THE FLOATING REALMS",
    fragments: "Fragments des archives",
    explanation: ["Tout n’a pas", "d’explication."],
    consult: "Consulter le canon",
    collection: "De la collection officielle",
    evidence: "Preuves de l’impossible",
    picture: ["Tout commence", "par une image."],
    galleryBody:
      "Explorez les œuvres qui ont donné forme à cet univers. Chaque île, chaque créature, chaque cône extrêmement important.",
    openGallery: "Ouvrir la galerie",
    room: "Il reste une place à table",
    stranger: ["Un inconnu aujourd’hui.", "Une part de l’univers demain."],
    invitation: [
      "Les archives sont ouvertes. Apportez votre curiosité.",
      "Le pain est apprécié, sans être obligatoire.",
    ],
    join: "Rejoindre l’histoire en devenir",
  },
};

export const documentCopy = {
  lore: {
    en: [
      "An orientation to the impossible",
      "Official lore base · v0.1",
      "The Ascension, Higher Ground and the repeating signal beyond the known universe. Begin with the official foundation of All Hail the Cone.",
    ],
    pt: [
      "Uma orientação para o impossível",
      "Lore oficial · v0.1",
      "The Ascension, Higher Ground e o sinal que se repete além do universo conhecido. Comece pela fundação oficial de All Hail the Cone.",
    ],
    zh: [
      "通往不可能之境的指引",
      "官方世界设定 · v0.1",
      "了解 The Ascension、Higher Ground，以及从已知宇宙之外不断传来的信号。",
    ],
    de: [
      "Eine Orientierung zum Unmöglichen",
      "Offizielle Lore · v0.1",
      "The Ascension, Higher Ground und das wiederkehrende Signal jenseits des bekannten Universums. Hier beginnt die offizielle Grundlage von All Hail the Cone.",
    ],
    fr: [
      "Une orientation vers l’impossible",
      "Récit officiel · v0.1",
      "The Ascension, Higher Ground et le signal répété au-delà de l’univers connu. Voici le fondement officiel de All Hail the Cone.",
    ],
  },
  canon: {
    en: [
      "The canon register",
      "The Office of Continuity · Lore Base v0.1",
      "What is established, what is still being considered, and what is simply Coneposting. An official record with room for uncertainty.",
    ],
    pt: [
      "O registro do cânone",
      "The Office of Continuity · Lore v0.1",
      "O que está estabelecido, o que ainda está em consideração e o que é apenas Coneposting. Um registro oficial com espaço para incerteza.",
    ],
    zh: [
      "正史记录",
      "The Office of Continuity · 世界设定 v0.1",
      "已经确立、仍在讨论，以及仅属于 Coneposting 的内容。一份为未知保留空间的官方记录。",
    ],
    de: [
      "Das Kanonregister",
      "The Office of Continuity · Lore v0.1",
      "Was feststeht, was noch erwogen wird und was schlicht Coneposting ist. Ein offizielles Verzeichnis mit Raum für Ungewissheit.",
    ],
    fr: [
      "Le registre du canon",
      "The Office of Continuity · Récit v0.1",
      "Ce qui est établi, ce qui reste à l’étude et ce qui relève simplement du Coneposting. Un registre officiel qui laisse place à l’incertitude.",
    ],
  },
  factions: {
    en: [
      "Orders, divisions & operations",
      "The civic directory",
      "The Order of Guidance, Bread Operations, the Potassium Division and the institutions connecting Higher Ground.",
    ],
    pt: [
      "Ordens, divisões e operações",
      "O diretório cívico",
      "The Order of Guidance, Bread Operations, a Potassium Division e as instituições que conectam Higher Ground.",
    ],
    zh: [
      "秩序、部门与运营",
      "公共机构名录",
      "The Order of Guidance、Bread Operations、钾部，以及连接 Higher Ground 的各个机构。",
    ],
    de: [
      "Orden, Abteilungen & Betrieb",
      "Das Bürgerverzeichnis",
      "The Order of Guidance, Bread Operations, die Potassium Division und die Institutionen, die Higher Ground verbinden.",
    ],
    fr: [
      "Ordres, divisions et opérations",
      "Le répertoire civique",
      "The Order of Guidance, Bread Operations, la Potassium Division et les institutions qui relient Higher Ground.",
    ],
  },
  timeline: {
    en: [
      "The initial chronology",
      "The historical record",
      "From the Era Before Guidance through The Ascension and the First Expeditions to the signal now crossing the Gates.",
    ],
    pt: [
      "A cronologia inicial",
      "O registro histórico",
      "Da Era Before Guidance, passando por The Ascension e as Primeiras Expedições, até o sinal que agora atravessa os Gates.",
    ],
    zh: [
      "初始时间线",
      "历史记录",
      "从 Guidance 之前的时代，经由 The Ascension 与首次远征，直到如今穿越 Gates 而来的信号。",
    ],
    de: [
      "Die erste Chronologie",
      "Die historische Aufzeichnung",
      "Von der Zeit vor der Guidance über The Ascension und die ersten Expeditionen bis zu dem Signal, das nun die Gates durchquert.",
    ],
    fr: [
      "La chronologie initiale",
      "Le registre historique",
      "De l’ère précédant la Guidance à The Ascension et aux premières expéditions, jusqu’au signal qui traverse aujourd’hui les Gates.",
    ],
  },
} satisfies Record<string, Record<Locale, readonly [string, string, string]>>;

import gallery from "../data/gallery.json";
import type { Locale } from ".";

type Art = (typeof gallery)[number];

const categoryCopy: Record<Locale, Record<string, string>> = {
  en: {},
  pt: {
    "Founding image": "Imagem fundadora",
    "Identity study": "Estudo de identidade",
    "World study": "Estudo de mundo",
    "Concept collection": "Coleção conceitual",
    "Brand system": "Sistema de marca",
  },
  zh: {
    "Founding image": "创世图像",
    "Identity study": "视觉识别研究",
    "World study": "世界研究",
    "Concept collection": "概念合集",
    "Brand system": "品牌系统",
  },
  de: {
    "Founding image": "Gründungsbild",
    "Identity study": "Identitätsstudie",
    "World study": "Weltstudie",
    "Concept collection": "Konzeptsammlung",
    "Brand system": "Markensystem",
  },
  fr: {
    "Founding image": "Image fondatrice",
    "Identity study": "Étude d’identité",
    "World study": "Étude du monde",
    "Concept collection": "Collection conceptuelle",
    "Brand system": "Système de marque",
  },
};

const featuredCopy: Record<
  Exclude<Locale, "en">,
  Record<string, { title: string; description: string; alt: string }>
> = {
  pt: {
    "the-first-observance": {
      title: "A Primeira Observação",
      description:
        "Uma capivara coroada ergue o chá acima do Cone Sagrado. Os pequenos guardiões se reúnem; Bread Operations e a Potassium Division já estão trabalhando. O registro visual fundador de All Hail the Cone.",
      alt: "Capivara astronauta coroada com uma xícara, ao lado de uma banana, um pombo executivo e pequenos robôs reunidos ao redor de um cone luminoso entre ilhas flutuantes.",
    },
    "the-imperial-seal": {
      title: "O Selo Imperial",
      description:
        "Uma interpretação cerimonial do Cone, coroado e cercado por ouro orbital. A coroa não estabelece propriedade sobre o Cone.",
      alt: "Cone laranja coroado e cercado por um halo orbital dourado contra o espaço negro.",
    },
    "an-ordinary-afternoon": {
      title: "Uma Tarde Comum",
      description:
        "Chá em uma sala flutuante, um vendedor de clima aberto e uma observação perfeitamente rotineira do Cone. Um panorama da vida entre dimensões.",
      alt: "Paisagem cósmica com capivara e viajante tomando chá, polvo DJ, banana trabalhando, pombo de terno e robôs cuidando de um cone.",
    },
    "possible-tomorrows": {
      title: "Amanhãs Possíveis",
      description:
        "Possíveis expedições, departamentos, cerimônias e noites tranquilas. Direções de desenvolvimento, não provas de que todos os eventos ocorreram.",
      alt: "Coleção de cenas com expedições de capivaras, tecnologia de potássio, Bread Operations, robôs e arquitetura monumental do Cone.",
    },
    "the-kindness-drift": {
      title: "A Deriva da Gentileza",
      description:
        "Uma vista diurna do arquipélago: clima engarrafado, orquestras de colheres, um portal oceânico e um pato cerimonial muito grande.",
      alt: "Ilhas flutuantes com pato coroado, capivara astronauta tomando chá, portal subaquático, orquestra de polvo e santuário do Cone.",
    },
  },
  zh: {
    "the-first-observance": {
      title: "初次观测",
      description:
        "头戴王冠的水豚在圣锥上方举起茶杯。小型守护者聚集于此，Bread Operations 与钾部已经开始工作。这是 All Hail the Cone 的创世视觉记录。",
      alt: "头戴王冠的宇航员水豚手持茶杯，与香蕉、鸽子高管和小机器人一同围绕漂浮群岛中的发光交通锥。",
    },
    "the-imperial-seal": {
      title: "帝国印记",
      description:
        "对交通锥的仪式性诠释：王冠与金色轨道环绕其身。王冠并不代表任何人拥有它。",
      alt: "黑色太空中，一枚头戴王冠、被金色轨道光环环绕的橙色交通锥。",
    },
    "an-ordinary-afternoon": {
      title: "寻常午后",
      description:
        "漂浮客厅中的茶会、照常营业的天气商贩，以及对交通锥的例行观测。这是维度之间的日常生活。",
      alt: "宇宙景观中，水豚与铠甲旅人喝茶，章鱼打碟，香蕉工作，西装鸽子与机器人照料交通锥。",
    },
    "possible-tomorrows": {
      title: "可能的明天",
      description:
        "关于远征、部门、仪式与宁静夜晚的可能记录。它们是发展方向，并非所有事件都已发生的证据。",
      alt: "水豚远征、钾技术、Bread Operations、机器人与宏伟交通锥建筑组成的概念合集。",
    },
    "the-kindness-drift": {
      title: "善意漂流群岛",
      description:
        "群岛的日间景象：瓶装天气、勺子乐团、通往海洋城市的门户，以及一只巨大的仪式用鸭。",
      alt: "漂浮群岛上有王冠巨鸭、喝茶的宇航员水豚、水下门户、章鱼乐团与交通锥圣所。",
    },
  },
  de: {
    "the-first-observance": {
      title: "Die erste Beobachtung",
      description:
        "Ein gekröntes Wasserschwein hält Tee über den Heiligen Kegel. Die kleinen Hüter versammeln sich; Bread Operations und die Potassium Division arbeiten bereits. Das visuelle Gründungsdokument.",
      alt: "Gekröntes Astronauten-Wasserschwein mit Teetasse, Banane, Führungstaube und kleinen Robotern um einen leuchtenden Verkehrskegel zwischen schwebenden Inseln.",
    },
    "the-imperial-seal": {
      title: "Das imperiale Siegel",
      description:
        "Eine zeremonielle Deutung des gekrönten, von orbitalem Gold umgebenen Kegels. Die Krone begründet keinen Besitzanspruch.",
      alt: "Gekrönter orangefarbener Kegel mit goldenem Orbitalhalo vor schwarzem Weltraum.",
    },
    "an-ordinary-afternoon": {
      title: "Ein gewöhnlicher Nachmittag",
      description:
        "Tee in einem treibenden Salon, ein geöffneter Wetterladen und eine völlig routinemäßige Beobachtung des Kegels. Alltag zwischen Dimensionen.",
      alt: "Kosmische Landschaft mit teetrinkendem Wasserschwein, Oktopus-DJ, arbeitender Banane, Anzugtaube und Robotern am Kegel.",
    },
    "possible-tomorrows": {
      title: "Mögliche Zukünfte",
      description:
        "Mögliche Expeditionen, Abteilungen, Zeremonien und ruhige Abende. Entwicklungsrichtungen, keine Belege für bereits geschehene Ereignisse.",
      alt: "Sammlung von Wasserschwein-Expeditionen, Kaliumtechnik, Bread Operations, Robotern und monumentaler Kegelarchitektur.",
    },
    "the-kindness-drift": {
      title: "Die Strömung der Freundlichkeit",
      description:
        "Der Archipel bei Tageslicht: abgefülltes Wetter, Löffelorchester, ein Portal zur Ozeanstadt und eine sehr große zeremonielle Ente.",
      alt: "Schwebende Inseln mit gekrönter Ente, teetrinkendem Astronauten-Wasserschwein, Unterwasserportal, Oktopusorchester und Kegelschrein.",
    },
  },
  fr: {
    "the-first-observance": {
      title: "La première observation",
      description:
        "Un capybara couronné tient son thé au-dessus du Cône sacré. Les petits gardiens se rassemblent ; Bread Operations et la Potassium Division sont déjà au travail. Le document visuel fondateur.",
      alt: "Capybara astronaute couronné tenant une tasse, avec une banane, un pigeon cadre et de petits robots autour d’un cône lumineux entre des îles flottantes.",
    },
    "the-imperial-seal": {
      title: "Le sceau impérial",
      description:
        "Une interprétation cérémonielle du Cône, couronné et entouré d’or orbital. La couronne n’établit aucune propriété sur le Cône.",
      alt: "Cône orange couronné entouré d’un halo orbital doré dans l’espace noir.",
    },
    "an-ordinary-afternoon": {
      title: "Un après-midi ordinaire",
      description:
        "Du thé dans un salon flottant, un vendeur de météo ouvert et une observation parfaitement routinière du Cône. La vie civique entre les dimensions.",
      alt: "Paysage cosmique avec capybara prenant le thé, pieuvre DJ, banane au travail, pigeon en costume et robots autour d’un cône.",
    },
    "possible-tomorrows": {
      title: "Demains possibles",
      description:
        "Expéditions, services, cérémonies et soirées paisibles possibles. Des directions créatives, pas la preuve que chaque événement a eu lieu.",
      alt: "Collection d’expéditions de capybaras, technologie au potassium, Bread Operations, robots et architecture monumentale du Cône.",
    },
    "the-kindness-drift": {
      title: "La dérive de la bienveillance",
      description:
        "L’archipel de jour : météo en bouteille, orchestres de cuillères, portail océanique et très grand canard cérémoniel.",
      alt: "Îles flottantes avec canard couronné, capybara astronaute prenant le thé, portail sous-marin, orchestre de pieuvre et sanctuaire du Cône.",
    },
  },
};

const genericDescription: Record<
  Exclude<Locale, "en">,
  Record<string, string>
> = {
  pt: {
    "Identity study":
      "Um estudo oficial da identidade cerimonial, da geometria orbital e da presença visual do Cone.",
    "Brand system":
      "Um estudo oficial do sistema de marca, mostrando como o Cone, a tipografia e os motivos orbitais funcionam juntos.",
  },
  zh: {
    "Identity study": "对交通锥仪式性视觉、轨道几何与品牌形象的官方研究。",
    "Brand system":
      "对品牌系统的官方研究，展示交通锥、字体与轨道图案如何共同运作。",
  },
  de: {
    "Identity study":
      "Eine offizielle Studie der zeremoniellen Identität, der orbitalen Geometrie und der visuellen Präsenz des Kegels.",
    "Brand system":
      "Eine offizielle Studie des Markensystems und des Zusammenspiels von Kegel, Typografie und orbitalen Motiven.",
  },
  fr: {
    "Identity study":
      "Une étude officielle de l’identité cérémonielle, de la géométrie orbitale et de la présence visuelle du Cône.",
    "Brand system":
      "Une étude officielle du système de marque et de l’accord entre Cône, typographie et motifs orbitaux.",
  },
};

export const getGalleryArt = (
  art: Art | undefined,
  locale: Locale,
): Art | undefined => {
  if (!art || locale === "en") return art;
  const featured = featuredCopy[locale][art.id];
  const description =
    featured?.description ??
    genericDescription[locale][art.category] ??
    art.description;
  return {
    ...art,
    title: featured?.title ?? art.title,
    description,
    alt: featured?.alt ?? description,
    category: categoryCopy[locale][art.category] ?? art.category,
  };
};

export const getGallery = (locale: Locale) =>
  gallery.map((art) => getGalleryArt(art, locale)!);

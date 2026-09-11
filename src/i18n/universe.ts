import { characters, fragments, territories } from "../data/universe";
import type { Locale } from ".";

type CharacterCopy = { role: string; summary: string; detail: string };
type TerritoryCopy = { name: string; kind: string; text: string };
type FragmentCopy = { text: string; source: string };
type TranslationLocale = Exclude<Locale, "en">;

const characterCopy: Record<
  TranslationLocale,
  Record<string, CharacterCopy>
> = {
  pt: {
    "the-king": {
      role: "O monarca mais calmo do multiverso",
      summary:
        "Capivara, astronauta, monarca, explorador e diplomata. Seu verdadeiro nome não aparece nos registros oficiais.",
      detail:
        "Ele liderou as Primeiras Expedições pelos Gates recém-estabilizados e ajudou civilizações a se encontrar sem entrar imediatamente em guerra. Como se tornou rei continua sem registro e raramente é questionado.",
    },
    "the-sacred-cone": {
      role: "A fonte da Guidance",
      summary:
        "Um cone de trânsito aparentemente comum no centro de um evento que conectou mundos. Ele guia. Ele não explica.",
      detail:
        "Ele afeta os Gates, reage a certas estrelas, parece impossível de destruir e produz leituras incompatíveis em sensores diferentes. Sua origem e finalidade permanecem deliberadamente sem resposta.",
    },
    "the-coo": {
      role: "Diretor de Operações",
      summary:
        "Um pombo de terno impecável, maleta e responsabilidade pela logística que mantém Higher Ground alimentada.",
      detail:
        "Ele dirige transportes, cadeias de suprimentos, comércio, reservas estratégicas, rotas de portais e distribuição. É extremamente competente e quase não tolera atrasos logísticos.",
    },
    "the-banana": {
      role: "Diretor de infraestrutura tecnológica",
      summary:
        "Uma banana senciente responsável por computação, comunicações, energia, automação, IA e sistemas de portais.",
      detail:
        "A Banana ocupa um assento no conselho de Higher Ground. A Divisão discorda regularmente de Bread Operations sobre prioridades e prazos; juntas, funcionam surpreendentemente bem.",
    },
    "the-keepers": {
      role: "Assistentes robóticos do Cone",
      summary:
        "Pequenos robôs de manutenção que se reuniram ao redor do Cone depois de The Ascension sem instrução conhecida.",
      detail:
        "Eles mantêm The Sanctuary, analisam energia, administram iluminação e segurança, preservam artefatos e realizam cerimônias. Não se sabe se possuem fé ou obedecem a um protocolo antigo.",
    },
    "the-maestro": {
      role: "Regente entre mundos",
      summary:
        "Um polvo que dirige festivais e uma rede cultural que leva música, arte e notícias através dos Gates.",
      detail:
        "The Maestro transita entre mesas eletrônicas, orquestras e transmissões cerimoniais. The Resonance permite que civilizações distantes se escutem através de rotas instáveis.",
    },
  },
  zh: {
    "the-king": {
      role: "多元宇宙中最沉着的君主",
      summary:
        "水豚、宇航员、君主、探险家与外交官。他的真名从未出现在官方记录中。",
      detail:
        "他率领首批探险队穿过刚刚稳定的 Gates，让不同文明在相遇时没有立刻开战。他如何成为国王没有记载，也很少有人追问。",
    },
    "the-sacred-cone": {
      role: "Guidance 的源头",
      summary:
        "一个看似普通的交通锥，却处在连接诸世界的事件中心。它指引，但不解释。",
      detail:
        "它影响 Gates，对某些恒星产生反应，似乎无法摧毁，并让不同传感器得出互相矛盾的结果。其起源与最终目的被刻意保留为谜。",
    },
    "the-coo": {
      role: "首席运营官",
      summary:
        "一只西装严谨、手提公文包的鸽子，负责维持 Higher Ground 供给的物流体系。",
      detail:
        "他主管运输、供应链、贸易、战略储备、传送门路线与资源分配。他极其称职，对物流延误几乎毫无容忍。",
    },
    "the-banana": {
      role: "技术基础设施主管",
      summary:
        "一根有意识的香蕉，负责计算、通信、能源、自动化、人工智能和传送门系统。",
      detail:
        "香蕉在 Higher Ground 议会中拥有席位。钾部经常与 Bread Operations 就优先级和进度发生行政争执；双方合作起来却异常高效。",
    },
    "the-keepers": {
      role: "交通锥的机器人侍从",
      summary:
        "一群小型维护机器人，在 The Ascension 后未经任何已知指令便聚集到交通锥周围。",
      detail:
        "它们维护 The Sanctuary，分析能量，管理照明与安保，保存文物并执行仪式。它们拥有信仰还是遵循古老协议，仍不得而知。",
    },
    "the-maestro": {
      role: "跨世界指挥家",
      summary:
        "一只章鱼，主持节庆并运营通过 Gates 传播音乐、艺术与新闻的文化网络。",
      detail:
        "The Maestro 穿梭于电子乐台、管弦乐团和仪式广播之间。The Resonance 让遥远文明能够跨越不稳定的路线彼此聆听。",
    },
  },
  de: {
    "the-king": {
      role: "Der ruhigste Monarch des Multiversums",
      summary:
        "Wasserschwein, Astronaut, Monarch, Entdecker und Diplomat. Sein wahrer Name erscheint in keinem offiziellen Dokument.",
      detail:
        "Er führte die ersten Expeditionen durch die neu stabilisierten Gates und half Zivilisationen, einander zu begegnen, ohne sofort Krieg zu führen. Wie er König wurde, ist nicht verzeichnet und wird selten hinterfragt.",
    },
    "the-sacred-cone": {
      role: "Die Quelle der Guidance",
      summary:
        "Ein gewöhnlich wirkender Verkehrskegel im Zentrum eines Ereignisses, das Welten verband. Er weist den Weg. Er erklärt nichts.",
      detail:
        "Er beeinflusst Gates, reagiert auf bestimmte Sterne, scheint unzerstörbar und liefert verschiedenen Sensoren widersprüchliche Werte. Ursprung und Zweck bleiben bewusst ungeklärt.",
    },
    "the-coo": {
      role: "Chief Operations Officer",
      summary:
        "Eine Taube im präzisen Anzug, mit Aktentasche und Verantwortung für die Logistik, die Higher Ground versorgt.",
      detail:
        "Er leitet Transport, Lieferketten, Handel, strategische Reserven, Portalrouten und Verteilung. Er ist äußerst kompetent und duldet kaum logistische Verzögerungen.",
    },
    "the-banana": {
      role: "Direktor der technologischen Infrastruktur",
      summary:
        "Eine empfindungsfähige Banane, zuständig für Computer, Kommunikation, Energie, Automatisierung, KI und Portalsysteme.",
      detail:
        "Die Banane hat einen Sitz im Rat von Higher Ground. Die Division streitet regelmäßig mit Bread Operations über Prioritäten und Termine; gemeinsam funktionieren sie erstaunlich gut.",
    },
    "the-keepers": {
      role: "Robotische Hüter des Kegels",
      summary:
        "Kleine Wartungsroboter, die sich nach The Ascension ohne bekannten Befehl um den Kegel versammelten.",
      detail:
        "Sie warten The Sanctuary, analysieren Energie, betreiben Licht und Sicherheit, bewahren Artefakte und vollziehen Zeremonien. Ob sie glauben oder einem alten Protokoll folgen, ist unbekannt.",
    },
    "the-maestro": {
      role: "Dirigent zwischen den Welten",
      summary:
        "Ein Oktopus, der Feste und ein Kulturnetz für Musik, Kunst und Nachrichten durch die Gates leitet.",
      detail:
        "The Maestro bewegt sich zwischen elektronischen Pulten, Orchestern und zeremoniellen Übertragungen. The Resonance lässt entfernte Zivilisationen einander über instabile Routen hören.",
    },
  },
  fr: {
    "the-king": {
      role: "Le monarque le plus calme du multivers",
      summary:
        "Capybara, astronaute, monarque, explorateur et diplomate. Son véritable nom n’apparaît dans aucun document officiel.",
      detail:
        "Il mena les premières expéditions à travers les Gates nouvellement stabilisés et aida les civilisations à se rencontrer sans entrer immédiatement en guerre. La manière dont il devint roi n’est pas consignée et suscite peu de questions.",
    },
    "the-sacred-cone": {
      role: "La source de la Guidance",
      summary:
        "Un cône de signalisation d’apparence ordinaire au centre d’un événement qui relia des mondes. Il guide. Il n’explique pas.",
      detail:
        "Il influence les Gates, réagit à certaines étoiles, semble indestructible et donne des résultats incompatibles selon les capteurs. Son origine et sa finalité demeurent volontairement irrésolues.",
    },
    "the-coo": {
      role: "Directeur des opérations",
      summary:
        "Un pigeon au costume impeccable, muni d’une mallette et responsable de la logistique qui nourrit Higher Ground.",
      detail:
        "Il dirige le transport, les chaînes d’approvisionnement, le commerce, les réserves, les routes de portail et la distribution. Il est extrêmement compétent et tolère très peu les retards.",
    },
    "the-banana": {
      role: "Directeur de l’infrastructure technologique",
      summary:
        "Une banane consciente responsable du calcul, des communications, de l’énergie, de l’automatisation, de l’IA et des portails.",
      detail:
        "La Banane siège au conseil de Higher Ground. La Division s’oppose régulièrement à Bread Operations sur les priorités et les délais ; ensemble, elles fonctionnent remarquablement bien.",
    },
    "the-keepers": {
      role: "Serviteurs robotiques du Cône",
      summary:
        "De petits robots d’entretien rassemblés autour du Cône après The Ascension sans instruction connue.",
      detail:
        "Ils entretiennent The Sanctuary, analysent l’énergie, gèrent l’éclairage et la sécurité, conservent les artefacts et accomplissent les cérémonies. Foi ou ancien protocole : nul ne le sait.",
    },
    "the-maestro": {
      role: "Chef d’orchestre entre les mondes",
      summary:
        "Une pieuvre qui dirige festivals et réseau culturel, transportant musique, art et nouvelles à travers les Gates.",
      detail:
        "The Maestro passe des platines électroniques aux orchestres et aux transmissions cérémonielles. The Resonance permet aux civilisations lointaines de s’entendre malgré des routes instables.",
    },
  },
};

const territoryCopy: Record<
  TranslationLocale,
  Record<string, TerritoryCopy>
> = {
  pt: {
    "first-ground": {
      name: "The First Ground",
      kind: "Região do Sanctuary",
      text: "Lar de The Sanctuary e do Cone Sagrado: um centro de peregrinação, observação, ciência e cerimônia.",
    },
    "crown-city": {
      name: "Crown City",
      kind: "Capital administrativa",
      text: "Os conselhos e instituições coordenam uma civilização cujas fronteiras são rotas, não linhas.",
    },
    "floating-realms": {
      name: "The Floating Realms",
      kind: "Mundos-ilha habitados",
      text: "Casas, mercados e cidades flutuantes ligados por pontes, embarcações e Gates sob céus que nem sempre concordam.",
    },
    "deep-cities": {
      name: "The Deep Cities",
      kind: "Civilizações oceânicas",
      text: "Civilizações construídas em oceanos imensos. Seus governos, histórias e relação com a superfície permanecem em aberto.",
    },
    "outer-routes": {
      name: "The Outer Routes",
      kind: "Rede de exploração",
      text: "Caminhos mapeados pelo espaço e entre dimensões. Gates estáveis e sinalizadores funcionais são muito recomendados.",
    },
    "silent-worlds": {
      name: "The Silent Worlds",
      kind: "Planetas abandonados",
      text: "Cidades vazias e estruturas intactas aguardam em planetas cujos habitantes e histórias ainda não foram encontrados.",
    },
    "far-ground": {
      name: "The Far Ground",
      kind: "Realidade não mapeada",
      text: "Além da rede mantida, Gates desconhecidos se abrem e um sinal insiste que Higher Ground existe em outro lugar.",
    },
  },
  zh: {
    "first-ground": {
      name: "The First Ground",
      kind: "Sanctuary 区域",
      text: "The Sanctuary 与圣锥所在地，也是朝圣、观测、科学和仪式的中心。",
    },
    "crown-city": {
      name: "Crown City",
      kind: "行政首都",
      text: "各议会与机构协调着一个以路线而非边界线划分的文明。",
    },
    "floating-realms": {
      name: "The Floating Realms",
      kind: "有人居住的浮岛世界",
      text: "漂浮的家园、市场与城市由桥梁、飞船和 Gates 相连，上空的天空并不总是彼此一致。",
    },
    "deep-cities": {
      name: "The Deep Cities",
      kind: "海洋文明",
      text: "建于浩瀚海洋中的文明。其政府、历史以及与海面的关系仍待书写。",
    },
    "outer-routes": {
      name: "The Outer Routes",
      kind: "探索网络",
      text: "穿越太空与维度的勘测路线。强烈建议使用稳定的 Gate 与正常工作的信标。",
    },
    "silent-worlds": {
      name: "The Silent Worlds",
      kind: "废弃行星",
      text: "空荡的城市与完好的建筑等待在那些居民及历史尚未被发现的行星上。",
    },
    "far-ground": {
      name: "The Far Ground",
      kind: "未绘制的现实",
      text: "在维护网络之外，未知 Gates 正在开启，一个信号坚持宣告 Higher Ground 在别处存在。",
    },
  },
  de: {
    "first-ground": {
      name: "The First Ground",
      kind: "Region des Sanctuary",
      text: "Heimat von The Sanctuary und dem Heiligen Kegel: ein Zentrum für Pilgerfahrt, Beobachtung, Wissenschaft und Zeremonie.",
    },
    "crown-city": {
      name: "Crown City",
      kind: "Verwaltungshauptstadt",
      text: "Räte und Institutionen koordinieren eine Zivilisation, deren Grenzen aus Routen statt Linien bestehen.",
    },
    "floating-realms": {
      name: "The Floating Realms",
      kind: "Bewohnte Inselwelten",
      text: "Schwebende Häuser, Märkte und Städte, verbunden durch Brücken, Schiffe und Gates unter Himmeln, die sich nicht immer einig sind.",
    },
    "deep-cities": {
      name: "The Deep Cities",
      kind: "Ozeanische Zivilisationen",
      text: "Zivilisationen in gewaltigen Ozeanen. Regierungen, Geschichten und Beziehungen zur Oberfläche bleiben offen.",
    },
    "outer-routes": {
      name: "The Outer Routes",
      kind: "Erkundungsnetz",
      text: "Vermessene Wege durch Raum und Dimensionen. Stabile Gates und funktionierende Baken werden dringend empfohlen.",
    },
    "silent-worlds": {
      name: "The Silent Worlds",
      kind: "Verlassene Planeten",
      text: "Leere Städte und intakte Bauten warten auf Planeten, deren Bewohner und Geschichten noch nicht gefunden wurden.",
    },
    "far-ground": {
      name: "The Far Ground",
      kind: "Unkartierte Realität",
      text: "Jenseits des gepflegten Netzes öffnen sich unbekannte Gates, während ein Signal behauptet, Higher Ground existiere anderswo.",
    },
  },
  fr: {
    "first-ground": {
      name: "The First Ground",
      kind: "Région du Sanctuary",
      text: "Le foyer de The Sanctuary et du Cône sacré : centre de pèlerinage, d’observation, de science et de cérémonie.",
    },
    "crown-city": {
      name: "Crown City",
      kind: "Capitale administrative",
      text: "Les conseils et institutions coordonnent une civilisation dont les frontières sont des routes plutôt que des lignes.",
    },
    "floating-realms": {
      name: "The Floating Realms",
      kind: "Mondes-îles habités",
      text: "Maisons, marchés et villes flottantes reliés par des ponts, des vaisseaux et des Gates sous des ciels qui ne s’accordent pas toujours.",
    },
    "deep-cities": {
      name: "The Deep Cities",
      kind: "Civilisations océaniques",
      text: "Des civilisations bâties dans d’immenses océans. Leurs gouvernements, histoires et liens avec la surface restent ouverts.",
    },
    "outer-routes": {
      name: "The Outer Routes",
      kind: "Réseau d’exploration",
      text: "Des chemins balisés dans l’espace et entre les dimensions. Gates stables et balises fonctionnelles sont vivement recommandés.",
    },
    "silent-worlds": {
      name: "The Silent Worlds",
      kind: "Planètes abandonnées",
      text: "Des villes vides et des structures intactes attendent sur des planètes dont les habitants et l’histoire restent introuvables.",
    },
    "far-ground": {
      name: "The Far Ground",
      kind: "Réalité inexplorée",
      text: "Au-delà du réseau entretenu, des Gates inconnus s’ouvrent et un signal affirme que Higher Ground existe ailleurs.",
    },
  },
};

const fragmentCopy: Record<TranslationLocale, readonly FragmentCopy[]> = {
  pt: [
    {
      text: "Por alguns segundos, civilizações em vários mundos observaram a mesma estrela dourada acima do Cone.",
      source: "O registro de The Ascension",
    },
    { text: "O Cone oferece direção, não respostas.", source: "The Guidance" },
    {
      text: "HIGHER GROUND EXISTE.",
      source: "Um sinal além do universo conhecido",
    },
  ],
  zh: [
    {
      text: "数秒之内，多个世界的文明都看见同一颗金色星辰出现在交通锥上方。",
      source: "The Ascension 记录",
    },
    { text: "交通锥提供方向，而非答案。", source: "The Guidance" },
    { text: "HIGHER GROUND 存在。", source: "来自已知宇宙之外的信号" },
  ],
  de: [
    {
      text: "Mehrere Sekunden lang sahen Zivilisationen auf vielen Welten denselben goldenen Stern über dem Kegel.",
      source: "Die Aufzeichnung von The Ascension",
    },
    {
      text: "Der Kegel gibt Richtung, keine Antworten.",
      source: "The Guidance",
    },
    {
      text: "HIGHER GROUND EXISTIERT.",
      source: "Ein Signal jenseits des bekannten Universums",
    },
  ],
  fr: [
    {
      text: "Durant quelques secondes, des civilisations de plusieurs mondes observèrent la même étoile dorée au-dessus du Cône.",
      source: "Le registre de The Ascension",
    },
    {
      text: "Le Cône donne une direction, pas des réponses.",
      source: "The Guidance",
    },
    {
      text: "HIGHER GROUND EXISTE.",
      source: "Un signal au-delà de l’univers connu",
    },
  ],
};

export const getCharacters = (locale: Locale) =>
  locale === "en"
    ? characters
    : characters.map((item) => ({
        ...item,
        ...characterCopy[locale][item.id],
      }));

export const getTerritories = (locale: Locale) =>
  locale === "en"
    ? territories
    : territories.map((item) => ({
        ...item,
        ...territoryCopy[locale][item.id],
      }));

export const getFragments = (locale: Locale) =>
  locale === "en"
    ? fragments
    : fragments.map((item, index) => ({
        ...item,
        ...fragmentCopy[locale][index],
      }));

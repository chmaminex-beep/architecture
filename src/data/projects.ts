import imgHerneBay from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import imgPonsonby from '../assets/images/project_ponsonby_extension_1791295645669.jpg';
import imgKauriCraft from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import imgRemuera from '../assets/images/project_remuera_residence_1791295667545.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  region: 'Middle East & Arabian Gulf' | 'East Asia & Royal Domains' | 'Continental Europe' | 'Pacific & Alpine New Zealand';
  territoryTag: string;
  year: number;
  scope: string;
  heroImage: string;
  gallery: string[];
  description: string;
  architecturalChallenge: string;
  craftApproach: string;
  materials: string[];
  discretionNotice: string;
  details: {
    label: string;
    value: string;
  }[];
  founderNote?: string;
  representativeStatement?: {
    quote: string;
    designation: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'gulf-coastal-domain',
    title: 'The Gulf Coastline Domain & Sea Pavilion',
    subtitle: 'Marine Limestone Stabilization, Shaded Verandah & Acoustic Salon',
    region: 'Middle East & Arabian Gulf',
    territoryTag: 'Arabian Gulf Coastline',
    year: 2025,
    scope: 'Historic Stone Restoration & Salvaged Timber Fenestration',
    heroImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'Commissioned for a prominent family residence overlooking the waters of the Arabian Gulf. The undertaking required stabilizing century-old marine limestone walls damaged by relentless salinity and summer humidity cycles, while creating an expansive shaded reception gallery. All custom joinery was milled from our private reserves of seasoned New Zealand Heart Kauri—a dense timber naturally saturated with copal resins that will not warp under 48°C ambient heat.',
    architecturalChallenge: 'Extreme thermal and humidity differentials between chilled interior salons and searing coastal air, combined with the fragile nature of historic coral-lime mortars.',
    craftApproach: 'We avoided modern polyurethane sealants, utilizing breathable micro-lime grouts and traditional single-point floating tenons. Multi-layered sash frames were fitted with concealed vacuum-insulated glazing and hand-cast bronze pivots, allowing silent operation and absolute thermal insulation.',
    materials: [
      'Salvaged New Zealand Heart Kauri (Circa 1880)',
      'Honed Coral Limestone & Moleanos Slabs',
      'Architectural Cast Marine Bronze Fittings',
      'Hand-Rubbed Cold-Pressed Tung Oil'
    ],
    discretionNotice: 'Exact coastal location, family identity, and aerial photographs are strictly protected by bilateral non-disclosure agreement. Inquiries regarding structural methodologies may be directed to Arthur T.J Henderson.',
    details: [
      { label: 'Commission Typology', value: 'Private Coastal Estate & Majlis' },
      { label: 'Primary Timber', value: 'Old-Growth Heart Kauri (Resin-Dense)' },
      { label: 'Thermal Envelope', value: 'Concealed Vacuum-Decoupled Glazing' },
      { label: 'Craft Team', value: 'Permanent Workshop Joiners (Traveling)' },
      { label: 'Documentation Status', value: 'Redacted Monograph · Available by NDA' }
    ],
    founderNote: 'The coastal heat in the Gulf will split ordinary timber within one summer. We conditioned this timber stock through six intermediate relative-humidity chambers over eighteen months before a single mortise was assembled on-site.',
    representativeStatement: {
      quote: "Arthur T.J Henderson and his craftsmen worked on our family estate for twenty months with total silence and impeccable manners. The joinery carries a quiet, reassuring weight that cannot be bought in commercial showrooms.",
      designation: 'Private Office Trustee to the Family, Gulf Coast'
    }
  },
  {
    id: 'royal-mountain-compound-east-asia',
    title: 'The Forest Sanctuary & Cantilevered Pavilion',
    subtitle: 'Heritage Timber Post-and-Beam Repair & Hillside Glass Gallery',
    region: 'East Asia & Royal Domains',
    territoryTag: 'Sub-Alpine Foothills, East Asia',
    year: 2024,
    scope: 'Structural Joinery Restoration & Secluded Garden Extension',
    heroImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgRemuera,
      imgKauriCraft
    ],
    description: 'Set within an ancient cedar hillside for a distinguished regional household, this private mountain sanctuary required delicate structural intervention on historic timber columns that had experienced seismic movement over successive generations. Working in quiet consultation with local conservation masters, our carpenters introduced traditional blind scarf joints, seamlessly marrying the historic core to a contemporary 18-metre cantilevered glass gallery overlooking a protected moss garden.',
    architecturalChallenge: 'Transferring roof loads across an open 18-metre glass viewing span without introducing modern industrial columns that would compromise the quiet spiritual character of the garden.',
    craftApproach: 'We concealed high-tensile structural steel flitches inside hollowed cores of ancient salvaged timber posts. From the exterior, every column appears as uninterrupted, hand-planed native timber, retaining the warmth of traditional joinery while meeting rigorous seismic standards.',
    materials: [
      'Seasoned Hinoki & Salvaged Heart Kauri',
      'Hand-Forged Blackened Iron Brackets',
      'Low-Iron Laminated Architectural Glass',
      'Traditional Japanese Water-Stoned Joinery'
    ],
    discretionNotice: 'Due to royal protocol and strict family privacy covenants, all public registry coordinates are suppressed. In-person reviews of structural joinery details are conducted exclusively at our high-country workshop.',
    details: [
      { label: 'Commission Typology', value: 'Private Royal Mountain Compound' },
      { label: 'Structural Joinery', value: 'Concealed Steel-Flitched Timber Core' },
      { label: 'Garden Sightline', value: '18-Metre Uninterrupted Aperture' },
      { label: 'Principal Lead', value: 'Arthur T.J Henderson On-Site' },
      { label: 'Completion', value: 'Spring 2024' }
    ],
    founderNote: 'In traditional Asian carpentry, timber is treated with immense reverence. Marrying our New Zealand timber techniques with their four-hundred-year-old post-and-beam frame was a profound privilege for our team.',
    representativeStatement: {
      quote: "From our first private conversation, Henderson & Co. demonstrated an instinctive understanding of our need for seclusion. No cameras, no publicity, no intrusion—simply timeless craftsmanship.",
      designation: 'Chamberlain & Private Secretary, East Asia Domain'
    }
  },
  {
    id: 'desert-oasis-residence',
    title: 'The Courtyard Oasis & Sun-Lattice Pavilion',
    subtitle: 'Bespoke Timber Mashrabiya, Cooled Loggia & Private Library',
    region: 'Middle East & Arabian Gulf',
    territoryTag: 'Inland Oasis Domain, Arabian Peninsula',
    year: 2025,
    scope: 'Interior Architectural Joinery & Microclimate Fenestration',
    heroImage: imgKauriCraft,
    gallery: [
      imgKauriCraft,
      imgHerneBay,
      imgPonsonby
    ],
    description: 'A private interior retreat designed for an Emirati patron seeking quiet reading salons and acoustic isolation within a walled family oasis. The project centered on creating complex, three-dimensional geometric timber sun-screens (mashrabiya) and deep verandahs that channel prevailing breezes across sunken water rills, lowering ambient temperatures naturally.',
    architecturalChallenge: 'Preventing dust infiltration during seasonal sandstorms while allowing natural passive airflow during evening hours, all without visible mechanical seals.',
    craftApproach: 'We precision-milled interlocking timber lattice frames with hidden magnetic compression gaskets and multi-stage labyrinth air passages. The timber was finished with pure citrus-thinned organic oils, allowing the wood to radiate a subtle, natural fragrance under the heat of the sun.',
    materials: [
      'Dense New Zealand Heart Kauri & Mataī',
      'Chilled Oman Marble Flooring',
      'Concealed Neodymium Gasket Tracks',
      'Organic Linseed & Citrus Seed Polishes'
    ],
    discretionNotice: 'Identity of the patron and exact geographical location are confidential. Full architectural plates and joinery mock-ups may be reviewed under bilateral non-disclosure agreement.',
    details: [
      { label: 'Commission Typology', value: 'Private Walled Estate & Library' },
      { label: 'Joinery Element', value: 'Hand-Planed Interlocking Sun Screens' },
      { label: 'Environmental Design', value: 'Passive Breeze Induction & Dust Trap' },
      { label: 'Workshop Fabrication', value: 'Custom-Milled in New Zealand' },
      { label: 'Handover', value: 'Confidential Commission 2025' }
    ],
    founderNote: 'The geometry of traditional desert woodwork is mathematically brilliant. By marrying ancient geometric proportions with New Zealand timber stability, we created screens that close seamlessly without a whisper of sand passing through.',
    representativeStatement: {
      quote: "The quietness inside the library is absolute. When the doors latch shut, the outside desert world disappears entirely. Arthur T.J Henderson’s dedication to perfection is rare in modern construction.",
      designation: 'Advisor to the Patron, Private Office, Dubai'
    }
  },
  {
    id: 'mediterranean-sea-cliff-bastion',
    title: 'The Sea-Cliff Citadel & Terraced Loggia',
    subtitle: '19th-Century Stone Restoration, Heavy Louvres & Marine Joinery',
    region: 'Continental Europe',
    territoryTag: 'Secluded Mediterranean Promontory',
    year: 2024,
    scope: 'Historic Stone Bastion Conservation & Exterior Timberwork',
    heroImage: imgRemuera,
    gallery: [
      imgRemuera,
      imgKauriCraft,
      imgHerneBay
    ],
    description: 'Perched above a private cove on an isolated Mediterranean headland, this historic nineteenth-century fortified estate required comprehensive masonry conservation and custom timber casements. Over sixteen months, our traveling craftsmen stabilized salt-decayed sandstone lintels and crafted custom timber louvres from prehistoric Swamp Kauri logs carbon-dated to 45,000 years before present.',
    architecturalChallenge: 'Marine salt had corroded original iron anchor pins, cracking exterior stone pediments under seasonal storm swells.',
    craftApproach: 'Every iron fixing was surgically extracted and replaced with custom-cast architectural bronze anchors set in non-shrink volcanic pozzolana mortar. Heavy timber shutters were hung on hand-forged bronze pintles to ensure silent operation under coastal gale winds.',
    materials: [
      'Carbon-Dated Ancient Swamp Kauri (45,000 BP)',
      'Locally Quarried Travertine & Sandstone',
      'Cast Architectural Marine Bronze',
      'Natural Hydraulic Lime Mortars (NHL 2)'
    ],
    discretionNotice: 'Estate access is restricted to private maritime approach. All photographic documentation is catalogued in our private vault under strict non-disclosure covenants.',
    details: [
      { label: 'Commission Typology', value: 'Private Coastal Bastion Estate' },
      { label: 'Primary Material', value: 'Prehistoric Sub-Fossil Kauri' },
      { label: 'Stone Intervention', value: 'Reversible Pozzolanic Consolidation' },
      { label: 'Hardware Spec', value: 'Custom-Poured Architectural Bronze' },
      { label: 'Client Liaison', value: 'Geneva Legal Counsel' }
    ],
    founderNote: 'Working with Swamp Kauri that lay preserved in peat bogs since the last ice age gives you perspective. It has a rich, iridescent golden-brown luster that cannot be replicated by any modern wood.',
    representativeStatement: {
      quote: "Henderson & Co. came recommended to our family office by peers in Switzerland. Their team arrived without fanfare, lived on-site with total discretion, and produced work of museum standard.",
      designation: 'Family Office Director, Zurich & Monaco'
    }
  },
  {
    id: 'diplomatic-townhouse-archive',
    title: 'The Diplomatic Residence & Acoustic Salon',
    subtitle: 'Historical Parquet Conservation, Boiserie & Concealed Isolation',
    region: 'Continental Europe',
    territoryTag: 'Embassy Quarter, Central European Capital',
    year: 2023,
    scope: 'Historic Interior Conservation & Complete Acoustic Decoupling',
    heroImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'A confidential commission to restore formal salons and private meeting quarters within an 1890s historic residence. Scope included lifting and relaying 650 square metres of original quarter-sawn oak herringbone parquet, restoring delicate hand-carved boiserie wall paneling, and installing acoustic barriers to allow private consultations without sound transmission.',
    architecturalChallenge: 'Achieving acoustic seclusion within rooms featuring soaring four-metre heritage plaster ceilings without introducing unsightly dropped ceilings or modifying exterior wall thicknesses.',
    craftApproach: 'We designed decoupled sub-floor membranes using high-density natural acoustic wool and cork mats. Doors were rebuilt with concealed internal lead acoustic cores and automated drop-down perimeter seals, finished with hand-rubbed beeswax.',
    materials: [
      'Quarter-Sawn European White Oak',
      'Salvaged New Zealand Rimu Sub-Floors',
      'Concealed Acoustic Lead Decoupling Core',
      'Hand-Burnished Carnauba & Beeswax'
    ],
    discretionNotice: 'Property coordinates and owner identities are withheld under legal covenant. Consultations regarding confidential acoustic engineering may be requested through our Private Office.',
    details: [
      { label: 'Commission Typology', value: 'Private Residence & Council Chamber' },
      { label: 'Parquet Scope', value: '650m² Restored Historic Parquet' },
      { label: 'Acoustic Barrier', value: 'STC 54 Laboratory-Verified Sound Stop' },
      { label: 'Craft Lead', value: 'Arthur T.J Henderson & Senior Restorers' },
      { label: 'Referral Route', value: 'Private Diplomatic Counsel' }
    ],
    founderNote: 'When you close an acoustic door in this residence, it latches with the substantial, reassuring seal of a vault. You can conduct a private meeting while a dinner party takes place in the adjoining gallery in complete silence.',
    representativeStatement: {
      quote: "The discretion shown by Arthur T.J Henderson’s team was exemplary. They respected the sensitive nature of our household at every step, delivering timeless craftsmanship on schedule.",
      designation: 'Legal Counsel to the Principal, Geneva'
    }
  },
  {
    id: 'alpine-high-country-station',
    title: 'The High-Country Basin Homestead',
    subtitle: 'Glacial Schist Masonry, Timber Loggia & Subterranean Geothermal',
    region: 'Pacific & Alpine New Zealand',
    territoryTag: 'Secluded Alpine Valley, New Zealand',
    year: 2024,
    scope: 'Pioneer Stone Homestead Restoration & Year-Round Thermal Upgrade',
    heroImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgRemuera,
      imgKauriCraft
    ],
    description: 'Located in a remote high-country basin reachable only by private gravel road or chartered helicopter, this 1890s pioneer schist stone homestead was restored for an international family seeking an untraceable southern hemisphere refuge. Over twenty-two months, our team dismantled and rebuilt bowing stone gables, restored heavy timber ceilings, and engineered modern thermal efficiency without disturbing historic sash profiles.',
    architecturalChallenge: 'Extreme winter temperatures dropping to -16°C and severe sub-alpine wind gusts against original single-glazed sash windows and porous dry-stone masonry.',
    craftApproach: 'Every sash frame was rebuilt in our high-country workshop using salvage Heart Mataī, fitted with micro-brush draught seals and vacuum-insulated double glazing. Subterranean geothermal piping was integrated beneath restored timber floorboards.',
    materials: [
      'Glacial River Schist & Hand-Split Slate',
      'Salvaged Heart Mataī & Tōtara Timber',
      'Hand-Spun Architectural Copper Gutters',
      'Subterranean Geothermal Hydronic Loops'
    ],
    discretionNotice: 'The station is strictly private property in an unmarked alpine basin with no public right of way. Inquiries regarding our high-country restoration techniques are handled directly by Arthur T.J Henderson.',
    details: [
      { label: 'Commission Typology', value: 'Private High-Country Alpine Domain' },
      { label: 'Thermal Envelope', value: 'Sub-Zero Alpine Draft-Free Standard' },
      { label: 'Access Protocol', value: 'Private Station Airfield / Sealed Pass' },
      { label: 'Duration', value: '22 Months Continuous On-Site' },
      { label: 'Seclusion Level', value: 'Entire Basin Under Private Ownership' }
    ],
    founderNote: 'High-country weather will test any shortcut within forty-eight hours. Every joint was cut tight, glued with traditional waterproof resins, and pinned with seasoned hardwood trunnels.',
    representativeStatement: {
      quote: "We spent our first sub-zero winter with deep snow outside and warm, draft-free rooms inside. The woodwork feels as though it was built by master hands a century ago and cared for ever since.",
      designation: 'Family Office Trustee, High-Country Commission'
    }
  }
];

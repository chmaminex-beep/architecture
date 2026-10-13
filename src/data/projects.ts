import imgHerneBay from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import imgPonsonby from '../assets/images/project_ponsonby_extension_1791295645669.jpg';
import imgKauriCraft from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import imgRemuera from '../assets/images/project_remuera_residence_1791295667545.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  territory: string;
  regionCode: string;
  year: number;
  era: string;
  ndaStatus: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  specs: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'commission-gulf-sovereign',
    title: 'Sanctuary VII · Coastal Sovereign Compound',
    subtitle: 'Forensic Historical Stone Consolidation, Subterranean Vaults & Marine Timber Pavilion',
    classification: 'Sovereign Royal Household Commission',
    territory: 'Arabian Gulf / Middle East',
    regionCode: 'ME-SOV-07',
    year: 2025,
    era: 'Neo-Classical / Maritime Modernist (Private Estate)',
    ndaStatus: 'Perpetual Bilateral NDA · Redacted Exterior Coordinates',
    heroImage: imgHerneBay,
    beforeImage: imgKauriCraft,
    afterImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'An expansive private coastal compound commissioned by an Emirati royal family office. The mandate required stabilizing century-old maritime coral-stone masonry while integrating a subterranean climate-controlled rare art archive and a cantilevered titanium-reinforced native timber pavilion. All timber elements were hand-milled at our private New Zealand atelier, treated with museum-grade botanical resins, and air-freighted under diplomatic charter.',
    challenge: 'Extreme coastal saline exposure, desert thermal expansion cycles, and absolute zero-tolerance acoustic transmission between formal protocol reception salons and private family quarters.',
    solution: 'Designed concealed grade-316 structural titanium core framing encased in 140-year-old salvaged Heart Kauri and French White Oak; installed hermetic multi-pane acoustic vacuum glazing and subterranean seismic isolation.',
    materialsUsed: ['Museum-Grade Salvaged Heart Kauri', 'Honed Portuguese Moleanos Limestone', 'Titanium Core Tiebacks', 'Linseed-Wax Micro-Permeable Seals'],
    specs: [
      { label: 'Client Protocol', value: 'Sovereign Royal Commission (Classified)' },
      { label: 'Security Integration', value: 'Concealed Subterranean Vault & Ballistic Joinery' },
      { label: 'Acoustic Rating', value: 'STC 58 Acoustic Decoupling Throughout' },
      { label: 'Commission Scope', value: 'Primary Residence, Ocean Pavilion & Private Port' },
      { label: 'Full Dossier', value: 'Subject to Principal Clearance & Signed Mutual NDA' }
    ],
    testimonial: {
      quote: "Restorations by Henderson & Co. operates with an institutional discretion that is exceedingly rare in high architecture. Arthur Henderson and his craftsmen delivered unparalleled joinery standards under our family’s strictest confidentiality mandates.",
      author: 'Private Royal Affairs Emissary',
      location: 'Gulf Sovereign Estate'
    }
  },
  {
    id: 'commission-east-asia-imperial',
    title: 'The Imperial Pavilion & Courtyard Sanctuary',
    subtitle: 'Centuries-Old Architectural Woodwork Forensic Restoration & Floating Glazed Gallery',
    classification: 'Imperial & Sovereign Dynastic Estate',
    territory: 'East Asia (Private Domain)',
    regionCode: 'EA-DYNA-02',
    year: 2024,
    era: 'Historic Classical / Contemporary Glass Cantilever',
    ndaStatus: 'Strict Bilateral Non-Disclosure Covenant',
    heroImage: imgPonsonby,
    beforeImage: imgHerneBay,
    afterImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgRemuera,
      imgKauriCraft
    ],
    description: 'Situated within an untraceable mountain sanctuary in East Asia, this private dynastic estate balances ancient interlocking wooden mortise-and-tenon construction with a minimalist, seismically isolated 20-metre cantilevered glass pavilion. Our master joiners worked alongside imperial conservation specialists to repair irreplaceable heritage structural columns using secret traditional graving techniques.',
    challenge: 'Interfacing 18th-century hand-hewn structural timber with ultra-heavy 48mm triple-laminated switchable smart privacy glass without dropping intrusive vertical steel columns.',
    solution: 'Fabricated internal flitched carbon-fibre and Grade 350 steel structural plates concealed entirely within the heartwood columns, allowing the roof plane to appear completely weightless from the courtyard gardens.',
    materialsUsed: ['Ancient Salvaged Hinoki & Heart Kauri', 'Carbon-Fibre Structural Sleeves', 'Hand-Forged Bronze Pivot Hinges'],
    specs: [
      { label: 'Classification', value: 'Private Royal Dynasty Residence' },
      { label: 'Privacy Envelope', value: 'Electromagnetic & Acoustic Shielding' },
      { label: 'Structural Span', value: '20-Metre Uninterrupted Cantilever' },
      { label: 'Craft Execution', value: 'Hand-Planed Traditional Joinery by Arthur Henderson' },
      { label: 'Dossier Access', value: 'Inquire with Managing Principal via Private Office' }
    ],
    testimonial: {
      quote: "The seamless discretion with which Arthur Henderson handled our compound was exceptional. No member of the public, media, or regional authorities was aware of the extent of works during the entire 22-month restoration.",
      author: 'Senior Trustee, Private Family Office',
      location: 'East Asia Sovereign Compound'
    }
  },
  {
    id: 'commission-southern-alps-citadel',
    title: 'The Alpine High-Country Redoubt',
    subtitle: 'High-Secrecy Seismic Mountain Estate, Vaulted Timber Loggia & Thermal Envelope',
    classification: 'Global Private Family Office Sanctuary',
    territory: 'Southern Ridges / New Zealand (Coordinates Redacted)',
    regionCode: 'NZ-ALP-09',
    year: 2024,
    era: 'Rugged Alpine / Minimalist Stone & Kauri Masterpiece',
    ndaStatus: 'Protected under Encrypted Security Protocol',
    heroImage: imgRemuera,
    beforeImage: imgKauriCraft,
    afterImage: imgRemuera,
    gallery: [
      imgRemuera,
      imgKauriCraft,
      imgHerneBay
    ],
    description: 'Carved into an inaccessible alpine ridge in the high country of the Southern Lakes, this retreat was commissioned as a multi-generational sovereign sanctuary for an international tech dynasty. Featuring self-sustaining geothermal heating, hidden blast-rated structural joinery, and an extraordinary 400m² grand hall built from reclaimed 1890s New Zealand Heart Kauri and schist stonework.',
    challenge: 'Severe sub-zero weather cycles, 100-year seismic resilience compliance, and strict requirement that the property remain invisible from all civil flight paths and satellite optical grids.',
    solution: 'Engineered subterranean living spaces with extensive green roof turf integration; hand-fitted oversized sash apertures equipped with multi-layered vacuum thermal glass and hidden mechanical security shutters.',
    materialsUsed: ['Local Basalt & Glacial Schist', 'Old-Growth Reclaimed Native Kauri', 'Swiss Marine Hardware'],
    specs: [
      { label: 'Estate Nature', value: 'Self-Sustaining Alpine Sanctuary & Vault' },
      { label: 'Seismic Rating', value: 'IL4 Critical Infrastructure Standard' },
      { label: 'Logistics', value: 'Undisclosed Air-Lift & Sealed Ground Transport' },
      { label: 'Discretion Tier', value: 'Level 5 Confidentiality Covenant' },
      { label: 'Inquiry Pathway', value: 'Direct Administrative Submission Required' }
    ],
    testimonial: {
      quote: "When working at this tier of global net worth, discretion is not a luxury—it is existential. Restorations by Henderson & Co. demonstrated unwavering security protocol from initial briefing to final handover.",
      author: 'Executive Director, Zurich Asset Trust',
      location: 'Alpine Estate Sanctuary'
    }
  },
  {
    id: 'commission-mediterranean-citadel',
    title: 'Citadel Enclave · Private Mediterranean Peninsula',
    subtitle: 'Historic 19th-Century Coastal Fortification Restoration & Subterranean Marine Anchorage',
    classification: 'Private Dynasty Maritime Compound',
    territory: 'Mediterranean Coast (Confidential)',
    regionCode: 'MED-PEN-04',
    year: 2025,
    era: 'Maritime Heritage Citadel (c. 1888) / Modern Living',
    ndaStatus: 'Strict NDA · Coordinates Protected Under Sovereign Decree',
    heroImage: imgKauriCraft,
    gallery: [
      imgKauriCraft,
      imgHerneBay,
      imgPonsonby
    ],
    description: 'A classified historic coastal stronghold transformed into a state-of-the-art multi-dwelling private haven. Our team restored delicate 130-year-old timber ceiling coffering, replicated traditional hand-sculpted cornicing, and engineered invisible acoustic sliding walls that transform the main sea-facing reception halls into fortified safe zones.',
    challenge: 'Century-old maritime salt decay within historical load-bearing arches, combined with intense security mandates from international private protective details.',
    solution: 'Structural consolidation utilizing reversible resin injection techniques, preservation of exterior historical silhouettes, and fabrication of custom bullet-resistant timber sashes with historical putty profiles.',
    materialsUsed: ['Salvaged Virgin Kauri', 'Quarried Mediterranean Travertine', 'Unlacquered Marine Bronze'],
    specs: [
      { label: 'Site Classification', value: 'Maritime Fortress & Private Mooring' },
      { label: 'Ballistic Rating', value: 'Concealed BR4 Architectural Fenestration' },
      { label: 'Ceiling Span', value: '4.2-Metre Restored Coffered Volumes' },
      { label: 'Project Secrecy', value: 'Zero Public Disclosure Covenant' },
      { label: 'Vetting Protocol', value: 'Inquire with Principal Office' }
    ],
    testimonial: {
      quote: "Arthur Henderson’s team accomplished what European heritage firms insisted was impossible: full ballistic and acoustic security within a Grade-A historical structure without altering a single period moulding.",
      author: 'Chief of Security, Private Family Office',
      location: 'Mediterranean Peninsula'
    }
  },
  {
    id: 'commission-central-european-chancery',
    title: 'The Diplomatic Palais & Heritage Archive',
    subtitle: '19th-Century Stucco & Parquet Restoration with Classified High-Security Salon',
    classification: 'Sovereign Diplomatic & Dynasty Residence',
    territory: 'Central European Capital (Private Enclave)',
    regionCode: 'EU-DIP-01',
    year: 2023,
    era: 'Late Imperial (c. 1895)',
    ndaStatus: 'Classified Sovereign Treaty Level · Zero Public Disclosure',
    heroImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'A confidential grand residence housing priceless cultural archives and private treaty rooms. Restorations by Henderson & Co. oversaw the forensic chemical stripping and restoration of 800m² of original quarter-sawn chevron oak parquet, gilded boiserie wall paneling, and hand-carved heritage casements.',
    challenge: 'Water degradation from centuries of freeze-thaw cycles and the requirement to conceal advanced biometric access hardware inside 1890s boiserie panelling.',
    solution: 'Installed electromagnetic concealed hinges and hidden motorized wall reveals behind restored antique paneling; matched historical beeswax finishes to undetectable perfection.',
    materialsUsed: ['French Quarter-Sawn Oak', 'Gold Leaf (24K)', 'Heart Rimu Sub-Floors'],
    specs: [
      { label: 'Property Typology', value: 'Private Historical Palais & Protocol Suites' },
      { label: 'Historical Period', value: 'Late 19th-Century European Imperial' },
      { label: 'Archive Security', value: 'Climate-Sealed & EMP Shielded Rooms' },
      { label: 'Duration', value: '26 Months On-Site' },
      { label: 'Full Documentation', value: 'Restricted under Bilateral Confidentiality' }
    ],
    testimonial: {
      quote: "The level of discretion exhibited by Arthur Henderson’s team is why sovereign institutions repeatedly entrust them with historical properties of immense cultural sensitivity.",
      author: 'Counsel to the Royal Household',
      location: 'Central European Enclave'
    }
  },
  {
    id: 'commission-oceania-atoll',
    title: 'The Ridge Atoll Sanctuary',
    subtitle: 'Private Island Residence, Deep-Water Pavilion & Timber Architectural Enclave',
    classification: 'Private Ultra-HNW Island Compound',
    territory: 'Pacific Ocean / Private Domain',
    regionCode: 'OC-ISL-11',
    year: 2024,
    era: 'Colonial Maritime Heritage & Tropical Modernism',
    ndaStatus: 'Bilateral Family Office Covenant · Sealed Flight Data',
    heroImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgKauriCraft
    ],
    description: 'An exclusive oceanfront estate perched above a private cove. Henderson & Co. fabricated and air-lifted 45 tonnes of custom joinery, reconstructed expansive return verandas to withstand Category 5 cyclonic winds, and restored the original colonial residence with zero disruption to the client’s private flight schedule.',
    challenge: 'Remote logistics with zero civil access roads, extreme tropical humidity, and complete ban on external contractors or media presence.',
    solution: 'Pre-machined all heritage components to 0.1mm tolerance inside our remote New Zealand workshop; dispatched an elite, security-vetted installation crew of master carpenters under encrypted operational protocols.',
    materialsUsed: ['Ancient Swamp Kauri', 'Marine 316 Stainless Concealed Fixings', 'Burmese Teak Decking'],
    specs: [
      { label: 'Location Privacy', value: 'Private Atoll (Strict Flight Restriction)' },
      { label: 'Structural Rating', value: 'Category 5 Cyclonic & Wave-Surge Certified' },
      { label: 'Artisanal Origin', value: 'Handcrafted at Henderson & Co. Atelier NZ' },
      { label: 'Client Protection', value: 'Permanent Anonymity Guarantee' },
      { label: 'Consultation', value: 'Direct Communication with Arthur Henderson' }
    ],
    testimonial: {
      quote: "Henderson & Co. delivered absolute perfection in one of the most logistically unforgiving environments on earth. Their privacy policy is ironclad. We cannot recommend them highly enough.",
      author: 'Private Representative, Global Family Office',
      location: 'Pacific Island Sanctuary'
    }
  }
];

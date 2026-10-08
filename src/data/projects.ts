import imgHerneBay from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import imgPonsonby from '../assets/images/project_ponsonby_extension_1791295645669.jpg';
import imgKauriCraft from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import imgRemuera from '../assets/images/project_remuera_residence_1791295667545.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'heritage-villa' | 'luxury-renovation' | 'edwardian-bungalow' | 'bespoke-joinery';
  categoryLabel: string;
  suburb: string;
  region: string;
  year: number;
  era: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  timbersUsed: string[];
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
    id: 'herne-bay-grand-villa',
    title: 'The Marine Parade Villa',
    subtitle: 'Comprehensive 1898 Victorian Villa Restoration & Coastal Grounds',
    category: 'heritage-villa',
    categoryLabel: 'Heritage Villa',
    suburb: 'Herne Bay',
    region: 'Auckland',
    year: 2024,
    era: 'Victorian (c. 1898)',
    heroImage: imgHerneBay,
    beforeImage: imgKauriCraft,
    afterImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'Perched on the northern ridge of Herne Bay, this double-bay Victorian residence suffered from a century of salt air degradation, compromised foundation piles, and unsympathetic 1970s modifications. Over 18 months, our team undertook a forensic restoration of the original Heart Kauri exterior, replicated hand-turned veranda lace fretwork, and restored the original 3.6-metre pressed-metal ceilings.',
    challenge: 'Decayed veranda posts, severe rot in the southern sash frames, and unlevel sub-floor structures over volcanic clay.',
    solution: 'Engineered steel sub-floor levelling, forensic timber consolidation with maritime epoxies, and 100% reproduction of missing balusters using old-growth salvage kauri.',
    timbersUsed: ['Old-Growth Heart Kauri', 'Mataī Flooring', 'New Zealand Tōtara Exterior Sills'],
    specs: [
      { label: 'Architectural Style', value: 'Double-Bay Victorian Villa' },
      { label: 'Council Protection', value: 'Special Character Area Overlay (Auckland Council)' },
      { label: 'Ceiling Height', value: '3.65 metres' },
      { label: 'Duration', value: '18 Months' },
      { label: 'Joinery Profile', value: 'Bespoke 1890 Ogee Mouldings' }
    ],
    testimonial: {
      quote: "Arthur Henderson's encyclopedic knowledge of Auckland villa construction saved this house. He did not cut a single corner. The sash windows now glide with counterweighted ease, and the fretwork is a genuine work of art.",
      author: 'Marcus & Eleanor Vance',
      location: 'Marine Parade, Herne Bay'
    }
  },
  {
    id: 'ponsonby-contemporary-pavilion',
    title: 'Ponsonby Street Pavilion',
    subtitle: '1905 Heritage Villa Transformation with Cantilevered Glass Pavilion',
    category: 'luxury-renovation',
    categoryLabel: 'Luxury Renovation',
    suburb: 'Ponsonby',
    region: 'Auckland',
    year: 2025,
    era: 'Late Victorian / Modern (1905 / 2025)',
    heroImage: imgPonsonby,
    beforeImage: imgHerneBay,
    afterImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgRemuera,
      imgKauriCraft
    ],
    description: 'A celebrated study in contrast: an impeccably restored street-facing Victorian facade that transitions through an acoustically isolated gallery hallway into an airy 140m² steel, travertine, and cedar open-plan pavilion. The rear opens completely via motorised acoustic glass pockets to an infinity plunge pool and sheltered outdoor kitchen.',
    challenge: 'Preserving the strict streetscape heritage fabric required by Auckland Council while trenching a 4.2-metre deep subterranean cellar and installing 12-metre continuous steel beams.',
    solution: 'Designed and installed a concealed seismic portal frame within the original kauri framing cavity, ensuring zero visual disruption to the 1905 front rooms while floating the open rear ceiling.',
    timbersUsed: ['Heart Rimu Architraves', 'Western Red Cedar Battens', 'Hand-Scraped White Oak'],
    specs: [
      { label: 'Architectural Style', value: 'Heritage Front / Modernist Pavilion' },
      { label: 'Floor Area', value: '345 m²' },
      { label: 'Glazing System', value: 'Minimalist Thermally-Broken Cavity Sliders' },
      { label: 'Cellar Capacity', value: '1,200 Bottles (Climate-Controlled)' },
      { label: 'Duration', value: '14 Months' }
    ],
    testimonial: {
      quote: "The seamless threshold between our 120-year-old front bedrooms and the new light-filled living pavilion still leaves our guests speechless. Arthur and his team are architects at heart who happen to be master builders.",
      author: 'Dr. Alistair & Clare Thorne',
      location: 'Wood Street, Ponsonby'
    }
  },
  {
    id: 'remuera-edwardian-estate',
    title: 'The Victoria Avenue Residence',
    subtitle: 'Edwardian Arts & Crafts Estate Interior Restoration & Marble Kitchen',
    category: 'luxury-renovation',
    categoryLabel: 'Luxury Renovation',
    suburb: 'Remuera',
    region: 'Auckland',
    year: 2024,
    era: 'Edwardian (c. 1912)',
    heroImage: imgRemuera,
    beforeImage: imgKauriCraft,
    afterImage: imgRemuera,
    gallery: [
      imgRemuera,
      imgKauriCraft,
      imgHerneBay
    ],
    description: 'An expansive 5-bedroom Edwardian residence set on a private Remuera half-acre. Our team restored the intricate pressed-tin ceiling panels, reinstated traditional quarter-sawn chevron parquet flooring, and crafted custom furniture-grade cabinetry with hand-honed Calacatta Oro marble surfaces.',
    challenge: 'Water damage to original fibrous plaster cornices and heavily painted over native timber panelling.',
    solution: 'Took silicon impressions of surviving 1912 plasterwork to cast authentic replacements; used zero-residue chemical stripping to reveal the warm grain of virgin heart rimu.',
    timbersUsed: ['Heart Rimu Panelling', 'French Oak Chevron Parquet', 'Solid American Walnut Joinery'],
    specs: [
      { label: 'Architectural Style', value: 'Edwardian Arts & Crafts' },
      { label: 'Stone Sourced', value: 'Calacatta Oro Marble (Carrara, Italy)' },
      { label: 'Ceiling Finish', value: 'Restored Hand-Pressed Tin' },
      { label: 'Joinery Hardware', value: 'Unlacquered Living English Brass' },
      { label: 'Duration', value: '16 Months' }
    ],
    testimonial: {
      quote: "Restorations by Henderson & Co. brought dignity and quiet opulence back to our family home. Their joiners are true artists. When you run your hand along the staircase newel post, you can feel 20 years of craftsmanship in every radius.",
      author: 'Hamish & Sophie Kensington',
      location: 'Victoria Avenue, Remuera'
    }
  },
  {
    id: 'grey-lynn-artisan-joinery',
    title: 'Richmond Road Sash & Fretwork',
    subtitle: 'Bespoke Timber Joinery, Traditional Sashes & Double Glazed Retrofit',
    category: 'bespoke-joinery',
    categoryLabel: 'Bespoke Joinery',
    suburb: 'Grey Lynn',
    region: 'Auckland',
    year: 2025,
    era: 'Victorian Single Bay (c. 1902)',
    heroImage: imgKauriCraft,
    gallery: [
      imgKauriCraft,
      imgHerneBay,
      imgPonsonby
    ],
    description: 'A specialised project focusing purely on architectural fenestration and precision joinery. We removed, disassembled, and restored 26 original double-hung sash windows. Using our bespoke slimline vacuum-glazed double-glazing technology, we achieved modern thermal R-values while retaining the exact 1902 putty sightlines and counterweight balance.',
    challenge: 'Integrating acoustic and thermal double glazing without fattening the delicate 18mm sash glazing bars.',
    solution: 'Precision CNC-milled 8.3mm LandVac vacuum glazing units fitted into authentic heart kauri sashes, complemented by cast-lead counterbalance weights.',
    timbersUsed: ['Salvaged Northland Kauri', 'Old Growth Tōtara'],
    specs: [
      { label: 'Sash Windows Restored', value: '26 Units' },
      { label: 'Acoustic Reduction', value: '38 dB Noise Attenuation' },
      { label: 'Glazing Tech', value: 'Vacuum Insulated Heritage Slimline' },
      { label: 'Hardware', value: 'Solid Cast Brass Fitch Fasteners' },
      { label: 'Duration', value: '5 Months' }
    ],
    testimonial: {
      quote: "Our home is now whisper quiet and holds heat all winter, yet from the street it looks untouched since 1902. Arthur Henderson's custom joinery solution is unmatched in Auckland.",
      author: 'Geoffrey & Rachel Boyd',
      location: 'Richmond Road, Grey Lynn'
    }
  },
  {
    id: 'mount-eden-bungalow',
    title: 'The Valley Road Heritage Bungalow',
    subtitle: 'Authentic 1920s California-Style Bungalow Structural Restoration',
    category: 'edwardian-bungalow',
    categoryLabel: 'Bungalow & Arts/Crafts',
    suburb: 'Mount Eden',
    region: 'Auckland',
    year: 2023,
    era: 'California Bungalow (c. 1922)',
    heroImage: imgHerneBay,
    gallery: [
      imgHerneBay,
      imgKauriCraft,
      imgRemuera
    ],
    description: 'A classic Auckland California Bungalow set at the foot of Maungawhau / Mount Eden. We restored the distinctive river-stone porch pillars, exposed Oregon timber rafters, and leadlight bay windows. The rear was opened to create an expansive indoor-outdoor covered loggia overlooking established native pōhutukawa trees.',
    challenge: 'Cracked volcanic basalt stonework and rotted barge boards beneath historic lead light casements.',
    solution: 'Sourced matching heritage basalt from local quarry reserves, stabilized stonework with lime-mortar pointing, and hand-cut cedar bargeboards.',
    timbersUsed: ['Douglas Fir (Oregon)', 'Heart Mataī', 'Western Red Cedar'],
    specs: [
      { label: 'Architectural Style', value: 'Transitional California Bungalow' },
      { label: 'Heritage Stonework', value: 'Volcanic Basalt Porch Restoration' },
      { label: 'Leadlight Panels', value: '18 Authentic Stained Panels Restored' },
      { label: 'Duration', value: '11 Months' }
    ],
    testimonial: {
      quote: "Arthur Henderson understands the soul of Auckland timber architecture. He guided us through resource consent smoothly and completed the restoration with surgical precision.",
      author: 'David & Natasha Cole',
      location: 'Valley Road, Mount Eden'
    }
  },
  {
    id: 'devonport-waterfront-homestead',
    title: 'King Edward Parade Maritime Villa',
    subtitle: 'North Shore Waterfront Villa Seismic Reinforcement & Veranda Rebuild',
    category: 'heritage-villa',
    categoryLabel: 'Heritage Villa',
    suburb: 'Devonport',
    region: 'Auckland',
    year: 2024,
    era: 'Late Victorian (c. 1894)',
    heroImage: imgPonsonby,
    gallery: [
      imgPonsonby,
      imgKauriCraft
    ],
    description: 'Directly overlooking Waitematā Harbour, this iconic Devonport landmark required extensive seismic underpinning and full marine-grade weatherproofing. We reconstructed the two-tier wrap-around return veranda, replicated intricate cast-iron corbels, and modernized the thermal envelope to endure maritime gales.',
    challenge: 'Intense coastal salt-spray corrosion and Category 2 Heritage New Zealand oversight.',
    solution: 'Grade 316 stainless steel concealed fixings, hand-sanded micro-porous linseed oil paint system, and seismic diaphragm bracing hidden within ceiling cavities.',
    timbersUsed: ['Heart Kauri Weatherboards', 'Puriri Foundation Blocks', 'Jarrah Decking'],
    specs: [
      { label: 'Heritage Status', value: 'Heritage NZ Pouhere Taonga Category 2' },
      { label: 'Veranda Area', value: '88 m² Return Veranda' },
      { label: 'Fixings Grade', value: '316 Marine Stainless Steel' },
      { label: 'Duration', value: '20 Months' }
    ],
    testimonial: {
      quote: "Watching Henderson & Co.'s carpenters hand-scribe the replacement veranda brackets to match the 1894 originals was a masterclass. Our home is secured for the next 150 years.",
      author: 'Richard & Penelope Sinclair',
      location: 'King Edward Parade, Devonport'
    }
  }
];

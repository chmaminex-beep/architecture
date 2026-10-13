import imgKauriCraft from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import imgPonsonby from '../assets/images/project_ponsonby_extension_1791295645669.jpg';
import imgHerneBay from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import imgRemuera from '../assets/images/project_remuera_residence_1791295667545.jpg';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  category: 'Discretion & Security' | 'Sovereign Architecture' | 'Ancient Materials' | 'Private Estates' | 'Acoustic Science';
  author: {
    name: string;
    role: string;
  };
  heroImage: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string;
      craftsmanTip?: string;
    }[];
    takeaways: string[];
  };
}

export const ARTICLES: Article[] = [
  {
    id: 'architecture-of-discretion-sovereign-security',
    title: 'The Architecture of Discretion: Concealing Ballistic Security & Seismic Portals Within Historical Heritage Envelopes',
    excerpt: 'High-profile dynasties, royal households, and sovereign clients require impenetrable personal safety without sacrificing centuries of architectural provenance. Here is how our studio engineers hidden security systems into antique boiserie, sash windows, and stone façades.',
    readTime: '7 min monograph',
    publishDate: 'Monograph 29',
    category: 'Discretion & Security',
    author: {
      name: 'Arthur (Todd James) Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgKauriCraft,
    content: {
      lead: 'When executing a multi-million-dollar restoration for a head of state, sovereign royal family, or private dynastic estate, the aesthetic brief is only half the equation. The invisible brief is total, uncompromising personal security. Conventional security retrofits disfigure historic mouldings with crude armour plates and visible cameras. Our practice specializes in the invisible integration of ballistic, acoustic, and seismic fortification behind authentic nineteenth-century joinery.',
      sections: [
        {
          heading: '1. Stealth Ballistic Fenestration Behind Authentic Putty Sightlines',
          body: 'Traditional double-hung sash windows and French casements are the most vulnerable perimeter points on any estate. Rather than replacing delicate timber stiles with bulky bullet-proof frames that broadcast security measures to the outside world, we mill custom composite sashes. Inside the hollow core of salvaged 130-year-old Heart Kauri, we laminate lightweight Dyneema and ceramic ballistic sheets capable of withstanding high-powered rifle rounds, paired with multi-ply vacuum-laminated ballistic glass that preserves historical 45-degree putty sightlines.',
          craftsmanTip: 'Arthur Henderson’s Discretion Rule: A security measure is only truly effective when it is completely indistinguishable from 1890s craftsmanship. Visible armour is an architectural and tactical failure.'
        },
        {
          heading: '2. Electromagnetic (EMP) Shielding Within Antique Boiserie',
          body: 'For private protocol reception rooms and family financial archives, electronic eavesdropping and EMP threats require radio-frequency attenuation. Beneath hand-waxed French walnut or native rimu wall panels, our joiners install continuous, micro-ground copper mesh slip-diaphragms. The resulting Faraday enclosure prevents signal leakage while remaining completely imperceptible to guests and dignitaries.',
          craftsmanTip: 'Movement joints must maintain uninterrupted electrical conductivity. We utilize spring-loaded beryllium-copper contact fingers hidden behind historic skirting boards to absorb structural building settling without breaking the RF shield.'
        },
        {
          heading: '3. Hidden Mechanical Retreat Portals in Reclaimed Timber Frameworks',
          body: 'Within large sovereign estates, concealed safe rooms and emergency exits are engineered directly into the joinery. By counterweighting 800-kilogram steel-reinforced bookshelves using silent hydraulic counterweights and electromagnetic deadbolts hidden in timber mouldings, a room can be sealed in under 1.8 seconds with a biometric gesture or encrypted remote command.'
        }
      ],
      takeaways: [
        'Sovereign security must remain completely invisible from both interior salons and exterior sightlines.',
        'Composite wood-ballistic sash joinery maintains period profiles while stopping high-caliber rounds.',
        'Faraday shielding is seamlessly integrated behind restored antique timber boiserie panels.',
        'All client security specifications remain encrypted under permanent bilateral non-disclosure agreements.'
      ]
    }
  },
  {
    id: 'ancient-timber-reserves-swamp-kauri',
    title: 'Ancient Timber Reserves: Sourcing 45,000-Year-Old Pre-Glacial Swamp Kauri for Sovereign Dynasties',
    excerpt: 'Deep in the peat bogs of New Zealand’s remote Northland lie colossal trees preserved since before the last Ice Age. How Henderson & Co. harvests, cures, and crafts this rarest of biological treasures for royal and private estates globally.',
    readTime: '8 min monograph',
    publishDate: 'Monograph 28',
    category: 'Ancient Materials',
    author: {
      name: 'Arthur (Todd James) Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgPonsonby,
    content: {
      lead: 'For the world’s most discerning collectors and royal dynasties, standard luxury materials such as marble and plantation hardwoods are commonplace. True architectural distinction lies in materials with irreplaceable geological provenance. At our remote atelier, we maintain the world’s most extensive private reserve of carbon-dated Ancient Swamp Kauri—timber that fell between 30,000 and 50,000 years ago.',
      sections: [
        {
          heading: '1. Radiocarbon Provenance and Cellular Iridescence',
          body: 'Buried in anoxic peat bogs through geological upheavals, this ancient wood underwent no decay. As iron and mineral salts permeated the cell walls, the grain developed a holographic optical phenomenon known as chatoyancy. When illuminated by natural light, the surface of a finished Henderson boardroom table or salon wall panel shimmers with undulating golden amber fire that no synthetic finish or young wood can ever replicate.',
          craftsmanTip: 'Arthur Henderson’s Material Mandate: Every specimen of ancient timber allocated to a client commission is accompanied by an authenticated accelerator mass spectrometry (AMS) radiocarbon certificate from the University of Waikato Radiocarbon Dating Laboratory.'
        },
        {
          heading: '2. The 36-Month Decompression Curing Protocol',
          body: 'Extracting a 40-tonne ancient log from saturated sub-surface clay requires surgical patience. Rapid kiln drying causes severe cellular collapse. We stage all logs through our humidity-controlled curing vault over three full years, gradually displacing deep subterranean moisture with natural pine terpenes and organic tung oils.',
          craftsmanTip: 'Never rush ancient timber into dry desert climates (e.g. Gulf estates) without gradual micro-climate acclimatization crates designed by our logistics team.'
        }
      ],
      takeaways: [
        'Ancient Swamp Kauri possesses natural chatoyance and geological provenance dating back 45,000 years.',
        'Sovereign commissions receive authenticated radiocarbon dating certificates for estate archives.',
        'A 3-year specialized curing protocol guarantees dimensional stability in international climates.',
        'All timber movements are executed through private diplomatic shipping channels.'
      ]
    }
  },
  {
    id: 'bilateral-nda-policy-privacy-mandates',
    title: 'The Bilateral Non-Disclosure Covenant: Why Henderson & Co. Has Maintained an Unblemished Privacy Record Since 1997',
    excerpt: 'A detailed look at the legal and physical protocols that govern our workshop, on-site personnel, supply chains, and photographic archives when working for sovereign royalty and high-profile individuals worldwide.',
    readTime: '6 min monograph',
    publishDate: 'Monograph 27',
    category: 'Discretion & Security',
    author: {
      name: 'Arthur (Todd James) Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgHerneBay,
    content: {
      lead: 'In the high-profile architectural restoration market, the greatest risk to a family office or sovereign royal house is exposure. A single contractor sharing a geo-tagged social media post or floorplan drawing can compromise perimeter security and family privacy for generations. Since our founding in 1997, Restorations by Henderson & Co. has operated with a flawless zero-leak confidentiality record.',
      sections: [
        {
          heading: '1. The Four-Tier Confidentiality Protocol',
          body: 'Every member of our workshop, from master carpenters to transport logistics directors, is bound by international multi-jurisdictional NDAs with severe liquidated damage covenants. Mobile phones and recording devices are strictly prohibited across all workshop floors and client estates. Component parts are manufactured under encrypted numerical designations (e.g., "Project Sanctuary VII") rather than client names or identifiable coordinates.',
          craftsmanTip: 'Arthur Henderson’s Administrative Standard: No third-party sub-contractors are ever permitted on-site. All works are performed exclusively by vetted, permanent in-house craftsmen who have served with the firm for a minimum of seven years.'
        },
        {
          heading: '2. Secure Digital Air-Gapping and Encrypted Communications',
          body: 'Architectural schematics, structural engineering models, and client communication channels are hosted on sovereign air-gapped servers with zero connection to commercial cloud environments. Client consultations are conducted exclusively via signal-encrypted protocols or in-person diplomatic rendezvous.',
          craftsmanTip: 'Upon commission completion, all temporary physical mock-ups, digital fabrication code, and off-cut stamps are incinerated or returned to the client’s family office archivist under witnessed chain of custody.'
        }
      ],
      takeaways: [
        'Multi-jurisdictional bilateral NDAs protect all client identities and physical coordinates.',
        'All architectural models and communications remain strictly air-gapped from commercial clouds.',
        'Zero subcontractors: 100% in-house vetted craftsmen with security clearances.',
        'Physical disposal covenants ensure no off-cut or blueprint ever leaves client custody.'
      ]
    }
  },
  {
    id: 'acoustic-isolation-private-residences',
    title: 'Acoustic Decoupling in Sovereign Sanctuaries: Decibel Attenuation Across Grand Historical Spaces',
    excerpt: 'How our master joiners achieve recording-studio-grade acoustic privacy within expansive heritage parlours, treaty rooms, and private family compounds.',
    readTime: '5 min monograph',
    publishDate: 'Monograph 26',
    category: 'Acoustic Science',
    author: {
      name: 'Arthur (Todd James) Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgRemuera,
    content: {
      lead: 'High-profile diplomacy and private estate living demand absolute acoustic privacy. A private conversation held in a state room must remain inaudible to staff, security personnel, or adjoining suites. Achieving STC 58+ acoustic ratings while preserving ornate plaster cornicing, high ceilings, and heritage parquet floors requires advanced physics married to traditional joinery.',
      sections: [
        {
          heading: '1. The Floating Floor System Over Historic Joists',
          body: 'To eliminate footfall transmission and structural vibration, we construct floating sub-floor diaphragms using high-density elastomeric acoustic pucks. Upon this isolated substructure, original 130-year-old tongue-and-groove boards are reinstalled using concealed brass cleats, ensuring authentic tactile creak-free silence.',
          craftsmanTip: 'Arthur Henderson’s Acoustic Rule: Never decouple the floor without also isolating the wall perimeter. A 2mm gap against the baseboard will leak 80% of acoustic energy.'
        },
        {
          heading: '2. Bespoke Acoustic Heritage Doors with Concealed Drop Seals',
          body: 'Historic panelled doors are notoriously porous to speech. We mill solid multi-layered core doors with interior lead and viscoelastic damping sheets, faced on both sides with authentic 19th-century timber veneer. Concealed mechanical drop seals deploy silently into the threshold when the door latches, creating a hermetic acoustic seal.'
        }
      ],
      takeaways: [
        'Acoustic decoupling achieves STC 58+ privacy without altering historical visual profiles.',
        'Floating sub-floor assemblies eliminate footfall vibration across antique parquet.',
        'Bespoke composite lead-core timber doors provide hermetic acoustic containment.'
      ]
    }
  }
];

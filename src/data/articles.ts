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
  category: 'Timber Science' | 'Modern Additions' | 'Joinery Craft' | 'Heritage Consents' | 'Structural Engineering';
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
    id: 'restoring-120-year-old-kauri',
    title: 'Restoring 120-Year-Old Heart Kauri: Moisture Equilibriums & Biological Consolidation',
    excerpt: 'Old-growth Agathis australis (New Zealand Heart Kauri) possesses a resinous density unseen in modern plantation timber. Here is how our joinery workshop restores historical floorboards and weatherboards to endure another century.',
    readTime: '6 min read',
    publishDate: 'August 2025',
    category: 'Timber Science',
    author: {
      name: 'Todd Macpherson',
      role: 'Founder & Master Craftsman'
    },
    heroImage: imgKauriCraft,
    content: {
      lead: 'When early Auckland carpenters erected villas across Ponsonby, Parnell, and Devonport in the late nineteenth century, virgin Northland Heart Kauri was their structural cornerstone. Dense, naturally saturated with dammar-like resins, and capable of spanning four metres without deflection, kauri is an irreplaceable architectural treasure.',
      sections: [
        {
          heading: '1. Why Modern Timber Treatments Fail Historical Kauri',
          body: 'Many well-intentioned contractors treat century-old kauri as if it were modern kiln-dried radiata pine. Applying impervious polyurethane or film-forming acrylic primers locks subterranean ground humidity inside the cellular structure. Over 2 to 5 Auckland winters, moisture accumulation fosters dry rot (Serpula lacrymans) beneath an outwardly pristine veneer. Our workshop strictly utilizes micro-porous boiled linseed oils, natural citrus terpene thinners, and breathable zinc-oxide linseed paints that allow the wood to breathe in harmony with Auckland’s maritime humidity.',
          craftsmanTip: 'Always measure timber equilibrium moisture content with pinless capacitance probes before undertaking mechanical sanding. If internal relative humidity exceeds 14%, forced dehumidification must precede any finish application.'
        },
        {
          heading: '2. Dutchmen Inlays and Forensic Consolidation',
          body: 'Where rot or mechanical trauma has degraded an original sill or verandah baluster, we never remove sound historic wood. We hand-chisel the decayed sector back to virgin heartwood, stabilize the fungal margins with borate salts, and hand-fit a Dutchmen inlay (graving piece) harvested from our temperature-controlled stock of 1880s salvaged kauri joists. Using matching grain direction and traditional hide-glue or reversible maritime epoxy, the resulting repair is virtually invisible and structurally superior.',
          craftsmanTip: 'Grain orientation is non-negotiable. Scribe the inlay so annual growth rings mirror the parent board precisely; mismatched expansion coefficients will pop the repair joint within two seasonal cycles.'
        },
        {
          heading: '3. Replicating Hand-Planed Scallops',
          body: 'Victorian villas were shaped with hand jack planes, giving the wood a subtle, tactile warmth that modern high-speed rotary thicknessers obliterate into sterile plastic uniformity. For high-visibility hallway architraves and parlour cornices, our joiners finish timber using traditional hand planes with custom-ground hollowing irons.'
        }
      ],
      takeaways: [
        'Virgin Heart Kauri contains natural terpenes that resist rot if allowed to breathe.',
        'Never seal heritage floorboards with high-build polyurethanes in uninsulated sub-floors.',
        'Dutchmen inlays using salvaged vintage timber preserve up to 90% of original architectural fabric.',
        'Breathable mineral or linseed paint systems outlast synthetic acrylics on Auckland weatherboards.'
      ]
    }
  },
  {
    id: 'merging-villas-with-modern-pavilions',
    title: 'The Razor’s Edge: Merging Auckland Heritage Villas with Minimalist Glazed Pavilions',
    excerpt: 'How we engineer hidden structural steel portals, manage seismic diaphragms, and craft seamless floor transitions between 1905 villa hallways and 2025 open-plan living pavilions.',
    readTime: '8 min read',
    publishDate: 'June 2025',
    category: 'Modern Additions',
    author: {
      name: 'Todd Macpherson',
      role: 'Founder & Master Craftsman'
    },
    heroImage: imgPonsonby,
    content: {
      lead: 'The holy grail of Auckland residential architecture is the "villa-to-pavilion" typology: retaining the romantic street presence, soaring pressed ceilings, and quiet intimacy of the heritage front bedrooms, while unleashing the rear of the property into an expansive, sun-filled architectural haven.',
      sections: [
        {
          heading: '1. The Acoustic and Structural Threshold',
          body: 'The greatest pitfall in hybrid restorations is an abrupt, clumsy collision between the old house and the modern wing. We design what we term the "Architectural Caesura"—a transitional gallery or glass-flanked walkway that allows the eye and the ear to decompress. Acoustically, the high reverberance of concrete and glass is dampened using concealed slatted timber baffles, preventing living room reverberation from bleeding into restful heritage bedrooms.',
          craftsmanTip: 'Always construct an independent movement joint (slip-joint) at the threshold. A flexible 100-year-old timber structure responds to wind gusts with minor lateral deflection, whereas a rigid steel and concrete pavilion will crack unless isolated with elastomeric expansion gaskets.'
        },
        {
          heading: '2. Concealed Seismic Portals within Kauri Studs',
          body: 'To open up a 10-metre continuous opening across the rear garden without visible chunky steel columns ruining the clean architectural lines, we insert custom portal frames fabricated from Grade 350 structural steel into the kauri balloon framing. By flitching steel plates between original timber studs and bolting through with high-tensile fasteners, the villa’s external envelope remains structurally unyielding while the living spaces float freely.',
          craftsmanTip: 'Protect all steel elements with high-durability zinc coatings before enclosing them within heritage timber envelopes to prevent galvanic corrosion against natural wood acids.'
        },
        {
          heading: '3. Flush Floor Transitions: Timber to Honed Travertine',
          body: 'Nothing breaks the illusion of architectural mastery faster than an awkward 20mm step or aluminium carpet trim. We laser-level the new floor slab so that restored 22mm Mataī tongue-and-groove boards align to within 0.5mm with external heated stone pavers, creating seamless zero-threshold transitions that glide effortlessly into the garden.'
        }
      ],
      takeaways: [
        'A dedicated architectural transition zone eases the tactile shift from heritage intimacy to open modern space.',
        'Seismic slip-joints are mandatory to prevent micro-cracking between timber villas and steel additions.',
        'Flitched steel portal frames can open up 10m spans without dropping intrusive bulkheads.',
        'Zero-threshold flush floor lines connect interior living directly to Auckland outdoor living.'
      ]
    }
  },
  {
    id: 'sash-window-restoration-thermal-retrofit',
    title: 'The Art of the Double-Hung Sash: Counterweights, Vacuum Glazing & Putty Sightlines',
    excerpt: 'Why throwing out original wooden sash windows for clumsy aluminium replacements is an architectural tragedy. How we retrofit vacuum-insulated double glazing without sacrificing historical authenticity.',
    readTime: '7 min read',
    publishDate: 'April 2025',
    category: 'Joinery Craft',
    author: {
      name: 'Todd Macpherson',
      role: 'Founder & Master Craftsman'
    },
    heroImage: imgHerneBay,
    content: {
      lead: 'An Auckland villa’s windows are its expressive eyes. The slender proportions of Victorian sash stiles, delicate meeting rails, and bevelled glazing bars give a streetscape its unmistakable rhythm. Ripping them out to install off-the-shelf aluminium frames instantly degrades property heritage value by hundreds of thousands of dollars.',
      sections: [
        {
          heading: '1. The Counterbalance Geometry',
          body: 'Original sash windows rely on cast-iron or lead counterweights suspended in hidden wall pockets by woven cotton sash cords running over brass pulleys. When homeowners report "stuck" or "slamming" windows, it is invariably because successive decades of thick paint have gummed the parting beads, or cords have frayed. We completely extract the sashes, strip all paint back to bare timber in our workshop, machine concealed bronze draft-excluding pile channels, and recalculate the exact ballast weight to within 50 grams.',
          craftsmanTip: 'When replacing cotton sash cords, we upgrade to synthetic Kevlar-core braided cords. They preserve authentic visual period texture while boasting a 350kg tensile breaking strain that will not rot or stretch for 80+ years.'
        },
        {
          heading: '2. The Vacuum Glazing Breakthrough',
          body: 'Until recently, double-glazing a heritage sash required replacing delicate 18mm timber glazing bars with clunky 32mm modern frames that look dreadful from the street. We now integrate ultra-thin 8.3mm vacuum-insulated glass units (VIG). With a micro-vacuum space between two panes, these achieve an incredible thermal R-value of 0.70 m²·K/W (equivalent to thick triple glazing) while fitting directly into the original 1900s rebate.',
          craftsmanTip: 'Bed the vacuum units in traditional linseed oil putty blended with modern elasticizing resins to preserve the authentic 45-degree hand-trowelled exterior chamfer.'
        }
      ],
      takeaways: [
        'Historic sashes can achieve modern thermal performance without altering exterior profiles.',
        'Kevlar-reinforced cords and hidden bronze brushes eliminate draughts and rattling.',
        'Auckland Council Special Character rules strictly favor window restoration over replacement.'
      ]
    }
  },
  {
    id: 'auckland-council-heritage-rules',
    title: 'Navigating Auckland Council Special Character Overlays & Heritage NZ Consents',
    excerpt: 'Demystifying the Auckland Unitary Plan, Chapter D18 Special Character Area rules, and Pouhere Taonga approvals for high-end residential alterations.',
    readTime: '5 min read',
    publishDate: 'February 2025',
    category: 'Heritage Consents',
    author: {
      name: 'Todd Macpherson',
      role: 'Founder & Master Craftsman'
    },
    heroImage: imgRemuera,
    content: {
      lead: 'Whether your property is located in Grey Lynn (SCAR - Residential Isthmus A) or a waterfront jewel in Devonport, modifying a heritage home in Auckland requires rigorous navigation of regulatory frameworks.',
      sections: [
        {
          heading: '1. What Triggers Resource Consent in Special Character Overlays',
          body: 'Many homeowners mistakenly believe resource consent is only required for large extensions. Under the Auckland Unitary Plan, altering a front-facing veranda, modifying original roof pitches, or replacing decorative timber fretwork can trigger a restricted discretionary consent. Because we maintain our own in-house historical mould library and work closely with Auckland’s top heritage conservation architects, our applications consistently proceed through non-notified pathways without costly delays.',
          craftsmanTip: 'Document everything before touching a hammer. High-resolution archival photographic records and timber profile scans submitted with the consent application demonstrate to Council officers that you respect the heritage continuum.'
        },
        {
          heading: '2. The Streetscape Dominance Rule',
          body: 'Council heritage planners evaluate projects primarily through the lens of streetscape contribution. You can often build a dramatic modern double-storey extension at the rear, provided the primary ridgeline of the front villa remains the dominant visual element from the pedestrian viewpoint.'
        }
      ],
      takeaways: [
        'Auckland Unitary Plan Chapter D18 strictly protects street-facing facades and roof forms.',
        'Non-notified consent approval depends on forensic documentation and authentic materials.',
        'Rear contemporary additions are welcomed when respectful transitions are engineered.'
      ]
    }
  }
];

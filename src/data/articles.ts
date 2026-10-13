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
  category: 'Timber Science & Climate' | 'The High-Country Atelier' | 'Acoustics & Seclusion' | 'The Protocol of Discretion';
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
    id: 'behaviour-of-ancient-timber-extreme-climates',
    title: 'On the Behaviour of Ancient Timber in Extreme Climates',
    excerpt: 'Observations from our workshop on how old-growth New Zealand heartwoods adapt to 48°C Arabian Gulf summers and sub-alpine winter freezes without warping.',
    readTime: '6 min read',
    publishDate: 'Autumn 2025',
    category: 'Timber Science & Climate',
    author: {
      name: 'Arthur T.J Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgKauriCraft,
    content: {
      lead: 'When we accept an overseas commission—whether a coastal compound on the Arabian Gulf or a mountain retreat in East Asia—the first question we ask is how the timber will breathe. Wood is a living cellular material. A beam of Heart Kauri felled in the 1880s or salvaged from prehistoric peat deposits retains its cellular memory. If you rush it into an air-conditioned salon without thoughtful acclimatization, it will protest.',
      sections: [
        {
          heading: '1. Cellular Density and Natural Copal Resins',
          body: 'Modern plantation softwoods expand and contract violently because their growth rings are wide and porous. Old-growth New Zealand Heart Kauri, by contrast, grew slowly in dense virgin canopies over four to eight centuries. Its rings are packed as tightly as forty to fifty per inch. It is saturated with natural kauri copal resins that act as a permanent, organic water-repellent.',
          craftsmanTip: 'Arthur T.J Henderson: "Never kiln-dry historic timber quickly. We bring our overseas timber stock down in moisture content over twelve to eighteen months in our high-country workshop before a single mortise is cut."'
        },
        {
          heading: '2. The Art of Single-Point Fixing in Hot Climates',
          body: 'In desert coastal climates like the Gulf, the exterior of a door might face 48°C heat while the interior is chilled to 21°C. That thermal differential creates immense cross-grain stress. Rather than rigidly locking wide timber panels with modern screws, we use traditional floating tenons and slotted bronze screws that allow the wood to expand and contract by a millimetre or two without ever splitting or binding the latch.'
        },
        {
          heading: '3. Breathable Natural Oil Finishes Over Synthetic Polyurethanes',
          body: 'Plastic polyurethanes form an impermeable skin that eventually cracks and traps moisture beneath the surface, turning black with mold. We finish all our exterior joinery with multiple hand-rubbed coats of raw pressed tung oil blended with pure gum turpentine and beeswax. When the weather changes, the wood breathes naturally through the finish.'
        }
      ],
      takeaways: [
        'Old-growth heartwood possesses natural resin density that resists warping in extreme heat.',
        'Timber must be progressively acclimatized to the destination micro-climate over many months.',
        'Traditional floating joinery allows seasonal movement without mechanical binding.',
        'Hand-rubbed natural oil finishes breathe with the timber and can be maintained effortlessly.'
      ]
    }
  },
  {
    id: 'ethics-of-uncompromising-discretion',
    title: 'The Policy of Secrecy: Why We Work Behind Non-Disclosure Covenants',
    excerpt: 'Why our practice avoids architectural magazines, deletes site metadata, and protects our clients’ personal worlds as a core condition of every contract.',
    readTime: '5 min read',
    publishDate: 'Winter 2025',
    category: 'The Protocol of Discretion',
    author: {
      name: 'Arthur T.J Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgPonsonby,
    content: {
      lead: 'In contemporary architecture, there is an obsession with visibility. Every residential commission is photographed for glossy publications, geotagged on social media, and submitted to industry awards before the owners have unpacked their trunks. When I established Restorations by Henderson & Co. in 1997, I made a deliberate choice to operate in the opposite manner. We work for families who value their privacy above all else.',
      sections: [
        {
          heading: '1. Discretion as the Highest Professional Courtesy',
          body: 'When a family, royal office, or private trustee invites our craftsmen onto their private estate for eighteen months or two years, they are granting us access to their sanctuary. Many of our patrons are prominent individuals who face unrelenting public curiosity. They do not want cameras, site hoarding logos, or self-promotional press releases. Discretion is simply common decency.'
        },
        {
          heading: '2. The Permanent In-House Team Principle',
          body: 'We never farm out work to transient third-party subcontractors or local temp agencies. Every joiner, stone conservator, and lead carpenter on our overseas commissions is a full-time member of our New Zealand workshop who has trained with us for years. This guarantees two things: absolute consistency in our work, and total confidence in the trustworthiness of the people inside your gates.'
        },
        {
          heading: '3. Redacted Folios and Unmarked Dispatch',
          body: 'All crates leaving our high-country workshop travel in plain timber containers bearing only consignment numbers and customs seals. When we document our completed works for private client archives, all exterior horizon lines, neighboring landmarks, and personal artifacts are redacted.'
        }
      ],
      takeaways: [
        'A genuine commitment to client privacy means zero public media, awards, or promotional photography.',
        'Every person on-site is a vetted, long-tenured in-house craftsman.',
        'Limiting our project load ensures direct principal oversight from Arthur T.J Henderson on every commission.',
        'Relationships are built on multi-decade trust rather than transactional speed.'
      ]
    }
  },
  {
    id: 'acoustic-isolation-in-historic-residences',
    title: 'Quiet Living: Acoustic Decoupling in Heritage Residences',
    excerpt: 'Engineering heavy doors and decoupled historic floor assemblies so grand historic reception rooms remain whisper-quiet.',
    readTime: '7 min read',
    publishDate: 'Spring 2025',
    category: 'Acoustics & Seclusion',
    author: {
      name: 'Arthur T.J Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgHerneBay,
    content: {
      lead: 'Historic residences are wonderful for their grand proportions, but they are notorious for sound transmission. Footsteps on a second-floor parquet can echo through ground-floor salons, and conversations in a study can easily carry through adjacent walls. For our patrons—many of whom require confidential rooms for family councils or diplomatic discussions—acoustic seclusion is not a luxury; it is a necessity.',
      sections: [
        {
          heading: '1. The Weight and Drop-Seal of a True Acoustic Door',
          body: 'A standard interior door weighs fifteen to twenty kilograms and has visible perimeter air gaps where sound waves pass freely. When we build an acoustic door for a private salon or study, it weighs between eighty and one hundred and ten kilograms. Inside the door core, we laminate high-density acoustic mass sheets between selected timber stiles, and fit concealed mechanical drop-seals into the bottom rail that engage silently the instant the latch clicks shut.'
        },
        {
          heading: '2. Floating Parquet Without Modifying Ceiling Heights',
          body: 'When lifting historic herringbone or chevron parquet, we install micro-resilient recycled cork and natural wool decoupling mats over the structural sub-floor. This breaks the structural bridge that carries impact sound, preventing footfall from vibrating into the rooms below while preserving the original floor datum to within one millimetre.'
        }
      ],
      takeaways: [
        'Acoustic seclusion requires physical mass and airtight perimeter seals.',
        'Decoupled sub-floors eliminate footfall impact without raising floor heights.',
        'Historic aesthetics and modern confidential acoustic performance can coexist seamlessly.'
      ]
    }
  },
  {
    id: 'ancient-kauri-swamp-timber-preservation',
    title: 'Sub-Fossil Kauri: Working With 45,000-Year-Old Timber Reserves',
    excerpt: 'The science, radiocarbon dating, and hand-finishing of prehistoric swamp kauri salvaged from peat bogs in New Zealand.',
    readTime: '6 min read',
    publishDate: 'Summer 2024',
    category: 'The High-Country Atelier',
    author: {
      name: 'Arthur T.J Henderson',
      role: 'Founder & Principal Craftsman'
    },
    heroImage: imgRemuera,
    content: {
      lead: 'Deep beneath the farmland peat bogs of New Zealand’s Northland lie fallen giant kauri trees preserved in oxygen-free mud since before the last glacial maximum. Radiocarbon dating reveals these logs fell between 30,000 and 50,000 years ago. When unearthed and seasoned with extreme care, this timber displays an extraordinary chatoyancy—an iridescent shimmer reminiscent of liquid gold and dark bronze.',
      sections: [
        {
          heading: '1. The Seasoning of Ancient Peat Timber',
          body: 'Because these ancient logs have been waterlogged for millennia, rushing them into a modern drying kiln will cause immediate cell collapse and honeycombing. We air-season our swamp kauri slabs slowly under sheltered high-country canopies, allowing the sub-alpine breezes to draw moisture out over two to three years before final conditioning.'
        },
        {
          heading: '2. Hand-Scraping and Natural Resins',
          body: 'We never sand swamp kauri with coarse power sanders, which tears the ancient fiber bundles. Instead, our joiners finish each surface with hand-sharpened Japanese steel scrapers and burnish it with natural carnauba wax. The resulting surface feels like warm stone and develops a deep, glowing patina over decades.'
        }
      ],
      takeaways: [
        'Sub-fossil kauri represents one of the rarest sustainable timber sources on earth.',
        'Unrushed sub-alpine air seasoning preserves cellular stability and prevents cracking.',
        'Hand-burnished wax finishes highlight the natural cellular iridescence of prehistoric timber.'
      ]
    }
  }
];

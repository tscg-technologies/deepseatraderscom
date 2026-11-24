/**
 * DEEP SEA TRADERS — B2B Wholesale Seafood Supply Configuration
 * 
 * Business Model:
 * Sourcing fresh fish and prawns in bulk directly from coastal landings & aqua hatcheries,
 * supplying wholesale to local seafood shops, fish retailers, supermarkets, restaurants,
 * and caterers across Greater Hyderabad, Telangana.
 * 
 * Strict Product Scope: ONLY Fish and Prawns.
 */

window.DEEP_SEA_CONFIG = {
  // Business Core Information
  businessName: "Deep Sea Traders",
  legalName: "Deep Sea Traders",
  gstin: "36APUPJ5673F2ZC", // Verified Telangana GSTIN
  address: "2-12-9, Annapurna Colony, Uppal, Hyderabad - 500039",
  officialWebsite: "www.deepseatraders.in",
  tagline: "Wholesale Fish & Prawns Supply for Hyderabad's Local Businesses",
  subTagline: "Direct coastal & sweetwater bulk catch at wholesale mandi rates. Supplying local fish shops, retailers & restaurants across Hyderabad.",
  serviceCity: "Hyderabad",
  state: "Telangana",
  pincode: "500039",
  country: "India",
  serviceScopeNotice: "B2B Wholesale Supply exclusively across Greater Hyderabad, Telangana.",

  // Wholesale Trading Terms & Value Proposition
  minOrderQuantity: "10 kg / Wholesale Crate",
  deliveryWindow: "Daily Early Morning Dispatch (4:00 AM – 8:00 AM)",
  packagingType: "Hygienic Insulated Crate with Crushed Ice Cold Chain",
  businessModel: "B2B Wholesale (Supplying Local Fish Shops, Supermarkets, Restaurants & Caterers)",

  // Contact Details
  contactNumber: "+91 7989705005",
  whatsappNumber: "917989705005",
  phonePlaceholder: "+91 7989705005",
  googleMapsLink: "https://maps.app.goo.gl/8JA7MSrUsRoh5VSJ9",
  emailPlaceholder: "enquiry@deepseatraders.in",
  addressDisplay: "2-12-9, Annapurna Colony, Uppal, Hyderabad - 500039",
  operatingHoursPlaceholder: "Daily B2B Desk: 4:00 AM – 8:00 PM (Orders & Enquiries)",

  // Hyderabad Wholesale Distribution Routes (Hub at Uppal)
  serviceAreasHyderabad: [
    "Uppal & Annapurna Colony (Central Wholesale Hub)",
    "Musheerabad & Kacheguda Fish Markets",
    "Jubilee Hills & Banjara Hills (Restaurants & Fine Dining)",
    "Madhapur, HITEC City & Kondapur (Cloud Kitchens & Supermarkets)",
    "Gachibowli & Financial District (Hospitality & Hotel Chains)",
    "Kukatpally, KPHB & Miyapur (Retail Fish Shops & Vendors)",
    "Begumpet, Ameerpet & Somajiguda (Commercial Eateries)",
    "Secunderabad, Marredpally & Bowenpally (Retail Counters)",
    "Mehdipatnam, Tolichowki & Attapur (Local Seafood Shops)",
    "Dilsukhnagar, LB Nagar & Nagole (Local Fish Stalls)",
    "Charminar, Old City & Malakpet (Commercial Markets)"
  ],

  // Targeted B2B Buyer Segments
  clientSegments: [
    {
      title: "Local Fish Shops & Stalls",
      desc: "Daily morning fresh delivery of sorted fish & prawns in iced crates with consistent size grades to maximize your shop's retail profit margin."
    },
    {
      title: "Seafood Restaurants & Hotels",
      desc: "Grade-A Seer Fish (Vanjaram), White Pomfret, and Jumbo Tiger Prawns with stable commercial pricing and uniform cutting standards."
    },
    {
      title: "Supermarkets & Gourmet Marts",
      desc: "Hygienically iced, temperature-monitored bulk crates ready for retail counters with full GST invoicing and provenance tracking."
    },
    {
      title: "Caterers & Cloud Kitchens",
      desc: "Reliable bulk volume supply for large events, biryanis, and daily high-volume menus with pre-booked daily delivery."
    }
  ],

  // Strictly Curated Categories: ONLY Fish & Prawns
  categories: [
    {
      id: "all",
      name: "All Wholesale Catch",
      shortDesc: "Complete daily wholesale stock of fresh sea fish, freshwater fish, and premium prawns."
    },
    {
      id: "sea-fish",
      name: "Fresh Sea Fish",
      shortDesc: "Vanjaram (Seer Fish), White Pomfret, Black Pomfret, Tuna, Red Snapper, Mackerel in bulk crates."
    },
    {
      id: "freshwater-fish",
      name: "Freshwater Fish",
      shortDesc: "Murrel (Korameenu), Rohu, Catla, and Tilapia at wholesale mandi prices for local fish markets."
    },
    {
      id: "prawns",
      name: "Wholesale Prawns & Shrimp",
      shortDesc: "Export-grade Jumbo Tiger Prawns, White Prawns, Medium Shrimp in iced commercial crates."
    }
  ],

  // Centralized B2B Seafood Product Catalog (ONLY Fish and Prawns)
  products: [
    {
      id: "seer-fish",
      name: "Seer Fish / Vanjaram (King Mackerel)",
      teluguName: "వంజరం చేప",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Top-demand commercial sea fish with firm texture and high yield. The number one choice for Hyderabad restaurants, caterers, and retail fish stalls.",
      moq: "10 kg / Wholesale Crate",
      grade: "Grade A Export Quality",
      packaging: "Iced Insulated Crate",
      targetBuyers: "Restaurants · Fish Shops · Hotels",
      availability: "Daily Morning Arrival",
      badge: "High Margin Retail",
      cutOptions: "Whole Graded / Slices / Steaks",
      image: "assets/images/products/seer-fish.jpg",
      featured: true
    },
    {
      id: "white-pomfret",
      name: "White Pomfret / Silver Pomfret",
      teluguName: "తెల్ల చందువా",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Silky, pristine white meat with delicate sweetness. Premium high-value fish for luxury seafood restaurants, fine dining, and prime retail counters.",
      moq: "10 kg / Wholesale Crate",
      grade: "Grade A+ Whole Cleaned",
      packaging: "Crushed Ice Crate",
      targetBuyers: "Fine Dining · Premium Fish Stalls",
      availability: "Daily Coastal Landing",
      badge: "Premium B2B Delicacy",
      cutOptions: "Whole Graded (200g - 500g+)",
      image: "assets/images/products/pomfret.jpg",
      featured: true
    },
    {
      id: "black-pomfret",
      name: "Black Pomfret / Halwa",
      teluguName: "నల్ల చందువా",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Dense, flavor-rich marine fish with high consumer demand across local markets. Fast turn-around item with strong daily retail margins.",
      moq: "10 kg / Wholesale Crate",
      grade: "Grade A Commercial",
      packaging: "Iced Wholesale Box",
      targetBuyers: "Local Fish Markets · Caterers",
      availability: "In Stock Daily",
      badge: "Fast Moving Stock",
      cutOptions: "Whole Graded / Cleaned",
      image: "assets/images/products/pomfret.jpg",
      featured: false
    },
    {
      id: "yellowfin-tuna",
      name: "Yellowfin Tuna Loin / Whole",
      teluguName: "ట్యూనా చేప",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Meaty, firm-textured deep sea tuna offering maximum meat yield with zero waste. Favored by hotels, continental restaurants, and commercial caterers.",
      moq: "15 kg / Bulk Crate",
      grade: "Grade A Deep Sea Catch",
      packaging: "Sub-zero Iced Crate",
      targetBuyers: "Hotels · Cloud Kitchens · Caterers",
      availability: "Daily Morning Fresh",
      badge: "High Yield Meat",
      cutOptions: "Whole / Loins / Steaks",
      image: "assets/images/products/tuna.jpg",
      featured: false
    },
    {
      id: "red-snapper",
      name: "Red Snapper / Sankara",
      teluguName: "ఎర్ర తోలు చేప (శంకర)",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Vibrant crimson reef fish with sweet, flaky white meat. Highly prized by specialty coastal cuisine restaurants and upscale seafood retailers.",
      moq: "10 kg / Wholesale Crate",
      grade: "Grade A Reef Catch",
      packaging: "Insulated Iced Crate",
      targetBuyers: "Specialty Restaurants · Supermarkets",
      availability: "Coastal Inflow",
      badge: "Chef's Grade",
      cutOptions: "Whole Cleaned / Fillets",
      image: "assets/images/categories/fresh-fish.jpg",
      featured: false
    },
    {
      id: "indian-mackerel",
      name: "Indian Mackerel / Kanagurtha",
      teluguName: "కానగంతలు",
      category: "sea-fish",
      categoryName: "Sea Fish",
      shortDesc: "Popular, nutritious sea fish with rich omega-3 profile. Heavy daily volume turnover for neighbourhood retail fish vendors across Hyderabad.",
      moq: "20 kg / Bulk Commercial Crate",
      grade: "Grade A Daily Catch",
      packaging: "Bulk Mandi Crate on Ice",
      targetBuyers: "Local Fish Stalls · Community Markets",
      availability: "High Volume Daily",
      badge: "Volume Driver",
      cutOptions: "Whole Graded",
      image: "assets/images/categories/fresh-fish.jpg",
      featured: false
    },
    {
      id: "murrel",
      name: "Murrel / Korameenu",
      teluguName: "కొరమీను (ముర్రెల్)",
      category: "freshwater-fish",
      categoryName: "Freshwater Fish",
      shortDesc: "Telangana's most sought-after freshwater delicacy with firm white flesh and high market value. Top seller for local fish shops and Hyderabad curries.",
      moq: "10 kg / Live/Fresh Crate",
      grade: "Premium Sweetwater Grade A",
      packaging: "Moist Oxygenated / Iced Crate",
      targetBuyers: "Local Fish Shops · Telangana Eateries",
      availability: "Daily Farm Sourced",
      badge: "Telangana #1 Demand",
      cutOptions: "Whole / Cleaned Steaks",
      image: "assets/images/products/murrel.webp",
      featured: true
    },
    {
      id: "rohu",
      name: "Rohu / Freshwater Carp",
      teluguName: "రోహు / శీలావతి చేప",
      category: "freshwater-fish",
      categoryName: "Freshwater Fish",
      shortDesc: "The undisputed staple of Hyderabad fish markets. Clean sweet meat sourced directly from certified freshwater aqua farms at wholesale prices.",
      moq: "20 kg / Bulk Crate",
      grade: "Grade A Fresh Catch",
      packaging: "Standard Mandi Iced Crate",
      targetBuyers: "Retail Fish Vendors · Caterers · Canteens",
      availability: "Bulk Stock Daily",
      badge: "Hyderabad Everyday Staple",
      cutOptions: "Whole (1.5kg - 3kg sizes)",
      image: "assets/images/products/rohu.jpg",
      featured: true
    },
    {
      id: "catla",
      name: "Catla / Bengal Carp (Bocche)",
      teluguName: "బొచ్చె / కాట్లా చేప",
      category: "freshwater-fish",
      categoryName: "Freshwater Fish",
      shortDesc: "Large freshwater carp with tender belly steaks. Heavy volume supplier for wedding caterers, function halls, and local fish market stalls.",
      moq: "20 kg / Bulk Crate",
      grade: "Grade A Heavy Weight",
      packaging: "Bulk Iced Crate",
      targetBuyers: "Caterers · Function Halls · Fish Shops",
      availability: "Daily Farm Harvest",
      badge: "Bulk Catering Favorite",
      cutOptions: "Whole (2.5kg to 5kg+)",
      image: "assets/images/products/catla.jpg",
      featured: false
    },
    {
      id: "tilapia",
      name: "Freshwater Tilapia / Jilledu",
      teluguName: "తిలాపియా / జిల్లెడు",
      category: "freshwater-fish",
      categoryName: "Freshwater Fish",
      shortDesc: "Extremely cost-effective, uniform freshwater fish with mild white meat. High margin choice for budget restaurants, hostels, and local retailers.",
      moq: "20 kg / Commercial Crate",
      grade: "Commercial Grade",
      packaging: "Chilled Crate",
      targetBuyers: "Affordable Eateries · Retail Stalls",
      availability: "Steady Supply",
      badge: "Economical Wholesale",
      cutOptions: "Whole Cleaned / Fillets",
      image: "assets/images/products/tilapia.jpg",
      featured: false
    },
    {
      id: "tiger-prawns",
      name: "Jumbo Tiger Prawns (10/20 Count)",
      teluguName: "జంబో టైగర్ రొయ్యలు",
      category: "prawns",
      categoryName: "Prawns",
      shortDesc: "Export-grade majestic tiger prawns with crisp succulent bite and dark distinct stripes. Premium supply for fine dining restaurants and upscale retail.",
      moq: "10 kg / Insulated Iced Crate",
      grade: "Grade A Export Spec (10/20 count)",
      packaging: "Hygienic Cold-Chain Crate",
      targetBuyers: "Star Hotels · Fine Dining · Premium Shops",
      availability: "Coastal Inflow Daily",
      badge: "Signature B2B Catch",
      cutOptions: "Whole Head-on / Headless / Deveined",
      image: "assets/images/products/tiger-prawns.jpg",
      featured: true
    },
    {
      id: "white-prawns",
      name: "Fresh White Prawns (20/30 Count)",
      teluguName: "తెల్ల రొయ్యలు (20/30)",
      category: "prawns",
      categoryName: "Prawns",
      shortDesc: "Sweet, versatile coastal white prawns in standard 20/30 count. Massive daily consumption across Hyderabad restaurants, biryani kitchens, and fish stalls.",
      moq: "10 kg / Wholesale Crate",
      grade: "Grade A Commercial Count",
      packaging: "Chilled Slush Ice Crate",
      targetBuyers: "Biryani Kitchens · Local Fish Shops",
      availability: "Fresh Batch Every Morning",
      badge: "Fast Moving B2B",
      cutOptions: "Whole / Head-on / Peeled",
      image: "assets/images/products/white-prawns.jpg",
      featured: true
    },
    {
      id: "large-prawns",
      name: "Large Ocean Prawns (30/40 Count)",
      teluguName: "పెద్ద సముద్ర రొయ్యలు (30/40)",
      category: "prawns",
      categoryName: "Prawns",
      shortDesc: "Sought after sea prawns with tender texture and rich natural brine sweetness. Ideal for coastal seafood restaurants, food trucks, and retail counters.",
      moq: "10 kg / Wholesale Box",
      grade: "Grade A Marine Catch",
      packaging: "Crushed Ice Crate",
      targetBuyers: "Coastal Eateries · Seafood Stalls",
      availability: "Daily Landings",
      badge: "High Margin",
      cutOptions: "Whole / Tail-on",
      image: "assets/images/products/large-prawns.jpg",
      featured: false
    },
    {
      id: "medium-shrimp",
      name: "Medium Commercial Shrimp (40/60 Count)",
      teluguName: "మీడియం రొయ్యలు (40/60)",
      category: "prawns",
      categoryName: "Prawns",
      shortDesc: "Economical, quick-turnover peeled or whole shrimp. High volume choice for mass catering, cloud kitchens, fast food chains, and daily fish retail stalls.",
      moq: "15 kg / Commercial Crate",
      grade: "Standard Commercial (40/60 count)",
      packaging: "Commercial Iced Box",
      targetBuyers: "Cloud Kitchens · Caterers · Daily Stalls",
      availability: "Abundant Daily Volume",
      badge: "Volume Wholesale",
      cutOptions: "Whole / Cleaned Meat",
      image: "assets/images/products/medium-shrimp.jpg",
      featured: false
    }
  ],

  // Why Local Seafood Businesses Choose Deep Sea Traders
  whyChooseUs: [
    {
      number: "01",
      title: "Direct Mandi & Dock Rates",
      desc: "By cutting intermediate middlemen, we offer competitive wholesale prices that give local fish shops and restaurants superior retail profit margins."
    },
    {
      number: "02",
      title: "Strictly Fish & Prawns Focus",
      desc: "We specialize exclusively in high-demand fish (Vanjaram, Pomfret, Murrel, Rohu) and export-grade prawns, ensuring specialized expertise and consistent grading."
    },
    {
      number: "03",
      title: "Unbroken Cold Chain Delivery",
      desc: "Every crate is packed with calibrated crushed ice and dispatched in temperature-controlled transport, reaching your shop in prime fresh condition."
    },
    {
      number: "04",
      title: "Daily Morning 4 AM – 8 AM Routes",
      desc: "Guaranteed early morning doorstep delivery across Hyderabad so your retail counters and commercial kitchens are fully stocked before trading begins."
    }
  ],

  // 4-Step Wholesale Procurement Process for Local Businesses
  howToOrder: [
    {
      step: "01",
      title: "Check Today's Rate Card",
      desc: "Receive daily early morning wholesale mandi rates on WhatsApp for fresh fish and prawns batches."
    },
    {
      step: "02",
      title: "Select Varieties & Crates",
      desc: "Choose required fish species, size counts, and crate quantities (10 kg+ MOQ per variety)."
    },
    {
      step: "03",
      title: "Confirm B2B Wholesale Order",
      desc: "Instant booking confirmation via WhatsApp with transparent commercial invoicing and GST compliance."
    },
    {
      step: "04",
      title: "Early Morning Storefront Delivery",
      desc: "Direct delivery to your fish shop, supermarket, or restaurant between 4:00 AM and 8:00 AM across Hyderabad."
    }
  ]
};

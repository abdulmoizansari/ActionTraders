window.AT = window.AT || {};

AT.brand = {
  name: "Action Traders",
  tagline: "Fire · Safety · Security",
  owner: "Abdul Basit Hasnain",
  ntn: "9531375-6",
  established: "2018",
  phone: "03303560372",
  phoneAlt: "03161136245",
  email: "action.traders1453@gmail.com",
  hours: "Monday–Saturday: 10:00 AM – 7:00 PM",
  delivery: "Supply, install & commission across Pakistan · Based in Karachi",
  address1: "149 Block 16, Water Pump, F.B Area, Karachi-75950",
};

AT.imgs = {
  cover: "img/cover.jpg?v=2",
  intro: "img/introduction.jpg?v=2",
  letter: "img/company-letter.jpg?v=2",
  quality: "img/quality-policy.jpg?v=2",
  clients: "img/clients.jpg?v=2",
  pumps: "img/fire-pumps.jpg?v=2",
  system: "img/fire-fighting-system.jpg?v=2",
  alarm: "img/fire-alarm.jpg?v=2",
  protection: "img/fire-protection.jpg?v=2",
  ext: "img/extinguishers.jpg?v=2",
  couplings: "img/couplings.jpg?v=2",
  hoist: "img/hoist-signs.jpg?v=2",
  head: "img/ppe-head.jpg?v=2",
  footwear: "img/ppe-footwear.jpg?v=2",
  range: "img/safety-range.jpg?v=2",
};

AT.categories = [
  { id: "fire", name: "Fire Protection", color: "#dc2626", img: "img/extinguishers.jpg?v=2" },
  { id: "alarm", name: "Fire Alarm & Detection", color: "#b91c1c", img: "img/fire-alarm.jpg?v=2" },
  { id: "hydrant", name: "Hydrant & Pumps", color: "#991b1b", img: "img/fire-pumps.jpg?v=2" },
  { id: "fittings", name: "Valves & Fittings", color: "#ea580c", img: "img/couplings.jpg?v=2" },
  { id: "ppe", name: "Head & Eye Protection", color: "#111827", img: "img/ppe-head.jpg?v=2" },
  { id: "clothing", name: "Clothing & Footwear", color: "#1e3a8a", img: "img/ppe-footwear.jpg?v=2" },
  { id: "gloves", name: "Hand Protection", color: "#c2410c", img: "img/ppe-footwear.jpg?v=2" },
  { id: "fall", name: "Fall Protection", color: "#1e8fc5", img: "img/safety-range.jpg?v=2" },
  { id: "firstaid", name: "First Aid & Rescue", color: "#ec4899", img: "img/safety-range.jpg?v=2" },
  { id: "signs", name: "Safety Signs", color: "#eab308", img: "img/hoist-signs.jpg?v=2" },
  { id: "lifting", name: "Hoist & Lifting", color: "#f59e0b", img: "img/hoist-signs.jpg?v=2" },
  { id: "spill", name: "Spill & Site Safety", color: "#16a34a", img: "img/safety-range.jpg?v=2" },
];

AT.navMega = [
  {
    title: "Fire systems",
    links: [
      { name: "Extinguishers & trolleys", cat: "fire" },
      { name: "Alarm & detection", cat: "alarm" },
      { name: "Hydrant & pumps", cat: "hydrant" },
      { name: "Valves & fittings", cat: "fittings" },
    ],
  },
  {
    title: "PPE",
    links: [
      { name: "Head & eye protection", cat: "ppe" },
      { name: "Clothing & footwear", cat: "clothing" },
      { name: "Gloves", cat: "gloves" },
      { name: "Fall protection", cat: "fall" },
    ],
  },
  {
    title: "Site safety",
    links: [
      { name: "First aid & rescue", cat: "firstaid" },
      { name: "Safety signs", cat: "signs" },
      { name: "Spill & barriers", cat: "spill" },
      { name: "Hoist & lifting", cat: "lifting" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Design & supply", cat: "fire" },
      { name: "Installation", cat: "hydrant" },
      { name: "Testing & commissioning", cat: "alarm" },
      { name: "Refilling & maintenance", cat: "fire" },
    ],
  },
];

AT.products = [
  { id: "pump-controller", name: "Fire Pump Controller", cat: "hydrant", img: "img/fire-pumps.jpg?v=2", badge: "Project", featured: true, hot: true, desc: "Control panels for fire pump sets used on hydrant and sprinkler systems. Quoted to site load and pump type." },
  { id: "hydrant-electric-pump", name: "Fire Hydrant Electric Pump", cat: "hydrant", img: "img/fire-pumps.jpg?v=2", featured: true, hot: true, desc: "Electric fire hydrant pumps for commercial and industrial installations." },
  { id: "fire-diesel-pump", name: "Fire Diesel Pump", cat: "hydrant", img: "img/fire-pumps.jpg?v=2", featured: true, hot: true, desc: "Diesel-driven fire pumps for reliable pressure when mains power is unavailable." },
  { id: "hydrant-controller", name: "Fire Hydrant Electrical Controller", cat: "hydrant", img: "img/fire-pumps.jpg?v=2", featured: true, desc: "Wall and floor-mounted electrical controllers for hydrant pump rooms." },
  { id: "hose-reel", name: "Fire Hose Reel / Fire Hose Pipe", cat: "hydrant", img: "img/fire-pumps.jpg?v=2", featured: true, desc: "Hose reels and fire hose pipe for cabinets, landing valves, and first-attack lines." },
  { id: "alarm-panel", name: "Fire Alarm Panel", cat: "alarm", img: "img/fire-alarm.jpg?v=2", badge: "Core", featured: true, hot: true, desc: "Conventional and addressable fire alarm control panels for buildings and plants." },
  { id: "alarm-wiring", name: "Fire Alarm System Wiring", cat: "alarm", img: "img/fire-alarm.jpg?v=2", featured: true, desc: "Design and installation of fire alarm loops, modules, and field wiring." },
  { id: "alarm-system", name: "Fire Alarm System (Detector, MCP & Bell)", cat: "alarm", img: "img/fire-alarm.jpg?v=2", featured: true, desc: "Smoke detectors, manual call points, bells, and sounders as a complete detection package." },
  { id: "suppression", name: "Fire Suppression System", cat: "fire", img: "img/fire-alarm.jpg?v=2", featured: true, desc: "Gas, clean-agent, wet chemical, and foam suppression systems for rooms and process areas." },
  { id: "ext-portable", name: "Portable Fire Extinguishers", cat: "fire", img: "img/extinguishers.jpg?v=2", badge: "Best seller", featured: true, hot: true, desc: "ABC/BC dry powder, CO₂, water, AFFF foam, Halotron, and BCF types. Refilling and maintenance available." },
  { id: "ext-trolley", name: "Fire Extinguisher Trolleys", cat: "fire", img: "img/extinguishers.jpg?v=2", featured: true, desc: "Wheeled extinguishers for warehouses, yards, and high-risk process floors." },
  { id: "ext-box", name: "Fire Extinguisher Box & Hose Reel Box", cat: "fire", img: "img/ppe-head.jpg?v=2", featured: true, desc: "Cabinets for extinguishers and hose reels for corridors and plant rooms." },
  { id: "ext-valves-gauges", name: "Extinguisher Valves & Pressure Gauges", cat: "fire", img: "img/ppe-head.jpg?v=2", desc: "Lever-operated valves and mono-meter pressure gauges for extinguisher servicing." },
  { id: "couplings", name: "Fire Fighting Couplings, Valves & Nozzles", cat: "fittings", img: "img/couplings.jpg?v=2", featured: true, hot: true, desc: "Brass and gunmetal couplings, landing valves, nozzles, and hose fittings." },
  { id: "pipes-valves", name: "MS / SS / Copper Pipe, Flanges & Valves", cat: "fittings", img: "img/couplings.jpg?v=2", featured: true, desc: "Pipes, fittings, flanges, high-pressure gate, globe, ball, NRV, check, and butterfly valves." },
  { id: "line-inductor", name: "Line Inductor", cat: "fire", img: "img/safety-range.jpg?v=2", desc: "Foam line inductors for fire-fighting foam proportioning." },
  { id: "helmet-earmuff", name: "Helmet with Slotted Ear Muff", cat: "ppe", img: "img/ppe-head.jpg?v=2", featured: true, desc: "Industrial helmet with slotted ear muffs for noisy sites." },
  { id: "helmet-light", name: "Helmet with Light", cat: "ppe", img: "img/ppe-head.jpg?v=2", featured: true, desc: "Safety helmet with lamp for confined spaces and night work." },
  { id: "ear-muff", name: "Ear Muff", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Hearing protection for industrial and construction noise." },
  { id: "fire-hood-suit", name: "Fire Hood Suit", cat: "clothing", img: "img/ppe-head.jpg?v=2", featured: true, desc: "Aluminized / fire-hood suit for high-heat exposure." },
  { id: "welding-helmet", name: "Welding Helmet", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Welding helmet for fabrication and maintenance shops." },
  { id: "fire-hood-helmet", name: "Fire Hood Helmet", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Fire-hood helmet for firefighting and hot-work teams." },
  { id: "safety-eyewear", name: "Safety Eyewear", cat: "ppe", img: "img/ppe-head.jpg?v=2", featured: true, desc: "Impact-rated safety glasses for general industry." },
  { id: "fire-goggle", name: "Fire Safety Goggle", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Goggles for fire and spark protection." },
  { id: "chem-goggle", name: "Chemical Safety Goggle", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Splash goggles for chemical handling." },
  { id: "weld-goggle", name: "Welding Goggle", cat: "ppe", img: "img/ppe-head.jpg?v=2", desc: "Shaded welding goggles for gas welding and cutting." },
  { id: "chem-boot", name: "Chemical Long Boot", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Chemical-resistant long boots for wash-down and process areas." },
  { id: "safety-shoes", name: "Safety Shoes", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", badge: "Stock", featured: true, desc: "Steel-toe safety shoes for plant, warehouse, and construction." },
  { id: "low-cut-shoes", name: "Low Cut Safety Shoes", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Low-cut safety shoes for all-day walking on site." },
  { id: "slipon-shoes", name: "Low Cut Slip-On Shoes", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", desc: "Slip-on safety shoes for quick change at the gate." },
  { id: "life-jacket", name: "Inflatable Life Jacket", cat: "firstaid", img: "img/ppe-footwear.jpg?v=2", desc: "Inflatable life jackets for marine and jetty work." },
  { id: "ff-shoes", name: "Fire Fighting Shoes", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Firefighter boots for structural firefighting." },
  { id: "hi-vis", name: "High Visibility Vest", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Hi-vis vests for traffic, yard, and construction visibility." },
  { id: "ff-jacket", name: "Fire Fighting Jacket", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", desc: "Bunker-style fire fighting jacket." },
  { id: "dangri", name: "Dangri / Paint Shirt", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", desc: "Work coveralls and paint shirts for workshops." },
  { id: "uniform", name: "Work Uniform", cat: "clothing", img: "img/ppe-footwear.jpg?v=2", desc: "Staff uniforms for industrial and security teams." },
  { id: "neoprene-gloves", name: "Neoprene Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Chemical-resistant neoprene gloves." },
  { id: "nomex-gloves", name: "Nomex Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Heat-resistant Nomex gloves." },
  { id: "rigger-gloves", name: "Super Rigger Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Rigger gloves for material handling." },
  { id: "argon-gloves", name: "Argon Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Gloves for argon and TIG welding." },
  { id: "heat-gloves", name: "Heat Resistant Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", featured: true, desc: "Leather heat gloves for foundry and furnace work." },
  { id: "elec-gloves", name: "Electrician Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Insulating gloves for electrical work." },
  { id: "weld-gloves", name: "Leather Welding Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Split-leather welding gloves." },
  { id: "impact-gloves", name: "Impact Protect Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Impact-rated gloves for oilfield and rigging." },
  { id: "grip-gloves", name: "Max Grip Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Palm-coated grip gloves for general handling." },
  { id: "chem-gloves", name: "Chemical Gloves", cat: "gloves", img: "img/ppe-footwear.jpg?v=2", desc: "Unsupported chemical gloves for solvents and acids." },
  { id: "metal-detector", name: "Handheld Metal Detector", cat: "spill", img: "img/safety-range.jpg?v=2", featured: true, desc: "Security wands for gates and checkpoints." },
  { id: "eyewash", name: "Emergency Eye Wash", cat: "firstaid", img: "img/safety-range.jpg?v=2", featured: true, desc: "Portable and station eyewash for chemical and dust exposure." },
  { id: "harness-lanyard", name: "Harness & Lanyard", cat: "fall", img: "img/safety-range.jpg?v=2", featured: true, desc: "Full-body harness with shock-absorbing lanyard." },
  { id: "full-harness", name: "Full Body Harness", cat: "fall", img: "img/safety-range.jpg?v=2", featured: true, desc: "Work-positioning and fall-arrest harnesses." },
  { id: "life-line", name: "Life Line", cat: "fall", img: "img/safety-range.jpg?v=2", desc: "Vertical and horizontal lifelines." },
  { id: "tripod", name: "Confined Space Tripod", cat: "fall", img: "img/safety-range.jpg?v=2", featured: true, desc: "Rescue tripod for manhole and tank entry." },
  { id: "barrier-net", name: "Warning Barrier Fancy", cat: "spill", img: "img/safety-range.jpg?v=2", desc: "Warning nets and barrier mesh for excavations." },
  { id: "plastic-chain", name: "Plastic Chain", cat: "spill", img: "img/safety-range.jpg?v=2", desc: "Plastic chain for crowd and hazard demarcation." },
  { id: "dust-mask", name: "Dust Mask", cat: "ppe", img: "img/safety-range.jpg?v=2", desc: "Disposable dust masks." },
  { id: "filter-mask", name: "Filter Mask", cat: "ppe", img: "img/safety-range.jpg?v=2", desc: "Reusable filter masks for particulates." },
  { id: "respirator", name: "Particulate Respirator", cat: "ppe", img: "img/safety-range.jpg?v=2", desc: "Particulate respirators for dusty processes." },
  { id: "stretcher", name: "Folding Stretcher", cat: "firstaid", img: "img/safety-range.jpg?v=2", desc: "Folding stretchers for emergency response." },
  { id: "storage-cabinet", name: "Safety Storage Cabinet", cat: "fire", img: "img/safety-range.jpg?v=2", desc: "Cabinets for extinguishers and emergency kits." },
  { id: "fire-blanket", name: "Fire Blanket", cat: "fire", img: "img/safety-range.jpg?v=2", featured: true, desc: "Fire blankets for kitchens, labs, and workshops." },
  { id: "spill-kit", name: "Spill Kit", cat: "spill", img: "img/safety-range.jpg?v=2", featured: true, desc: "Absorbent spill kits for oils and chemicals." },
  { id: "first-aid-kit", name: "First Aid Kit", cat: "firstaid", img: "img/safety-range.jpg?v=2", featured: true, desc: "Wall and portable first aid kits." },
  { id: "windsock", name: "Wind Sock", cat: "spill", img: "img/safety-range.jpg?v=2", desc: "Windsocks for chemical plants and airfields." },
  { id: "weld-blanket", name: "Welding Blanket", cat: "spill", img: "img/safety-range.jpg?v=2", desc: "Heat-resistant welding blankets." },
  { id: "hoist", name: "Hoist Lifting Equipment", cat: "lifting", img: "img/hoist-signs.jpg?v=2", featured: true, desc: "Chain hoists, electric hoists, and lifting frames." },
  { id: "bearings", name: "Industrial Bearings", cat: "lifting", img: "img/hoist-signs.jpg?v=2", desc: "All kinds and types of industrial bearings." },
  { id: "safety-signs", name: "Safety Signs & Labels", cat: "signs", img: "img/hoist-signs.jpg?v=2", featured: true, desc: "Mandatory, warning, prohibition, emergency, traffic, and first-aid signs — stock and custom." },
];

AT.categories.forEach((c) => {
  c.count = AT.products.filter((p) => p.cat === c.id).length;
});

AT.services = [
  {
    title: "Supply",
    img: "img/extinguishers.jpg?v=2",
    text: "A wide range of fire detection and fire protection products is on your reach — big and small. Portable extinguishers, hydrant gear, alarm panels, PPE, and signs from established manufacturers.",
  },
  {
    title: "Design",
    img: "img/fire-protection.jpg?v=2",
    text: "Based on your needs, we put together efficient solutions for fire detection and fire protection systems for commercial and industrial sites.",
  },
  {
    title: "Installation",
    img: "img/fire-fighting-system.jpg?v=2",
    text: "Installation crews work to site deadlines with MPM master project managers on large and complex jobs. Fire piping, hydrants, pumps, and complete systems — commercial, industrial, and residential.",
  },
  {
    title: "Testing & commissioning",
    img: "img/fire-alarm.jpg?v=2",
    text: "Systems and equipment go through a systematic balance-protection check so you can trust they operate correctly when required.",
  },
  {
    title: "Refilling & maintenance",
    img: "img/ppe-head.jpg?v=2",
    text: "Refilling and servicing of dry powder, CO₂, foam, water, Halotron, and BCF extinguishers, plus hydrant upkeep and upgrades in plant environments.",
  },
];

AT.specializations = {
  extinguishers: ["Portable fire extinguishers", "Automatic fire extinguishers"],
  water: ["Stand pipe (wet and dry)", "Sprinkler (wet, dry, pre-action)", "Water spray", "Fire hydrant"],
  gas: ["CO₂ system", "Clean agent (FM-200, Nof 123)"],
  suppress: ["Wet chemical system", "Foam extinguishing system"],
  detection: ["Addressable fire alarm system", "Conventional fire alarm system", "Fire hydrant system", "Fire suppression system"],
};

AT.premises = [
  "Residential buildings",
  "Offices / fit-out works",
  "Factories and warehouses",
  "Showrooms and retail",
  "Commercial buildings",
  "Construction supply",
];

AT.quality = [
  { n: "01", t: "High service standards in fire detection and fire protection." },
  { n: "02", t: "Materials, machines, and equipment on every project are quality inspected." },
  { n: "03", t: "Customer satisfaction through the products and services we offer." },
  { n: "04", t: "Ongoing research to improve product and service quality." },
  { n: "05", t: "Regular internal quality audit and management review." },
];

AT.clients = [
  "J.",
  "Nabiqasim Pharma",
  "AGP",
  "National Foods",
  "Cybernet",
  "McF",
  "Amreli Steels",
  "Peridot Products (Pvt) Limited",
  "Dawn Bread",
  "Getz Pharma",
  "Total",
  "Fine Daily",
];

AT.features = [
  { title: "Established 2018", text: "Karachi-based fire, safety, and security supplier." },
  { title: "Turnkey systems", text: "Design, supply, install, test, and commission." },
  { title: "Quality policy", text: "Inspection, audit, and continuous improvement on every job." },
  { title: "Refilling & service", text: "Extinguishers and hydrant systems kept ready to work." },
];

AT.ethos = [
  "Do it once — do it right. Reworks cost money and impact our reputation.",
  "Think efficiency. Is there a way to get the job done more efficiently?",
  "Meet and greet our clients. Let them know who we are and what we do.",
  "Be polite. Help each other out. Keep workplace, tools, and vehicles tidy.",
  "We are accountable for our actions. If it needs fixing, we get it done.",
  "Keep learning and keep CPD points up to date.",
];

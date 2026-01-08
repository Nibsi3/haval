export type BlogCategory =
  | 'Tank 300'
  | 'Tank 500'
  | 'H6'
  | 'H6 GT'
  | 'Jolion'
  | 'H7'
  | 'P-Series'
  | 'ORA'
  | 'Ownership'
  | 'Technology';

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  modelSlug?: string;
  heroImage: string;
  thumbnailImage: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string[];
  gallery?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'gwm-tank-300-south-african-adventure',
    title: 'GWM Tank 300: Built for South African Adventure',
    category: 'Tank 300',
    modelSlug: 'tank-300',
    heroImage: '/wallpapers/tank300.jpg',
    thumbnailImage: '/cars/haval-tank-300.png',
    date: '2025-01-10',
    readTime: '8 min read',
    tags: ['4x4', 'Off-road', 'Adventure', 'Tank 300'],
    excerpt:
      'From gravel passes in the Eastern Cape to deep sand on the West Coast, the GWM Tank 300 has been engineered around the way South Africans actually travel.',
    content: [
      `South Africa asks a lot of an SUV. One weekend it is expected to tackle a rutted gravel pass on the way to a farm, and the next it needs to glide through city traffic on the school run. The GWM Tank 300 was conceived with exactly this kind of mixed lifestyle in mind. Its upright, boxy stance is a deliberate nod to classic off-roaders, but beneath the squared-off bodywork sits a thoroughly modern ladder-frame platform with serious all-terrain ability.`,
      `Under the bonnet you will find a 2.0-litre turbocharged petrol engine paired with an 8-speed ZF automatic gearbox. In South African conditions this combination feels effortless, with 167 kW and 387 Nm on tap for confident overtaking and relaxed cruising. An intelligent 4WD system with multiple terrain modes lets you dial in the right settings for gravel, sand, mud or rocky tracks, while low-range gearing and front and rear differential locks are there for when the road disappears altogether.`,
      `Inside, the Tank 300 surprises many buyers who still think of hardcore 4x4s as rough and basic. The cabin is dominated by twin 12.3-inch screens, one for the digital instrument cluster and one for the infotainment system. Soft-touch materials, supportive seats and a wide centre console make it feel more like a premium SUV than a traditional off-roader. Driver assistance systems such as adaptive cruise control, lane-keep assist and a 360-degree camera take the stress out of long highway stretches and tight parking garages alike.`,
      `For South Africans who split their time between tar and trail, the real appeal of the Tank 300 is how easily it moves between those worlds. It feels composed and quiet on the N2, yet when you turn off towards a mountain pass or remote campsite it has the hardware to keep going long after a soft-roader would turn back.`,
      `Ground clearance is a generous 224mm, and the approach and departure angles (33 and 34 degrees respectively) mean you can tackle steep obstacles with confidence. The water wading depth of 700mm is also particularly useful during our summer storm seasons or when crossing shallow river drifts in the interior.`,
      `If you would like to explore the full specification sheet, pricing and current offers, visit the dedicated Tank 300 page and book a test drive with The Maritime Group in Gqeberha or George.`,
    ],
    gallery: [
      '/haval_pics/haval-tank-300/0.jpg',
      '/haval_pics/haval-tank-300/1.jpg',
      '/haval_pics/haval-tank-300/2.jpg',
      '/haval_pics/haval-tank-300/3.jpg',
      '/haval_pics/haval-tank-300/4.jpg',
      '/haval_pics/haval-tank-300/5.jpg',
      '/haval_pics/haval-tank-300/6.png',
      '/haval_pics/haval-tank-300/7.jpg',
      '/haval_pics/haval-tank-300/8.jpg',
      '/haval_pics/haval-tank-300/9.jpg',
      '/haval_pics/tank-300-engine.webp'
    ]
  },
  {
    slug: 'gwm-tank-500-luxury-without-limits',
    title: 'GWM Tank 500: The New Benchmark in Luxury 4x4',
    category: 'Tank 500',
    modelSlug: 'tank-500',
    heroImage: '/wallpapers/tank300.jpg',
    thumbnailImage: '/cars/haval-tank-300.png',
    date: '2025-01-11',
    readTime: '10 min read',
    tags: ['Luxury', 'V6', 'Hybrid', 'Tank 500'],
    excerpt:
      'The GWM Tank 500 arrives in South Africa to redefine what a premium 7-seater SUV can be, blending hybrid efficiency with uncompromising luxury and off-road grit.',
    content: [
      `The luxury SUV segment in South Africa has long been dominated by established European and Japanese badges, but the arrival of the GWM Tank 500 is set to disrupt the status quo. This is a vehicle that doesn't just aim for the middle ground; it targets the very top of the market with a combination of size, presence, and a level of standard equipment that often costs hundreds of thousands extra on competing models.`,
      `At the heart of the Tank 500 is a sophisticated hybrid powertrain. A 2.0-litre turbocharged engine works in tandem with a powerful electric motor to deliver a combined output of 255 kW and a massive 648 Nm of torque. This translates to effortless power delivery, whether you are towing a heavy boat or simply merging into fast-moving traffic on the N1. The 9-speed automatic transmission ensures that power is always available exactly when you need it, with smooth shifts that complement the vehicle's refined character.`,
      `Step inside, and you are greeted by an interior that rivals the finest luxury saloons. Nappa leather upholstery, real wood trim, and a 14.6-inch high-definition infotainment screen set the tone. All three rows of seats have been designed with passenger comfort in mind, and the panoramic sunroof floods the cabin with natural light. Features like massaging seats, a premium Infinity sound system, and multi-zone climate control ensure that every journey, no matter how long, is a first-class experience.`,
      `But don't let the luxury fool you – this is a "Tank" after all. Built on a robust ladder-frame chassis and equipped with a professional-grade 4WD system, the Tank 500 is more than capable of tackling the toughest South African terrain. Eleven different terrain modes, front and rear differential locks, and a low-range transfer case provide the hardware needed for serious off-roading. It's a vehicle that can take you from a black-tie event to a remote safari lodge without breaking a sweat.`,
      `Safety is equally impressive, with a full suite of L2 autonomous driving features, including adaptive cruise control, lane-keeping assistance, and automatic emergency braking. For the discerning South African buyer who refuses to choose between luxury and capability, the GWM Tank 500 is the ultimate answer.`,
    ],
    gallery: [
      '/haval_pics/haval-h7/0.jpg',
      '/haval_pics/haval-h7/1.jpg',
      '/haval_pics/haval-h7/2.png',
      '/haval_pics/haval-h7/3.jpg',
      '/haval_pics/haval-h7/4.jpg',
      '/haval_pics/haval-h7/5.jpg',
      '/haval_pics/haval-h7/6.jpg',
      '/haval_pics/haval-h7/7.jpg',
      '/haval_pics/haval-h7/8.jpg'
    ]
  },
  {
    slug: 'haval-h6-the-sweet-spot-for-sa-families',
    title: 'Haval H6: The Sweet Spot for South African Families',
    category: 'H6',
    modelSlug: 'h6',
    heroImage: '/wallpapers/h6gt.jpg',
    thumbnailImage: '/cars/haval-h6.png',
    date: '2025-01-12',
    readTime: '7 min read',
    tags: ['Family SUV', 'H6', 'Comfort'],
    excerpt:
      'Spacious, well equipped and efficient, the Haval H6 has quickly become a favourite with South African families who want more than just basic transport.',
    content: [
      `Walk through any school parking area in South Africa and you will notice a clear trend: families are moving into midsize SUVs that can handle the daily grind while offering a touch of luxury. The Haval H6 sits right at the heart of this movement. It delivers the elevated driving position and generous cabin space buyers want, but without the intimidating running costs associated with some traditional premium badges.`,
      `Power comes from a 2.0-litre turbocharged petrol engine that produces 155 kW and 325 Nm, paired with a smooth-shifting 7-speed dual-clutch transmission. In real-world driving, the H6 feels eager off the line yet remains composed at highway speeds, with well-judged gearing that keeps the engine in its sweet spot. Fuel consumption figures remain competitive for the segment, which matters when school runs, weekend getaways and holiday trips all add up over a year.`,
      `Inside the cabin, the H6 leans heavily into technology and comfort. A large central touchscreen, digital instrument cluster and intuitive steering-wheel controls make everyday interactions simple and modern. Soft-touch materials, supportive seats and thoughtful storage solutions give the impression of a vehicle that has been designed around family life. Isofix child-seat anchors, multiple USB ports and rear air vents all contribute to a cabin that works just as well on a long trip down the Garden Route as it does in weekday traffic.`,
      `Safety has become a non‑negotiable for South African buyers, and here the H6 more than holds its own. Depending on the grade, features such as adaptive cruise control, lane-keep assist, blind-spot monitoring and autonomous emergency braking create an invisible safety net around the vehicle. For families who want a stylish SUV that balances value, specification and peace of mind, the H6 is difficult to overlook. You can explore variants, colours and current promotions on our Haval H6 model page.`,
    ],
    gallery: [
      '/haval_pics/haval-h6/0.jpg',
      '/haval_pics/haval-h6/1.jpg',
      '/haval_pics/haval-h6/2.jpg',
      '/haval_pics/haval-h6/3.jpg',
      '/haval_pics/haval-h6/4.jpg',
      '/haval_pics/haval-h6/5.jpg',
      '/haval_pics/haval-h6/6.jpg',
      '/haval_pics/haval-h6/7.jpg',
      '/haval_pics/haval-h6/8.jpg',
      '/haval_pics/haval-h6/9.png'
    ]
  },
  {
    slug: 'haval-h6-gt-performance-with-purpose',
    title: 'Haval H6 GT: Performance With Purpose',
    category: 'H6 GT',
    modelSlug: 'h6-gt',
    heroImage: '/wallpapers/h6gt.jpg',
    thumbnailImage: '/cars/haval-h6-gt.png',
    date: '2025-01-15',
    readTime: '7 min read',
    tags: ['H6 GT', 'Performance', 'Coupe SUV'],
    excerpt:
      'With its coupe-inspired roofline and tuned chassis, the Haval H6 GT brings genuine excitement to the everyday commute without sacrificing practicality.',
    content: [
      `Not every South African driver wants their family SUV to disappear into the background. The Haval H6 GT was created for customers who appreciate the practicality of the H6, but who are also looking for something a little more expressive. The fastback roofline, bold rear spoiler and striking alloy wheels immediately set it apart from the school-run crowd, while still offering the raised seating position and usable boot space that make SUVs so popular.`,
      `Beneath the skin the H6 GT carries a 2.0-litre turbocharged petrol engine with the regular H6, but the chassis has been tuned for a more engaging character. Steering response has been sharpened, the suspension has been subtly firmed and drive modes allow the driver to tailor the experience to the road ahead. On a twisting pass the H6 GT feels composed and planted, giving you the confidence to enjoy the power on offer, yet it remains compliant enough for daily commuting over patched-up city streets.`,
      `Open the door and you are greeted by sport-influenced details that never slip into gimmickry. Supportive sports seats, contrasting stitching and carefully chosen trim materials create a cockpit that feels special without abandoning the sense of quality and comfort that defines the broader H6 range. A full suite of connectivity and driver-assistance systems is on hand, from smartphone mirroring to adaptive cruise control and 360-degree cameras, making long journeys and tight parking bays equally stress-free.`,
      `The H6 GT also features a unique "Race" mode, which enhances the exhaust note and sharpens the throttle response, perfect for those times when you find yourself on a quiet stretch of coastal road. For South African buyers who want their next SUV to feel like a reward rather than a compromise, the H6 GT deserves a spot on the shortlist. It brings stand-out styling and a genuinely enjoyable driving experience, yet remains practical enough for daily life.`,
    ],
    gallery: [
      '/haval_pics/haval-h6-gt/0.jpg',
      '/haval_pics/haval-h6-gt/1.jpg',
      '/haval_pics/haval-h6-gt/2.jpg',
      '/haval_pics/haval-h6-gt/3.jpg',
      '/haval_pics/haval-h6-gt/4.jpg',
      '/haval_pics/haval-h6-gt/5.jpg',
      '/haval_pics/haval-h6-gt/6.png',
      '/haval_pics/haval-h6-gt/7.jpg',
      '/haval_pics/haval-h6-gt/8.jpg'
    ]
  },
  {
    slug: 'gwm-p500-redefining-the-double-cab',
    title: 'GWM P500: A New Era for the South African Bakkie',
    category: 'P-Series',
    modelSlug: 'p-series',
    heroImage: '/wallpapers/p500.webp',
    thumbnailImage: '/cars/haval-pro.png',
    date: '2025-01-17',
    readTime: '9 min read',
    tags: ['Bakkie', 'P500', 'Workhorse', 'Luxury'],
    excerpt:
      'The GWM P500 enters the fiercely competitive South African bakkie market with a hybrid powertrain and luxury features that challenge the established players.',
    content: [
      `In South Africa, the "bakkie" is more than just a vehicle – it's a way of life. For decades, the market has been dominated by a few traditional names, but GWM is now challenging that dominance with the P500. This isn't just another workhorse; it's a premium double-cab that brings hybrid technology and luxury features previously unheard of in the segment.`,
      `The standout feature of the P500 is its 2.0-litre hybrid powertrain. Delivering 255 kW and 648 Nm, it is currently one of the most powerful bakkies on the South African market. This power is delivered through a sophisticated 9-speed automatic transmission and a professional 4WD system, making it just as capable of hauling a heavy load across a farm as it is cruising on the highway. The hybrid system also brings significant benefits in terms of fuel efficiency and low-speed torque, which is particularly useful for towing and technical off-roading.`,
      `But the P500's real party trick is its interior. If you closed your eyes and were placed inside, you would think you were in a high-end luxury SUV. Nappa leather seats, a 14.6-inch infotainment screen, and a premium 10-speaker sound system create an environment of genuine refinement. Rear seat passengers are equally well looked after, with class-leading legroom and their own climate control settings. It's a vehicle that can comfortably transition from a dirty construction site to a high-end restaurant without feeling out of place.`,
      `Practicality hasn't been forgotten, however. The load bed is spacious and equipped with multiple tie-down points, while the 3.5-ton towing capacity matches the best in the business. The unique "barn-door" style tailgate option makes loading smaller items much easier in tight spaces. Safety is also paramount, with a 5-star rating and a comprehensive suite of active safety systems, including lane-keeping assist and adaptive cruise control.`,
      `For the South African business owner or outdoor enthusiast who wants the capability of a bakkie with the comfort of a luxury SUV, the GWM P500 is a game-changer. It's time to rethink what a double-cab can be.`,
    ],
    gallery: [
      '/haval_pics/haval-jolion-pro/0.jpg',
      '/haval_pics/haval-jolion-pro/1.jpg',
      '/haval_pics/haval-jolion-pro/2.jpg',
      '/haval_pics/haval-jolion-pro/3.png',
      '/haval_pics/haval-jolion-pro/4.jpg',
      '/haval_pics/haval-jolion-pro/5.jpg',
      '/haval_pics/haval-jolion-pro/6.jpg'
    ]
  },
  {
    slug: 'gwm-ora-03-electric-living-in-sa',
    title: 'GWM ORA 03: Embracing the Electric Future in South Africa',
    category: 'ORA',
    modelSlug: 'ora-03',
    heroImage: '/wallpapers/ora03.jpg',
    thumbnailImage: '/cars/haval-pro.png',
    date: '2025-01-20',
    readTime: '8 min read',
    tags: ['EV', 'Electric Vehicle', 'ORA', 'Sustainability'],
    excerpt:
      'The ORA 03 is making electric vehicle ownership a reality for more South Africans, combining retro-chic styling with impressive range and cutting-edge tech.',
    content: [
      `Electric Vehicles (EVs) are no longer a distant dream for South African motorists. With the arrival of the GWM ORA 03, the transition to sustainable driving has become more accessible and more stylish than ever before. This is a car that turns heads with its unique "retro-futuristic" design, but beneath the charming exterior lies a serious piece of electric engineering.`,
      `The ORA 03 is available with two battery options in South Africa, offering a range of up to 400km on a single charge. For the average urban commuter, this means you could potentially go a whole week between charges. When you do need to top up, the ORA 03 supports fast charging, allowing you to go from 10% to 80% in around 40 minutes at a compatible DC charging station. With South Africa's charging network growing every month, the "range anxiety" of the past is quickly becoming a memory.`,
      `Driving the ORA 03 is a revelation in smoothness and silence. The electric motor provides instant torque, making it incredibly nippy in city traffic, while the low centre of gravity (thanks to the floor-mounted batteries) results in confident and stable handling. It's a relaxing and effortless way to navigate the daily commute, and the absence of engine noise creates a serene cabin environment.`,
      `Inside, the ORA 03 continues the premium theme with high-quality vegan leather, a massive integrated dual-screen setup, and a minimalist design that feels light and airy. Despite its compact exterior dimensions, the interior space is surprisingly generous, especially for rear passengers. Standard features include a 360-degree camera system, wireless phone charging, and a full suite of driver-assistance technologies.`,
      `For South Africans looking to reduce their carbon footprint and stay ahead of the curve, the ORA 03 offers a compelling package. It's not just an electric car; it's a statement about where the automotive world is heading. Visit The Maritime Group to experience the silent revolution for yourself.`,
    ],
    gallery: [
      '/haval_pics/haval-interior-1.webp',
      '/haval_pics/haval-exterior-1.webp',
      '/haval_pics/haval-tank-300/20.jpg',
      '/haval_pics/haval-tank-300/21.jpg',
      '/haval_pics/haval-tank-300/22.jpg'
    ]
  },
  {
    slug: 'haval-jolion-smart-urban-crossover',
    title: 'Haval Jolion: The Smart Urban Crossover',
    category: 'Jolion',
    modelSlug: 'jolion',
    heroImage: '/wallpapers/jolion.jpg',
    thumbnailImage: '/cars/haval-pro.png',
    date: '2025-01-18',
    readTime: '6 min read',
    tags: ['Jolion', 'Urban', 'Compact SUV'],
    excerpt:
      'Compact on the outside yet surprisingly spacious inside, the Haval Jolion has become a favourite choice for South Africans who split their time between city streets and weekend escapes.',
    content: [
      `The modern South African city car has a demanding brief. It needs to be compact enough for tight parking bays and busy shopping-centre ramps, yet versatile enough to handle longer journeys and occasional gravel roads. The Haval Jolion hits this balance with ease. Its compact footprint and light steering make it effortless to manoeuvre, while the slightly raised ride height gives drivers the confidence and visibility they expect from an SUV.`,
      `Under the bonnet lies a 1.5-litre turbocharged petrol engine that delivers 105 kW and 210 Nm. In everyday driving the Jolion feels responsive and willing, with some power delivery that makes merging onto highways or overtaking slow-moving traffic feel relaxed. A choice of manual or dual-clutch automatic transmissions means there is a Jolion to suit both traditionalists and those who prefer the ease of an automatic in congested traffic.`,
      `Inside, the Jolion punches well above its weight in terms of design and technology. A minimalist dashboard layout, floating centre console and high-resolution touchscreen create a cabin that would not look out of place in a far more expensive vehicle. Quality materials, thoughtful storage spaces and generous rear legroom make it easy to live with, whether it is doing duty as a first family car or a stylish runabout for empty-nesters.`,
      `Safety and value round out the Jolion package. Multiple airbags, electronic stability control and advanced driver-assistance features are available across the range, while Haval's strong warranty and service-plan offering helps to keep ownership costs predictable. For buyers who want a crossover that looks sharp, feels modern and fits the realities of South African urban life, the Jolion is an appealing option. Full specifications and current deals can be explored on our Jolion model page.`,
    ],
    gallery: [
      '/haval_pics/haval-jolion-pro/0.jpg',
      '/haval_pics/haval-jolion-pro/1.jpg',
      '/haval_pics/haval-jolion-pro/2.jpg',
      '/haval_pics/haval-jolion-pro/3.png',
      '/haval_pics/haval-jolion-pro/4.jpg',
      '/haval_pics/haval-jolion-pro/5.jpg',
      '/haval_pics/haval-jolion-pro/6.jpg',
      '/haval_pics/haval-jolion-pro/7.jpg',
      '/haval_pics/haval-jolion-pro/8.jpg'
    ]
  },
  {
    slug: 'hybrid-technology-the-best-of-both-worlds',
    title: 'GWM Hybrid Technology: Why it Makes Sense for South Africa',
    category: 'Technology',
    heroImage: '/wallpapers/h6.jpg',
    thumbnailImage: '/cars/haval-h6.png',
    date: '2025-01-22',
    readTime: '7 min read',
    tags: ['HEV', 'Hybrid', 'Technology', 'Efficiency'],
    excerpt:
      'As fuel prices fluctuate and environmental concerns grow, GWM’s HEV (Hybrid Electric Vehicle) range offers a practical and powerful solution for South African drivers.',
    content: [
      `South Africa is in a unique position when it comes to the global shift towards electric mobility. While we are seeing a growing interest in full electric vehicles, our vast distances and specific infrastructure challenges mean that for many, a hybrid is the perfect middle ground. GWM's HEV (Hybrid Electric Vehicle) technology, found in models like the H6 HEV, Jolion HEV, and the P500, has been designed to address exactly these needs.`,
      `The core advantage of a GWM hybrid is that it requires no external charging. You drive it just like a regular petrol car, but the system intelligently manages the interaction between the petrol engine and the electric motor. At low speeds and in stop-start traffic, the vehicle often runs purely on electricity, resulting in near-silent operation and zero fuel consumption in the most inefficient driving conditions. When you need more power for overtaking or highway cruising, the petrol engine kicks in seamlessly.`,
      `The result is a significant improvement in fuel efficiency, especially in urban environments where fuel consumption usually spikes. But it's not just about saving money at the pump – it's also about performance. The electric motor provides instant torque, making these vehicles feel much more responsive and powerful than their traditional counterparts. For example, the H6 HEV delivers a combined 179 kW and 530 Nm, providing a level of performance that matches or exceeds many premium European SUVs.`,
      `Furthermore, the hybrid system helps to reduce the overall wear and tear on the petrol engine, potentially leading to longer-term reliability. For South African drivers who want the benefits of electric driving – smoothness, silence, and efficiency – without any change to their daily routine or concerns about charging infrastructure, GWM's hybrid range is the logical choice. It truly is the best of both worlds.`,
    ],
    gallery: [
      '/haval_pics/haval-h6/10.jpg',
      '/haval_pics/haval-h6/11.jpg',
      '/haval_pics/haval-h6/12.jpg',
      '/haval_pics/haval-h6/13.jpg',
      '/haval_pics/haval-h6/14.jpg',
      '/haval_pics/haval-h6/15.jpg'
    ]
  },
  {
    slug: 'ownership-guide-gwm-haval-in-south-africa',
    title: 'Owning a GWM or Haval in South Africa: What You Need to Know',
    category: 'Ownership',
    heroImage: '/service.jpg',
    thumbnailImage: '/service.jpg',
    date: '2025-01-25',
    readTime: '7 min read',
    tags: ['Ownership', 'Warranty', 'Service'],
    excerpt:
      'Strong warranties, nationwide dealer support and transparent service plans have helped GWM and Haval earn the trust of South African motorists.',
    content: [
      `Choosing a new vehicle is about far more than power figures and paint colours. For South African buyers, the real test starts once the vehicle is in the driveway and the first service interval appears on the horizon. GWM and Haval have invested heavily in aftersales support, parts availability and dealer training to ensure that ownership is as reassuring as the initial test drive.`,
      `Most passenger vehicles in the local GWM and Haval line-up are backed by generous warranties and service plans, which are clearly detailed at the point of sale. These packages are designed to protect buyers from unexpected costs during the early years of ownership. Regular scheduled services, carried out by factory-trained technicians using genuine parts, help to maintain both performance and resale value in a used-car market that increasingly recognises the strength of these brands.`,
      `Another important factor for South African customers is geographic coverage. The Maritime Group plays a key role here, with strategically located dealerships and service centres in Gqeberha and George supporting customers across the Eastern and Western Cape. Whether you are bringing in your Tank 300 after a Karoo road trip or your Jolion after months of urban commuting, the same diagnostic equipment and technical expertise is on hand.`,
      `Ultimately, owning a GWM or Haval in South Africa should feel like a partnership. Transparent communication around service costs, flexible booking options and the availability of courtesy vehicles where possible all contribute to a smoother experience. If you are considering joining the GWM or Haval family, speak to our team about the specific warranty and service benefits attached to the model you are interested in. We will happily guide you through the details so that you can make an informed, confident decision.`,
    ],
    gallery: [
      '/haval_pics/service.jpg',
      '/haval_pics/haval-interior-1.webp',
      '/haval_pics/haval-exterior-1.webp'
    ]
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, category: BlogCategory, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}

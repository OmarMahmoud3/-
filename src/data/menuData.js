export const CATEGORIES = [
  { id: 'all', name: 'الكل', icon: 'lunch_dining' },
  { id: 'shawarma', name: 'سندوتشات الشاورما', icon: 'kebab_dining' },
  { id: 'shawarma-meals', name: 'وجبات عربي', icon: 'set_meal' },
  { id: 'fatta', name: 'الفتات الشامية', icon: 'rice_bowl' },
  { id: 'maria', name: 'الماريا والجبن', icon: 'flatware' },
  { id: 'chicken', name: 'مشويات وبروستد', icon: 'skillet' },
  { id: 'boxes', name: 'بوكسات اللمة', icon: 'inventory_2' },
  { id: 'sides', name: 'مقبلات وسندوتشات', icon: 'fastfood' }
];

export const SPOTLIGHT_DEAL = {
  id: 99,
  name: 'بوكس أبو يونس العائلي',
  category: 'boxes',
  badge: 'أقوى عرض اليوم 🔥',
  tag: 'توفير عائلي',
  price: 300,
  originalPrice: 350,
  description: '1 فراخ سوري + 1 لحمة سوري + 1 كرسبي سوري + بطاطس حجم كبير + عيش توست محمص + تومية كريمية + مخلل سوري مشكل.',
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  servings: 'يكفي 3 إلى 4 أفراد'
};

export const MENU_ITEMS = [
  // 1. سندوتشات الشاورما
  {
    id: 101,
    name: 'شاورما صاروخ سوري XL',
    category: 'shawarma',
    price: 75,
    prices: { chicken: 75, meat: 85 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ', price: 75 },
      { id: 'meat', name: 'لحمة', price: 85 }
    ],
    badge: 'الأكثر طلباً',
    description: 'سندوتش صاروخ عملاق في عيش صاج محمص عالفحم، متبل بالخلطة الشامية مع تومية وخيار مخلل مقرمش.',
    image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 102,
    name: 'شاورما سوري حجم وسط (M)',
    category: 'shawarma',
    price: 45,
    prices: { chicken: 45, meat: 55 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ', price: 45 },
      { id: 'meat', name: 'لحمة بلدي', price: 55 }
    ],
    badge: 'كلاسيك شامي',
    description: 'شاورما متبلة بالزبادي وزيت الزيتون والبهار السوري ملفوفة في خبز صاج ساخن وطري.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 103,
    name: 'شاورما سوري حجم كبير (L)',
    category: 'shawarma',
    price: 60,
    prices: { chicken: 60, meat: 70 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ', price: 60 },
      { id: 'meat', name: 'لحمة بلدي', price: 70 }
    ],
    badge: 'حجم مشبع L',
    description: 'كمية إكسترا من شرائح الشاورما المشوية مع صوص الطحينة للبقر أو التومية للدجاج.',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 104,
    name: 'شاورما كايزر فرنسي',
    category: 'shawarma',
    price: 35,
    prices: { chicken: 35, meat: 40 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ', price: 35 },
      { id: 'meat', name: 'لحمة', price: 40 }
    ],
    description: 'خبز كايزر طري محشو شاورما غنية وصوص التومية الخاص والمخلل.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 2. وجبات عربي
  {
    id: 201,
    name: 'وجبة شاورما عربي دبل',
    category: 'shawarma-meals',
    price: 150,
    prices: { chicken: 150, meat: 165 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ (150 ج)', price: 150 },
      { id: 'meat', name: 'لحمة (165 ج)', price: 165 }
    ],
    badge: 'وجبة دبل',
    description: 'سندوتش دبل مقطع شرائح على الطريقة السورية + بطاطس مقلية ذهبية + تومية كريمية + مخلل سوري.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 202,
    name: 'وجبة شاورما عربي عائلي (سرفيس)',
    category: 'shawarma-meals',
    price: 310,
    prices: { chicken: 310, meat: 320, mix: 335 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ (310 ج)', price: 310 },
      { id: 'meat', name: 'لحمة (320 ج)', price: 320 },
      { id: 'mix', name: 'ميكس (335 ج)', price: 335 }
    ],
    badge: 'سرفيس اللمة',
    description: 'سرفيس ضخم مقطع يكفي العيلة، مصحوباً بعبوات تومية كبرى وبطاطس وعيش مقرمش ومخلل ليمون وخيار.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 203,
    name: 'وجبة عربي فرط (طبق شاورما)',
    category: 'shawarma-meals',
    price: 130,
    prices: { chicken: 130, meat: 145 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'فراخ (130 ج)', price: 130 },
      { id: 'meat', name: 'لحمة (145 ج)', price: 145 }
    ],
    description: 'طبق شرائح شاورما خالصة بدون خبز، يقدم مع خبز صاج خارجي + بطاطس + تومية + مخلل.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 3. الفتات الشامية
  {
    id: 301,
    name: 'فتة أبو يونس المشكلة الخاصة',
    category: 'fatta',
    price: 110,
    badge: 'توقيع الشيف ✨',
    description: 'المزيج الأسطوري: شاورما فراخ + شاورما لحمة بلدي + قطع دجاج كرسبي مقرمش فوق أرز بسمتي بالزعفران والعيش المحمص وصوص الثومية.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 302,
    name: 'فتة شاورما فراخ سوري',
    category: 'fatta',
    price: 75,
    prices: { medium: 75, large: 90 },
    defaultVariant: 'medium',
    variants: [
      { id: 'medium', name: 'وسط (75 ج)', price: 75 },
      { id: 'large', name: 'كبير (90 ج)', price: 90 }
    ],
    description: 'أرز بسمتي مبهر بالهيل، مغطى بشاورما الدجاج المحمرة وخبز شامي مقلي مقرمش وتومية حلب.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 303,
    name: 'فتة شاورما لحمة بلدي',
    category: 'fatta',
    price: 85,
    prices: { medium: 85, large: 100 },
    defaultVariant: 'medium',
    variants: [
      { id: 'medium', name: 'وسط (85 ج)', price: 85 },
      { id: 'large', name: 'كبير (100 ج)', price: 100 }
    ],
    description: 'أرز بسمتي أصفر مع شاورما لحمة متبلة، صوص طحينة سمسمية بقدونسية، وعيش مقلي ساخن.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 4. الماريا
  {
    id: 401,
    name: 'ماريا دجاج موتزاريلا سايحة',
    category: 'maria',
    price: 100,
    badge: 'جبنة سايحة 🧀',
    description: 'رغيفين خبز صاج محشوين شاورما دجاج متبلة مع جبنة موتزاريلا ذائبة ومحمصة على الجريل مع تومية وبطاطس.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 402,
    name: 'وجبة ماريا شاورما دجاج سادة',
    category: 'maria',
    price: 85,
    description: 'ماريا شاورما فراخ محمرة تقدم مع بطاطس أصابع + تومية عادية + تومية حارة + مخلل.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 403,
    name: 'ماريا شاورما لحمة موتزاريلا',
    category: 'maria',
    price: 105,
    description: 'رغيف ماريا محشو شاورما لحمة وجبن موتزاريلا كولومبي غني مع بطاطس ومخلل.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 5. مشويات وبروستد
  {
    id: 501,
    name: 'فرخة كاملة مشوية على الفحم',
    category: 'chicken',
    price: 310,
    prices: { combo: 310, plain: 280 },
    defaultVariant: 'combo',
    variants: [
      { id: 'combo', name: 'كاملة + رز وبطاطس وتومية (310 ج)', price: 310 },
      { id: 'plain', name: 'سادة مع عيش ومخلل (280 ج)', price: 280 }
    ],
    badge: 'على الفحم 🔥',
    description: 'فرخة متبلة 24 ساعة بخلطة أبو يونس الخاصة ومشوية على جمر الفحم حتى النضج والنكهة المدخنة.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 502,
    name: 'فرخة بروستد كرسبي مقرمشة',
    category: 'chicken',
    price: 310,
    prices: { combo: 310, plain: 280 },
    defaultVariant: 'combo',
    variants: [
      { id: 'combo', name: 'وجبة كاملة (أرز وبطاطس وكولسلو) (310 ج)', price: 310 },
      { id: 'plain', name: 'سادة فراخ وبطاطس (280 ج)', price: 280 }
    ],
    badge: 'مقرمش ذهبي',
    description: '8 قطع دجاج بروستد بتتبيلة سرية وقرمشة لا تقاوم، بطاطس مقلية، كولسلو طازج وتومية.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 503,
    name: 'وجبة نصف فرخة مشوية فحم',
    category: 'chicken',
    price: 165,
    description: 'نصف فرخة مشوية مدخنة + أرز بسمتي فاخر + بطاطس + تومية + مخلل وعيش شامي.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 6. بوكسات اللمة
  {
    id: 601,
    name: 'بوكس التوينز (Twins)',
    category: 'boxes',
    price: 180,
    badge: 'توفير التوينز',
    description: '1 ساندوتش سوري فراخ + 1 ساندوتش سوري لحمة + 2 قطعة استربس كرسبي + بطاطس وتومية وعيش.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 602,
    name: 'بوكس الرايقين (6 كايزر)',
    category: 'boxes',
    price: 220,
    badge: '6 كايزر مشكل',
    description: '2 كايزر شاورما فراخ + 2 كايزر شاورما لحمة + 2 كايزر دجاج كرسبي + باكيت بطاطس وتومية.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 603,
    name: 'بوكس الكابل (Couple)',
    category: 'boxes',
    price: 175,
    badge: 'لشخصين',
    description: '2 كايزر فراخ + 2 كايزر لحمة + بطاطس مقرمشة + عيش توست محمص + توميات ومخلل.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    popular: false
  },

  // 7. مقبلات وسندوتشات
  {
    id: 701,
    name: 'علبة ثومية سورية أصلية',
    category: 'sides',
    price: 12,
    prices: { small: 7, large: 12, spicy: 14 },
    defaultVariant: 'large',
    variants: [
      { id: 'small', name: 'صغير (7 ج)', price: 7 },
      { id: 'large', name: 'كبير (12 ج)', price: 12 },
      { id: 'spicy', name: 'سبايسي حارة (14 ج)', price: 14 }
    ],
    badge: 'طازجة يومياً',
    description: 'ثومية شامية بيضاء كريمية مخفوقة على أصولها بدون أي مثبتات صناعية.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 702,
    name: 'باكيت بطاطس فارم فريتس مقلية',
    category: 'sides',
    price: 30,
    description: 'بطاطس ذهبية مقرمشة ببهار البطاطس السوري الخاص.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 703,
    name: 'ساندوتش برجر مشوي أبو يونس',
    category: 'sides',
    price: 60,
    prices: { chicken: 60, meat: 65, double: 120 },
    defaultVariant: 'chicken',
    variants: [
      { id: 'chicken', name: 'برجر فراخ (60 ج)', price: 60 },
      { id: 'meat', name: 'برجر لحمة بلدي (65 ج)', price: 65 },
      { id: 'double', name: 'دبل برجر مكس (120 ج)', price: 120 }
    ],
    description: 'قطعة برجر صافية مشوية على الجريل مع صوص الخردل والمايونيز والجبنة والخس.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 704,
    name: 'طبق أرز بسمتي بالخلطة الشامية',
    category: 'sides',
    price: 35,
    description: 'أرز بسمتي حبة طويلة أصفر متبل بالهيل والكركم والمكسرات والزبيب.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    popular: false
  }
];

export const RESTAURANT_INFO = {
  name: 'مطعم أبو يونس السوري',
  tagline: 'أصل الشاورما السورية والمشويات على الفحم',
  location: 'فيصل: 50 شارع العشرين الرئيسي ناصية الأنصاري - الجيزة',
  branches: [
    {
      name: 'فرع فيصل الرئيسي',
      address: '50 شارع العشرين الرئيسي ناصية الأنصاري، فيصل، الجيزة',
      hours: 'يومياً من 11:00 صباحاً حتى 04:00 فجراً',
      hotlines: ['01154857201', '01154857203', '01005720548'],
      status: 'مفتوح الآن يستقبل طلباتكم',
      mapQuery: 'https://maps.google.com/?q=29.996,31.185'
    }
  ],
  whatsappNumber: '201154857201',
  phoneNumbers: [
    { display: '01154857201', tel: '01154857201' },
    { display: '01154857203', tel: '01154857203' },
    { display: '01005720548', tel: '01005720548' }
  ],
  deliveryAreas: 'فيصل، الهرم، العشرين، الطوابق، الطالبية، والمناطق المجاورة'
};

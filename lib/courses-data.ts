export interface Course {
  id: number
  title: string
  description: string
  fullDescription: string
  aboutPoints?: string[]
  image: string
  images: string[]
  thumbnails?: string[]
  thumbnailMapping?: { [key: number]: number }
  duration: string
  level: string
  category: string
  students: string
  rating: number
  price?: number
  originalPrice?: number
  curriculum: {
    week: number
    title: string
    topics: string[]
  }[]
  reviews: {
    id: number
    name: string
    rating: number
    comment: string
    date: string
    avatar: string
  }[]
  galleryImages: string[]
}

const defaultReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing course! The instructor was very knowledgeable and patient. I learned so much!",
    date: "2 weeks ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Ananya Patel",
    rating: 5,
    comment: "Great course for anyone looking to improve their skills. Highly recommended!",
    date: "1 month ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Riya Mehta",
    rating: 5,
    comment: "The best investment I made in my career. Thank you!",
    date: "2 months ago",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
]

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Global Elite Artistry Program",
    description: "Elite program for international standards, fashion week preparation, and global career opportunities (includes Levels 1, 2 & 3).",
    fullDescription:
      "Learn looks that work on the international ramp. This elite 6-month program is designed for aspiring makeup artists who want to master international fashion and editorial makeup techniques. The Global Elite Artistry Program includes complete Levels 1, 2 & 3 curriculum plus advanced training in Fashion Makeup, Editorial techniques, high-fashion looks, and avant-garde artistry. Master editorial elegance, fashion makeup, face expression techniques, avant-garde styles, monochromatic looks, and prosthetic makeup. Includes 4 professional makeup looks photoshoot and portfolio creation for students. Perfect for those seeking to work on international runways, fashion weeks, and high-end editorial projects.",
    aboutPoints: [
      "Learn looks that work on the international ramp and fashion weeks",
      "Fashion Makeup: Editorial makeup techniques and high-fashion looks",
      "Editorial Elegance: Sophisticated and refined editorial makeup styles",
      "Fashion Makeup Face Expression: Mastering expressions for fashion photography",
      "Avant-Garde: Pushing boundaries with innovative and artistic makeup",
      "Monochromatic: Creating stunning single-color palette looks",
      "Prosthetic Makeup: Advanced special effects and prosthetic application",
      "4 Professional Makeup Looks Photoshoot included",
      "Professional Portfolio creation for students",
      "Complete Levels 1, 2 & 3 curriculum included",
      "International standards and techniques",
      "Preparation for global fashion industry and runway work",
      "Industry networking with international makeup artists"
    ],
    image: "/ge_4_8000.png",
    images: ["/ge_4_800.png", "/ge_2_800.png", "/ge_1_800.png", "/ge_3_800.png"],
    thumbnails: ["/ge1.png", "/ge2.png", "/ge3.png", "/ge_3_800.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2, 3: 3 }, // ge1->ge_3_640, ge2->ge_4_640, ge3->ge_2_640, ge4->ge_1_640
    duration: "6 Months (includes Levels 1, 2 & 3)",
    level: "Level 4",
    category: "Professional",
    students: "3,500+",
    rating: 5.0,
    price: 120000,
    originalPrice: 240000,
    curriculum: [
      {
        week: 1,
        title: "Levels 1, 2 & 3 Foundation (Months 1-4)",
        topics: [
          "Complete Level 1: Professional Makeup Course curriculum",
          "Complete Level 2: Masters in Makeup & Hair Artistry Course curriculum",
          "Complete Level 3: Masters in PRO Artistry Course curriculum",
          "All fundamentals: Skin theory, foundation, concealer, highlight & contour",
          "Beauty & bridal makeup, cultural bridal looks, airbrush, hair styling",
          "Regional bridal, fantasy makeup, Brazilian makeup, MLD",
        ],
      },
      {
        week: 2,
        title: "Fashion Makeup - International Standards",
        topics: [
          "Learn looks that work on the international ramp",
          "Fashion makeup techniques for runway and fashion weeks",
          "Editorial makeup techniques and high-fashion looks",
          "Understanding fashion trends and translating them to makeup",
          "Working with fashion designers and stylists",
        ],
      },
      {
        week: 3,
        title: "Editorial Elegance",
        topics: [
          "Sophisticated and refined editorial makeup styles",
          "Creating magazine-worthy looks",
          "Understanding lighting and photography for editorial work",
          "Collaborating with photographers and creative directors",
          "Building editorial portfolio pieces",
        ],
      },
      {
        week: 4,
        title: "Fashion Makeup Face Expression",
        topics: [
          "Mastering face expressions for fashion photography",
          "Understanding the relationship between makeup and expression",
          "Creating mood and emotion through makeup",
          "Working with models to achieve desired expressions",
          "Storytelling through makeup artistry",
        ],
      },
      {
        week: 5,
        title: "Avant-Garde Artistry",
        topics: [
          "Pushing boundaries with innovative and artistic makeup",
          "Experimental techniques and unconventional materials",
          "Creating conceptual and abstract makeup looks",
          "Developing unique artistic vision and signature style",
          "Avant-garde makeup for fashion shows and art installations",
        ],
      },
      {
        week: 6,
        title: "Monochromatic Makeup",
        topics: [
          "Creating stunning single-color palette looks",
          "Understanding color theory in monochromatic design",
          "Techniques for cohesive monochromatic makeup",
          "Working with different textures in single color schemes",
          "Monochromatic looks for editorial and fashion",
        ],
      },
      {
        week: 7,
        title: "Prosthetic Makeup",
        topics: [
          "Advanced special effects and prosthetic application",
          "Creating and applying prosthetic pieces",
          "Blending and finishing techniques for seamless prosthetics",
          "Character transformation and special effects makeup",
          "Working with prosthetics for fashion and editorial projects",
        ],
      },
      {
        week: 8,
        title: "Professional Photoshoot & Portfolio",
        topics: [
          "4 Professional Makeup Looks Photoshoot included",
          "Professional portfolio creation for students",
          "Working with professional photographers and creative teams",
          "Styling, lighting, and final presentation",
          "Building your international makeup artist portfolio",
          "Career guidance for global fashion industry",
          "Networking with international makeup artists and industry professionals",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "/gec1.png",
      "/gec2.png",
      "/gec3.png",
      "/gec4.png",
      "/Course 4.png",
    ],
  },
  {
    id: 2,
    title: "Hair Styling Course",
    description: "Master hairstyling techniques from basic to advanced, including bridal and Hollywood styles.",
    fullDescription:
      "The Hair Styling Course offers comprehensive training in hairstyling techniques, catering to both beginners and advanced learners. With a focus on hands-on practice and expert guidance, this 10-day intensive course equips students with the skills needed to create a variety of hairstyles for different occasions. Learn tong curls, waves, straightening, blow-dry techniques, sleek buns, Dutch braids, fishtail hairstyles, messy buns, Hollywood waves, and the traditional South Indian bridal bun. This course is highly sought after in the makeup industry, as hairstyling skills are essential for makeup artists to offer comprehensive services.",
    aboutPoints: [
      "Comprehensive training in hairstyling from beginner to advanced level",
      "Learn tong curls, waves, straightening, and professional blow-dry techniques",
      "Master sleek buns, Dutch braids, fishtail hairstyles, and messy buns",
      "Create Hollywood waves and traditional South Indian bridal buns",
      "Hands-on practice with expert guidance throughout the course",
      "Essential skills for makeup artists to offer comprehensive beauty services"
    ],
    image: "/c2.webp",
    images: ["/c2.webp", "/c2.webp", "/c2.webp", "/c2.webp"],
    duration: "2 Weeks",
    level: "Beginner to Advanced",
    category: "Hair",
    students: "2,200+",
    rating: 4.9,
    curriculum: [
      {
        week: 1,
        title: "Day 1-2: Tools, Products & Basic Techniques",
        topics: [
          "Introduction of tools, products, and hair textures",
          "Tong curls, waves, straightening techniques",
          "Straightening curls and styling basics",
        ],
      },
      {
        week: 2,
        title: "Day 3-4: Blow Dry & Styling",
        topics: [
          "Straightening, outward, and inward curls (Blow Dry)",
          "Sleek bun and high pony with Dutch braid",
          "Professional finishing techniques",
        ],
      },
      {
        week: 3,
        title: "Day 5-7: Braiding Techniques",
        topics: [
          "Types of braids and variations",
          "Fishtail hairstyle, fixing tikka, paasa, matha patti",
          "Messy bun and braid combinations",
        ],
      },
      {
        week: 4,
        title: "Day 8-10: Advanced Styling",
        topics: [
          "Hollywood waves for glamorous looks",
          "Donut practice and hairstyle creation",
          "South Indian bridal bun - traditional wedding style",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Masters in PRO Artistry Course",
    description: "Level 3 advanced course including Regional Bridal, Fantasy Makeup, Brazilian Makeup, Airbrush & MLD (includes Levels 1 & 2).",
    fullDescription:
      "Step into the world of Advanced Makeup Artistry. This program goes far beyond traditional bridal makeup — offering hands-on training in regional bridal looks, fantasy makeup with props and headgears, Brazilian makeup techniques, advanced airbrush practice, and Manual Lymphatic Drainage (MLD). This comprehensive 4-month program includes Levels 1 & 2 and takes you to the professional level with creative makeup artistry, detailed face charts, color anatomy, and extensive practical sessions. Perfect for artists who want to master advanced techniques and stand out in the competitive beauty industry.",
    aboutPoints: [
      "Advanced Regional Bridal Looks: Master diverse cultural and regional bridal makeup styles",
      "Fantasy Makeup: Week-long intensive creating props, headgears & 3D drama effects",
      "Creative Expression: Show your creative side and bring artistic visions to reality",
      "Brazilian Makeup: Demo and hands-on practice of Brazilian makeup techniques",
      "Detailed Face Charts: Learn professional face charting and color anatomy",
      "Advanced Airbrush Practice: 2-3 sessions perfecting the base, blush & contour",
      "Manual Lymphatic Drainage (MLD): Learn tips, tricks and importance for makeup artists",
      "Skin Science Insights: Understanding skin structure and advanced skincare",
      "Career Counselling: Portfolio building, styling, social media & photography",
      "Professional Development: Internship opportunities and industry expert-led training",
      "Level 3 includes complete Levels 1 & 2 curriculum",
      "Professional portfolio enhancement and makeup kit guidance"
    ],
    image: "/P1.png",
    images: ["/pa_2_800.png", "/pa_1_800.png", "/pa_4_800.png", "/pa_3_800.png"],
    thumbnails: ["/pa1.png", "/pa_1_800.png", "/pa3.png", "/pa_3_800.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2, 3: 3 }, // pa1->pa_1_640, pa2->pa_2_640, pa3->pa_4_640, pa4->pa_3_640
    duration: "4 Months (includes Levels 1 & 2)",
    level: "Level 3",
    category: "Professional",
    students: "1,800+",
    rating: 5.0,
    price: 90000,
    originalPrice: 180000,
    curriculum: [
      {
        week: 1,
        title: "Level 1 & 2 Foundation (Months 1-3)",
        topics: [
          "Complete Level 1: Professional Makeup Course curriculum",
          "Complete Level 2: Masters in Makeup & Hair Artistry Course curriculum",
          "Skin theory, foundation, concealer, highlight & contour",
          "Eye makeup, brows, lips, beauty & bridal makeup",
          "Cultural bridal makeup, airbrush basics, hair styling",
          "Career counselling basics and portfolio introduction",
        ],
      },
      {
        week: 2,
        title: "Advanced Regional Bridal Looks",
        topics: [
          "Master diverse cultural and regional bridal makeup styles",
          "Advanced techniques for different skin tones and face shapes",
          "Traditional and contemporary fusion bridal looks",
          "Long-lasting techniques for extended wedding ceremonies",
        ],
      },
      {
        week: 3,
        title: "Fantasy Makeup - Creative Artistry",
        topics: [
          "Week-long intensive fantasy makeup training",
          "Creating props, headgears & 3D drama effects",
          "Students showcase their creative side and bring visions to reality",
          "Special effects makeup and theatrical techniques",
          "Working with unconventional materials and textures",
        ],
      },
      {
        week: 4,
        title: "Brazilian Makeup & Face Charts",
        topics: [
          "Brazilian makeup demonstration by expert",
          "Hands-on practice of Brazilian makeup techniques",
          "Detailed face charts and professional documentation",
          "Color anatomy and advanced color theory application",
          "Creating signature looks and personal style development",
        ],
      },
      {
        week: 5,
        title: "Advanced Airbrush Mastery",
        topics: [
          "2-3 intensive airbrush practice sessions",
          "Perfecting the base application with airbrush",
          "Advanced blush and contour techniques with airbrush",
          "Troubleshooting and maintenance of airbrush equipment",
          "Creating flawless, camera-ready looks",
        ],
      },
      {
        week: 6,
        title: "Manual Lymphatic Drainage (MLD) & Skin Science",
        topics: [
          "Learning tips & tricks of MLD techniques",
          "Understanding the importance of MLD for makeup artists",
          "Skin structure, anatomy and advanced skincare knowledge",
          "Pre-makeup facial massage and skin preparation",
          "Benefits of MLD for client satisfaction and makeup longevity",
        ],
      },
      {
        week: 7,
        title: "Advanced Career Development",
        topics: [
          "Advanced portfolio building with fantasy and editorial looks",
          "Social media strategies for advanced makeup artists",
          "Lighting & photography for creative makeup documentation",
          "Professional presentation and client communication",
        ],
      },
      {
        week: 8,
        title: "Professional Development & Internship",
        topics: [
          "Internship opportunities with industry experts",
          "Professional portfolio enhancement with advanced work",
          "Professional makeup kit guidance for advanced artists",
          "Industry networking and career launch strategies",
          "Building your brand as an advanced makeup artist",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "/pac1.png",
      "/pac2.png",
      "/pac3.png",
      "/pac4.png",
      "/Course 3.png",
    ],
  },
  {
    id: 4,
    title: "Masters in Makeup & Hair Artistry Course",
    description: "Level 2 comprehensive course covering Basic to Advanced Makeup, Beauty, Bridal, Airbrush & Hair (includes Level 1).",
    fullDescription:
      "The Masters in Makeup Artistry Course is our most popular program, designed to take students from basic to advanced makeup techniques. Led by industry experts, this course ensures students are fully equipped for a successful career in makeup artistry. By completing this course, you won't need any additional training elsewhere. This comprehensive 3-month program includes Level 1 and covers everything from skin care and color theory to advanced bridal makeup, airbrush techniques, hair styling, and career counselling with professional portfolio shoots.",
    aboutPoints: [
      "Skin Care and Preparation: Understanding skin types, tones, undertones, and exact color match making",
      "Comprehensive skin prep techniques including CTM before and after makeup",
      "Vanity Essentials: Building a complete vanity checklist with hygiene and grooming",
      "Color Theory: Mastering neutralization, color wheel, and advanced color mixing",
      "Foundation & Concealer: Face shape analysis, corrective techniques, and specialized application",
      "Highlight & Contour: Facial anatomy, geometry for corrective contouring, baking techniques",
      "Eye Makeup: Analyzing eye shapes, advanced techniques, false eyelashes application",
      "Brows & Lips: Detailed shaping, measurement, filling, and comprehensive lip techniques",
      "Beauty & Bridal Makeup: Diverse looks for receptions, cocktails, Haldi/Mehendi",
      "Cultural Bridal Makeup: South Indian, Punjabi, Anand Karaj, celebrity, Valima/Muslim brides",
      "Airbrush Makeup: In-depth airbrush techniques demonstration",
      "Men's Makeup: Techniques specific to enhancing male features",
      "Hair Course (2 Weeks): Tools, curls, waves, braids, Hollywood waves, South Indian bridal buns",
      "Career Counselling Course: Profile building, social media, photography, lighting, styling",
      "Professional portfolio shoot included with high quality edited pictures",
      "100% Internship opportunities for all students",
      "2 complimentary courses options available at the academy"
    ],
    image: "/ma_1_800.png",
    images: ["/ma_2_800.png", "/ma_1_800.png", "/ma_4_800.png","/ma_3_800.png"],
    thumbnails: ["/ma_2_800.png", "/ma5.png", "/ma_4_800.png","/ma8.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2 , 3: 3 }, // ma7->ma_1_640, ma5->ma_2_640, ma6->ma_3_640
    duration: "3 Months (includes Level 1)",
    level: "Level 2",
    category: "Professional",
    students: "2,800+",
    rating: 4.9,
    price: 65000,
    originalPrice: 130000,
    curriculum: [
      {
        week: 1,
        title: "Skin Care and Preparation",
        topics: [
          "Understanding skin types, assessment, and issues",
          "Learning about skin tones, undertones, shades, and exact color match making",
          "Comprehensive skin prep techniques: CTM (Cleansing, Toning, Moisturizing) before and after makeup",
          "Choosing appropriate skincare products and prepping acne-prone skin",
        ],
      },
      {
        week: 2,
        title: "Vanity Essentials & Color Theory",
        topics: [
          "Building a complete vanity checklist",
          "Emphasizing hygiene, basic grooming, and makeup tools/products",
          "Mastering neutralization, the color wheel, and color schemes",
          "Advanced color mixing and correction techniques",
        ],
      },
      {
        week: 3,
        title: "Foundation & Concealer",
        topics: [
          "Exploring makeup textures, face shape analysis, and corrective face base techniques",
          "Differentiating foundations and concealers with detailed application tools and techniques",
          "Specialized foundation application for various skin shades, types, and conditions like acne-prone looks",
          "Working with different eye makeup textures and mastering blending techniques",
        ],
      },
      {
        week: 4,
        title: "Highlight & Contour",
        topics: [
          "Understanding facial anatomy and geometry for corrective contouring",
          "Techniques for applying blush with creams and powders",
          "Mastering powder contour, baking, and highlighting",
        ],
      },
      {
        week: 5,
        title: "Eye Makeup Mastery",
        topics: [
          "Analyzing eye shapes and mastering eyeliner techniques",
          "Advanced eye makeup techniques including false eyelashes application",
          "Various eye makeup looks and blending techniques",
        ],
      },
      {
        week: 6,
        title: "Brows & Lips",
        topics: [
          "Detailed eyebrow shaping, measurement, and filling techniques",
          "Comprehensive lip prep, contouring, and correction methods",
          "Achieving various lip textures with different products",
        ],
      },
      {
        week: 7,
        title: "Beauty & Bridal Makeup",
        topics: [
          "Creating diverse beauty looks for occasions like receptions and cocktail parties",
          "Techniques for traditional Indian bridal makeup, Haldi/Mehendi Bride",
          "Using HD Foundation, emphasizing creativity and current trends",
        ],
      },
      {
        week: 8,
        title: "Cultural Bridal Makeup",
        topics: [
          "Techniques for South Indian, Punjabi, Anand Karaj bridal looks",
          "Celebrity and Valima/Muslim bridal makeup",
          "Focus on working with various foundation textures and advanced eye makeup techniques",
        ],
      },
      {
        week: 9,
        title: "Airbrush Makeup & Men's Makeup",
        topics: [
          "In-depth airbrush makeup techniques demonstration",
          "Men's Makeup: Techniques specific to enhancing male features for various occasions",
        ],
      },
      {
        week: 10,
        title: "Hair Course (2 Weeks)",
        topics: [
          "Introduction to tools, products, and hair textures",
          "Techniques for tong curls, waves, straightening, and blow-drying",
          "Creating sleek buns, high ponytails with Dutch braids, and various types of braids",
          "Advanced hairstyles: fishtail, fixing tikka, paasa, matha patti, messy buns",
          "Hollywood waves and South Indian bridal buns",
        ],
      },
      {
        week: 11,
        title: "Career Counselling Course (CCC)",
        topics: [
          "Profile Building and Social Media management",
          "Photography, lighting, and editing techniques for makeup portfolios",
          "Managing social media presence and client consultations",
          "Styling for self and clients, saree draping",
          "Professional communication and business survival skills",
          "Building a CV and preparing for interviews",
        ],
      },
      {
        week: 12,
        title: "Portfolio & Internship",
        topics: [
          "Professional portfolio shoot included",
          "High quality content consisting of edited pictures",
          "100% Internship opportunities for all students",
          "In-House Portfolio to showcase your work and progress",
          "2 complimentary courses options available at the academy",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "/mac1.png",
      "/mac2.png",
      "/mac3.png",
      "/mac4.png",
      "/Course 2.png",
    ],
  },
  {
    id: 5,
    title: "Nail Course",
    description: "Complete nail artistry course covering nail theory, art & design, and extensions with 20+ techniques.",
    fullDescription:
      "Comprehensive Nail Course covering everything from theory to advanced nail art and extensions. Learn nail theory, product knowledge, tools & equipment, nail shaping, filing & cuticle care, and nail structure. Master 20+ Nail Art & Design techniques including Dot Art, Lines Art, Stroke Art, Animal Print, Bow, Butterfly, Rose, Dripping, Heart, Pointed Petal, Abstract, Multi French, Sticker, Rhinestone, Stamping, Foil, Glitters, Mylars, Spider Gel, 3D, Marble, Inbuild, and 9D Art. Complete training in Nail Extensions with Gel and Acrylic techniques for natural nails & fake tips, removal, drilling machine, emery board, and refilling.",
    aboutPoints: [
      "Nail theory, product knowledge, tools & equipment fundamentals",
      "Nail shaping, filing, cuticle care, and nail structure basics",
      "Master 20+ Nail Art techniques: Dot, Lines, Stroke, Animal Print, Bow, Butterfly, Rose",
      "Advanced designs: Dripping, Heart, Abstract, Multi French, Sticker, Rhinestone, Stamping",
      "Creative art: Foil, Glitters, Mylars, Spider Gel, 3D, Marble, Inbuild, 9D Art",
      "Complete Nail Extensions training with Gel and Acrylic for natural nails & fake tips",
      "Learn removal, drilling machine, emery board techniques, and refilling"
    ],
    image: "/c5.webp",
    images: ["/c5.webp", "/c5.webp", "/c5.webp", "/c5.webp"],
    duration: "4-6 Weeks",
    level: "Beginner to Advanced",
    category: "Nail",
    students: "1,500+",
    rating: 4.8,
    curriculum: [
      {
        week: 1,
        title: "Week 1: Nail Theory & Fundamentals",
        topics: [
          "Theory of nail and nail structure",
          "Introduction of product knowledge",
          "Theory of tools & equipment, consultation",
          "Nail shaping, filing & cuticle care",
        ],
      },
      {
        week: 2,
        title: "Week 2-3: Nail Art & Design (Part 1)",
        topics: [
          "Dot Art, Lines Art, Lines Stroke Art",
          "Animal Print Art, Bow Art, Butterfly Art",
          "Rose Art, Dripping Art, Heart Art",
          "Pointed Petal Art, Abstract Art",
        ],
      },
      {
        week: 3,
        title: "Week 3-4: Nail Art & Design (Part 2)",
        topics: [
          "Multi French Art, Sticker Art, Rhinestone Art",
          "Stamping Art, Foil Art, Glitters Art",
          "Mylars Art, Spider Gel Art, 3D Art",
          "Marble Art, Inbuild Art, 9D Art",
        ],
      },
      {
        week: 4,
        title: "Week 5-6: Nail Extensions & Advanced Techniques",
        topics: [
          "Gel extension - Natural nails & fake tip",
          "Acrylic extension - Natural nails & fake tip",
          "Removal techniques, drilling machine, emery board",
          "Refilling and maintenance techniques",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Professional Makeup Course",
    description: "Level 1 course covering Beauty & Bridal makeup with fashion, editorial, and red carpet techniques.",
    fullDescription:
      "Professional Makeup Artistry Course - Level One covering comprehensive makeup education. Master Skin Theory including skin types, conditions, and complexion techniques for creating dimensions using contouring, blush, and highlighting. Learn Foundation application at three levels (light, medium, full coverage) with different finishes (dewy, radiant, matte, ultra-matte). Study face shapes and corrections. Master Eye Makeup from basic to advanced including 3-Tone Eyeshadow, Black Smoky Eye, Half Cut Crease, and Halo Eye. Learn Lip correction, shading, and tinting. Explore Fashion and Editorial Makeup including HD Makeup, Glass Skin techniques, Photography tips, Foxy Makeup, and Red Carpet looks. Complete training in Bridal Makeup covering Classic Bridal, Engagement/Reception, and Traditional Indian Bridal techniques.",
    aboutPoints: [
      "Skin Theory and Types: Understanding skin conditions and types for optimal makeup application",
      "Complexion: Learn various techniques of creating dimensions on the face using contour, blush and highlight",
      "Foundation Levels: Learning makeup foundation in three levels (light, medium, and full coverage)",
      "Finishes: Mastering different finishes like dewy, radiant, matte, and ultra-matte",
      "Foundation Types and Textures: Selecting and applying the right foundation for various skin types",
      "Face Shapes and Corrections: Techniques to enhance and correct different face shapes",
      "Eye Makeup: Basic to Advanced - 3-Tone Eyeshadow, Black Smoky Eye, Half Cut Crease, Halo Eye",
      "Lip Makeup: Techniques for lip correction, shading, and tinting",
      "Fashion Editorial Makeup: HD Makeup, Glass Skin Techniques, Photography Tips",
      "Foxy Makeup: Applying techniques for a fresh, oxygenated appearance",
      "Red Carpet Makeup: Creating long-lasting, glamorous looks for high-profile events",
      "Classic Bridal Makeup: Colorful Eyeshadow with Dewy Base, Long-lasting Techniques",
      "Engagement/Reception Makeup: Full Glam Bridal Makeup with Cool Tones (Pink and Purple Shades)",
      "Indian Bridal Makeup: Traditional techniques with Red Tones, Bold Lipstick, Full Coverage, and Glittery Eyes",
      "Theory of makeup, Face chart, Vanity class",
      "100% job assistance and Internship opportunities for all students",
      "Weekdays (Monday - Friday) and Weekend batches available"
    ],
    image: "/c6.webp",
    images: ["/pm_3_800.png", "/pm_1_800.png", "/pm_4_800.png", "/pm_2_800.png"],
    thumbnails: ["/pm1.png", "/pm_1_800.png", "/pm3.png", "/pm2.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2, 3: 3 }, // pm1->pm_1_640, pm4->pm_2_640, pm3->pm_3_640, pm2->pm_4_640
    duration: "1 Month (4-5 Weeks)",
    level: "Level 1",
    category: "Makeup",
    students: "3,200+",
    rating: 4.9,
    price: 35000,
    originalPrice: 70000,
    curriculum: [
      {
        week: 1,
        title: "Skin Theory, Complexion, and Makeup Foundations",
        topics: [
          "Skin Theory and Types: Understanding skin conditions and types for optimal makeup application",
          "Complexion: Various techniques of creating Dimensions on the face using Contour, blush and Highlight",
          "Foundation Levels: Learning makeup foundation in three levels (light, medium, and full coverage)",
          "Finishes: Mastering different finishes like dewy, radiant, matte, and ultra-matte",
          "Foundation Types and Textures: Selecting and applying the right foundation for various skin types",
          "Face Shapes and Corrections: Techniques to enhance and correct different face shapes",
        ],
      },
      {
        week: 2,
        title: "Eye Makeup Techniques",
        topics: [
          "Basic to Advanced Eye Makeup",
          "3-Tone Eyeshadow",
          "Black Smoky Eye",
          "Half Cut Crease",
          "Halo Eye",
          "Lip Makeup: Techniques for lip correction, shading, and tinting",
        ],
      },
      {
        week: 3,
        title: "Fashion and Editorial Makeup",
        topics: [
          "Fashion Editorial Makeup",
          "HD Makeup",
          "Glass Skin Techniques",
          "Photography Tips for Editorial Looks",
          "Foxy Makeup: Applying techniques for a fresh, oxygenated appearance",
          "Red Carpet Makeup: Creating long-lasting, glamorous looks for high-profile events",
        ],
      },
      {
        week: 4,
        title: "Bridal Makeup",
        topics: [
          "Classic Bridal Makeup: Colorful Eyeshadow with Dewy Base, Long-lasting Techniques for Weddings",
          "Engagement/Reception Makeup: Full Glam Bridal Makeup, Working with Cool Tones (Pink and Purple Shades)",
          "Indian Bridal Makeup: Traditional Indian Bridal Techniques, Red Tones, Bold Lipstick, Full Coverage, and Glittery Eyes",
        ],
      },
      {
        week: 5,
        title: "Theory, Practice & Career Support",
        topics: [
          "Theory of makeup",
          "Face chart practice",
          "Vanity class",
          "100% job assistance",
          "Internship opportunities for all students",
          "Weekdays (Monday - Friday) and Weekend batches available",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "/pm1c.png",
      "/pm2c.png",
      "/pm3c.png",
      "/pm4c.png",
      "/Course 1.png",
    ],
  },

  {
    id: 8,
    title: "Professional Cosmetology Course",
    description: "Comprehensive 1-year cosmetology program including Masters in Makeup, Hair Technician, Nail Technician, and Skin Course.",
    fullDescription:
      "This comprehensive Professional Cosmetology Course covers everything from foundational skin care and salon management to advanced treatments and permanent makeup techniques. The 1-year program includes complete training in makeup artistry, hair styling, nail technology, and advanced skin care. Master skin cosmetology, professionalism, salon management, client consultation, human anatomy, superfluous hair removal, facials, cleanup, advanced skin treatments, manicure & pedicure, and hydra facial techniques. Join us to master the art of cosmetology, gain industry insights, and build a successful career in the beauty industry.",
    aboutPoints: [
      "Duration: 1 year comprehensive program",
      "Includes: Masters in Makeup + Hair Technician + Nail Technician + Skin Course",
      "Skin Cosmetology & Professionalism: Introduction to cosmetology, history, career paths",
      "Salon Management: Hygiene & safety, salon etiquette, time management",
      "Client Consultation: Consultation techniques, skin analysis for different skin types",
      "Human Anatomy & Skin Care: Understanding skin structure, functions, types and conditions",
      "Superfluous Hair Removal: Threading, waxing (normal, liposoluble, peel-off), bleaching",
      "Skin Care Theory: Cleansing, toning, exfoliation, extraction, massage, masks and packs",
      "Facials & Cleanup: Tailored to different skin types - basic, fruit, and gold facials",
      "Advanced Skin Care: Facial machines, specialized treatments for various skin conditions",
      "Advanced Treatments: Hyperpigmentation, detoxification, anti-tan, anti-acne, anti-aging",
      "Manicure & Pedicure: Basic, paraffin wax, anti-tan, and crystal techniques",
      "Hydra Facial: Detailed procedure and benefits",
      "Complete professional training for successful beauty industry career"
    ],
    image: "/c8.webp",
    images: ["/c8.webp", "/c8.webp", "/c8.webp", "/c8.webp"],
    duration: "1 Year",
    level: "Level 5",
    category: "Professional",
    students: "1,200+",
    rating: 5.0,
    curriculum: [
      {
        week: 1,
        title: "Skin Cosmetology & Professionalism",
        topics: [
          "Introduction to Cosmetology in skin",
          "History of cosmetology",
          "Career path overview in the cosmetology industry",
          "Professionalism: Personal grooming and hygiene",
          "Client communication",
          "Bed and trolley setting",
        ],
      },
      {
        week: 2,
        title: "Salon Management",
        topics: [
          "Hygiene & Safety: Importance of maintaining hygiene and safety in the salon",
          "Basic to advanced tools and equipment",
          "Salon Etiquette & Time Management",
          "Personal and salon environment",
          "Effective communication skills",
        ],
      },
      {
        week: 3,
        title: "Client Consultation",
        topics: [
          "Consultation Techniques: Conducting client consultations",
          "Filling consultation forms",
          "Skin Consultation & Analysis",
          "Techniques for analyzing different skin types",
        ],
      },
      {
        week: 4,
        title: "Human Anatomy & Skin Care",
        topics: [
          "Human Anatomy: Understanding skin structure and functions",
          "Identifying skin types and conditions",
        ],
      },
      {
        week: 5,
        title: "Superfluous Hair Removal",
        topics: [
          "Hair Removal Techniques: Threading",
          "Waxing (normal wax, liposoluble wax, peel-off wax)",
          "Bleaching",
        ],
      },
      {
        week: 6,
        title: "Skin Care Theory",
        topics: [
          "Fundamentals of Skin Care",
          "Cleansing, toning, exfoliation, and extraction",
          "Massage techniques",
          "Masks and packs",
        ],
      },
      {
        week: 7,
        title: "Facials & Cleanup",
        topics: [
          "Importance of Facials & Cleanups",
          "Tailoring cleanups to different skin types",
          "Types of facials: basic, fruit, and gold",
        ],
      },
      {
        week: 8,
        title: "Advanced Skin Care",
        topics: [
          "History & Industry Knowledge: Overview of the cosmetic industry",
          "Physiology and anatomy related to skincare",
        ],
      },
      {
        week: 9,
        title: "Advanced Treatments & Facial Machines",
        topics: [
          "Introduction to Facial Machines",
          "High-frequency, galvanic, ultrasonic, vacuum suction, and bruising unit",
          "Specialized Treatments: Hyperpigmentation treatment",
          "Skin detoxification treatment",
          "Anti-tan treatment",
          "Anti-acne treatment",
          "Anti-aging treatment",
          "Intense moisturizing treatment",
          "Skin whitening treatment",
        ],
      },
      {
        week: 10,
        title: "Manicure & Pedicure",
        topics: [
          "Techniques: Basic manicure and pedicure",
          "Paraffin wax manicure and pedicure",
          "Anti-tan manicure and pedicure",
          "Crystal manicure and pedicure",
        ],
      },
      {
        week: 11,
        title: "Hydra Facial",
        topics: [
          "Hydra Facial Techniques",
          "Detailed hydra facial procedure and benefits",
        ],
      },
      {
        week: 12,
        title: "Professional Development & Career Launch",
        topics: [
          "Portfolio building and professional presentation",
          "Industry insights and networking",
          "Career guidance for beauty industry success",
          "Business management for beauty professionals",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    ],
  },
  {
    id: 7,
    title: "STAR 2026 Course - Masterclass",
    description: "Limited time masterclass - 60 Days intensive makeup and hair artistry program (Flat ₹50,000).",
    fullDescription:
      "STAR 2026 Course is an intensive 60-day LIMITED TIME masterclass designed for aspiring makeup and hair artists. This comprehensive course covers everything from theory and technical makeup classes to full looks, hair styling, and professional development. Perfect for those looking to launch their career quickly with comprehensive training in makeup artistry, hair styling, personality development, and marketing. Flat fee of ₹50,000 for the complete program.",
    aboutPoints: [
      "LIMITED TIME COURSE - 60 Days intensive program",
      "Flat fee: ₹50,000 for complete training",
      "Theory: Rules & Regulations, Self Grooming, Safety & Hygiene",
      "Colour Theory: Shades & Undertones, Product Knowledge, Brush Knowledge",
      "Skin Analysis: Types & Conditions, Colour Mixing & Foundation Making Activity",
      "Face Chart practice and techniques",
      "Technical Makeup Classes: Corrective Eye, Smokey Eye, Halo Eye with varying coverage",
      "Full Looks: Self Makeup, Corporate, High Fashion, Bridal, Graphic Liner, Party",
      "Hair Training: Tools, Client Handling, Hair Analysis, Self Styling",
      "Advanced Hair: Twisted Bun/S Bun, Half Tie Braid, Bubble Braid, Sleek Braid with Lace",
      "Hair Techniques: Different Braids, Hollywood Hair Dryer, Back Combing, Volume Puff",
      "Extension Placement and Elegance Placement (Accessories)",
      "Additional Topics: Personality Development, Marketing Class, Confidence Building",
      "Profile Building and Career Launch Support",
      "Certificate upon completion"
    ],
    image: "/star1.png",
    images: ["/star1.png", "/star2.png", "/star3.png", "/star4.png"],
    thumbnails: ["/star1_150.png", "/star2_150.png", "/star3_150.png", "/star4_150.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2, 3: 3 },
    duration: "60 Days",
    level: "Masterclass",
    category: "Professional",
    students: "500+",
    rating: 5.0,
    price: 50000,
    curriculum: [
      {
        week: 1,
        title: "THEORY",
        topics: [
          "Rules & Regulations",
          "Self Grooming",
          "Safety & Hygiene",
          "Colour Theory",
          "Shades & Undertones",
          "Product Knowledge",
          "Brush Knowledge",
          "Skin Analysis, Types & Conditions",
          "Colour Mixing & Foundation Making Activity",
          "Face Chart",
        ],
      },
      {
        week: 2,
        title: "TECHNICAL MAKEUP CLASSES",
        topics: [
          "Corrective Eye Makeup + Sheer Coverage",
          "Smokey Eye Makeup + Medium Coverage",
          "Halo Eye Makeup + Full Coverage",
        ],
      },
      {
        week: 3,
        title: "FULL LOOKS",
        topics: [
          "Self Makeup Techniques",
          "Corporate Makeup Look",
          "High Fashion / Runway Ready Looks",
          "Timeless Bridal Makeup Look",
          "Graphic Liner Looks",
          "Party Makeup Look",
        ],
      },
      {
        week: 4,
        title: "ADDITIONAL TOPICS",
        topics: [
          "Personality Development",
          "Marketing Class",
          "Confidence Building",
          "Profile Building",
        ],
      },
      {
        week: 5,
        title: "HAIR - Fundamentals & Basic Styling",
        topics: [
          "Tools Knowledge",
          "Client Handeling",
          "Hair Analysis",
          "Basic Self Hair Styling (Straightening, Basic Curl)",
          "Twisted Bun / S Bun",
          "Half Tie Braid",
          "Bubble Braid",
        ],
      },
      {
        week: 6,
        title: "HAIR - Advanced Techniques",
        topics: [
          "Sleek Hair with Long Braid (with Lace)",
          "Different Braids",
          "Elegance Placement (Accessories)",
          "Hollywood Hair Dryer",
          "Back Combing Technique",
          "Volume building Puff",
          "Extension Placement",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    ],
  },
  {
    id: 9,
    title: "Self Makeup Course",
    description: "Learn professional self-makeup techniques for everyday looks, special occasions, and personal grooming.",
    fullDescription:
      "The Self Makeup Course is designed for individuals who want to master the art of doing their own makeup. This comprehensive 2-week course covers everything from basic skincare and makeup fundamentals to advanced techniques for creating stunning looks. Learn how to enhance your natural beauty, correct facial features, and create looks ranging from natural everyday makeup to glamorous evening styles. Perfect for anyone who wants to look their best for any occasion.",
    aboutPoints: [
      "Master everyday natural makeup looks",
      "Learn professional makeup application techniques",
      "Understand your face shape and features",
      "Color theory and product selection for your skin tone",
      "Contouring and highlighting techniques",
      "Eye makeup from basic to advanced",
      "Perfect your base makeup application",
      "Special occasion and evening makeup",
      "Makeup tools and brush knowledge",
      "Skincare basics and prep",
      "Long-lasting makeup tips",
      "Personalized guidance and feedback"
    ],
    image: "/self1.png",
    images: ["/self1.png", "/self2.png", "/self3.png", "/self4.png"],
    thumbnails: ["/self1_150.png", "/self2_150.png", "/self3_150.png", "/self4_150.png"],
    thumbnailMapping: { 0: 0, 1: 1, 2: 2, 3: 3 },
    duration: "2 Weeks",
    level: "Masterclass",
    category: "Personal",
    students: "1,200+",
    rating: 4.9,
    price: 15000,
    curriculum: [
      {
        week: 1,
        title: "Fundamentals & Natural Looks",
        topics: [
          "Skincare basics and makeup prep",
          "Understanding your face shape and features",
          "Color theory for makeup",
          "Foundation matching and application",
          "Concealer techniques",
          "Natural everyday makeup look",
          "Basic eye makeup",
          "Eyebrow shaping and filling",
          "Blush and lip color application",
          "Makeup tools and brushes"
        ],
      },
      {
        week: 2,
        title: "Advanced Techniques & Glam Looks",
        topics: [
          "Contouring and highlighting",
          "Advanced eye makeup techniques",
          "Smokey eye creation",
          "Winged eyeliner perfection",
          "False lashes application",
          "Evening and party makeup",
          "Special occasion looks",
          "Long-lasting makeup tips",
          "Makeup setting techniques",
          "Personalized look creation"
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "/mac1.png",
      "/mac2.png",
      "/mac3.png",
      "/mac4.png",
      "/Course 2.png",
    ],
  },
]

export function getCourseById(id: number): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

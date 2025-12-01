export interface Course {
  id: number
  title: string
  description: string
  fullDescription: string
  aboutPoints?: string[]
  image: string
  images: string[]
  duration: string
  level: string
  category: string
  students: string
  rating: number
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
    title: "Cosmetology",
    description: "Comprehensive course covering Nail, Skin, Makeup, and Hair with advanced techniques and certifications.",
    fullDescription:
      "Master the complete art of cosmetology with our comprehensive program covering Nail Care, Skin Treatments, Professional Makeup, and Hair Styling. This all-inclusive course provides in-depth training in nail art & extensions (20+ techniques including 3D, Marble, 9D art), advanced skincare treatments (facials, hyperpigmentation, anti-aging), professional makeup artistry, and complete hairstyling techniques (cuts, color, chemical treatments, extensions). Perfect for those seeking a complete beauty education with certification.",
    aboutPoints: [
      "Master complete cosmetology covering Nail Care, Skin Treatments, Professional Makeup, and Hair Styling",
      "Learn 20+ nail art techniques including 3D, Marble, and 9D art with gel & acrylic extensions",
      "Advanced skincare treatments: facials, hyperpigmentation, anti-aging, and hydra facial",
      "Professional makeup artistry from basics to advanced bridal and beauty looks",
      "Complete hairstyling: cuts, color, chemical treatments, and extensions",
      "Perfect for those seeking complete beauty education with certification"
    ],
    image: "/c1.webp",
    images: ["/c1.webp", "/c1.webp", "/c1.webp", "/c1.webp"],
    duration: "8-12 Weeks",
    level: "All Levels",
    category: "Professional",
    students: "3,500+",
    rating: 5.0,
    curriculum: [
      {
        week: 1,
        title: "Nail Course - Theory & Basics",
        topics: [
          "Theory of nail, product knowledge, tools & equipment",
          "Nail shaping, filing & cuticle care",
          "Nail structure fundamentals",
        ],
      },
      {
        week: 2,
        title: "Nail Art & Design (20+ Techniques)",
        topics: [
          "Dot, Lines, Stroke, Animal Print, Bow, Butterfly, Rose Art",
          "Dripping, Heart, Abstract, Multi French, Sticker Art",
          "Rhinestone, Stamping, Foil, Glitters, Spider Gel, 3D, Marble, 9D Art",
        ],
      },
      {
        week: 3,
        title: "Nail Extensions",
        topics: [
          "Gel & Acrylic extension - Natural nails & fake tips",
          "Removal, drilling machine, refilling",
        ],
      },
      {
        week: 4,
        title: "Skin Course - Fundamentals & Treatments",
        topics: [
          "Skin consultation, analysis, types & conditions",
          "Superfluous hair removal: Threading, Waxing, Bleach",
          "Cleansing, Toning, Exfoliation, Massage, Masks",
        ],
      },
      {
        week: 5,
        title: "Advanced Skin Treatments",
        topics: [
          "Facial machines: High frequency, Galvanic, Ultrasonic, Vacuum",
          "Hyperpigmentation, Anti-tan, Anti-acne, Anti-aging treatments",
          "Hydra facial, PMU (Eyebrows, Eyelash, Lip tinting)",
        ],
      },
      {
        week: 6,
        title: "Makeup Course - Basics to Advanced",
        topics: [
          "Skin prep, foundation, concealer, contour & highlight",
          "Eye makeup, brows, lips techniques",
          "Beauty & Bridal makeup looks",
        ],
      },
      {
        week: 7,
        title: "Hair Course - Cutting & Styling",
        topics: [
          "Hair structure, shampooing, conditioning",
          "Hair cuts: One length, V-shape, Bob variations, Graduation",
          "Upstyling: Waves, curls, braids, buns, Hollywood waves",
        ],
      },
      {
        week: 8,
        title: "Hair Chemicals & Extensions",
        topics: [
          "Color: Root touchup, highlights, balayage, ombre",
          "Smoothening, Rebonding, Keratin, Botox, Perming",
          "Hair extensions: Micro ring, Nano ring, Glue, Tape-in",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
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
    title: "Masters in Advanced Artistry",
    description: "Level 3 course including Masters in Makeup, Airbrush, Hairstyling, Creative Makeup & Career Counselling.",
    fullDescription:
      "The ultimate professional course for aspiring makeup artists. This comprehensive 3+ month program includes Masters in Makeup Artistry with Airbrush techniques, Basic to Advanced Hairstyling, Skin Science Insights with Manual Lymphatic Drainage, Creative Makeup Artistry featuring fashion, fantasy & Brazilian makeup looks, and a complete Career Counselling Course covering portfolio building, styling, draping, social media management, lighting & photography. Includes internship opportunities, professional portfolio enhancement, industry expert-led training, and professional makeup kit guidance. Level 3 includes Levels 1 & 2.",
    aboutPoints: [
      "Masters in Makeup Artistry with professional Airbrush techniques",
      "Basic to Advanced Hairstyling for all occasions and styles",
      "Skin Science Insights with Manual Lymphatic Drainage techniques",
      "Creative Makeup Artistry: fashion, fantasy & Brazilian makeup looks",
      "Career Counselling: portfolio building, styling, draping, social media & photography",
      "Internship opportunities with industry experts and professional portfolio enhancement",
      "Level 3 includes complete Levels 1 & 2 curriculum"
    ],
    image: "/c3.webp",
    images: ["/c3.webp", "/c3.webp", "/c3.webp", "/c3.webp"],
    duration: "3+ Months",
    level: "Advanced",
    category: "Professional",
    students: "1,800+",
    rating: 5.0,
    curriculum: [
      {
        week: 1,
        title: "Weeks 1-4: Masters in Makeup Artistry",
        topics: [
          "Basic to Advanced makeup techniques",
          "Beauty and Bridal makeup mastery",
          "Airbrush makeup through expert guidance",
        ],
      },
      {
        week: 2,
        title: "Weeks 5-6: Advanced Hairstyling",
        topics: [
          "Basic to advanced hairstyling techniques",
          "Bridal and editorial hairstyles",
          "Hair texture and styling mastery",
        ],
      },
      {
        week: 3,
        title: "Weeks 7-8: Skin Science & MLD",
        topics: [
          "Skin science insights and analysis",
          "Manual Lymphatic Drainage techniques",
          "Advanced skincare treatments",
        ],
      },
      {
        week: 4,
        title: "Weeks 9-10: Creative Makeup Artistry",
        topics: [
          "Fashion makeup and editorial looks",
          "Fantasy makeup and special effects",
          "Brazilian makeup techniques",
        ],
      },
      {
        week: 5,
        title: "Weeks 11-12: Career Counselling & Portfolio",
        topics: [
          "Portfolio building and styling",
          "Social media & profile building for artists",
          "Lighting & photography for makeup artists",
          "Draping and professional presentation",
        ],
      },
      {
        week: 6,
        title: "Final Weeks: Internship & Professional Development",
        topics: [
          "Internship opportunities with industry experts",
          "Professional portfolio enhancement",
          "Professional makeup kit guidance",
          "Industry networking and career launch",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Masters in Makeup Artistry Course",
    description: "Level 2 comprehensive course covering Basic to Advanced Makeup, Beauty, Bridal, Airbrush & Hair.",
    fullDescription:
      "The Masters in Makeup Artistry Course is designed to equip students with comprehensive knowledge and skills in makeup application. This Level 2 course (includes Level 1) covers Basic to Advanced Makeup including skin care, color theory, foundation & concealer, highlight & contour, eye makeup, brows & lips. Master Beauty and Bridal Makeup for various cultural looks including South Indian, Punjabi, Anand Karaj, celebrity, and Muslim brides. Learn Airbrush Makeup techniques, complete a 2-week Hair Course, MLD (Manual Lymphatic Drainage) classes, and benefit from Career Counselling covering profile building, social media, styling, and portfolio building with 4 in-house shoots. Includes internship opportunities and limited after-care programme.",
    aboutPoints: [
      "Basic to Advanced Makeup: skin care, color theory, foundation, concealer, highlight & contour",
      "Master eye makeup, brows & lips with professional techniques",
      "Beauty and Bridal Makeup for South Indian, Punjabi, Anand Karaj, celebrity & Muslim brides",
      "Professional Airbrush Makeup techniques for flawless finish",
      "2-week Hair Course and Manual Lymphatic Drainage (MLD) classes",
      "Career Counselling with 4 in-house portfolio shoots",
      "Internship opportunities and limited after-care programme (Level 2 includes Level 1)"
    ],
    image: "/c4.webp",
    images: ["/c4.webp", "/c4.webp", "/c4.webp", "/c4.webp"],
    duration: "10-12 Weeks",
    level: "Intermediate to Advanced",
    category: "Professional",
    students: "2,800+",
    rating: 4.9,
    curriculum: [
      {
        week: 1,
        title: "Weeks 1-2: Skin Care & Makeup Basics",
        topics: [
          "Skin types, assessment, tones, undertones, Fitzpatrick scale",
          "CTM, skin prep, vanity essentials, hygiene",
          "Color theory: Neutralization, color wheel, mixing",
        ],
      },
      {
        week: 2,
        title: "Weeks 3-4: Foundation, Concealer & Contouring",
        topics: [
          "Face shape analysis, corrective techniques",
          "Foundation & concealer application for all skin types",
          "Highlight & contour, facial anatomy, baking techniques",
        ],
      },
      {
        week: 3,
        title: "Weeks 5-6: Eye Makeup & Features",
        topics: [
          "Eye shape analysis, eyeliner techniques",
          "Advanced eye makeup, false lashes, blending",
          "Eyebrow shaping, measurement, filling, lip techniques",
        ],
      },
      {
        week: 4,
        title: "Weeks 7-8: Beauty & Bridal Makeup",
        topics: [
          "Beauty looks: Reception, cocktail, Haldi, Mehendi",
          "Cultural bridal looks: South Indian, Punjabi, Anand Karaj",
          "Celebrity and Balma/Muslim bridal makeup",
        ],
      },
      {
        week: 5,
        title: "Weeks 9-10: Airbrush & Hair Course",
        topics: [
          "In-depth airbrush makeup techniques",
          "Hair styling: Tools, curls, waves, braids",
          "Bridal hairstyles and Hollywood waves",
        ],
      },
      {
        week: 6,
        title: "Weeks 11-12: MLD, Career & Portfolio",
        topics: [
          "Manual Lymphatic Drainage, skin structure, skincare",
          "Profile building, social media, photography, lighting",
          "4 in-house portfolio shoots, CV building, interviews",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
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
    title: "Professional Makeup Artistry Course",
    description: "Level 1 course covering Beauty & Bridal makeup with fashion, editorial, and red carpet techniques.",
    fullDescription:
      "Professional Makeup Artistry Course - Level One covering comprehensive makeup education. Master Skin Theory including skin types, conditions, and complexion techniques for creating dimensions using contouring, blush, and highlighting. Learn Foundation application at three levels (light, medium, full coverage) with different finishes (dewy, radiant, matte, ultra-matte). Study face shapes and corrections. Master Eye Makeup from basic to advanced including 3-Tone Eyeshadow, Black Smoky Eye, Half Cut Crease, and Halo Eye. Learn Lip correction, shading, and tinting. Explore Fashion and Editorial Makeup including HD Makeup, Glass Skin techniques, Photography tips, Foxy Makeup, and Red Carpet looks. Complete training in Bridal Makeup covering Classic Bridal, Engagement/Reception, and Traditional Indian Bridal techniques.",
    aboutPoints: [
      "Master Skin Theory: skin types, conditions, contouring, blush & highlighting",
      "Foundation application at three levels with dewy, radiant, matte & ultra-matte finishes",
      "Face shapes and corrections for perfect makeup application",
      "Eye Makeup mastery: 3-Tone Eyeshadow, Black Smoky Eye, Half Cut Crease & Halo Eye",
      "Lip correction, shading, and tinting techniques",
      "Fashion & Editorial Makeup: HD, Glass Skin, Photography tips, Foxy & Red Carpet looks",
      "Complete Bridal Makeup: Classic Bridal, Engagement/Reception & Traditional Indian Bridal"
    ],
    image: "/c6.webp",
    images: ["/c6.webp", "/c6.webp", "/c6.webp", "/c6.webp"],
    duration: "6-8 Weeks",
    level: "Beginner",
    category: "Makeup",
    students: "3,200+",
    rating: 4.9,
    curriculum: [
      {
        week: 1,
        title: "Week 1-2: Skin Theory & Foundation",
        topics: [
          "Skin types, conditions, and complexion techniques",
          "Foundation levels: Light, medium, full coverage",
          "Finishes: Dewy, radiant, matte, ultra-matte",
          "Face shapes and corrections",
        ],
      },
      {
        week: 2,
        title: "Week 3-4: Eye & Lip Makeup",
        topics: [
          "Basic to Advanced Eye Makeup techniques",
          "3-Tone Eyeshadow, Black Smoky Eye",
          "Half Cut Crease, Halo Eye",
          "Lip correction, shading, and tinting",
        ],
      },
      {
        week: 3,
        title: "Week 5-6: Fashion & Editorial Makeup",
        topics: [
          "HD Makeup and Glass Skin techniques",
          "Photography tips for editorial looks",
          "Foxy Makeup for fresh, oxygenated look",
          "Red Carpet Makeup - long-lasting glamorous looks",
        ],
      },
      {
        week: 4,
        title: "Week 7-8: Bridal Makeup Mastery",
        topics: [
          "Classic Bridal: Colorful eyeshadow with dewy base",
          "Engagement/Reception: Full glam with cool tones",
          "Indian Bridal: Red tones, bold lipstick, full coverage",
          "Long-lasting techniques for weddings",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    ],
  },
  {
    id: 7,
    title: "Self Makeup Course",
    description: "Learn to perfect your own makeup from nude to glam looks with personalized guidance.",
    fullDescription:
      "The Self Makeup Course is designed for individuals who want to master the art of doing their own makeup. This 3-day intensive course covers everything from Nude Makeup (natural yet attractive looks with minimal products) to Glam Makeup (smokey and glittery eyes, full coverage, dewy finish) and Advanced Glam Makeup (cut crease techniques, glitter application). Learn best practices for low-intensity products, skin analysis, skincare tips, essential products and tools, face and eye shape correction, soft and intense contouring, blush and highlight techniques, vanity organization, and hygiene maintenance. Receive personalized feedback, one-on-one guidance, step-by-step tutorials tailored to your unique features, insider secrets for quick and flawless application, and access to a community of makeup enthusiasts. Hairstyling can be added upon special request.",
    aboutPoints: [
      "Nude Makeup: natural yet attractive looks with minimal products",
      "Glam Makeup: smokey and glittery eyes, full coverage with dewy finish",
      "Advanced Glam: cut crease techniques and glitter application",
      "Skin analysis, skincare tips, essential products and tools guidance",
      "Face and eye shape correction with soft and intense contouring",
      "Personalized feedback and one-on-one guidance tailored to your features",
      "Vanity organization, hygiene maintenance & insider secrets for flawless application"
    ],
    image: "/c7.webp",
    images: ["/c7.webp", "/c7.webp", "/c7.webp", "/c7.webp"],
    duration: "3 Days",
    level: "Beginner",
    category: "Self Makeup",
    students: "4,100+",
    rating: 4.7,
    curriculum: [
      {
        week: 1,
        title: "Day 1: Nude Makeup Look",
        topics: [
          "Natural yet attractive look with minimal makeup",
          "Skin analysis and skincare tips",
          "Essential products for healthy vanity",
          "Face and eye shape correction, soft CBH",
          "Vanity organization and hygiene tips",
        ],
      },
      {
        week: 2,
        title: "Day 2: Glam Makeup",
        topics: [
          "Smokey and glittery eye makeup techniques",
          "Full coverage foundation application",
          "Achieving dewy finish",
          "Intense contour, blush, and highlight",
          "Glamorous lipstick with lip gloss",
        ],
      },
      {
        week: 3,
        title: "Day 3: Advanced Glam Makeup",
        topics: [
          "Cut crease eye makeup techniques",
          "Glitter and shimmer application",
          "Advanced techniques for standout looks",
          "Hygiene and cleanliness maintenance",
          "Industry expert tips and tricks",
        ],
      },
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    ],
  },
  {
    id: 8,
    title: "Skin Course",
    description: "Professional beauty and skin course covering facials, treatments, manicure, pedicure & PMU.",
    fullDescription:
      "Professional Beauty and Skin Course covering comprehensive skincare education. Learn Professionalism including personal grooming, hygiene, client communication, bed and trolley setting, and salon management. Master Hygiene & Safety with basic to advanced tools and equipment, salon etiquette, and time management. Study Client Consultation techniques, skin consultation & analysis, human anatomy, and skin structure. Learn Superfluous Hair Removal including threading, waxing (normal, liposoluble, peel-off), and bleaching. Master Skin Care Theory covering cleansing, toning, exfoliation, extraction, massage, masks, and packs. Perform Facials & Cleanup tailored to different skin types (basic, fruit, gold). Study Advanced Skin Care including facial machines (high-frequency, galvanic, ultrasonic, vacuum suction) and specialized treatments (hyperpigmentation, detoxification, anti-tan, anti-acne, anti-aging, moisturizing, whitening). Learn Manicure & Pedicure techniques (basic, paraffin wax, anti-tan, crystal), Hydra Facial, and PMU (Permanent Makeup) including eyebrow filling, eyelash uplifting, and lip tinting.",
    aboutPoints: [
      "Professionalism: personal grooming, hygiene, client communication & salon management",
      "Hygiene & Safety with advanced tools, equipment, salon etiquette & time management",
      "Client Consultation, skin analysis, human anatomy & skin structure",
      "Superfluous Hair Removal: threading, waxing (normal, liposoluble, peel-off) & bleaching",
      "Skin Care Theory: cleansing, toning, exfoliation, extraction, massage, masks & packs",
      "Facials & Cleanup for different skin types (basic, fruit, gold)",
      "Advanced treatments: facial machines, hyperpigmentation, anti-tan, anti-acne, anti-aging",
      "Manicure & Pedicure (basic, paraffin wax, anti-tan, crystal), Hydra Facial & PMU"
    ],
    image: "/c8.webp",
    images: ["/c8.webp", "/c8.webp", "/c8.webp", "/c8.webp"],
    duration: "6-8 Weeks",
    level: "Beginner to Advanced",
    category: "Skin",
    students: "2,600+",
    rating: 4.8,
    curriculum: [
      {
        week: 1,
        title: "Week 1-2: Professionalism & Consultation",
        topics: [
          "Personal grooming, hygiene, client communication",
          "Bed and trolley setting, salon management",
          "Hygiene & safety, tools & equipment",
          "Client consultation, skin analysis, human anatomy",
        ],
      },
      {
        week: 2,
        title: "Week 3-4: Hair Removal & Basic Skincare",
        topics: [
          "Threading, waxing (normal, liposoluble, peel-off)",
          "Bleaching techniques",
          "Cleansing, toning, exfoliation, extraction",
          "Massage techniques, masks and packs",
        ],
      },
      {
        week: 3,
        title: "Week 4-5: Facials & Cleanup",
        topics: [
          "Importance of facials and cleanup",
          "Cleanup according to skin types",
          "Basic, Fruit, and Gold facials",
          "Customizing treatments for different skin conditions",
        ],
      },
      {
        week: 4,
        title: "Week 5-6: Advanced Skin Treatments",
        topics: [
          "Facial machines: High-frequency, galvanic, ultrasonic, vacuum",
          "Hyperpigmentation and skin detoxification treatment",
          "Anti-tan, anti-acne, anti-aging treatments",
          "Intense moisturizing and skin whitening treatment",
        ],
      },
      {
        week: 5,
        title: "Week 7: Manicure & Pedicure",
        topics: [
          "Nail structure, diseases, tools & equipment",
          "Basic manicure and pedicure",
          "Paraffin wax, anti-tan techniques",
          "Crystal manicure and pedicure",
        ],
      },
      {
        week: 6,
        title: "Week 8: Hydra Facial & PMU",
        topics: [
          "Hydra facial procedure and benefits",
          "Permanent Makeup (PMU) introduction",
          "Eyebrow filling techniques",
          "Eyelash uplifting and lip tinting",
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
]

export function getCourseById(id: number): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

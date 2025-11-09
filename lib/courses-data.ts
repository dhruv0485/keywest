export interface Course {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  price: string
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

const defaultCurriculum = [
  {
    week: 1,
    title: "Introduction & Fundamentals",
    topics: ["Course overview", "Essential tools and materials", "Basic techniques"],
  },
  {
    week: 2,
    title: "Core Techniques",
    topics: ["Advanced methods", "Practical applications", "Hands-on practice"],
  },
  {
    week: 3,
    title: "Specialized Skills",
    topics: ["Industry standards", "Professional tips", "Real-world scenarios"],
  },
  {
    week: 4,
    title: "Final Project & Certification",
    topics: ["Portfolio development", "Final assessment", "Certification exam"],
  },
]

const defaultReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing course! The instructor was very knowledgeable and patient. I learned so much!",
    date: "2 weeks ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Emily Davis",
    rating: 4,
    comment: "Great course for anyone looking to improve their skills. Highly recommended!",
    date: "1 month ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Jessica Martinez",
    rating: 5,
    comment: "The best investment I made in my career. Thank you!",
    date: "2 months ago",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
]

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Foundation Makeup Mastery",
    description: "Learn the fundamentals of makeup application, color theory, and skin preparation techniques.",
    fullDescription:
      "Master the art of foundation makeup with our comprehensive course. Learn professional techniques for skin preparation, color matching, and flawless application. This course covers everything from basic makeup theory to advanced blending techniques, ensuring you have a solid foundation in makeup artistry.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    ],
    price: "$299",
    duration: "6 Weeks",
    level: "Beginner",
    category: "Basic",
    students: "2,500+",
    rating: 4.8,
    curriculum: [
      {
        week: 1,
        title: "Introduction to Makeup Basics",
        topics: ["Makeup tools and brushes", "Skin types and preparation", "Color theory fundamentals"],
      },
      {
        week: 2,
        title: "Foundation Techniques",
        topics: ["Foundation types and selection", "Application methods", "Color matching"],
      },
      {
        week: 3,
        title: "Concealing & Correcting",
        topics: ["Color correction", "Concealer application", "Under-eye techniques"],
      },
      {
        week: 4,
        title: "Contouring Basics",
        topics: ["Face shapes", "Contouring techniques", "Highlighting methods"],
      },
      {
        week: 5,
        title: "Eye Makeup Fundamentals",
        topics: ["Eyeshadow application", "Eyeliner techniques", "Mascara tips"],
      },
      {
        week: 6,
        title: "Final Project & Certification",
        topics: ["Complete makeup look", "Portfolio building", "Certification exam"],
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
    ],
  },
  {
    id: 2,
    title: "Bridal Makeup Artistry",
    description: "Master the art of creating stunning bridal looks for the perfect wedding day.",
    fullDescription:
      "Become a sought-after bridal makeup artist with our comprehensive training. Learn to create timeless, camera-ready looks that last all day. Master techniques for different skin tones, face shapes, and wedding themes.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    ],
    price: "$499",
    duration: "8 Weeks",
    level: "Intermediate",
    category: "Bridal",
    students: "1,800+",
    rating: 4.9,
    curriculum: [
      ...defaultCurriculum.slice(0, 3),
      { week: 4, title: "Bridal Consultation", topics: ["Client communication", "Trial sessions", "Wedding day prep"] },
      ...defaultCurriculum.slice(3),
    ],
    reviews: defaultReviews,
    galleryImages: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    ],
  },
]

export function getCourseById(id: number): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

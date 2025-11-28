"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const students = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop",
    timeline: "6 Months Professional Course",
    descriptions: [
      {
        title: "Month 1-2: Foundation Building",
        text: "Started her journey with basic makeup techniques, learning color theory, skin preparation, and fundamental application methods. Practiced on various skin types and tones to build confidence and precision.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop",
      },
      {
        title: "Month 3-4: Specialization Phase",
        text: "Mastered bridal and party makeup with intensive training in traditional and contemporary styles. Completed 30+ practice sessions on live models, perfecting her signature bridal look that combines elegance with modern trends.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
      },
      {
        title: "Month 5-6: Professional Success",
        text: "Now working with top fashion brands and celebrity clients. Successfully launched her freelance career with a strong portfolio, earning recognition for her innovative techniques and impeccable attention to detail.",
        image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 2,
    name: "Ananya Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    timeline: "3 Months Advanced Course",
    descriptions: [
      {
        title: "Advanced Techniques Mastery",
        text: "Specialized in HD and airbrush makeup techniques with focus on camera-ready looks. Learned professional equipment handling, product selection, and advanced blending methods for flawless high-definition results.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=200&fit=crop",
      },
      {
        title: "Building Client Portfolio",
        text: "Completed 50+ bridal assignments during and after training, establishing herself as a sought-after bridal makeup artist. Built a diverse portfolio showcasing her versatility across different wedding themes and cultural traditions.",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=200&fit=crop",
      },
      {
        title: "Entrepreneurial Achievement",
        text: "Launched her own makeup studio 'Glam by Ananya' with state-of-the-art facilities. Now manages a team of 3 makeup artists and serves 20+ clients weekly, specializing in bridal and special occasion makeup.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 3,
    name: "Riya Mehta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    timeline: "4 Months Complete Course",
    descriptions: [
      {
        title: "Editorial & Fashion Training",
        text: "Learned editorial and fashion makeup with emphasis on runway trends, avant-garde looks, and creative expression. Mastered the art of creating bold, camera-ready looks that translate beautifully in print and digital media.",
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300&h=200&fit=crop",
      },
      {
        title: "Industry Experience",
        text: "Worked on multiple professional photoshoots with renowned photographers and fashion designers. Gained hands-on experience in fast-paced studio environments, learning to adapt quickly and deliver consistent results under pressure.",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&h=200&fit=crop",
      },
      {
        title: "Media Recognition",
        text: "Featured in leading fashion magazines including Vogue India and Elle. Her work has been showcased in 15+ editorial spreads, establishing her reputation as a creative force in the fashion makeup industry.",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 4,
    name: "Sneha Reddy",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    timeline: "5 Months Professional Course",
    descriptions: [
      {
        title: "Cultural & Contemporary Fusion",
        text: "Developed expertise in both traditional South Indian bridal looks and modern contemporary styles. Mastered the art of blending cultural authenticity with current trends, creating unique looks that honor tradition while embracing innovation.",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=300&h=200&fit=crop",
      },
      {
        title: "Special Effects Certification",
        text: "Certified in special effects makeup including prosthetics, wound simulation, and character transformation. Completed advanced training in theatrical and film makeup, expanding her skill set beyond beauty makeup.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=200&fit=crop",
      },
      {
        title: "Film Industry Career",
        text: "Working with film industry professionals on major productions. Contributed to 8+ feature films and web series, collaborating with directors and cinematographers to create memorable character looks.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 5,
    name: "Kavya Singh",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop",
    timeline: "6 Months Master Course",
    descriptions: [
      {
        title: "Bridal Specialization",
        text: "Specialized in bridal and party makeup with comprehensive training in North Indian, South Indian, and fusion wedding styles. Perfected the art of creating long-lasting, photograph-perfect looks that withstand hours of celebration.",
        image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&h=200&fit=crop",
      },
      {
        title: "Digital Marketing Success",
        text: "Built a strong social media presence with 50K+ followers across Instagram and YouTube. Creates engaging makeup tutorials and transformation videos, establishing herself as an influencer and educator in the beauty community.",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=200&fit=crop",
      },
      {
        title: "Business Excellence",
        text: "Running successful makeup business 'Kavya's Bridal Studio' with monthly revenue exceeding ₹5 lakhs. Manages bookings 3 months in advance and has expanded to offer makeup courses for aspiring artists.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 6,
    name: "Meera Kapoor",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop",
    timeline: "3 Months Quick Course",
    descriptions: [
      {
        title: "Natural & Glam Expertise",
        text: "Focused on natural and glam looks, mastering the 'no-makeup' makeup trend and red carpet glamour. Learned to enhance natural beauty while creating stunning transformations for special occasions and events.",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=200&fit=crop",
      },
      {
        title: "Celebrity Makeup Training",
        text: "Completed specialized celebrity makeup training with focus on high-profile events and media appearances. Trained in working under time pressure while maintaining perfection for cameras and public scrutiny.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=200&fit=crop",
      },
      {
        title: "Professional Collaborations",
        text: "Working with renowned photographers on fashion editorials and celebrity portfolios. Her work has been featured in major advertising campaigns and has styled makeup for 25+ celebrity photoshoots.",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 7,
    name: "Ishita Verma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    timeline: "4 Months Advanced Course",
    descriptions: [
      {
        title: "Sculpting Techniques",
        text: "Mastered advanced contouring and highlighting techniques to create dimensional, sculpted looks. Specialized in face mapping and customizing techniques for different face shapes, ensuring each client's best features shine.",
        image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&h=200&fit=crop",
      },
      {
        title: "Destination Wedding Expert",
        text: "Specialized in destination weddings, learning to work in various climates and lighting conditions. Perfected long-wear makeup techniques that withstand heat, humidity, and hours of celebration in exotic locations.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
      },
      {
        title: "Global Career",
        text: "Traveling makeup artist covering weddings across India, Dubai, Thailand, and Europe. Has worked on 40+ destination weddings, building an international clientele and reputation for reliability and excellence.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 8,
    name: "Aisha Khan",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop",
    timeline: "5 Months Professional Course",
    descriptions: [
      {
        title: "Airbrush Mastery",
        text: "Expert in airbrush techniques with certification in professional airbrush systems. Mastered the art of creating flawless, skin-like finishes perfect for HD photography and video. Specializes in bridal and editorial airbrush makeup.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop",
      },
      {
        title: "Fashion Industry Collaboration",
        text: "Working with top fashion designers including Manish Malhotra and Sabyasachi teams. Regular makeup artist for fashion weeks in Mumbai and Delhi, creating runway looks that complement designer collections perfectly.",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=200&fit=crop",
      },
      {
        title: "Brand Ambassador",
        text: "Featured in major beauty campaigns for MAC, Huda Beauty, and Lakme. Serves as brand ambassador and educator, conducting masterclasses and representing premium beauty brands at industry events.",
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 9,
    name: "Tanvi Joshi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    timeline: "6 Months Complete Course",
    descriptions: [
      {
        title: "Editorial Excellence",
        text: "Specialized in editorial makeup with focus on creative, artistic looks for print and digital media. Developed signature style combining bold colors, innovative techniques, and artistic vision that stands out in competitive fashion industry.",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&h=200&fit=crop",
      },
      {
        title: "Brand Partnerships",
        text: "Collaborated with top brands including Nykaa, Sugar Cosmetics, and Maybelline on product launches and campaigns. Created viral makeup looks that generated millions of impressions across social media platforms.",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=300&h=200&fit=crop",
      },
      {
        title: "Entrepreneurial Vision",
        text: "Building her makeup empire with plans to launch her own cosmetics line. Currently operates two studios, trains aspiring makeup artists, and has created a successful online course with 500+ enrolled students.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=200&fit=crop",
      },
    ],
  },
  {
    id: 10,
    name: "Nisha Gupta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    timeline: "4 Months Master Course",
    descriptions: [
      {
        title: "Bridal & Party Specialist",
        text: "Expert in bridal and party looks with comprehensive knowledge of Indian and Western makeup styles. Creates customized looks that reflect each client's personality while ensuring they look stunning in person and photographs.",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=200&fit=crop",
      },
      {
        title: "International Training",
        text: "Trained in international techniques including Korean beauty trends, European elegance, and American glam. Attended masterclasses in London and Dubai, bringing global expertise to Indian clientele.",
        image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&h=200&fit=crop",
      },
      {
        title: "Freelance Success",
        text: "Successful freelance makeup artist with 100+ five-star reviews and consistent bookings. Earns ₹3-4 lakhs monthly, working with high-profile clients and maintaining a perfect track record of client satisfaction.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=200&fit=crop",
      },
    ],
  },
]

export default function StudentShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [descIndex, setDescIndex] = useState(0)

  const currentStudent = students[currentIndex]

  const nextStudent = () => {
    setCurrentIndex((prev) => (prev + 1) % students.length)
    setDescIndex(0)
  }

  const prevStudent = () => {
    setCurrentIndex((prev) => (prev - 1 + students.length) % students.length)
    setDescIndex(0)
  }

  // Auto-rotate descriptions
  useState(() => {
    const interval = setInterval(() => {
      setDescIndex((prev) => (prev + 1) % currentStudent.descriptions.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Our Success Stories
        </motion.h2>

        {/* Photo Grid with Hover Names */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 max-w-7xl mx-auto">
          {students.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => {
                setCurrentIndex(student.id - 1)
                setDescIndex(0)
              }}
              className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-serif font-bold text-lg">{student.name}</h3>
                  <p className="text-white/80 text-sm font-sans">{student.timeline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

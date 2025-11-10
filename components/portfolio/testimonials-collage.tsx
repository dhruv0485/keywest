"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "This academy transformed my passion into a profession. The trainers are exceptional!",
    rating: 5,
    course: "Professional Makeup",
  },
  {
    id: 2,
    name: "Ananya Patel",
    text: "Best decision of my life! Now I'm a successful makeup artist working with celebrities.",
    rating: 5,
    course: "Advanced Course",
  },
  {
    id: 3,
    name: "Riya Mehta",
    text: "The hands-on training and industry exposure helped me launch my own studio.",
    rating: 5,
    course: "Complete Course",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    text: "Amazing faculty and world-class facilities. Highly recommend to aspiring makeup artists!",
    rating: 5,
    course: "Professional Course",
  },
  {
    id: 5,
    name: "Kavya Singh",
    text: "The practical sessions and real-world projects gave me confidence to start my business.",
    rating: 5,
    course: "Master Course",
  },
  {
    id: 6,
    name: "Meera Kapoor",
    text: "From zero to hero! The academy's training is comprehensive and industry-relevant.",
    rating: 5,
    course: "Quick Course",
  },
  {
    id: 7,
    name: "Ishita Verma",
    text: "The best investment in my career. Now working with top fashion brands!",
    rating: 5,
    course: "Advanced Course",
  },
  {
    id: 8,
    name: "Aisha Khan",
    text: "Excellent curriculum and supportive mentors. Grateful for this opportunity!",
    rating: 5,
    course: "Professional Course",
  },
  {
    id: 9,
    name: "Tanvi Joshi",
    text: "The academy opened doors to endless opportunities in the beauty industry.",
    rating: 5,
    course: "Complete Course",
  },
  {
    id: 10,
    name: "Nisha Gupta",
    text: "Life-changing experience! The skills I learned here are invaluable.",
    rating: 5,
    course: "Master Course",
  },
  {
    id: 11,
    name: "Divya Iyer",
    text: "Professional environment with state-of-the-art equipment. Worth every penny!",
    rating: 5,
    course: "Professional Course",
  },
  {
    id: 12,
    name: "Pooja Desai",
    text: "The trainers are industry experts who genuinely care about student success.",
    rating: 5,
    course: "Advanced Course",
  },
  {
    id: 13,
    name: "Simran Kaur",
    text: "From learning basics to mastering advanced techniques - this academy has it all!",
    rating: 5,
    course: "Complete Course",
  },
  {
    id: 14,
    name: "Anjali Nair",
    text: "The placement support and industry connections helped me kickstart my career.",
    rating: 5,
    course: "Professional Course",
  },
  {
    id: 15,
    name: "Rhea Malhotra",
    text: "Best makeup academy! The practical training and certification boosted my confidence.",
    rating: 5,
    course: "Master Course",
  },
]

export default function TestimonialsCollage() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real students who transformed their dreams into reality
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-full">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">{testimonial.course}</p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  {testimonial.text}
                </p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/enquiry"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

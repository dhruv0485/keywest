export default function CoursesSection() {
  const courses = [
    {
      title: "Level 1 - Professional Makeup Course",
      description: "Foundation course covering essential makeup techniques and professional skills for aspiring makeup artists.",
      image: "/c1.webp",
      duration: "Variable",
      level: "Level 1",
    },
    {
      title: "Level 2 - Masters in Makeup Artistry Course",
      description: "Advanced course covering comprehensive makeup artistry, bridal makeup, and professional techniques.",
      image: "/c2.webp",
      duration: "Variable",
      level: "Level 2",
    },
    {
      title: "Level 3 - MasterPro Artistry Certification",
      description: "Expert-level certification including advanced techniques, creative makeup, and industry specialization.",
      image: "/c3.webp",
      duration: "Variable",
      level: "Level 3",
    },
    {
      title: "Level 4 - Global Elite Artistry Program",
      description: "Elite program for international standards, fashion week preparation, and global career opportunities.",
      image: "/c4.webp",
      duration: "Variable",
      level: "Level 4",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Featured Courses</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our carefully designed courses to elevate your makeup skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-primary/30 hover:border-primary hover:scale-105"
            >
              <div className="relative overflow-hidden h-56 md:h-64 bg-white">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Course Details */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span>Certificate</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="pt-4 border-t border-gray-800">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-5 py-3 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all text-sm font-semibold hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

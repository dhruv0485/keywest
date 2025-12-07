"use client"

import { useState } from "react"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, X } from "lucide-react"

export default function Footer() {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<"privacy" | "refund" | "terms" | null>(null)

  const openModal = (type: "privacy" | "refund" | "terms") => {
    setModalContent(type)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalContent(null)
  }
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KEYWEST ACADEMY OF BEAUTY & MAKEUP
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering beauty professionals through expert training and comprehensive courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-white/70 hover:text-primary transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-white/70 hover:text-primary transition-colors">
                  Student Portfolio
                </a>
              </li>
              <li>
                <a href="/enquiry" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>9811020094, 9899116884</span>
              </div>
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>info@keywestacademy.in</span>
              </div>
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>Building no. 63, 2nd floor, Lajpat Nagar 3, New Delhi - 110057</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/keywestacademy.in?igsh=OGU1dGMxbW04OWpq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 KEYWEST ACADEMY OF BEAUTY & MAKEUP. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <button
                onClick={() => openModal("privacy")}
                className="text-white/60 hover:text-primary transition-colors underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal("refund")}
                className="text-white/60 hover:text-primary transition-colors underline"
              >
                Refund Policy
              </button>
              <button
                onClick={() => openModal("terms")}
                className="text-white/60 hover:text-primary transition-colors underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div className="text-center sm:text-right mt-4 text-sm text-white/60">
            <p>Monday to Saturday (10 AM - 7 PM)</p>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 lg:p-10">
              {modalContent === "privacy" && (
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                    Privacy Policy
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">1. Introduction</h3>
                      <p>Welcome to Key West Academy. This privacy policy explains how we collect, use, protect, and disclose information and data when you use our website [https://keywestacademy.in/] (the "Site"). We respect your privacy and are committed to protecting it through our compliance with this policy.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">2. Information Collection</h3>
                      <p><strong>Personal Information:</strong> We collect personal information that you voluntarily provide to us, including but not limited to, your name, email address, phone number, and any other information you choose to provide.</p>
                      <p className="mt-2"><strong>Usage Data:</strong> We automatically collect information about how the Site is accessed and used. This may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">3. Use of Information</h3>
                      <p>The information we collect is used to provide, maintain, and improve our services, to communicate with you, to provide customer support, and to enhance your experience.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">4. Sharing of Information</h3>
                      <p>We do not share your personal information with third parties except as necessary to fulfill the purposes for which it is collected, such as providing our services to you, complying with legal obligations, or protecting the safety of our users.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">5. Data Security</h3>
                      <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">6. Cookies and Tracking Technologies</h3>
                      <p>We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">7. Your Rights</h3>
                      <p>You have certain rights in relation to the personal information we hold about you. These may include the right to access, modify, or delete the information we have about you.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">8. Changes to This Privacy Policy</h3>
                      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">9. Contact Us</h3>
                      <p>If you have any questions about this Privacy Policy, please contact us via email at info@keywestacademy.in</p>
                    </section>
                  </div>
                </div>
              )}

              {modalContent === "refund" && (
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                    Refund Policy
                  </h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Rules & Regulations</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>Fee once paid, no request for fee refund is entertained.</li>
                        <li>Students using fee installment options have to clear the fees before starting of 3rd week of the course. In case the fee is not cleared till then, it will lead to termination of student services. Re-admission fee is applicable in such cases.</li>
                        <li>No fee installment for PMU course.</li>
                        <li>Separate fee is applicable for certified international accreditation courses.</li>
                        <li>Student must retain all original fee slips which may be required till course completion.</li>
                        <li>Course dates subject to change depending on the government rules on Covid-19 precautions for educational academy in India.</li>
                        <li>Consent letter must be duly signed by parents/guardian for below 16-year students.</li>
                        <li>Security amount of ₹200/- will be charged for lockers used by student.</li>
                        <li>Aftercare programme is valid only for students who are a part of the Masters in Advanced Artistry course. This is only valid for 6 months post their certification date. Students can take up to 5 classes.</li>
                        <li>Any damage or theft in academy by the student, he/she will be liable to pay the expense.</li>
                      </ol>
                    </section>
                  </div>
                </div>
              )}

              {modalContent === "terms" && (
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                    Terms & Conditions
                  </h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Rules & Regulations</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>Fee once paid, no request for fee refund is entertained.</li>
                        <li>Students using fee installment options have to clear the fees before starting of 3rd week of the course. In case the fee is not cleared till then, it will lead to termination of student services. Re-admission fee is applicable in such cases.</li>
                        <li>No fee installment for PMU course.</li>
                        <li>Separate fee is applicable for certified international accreditation courses.</li>
                        <li>Student must retain all original fee slips which may be required till course completion.</li>
                        <li>Course dates subject to change depending on the government rules on Covid-19 precautions for educational academy in India.</li>
                        <li>Consent letter must be duly signed by parents/guardian for below 16-year students.</li>
                        <li>Security amount of ₹200/- will be charged for lockers used by student.</li>
                        <li>Aftercare programme is valid only for students who are a part of the Masters in Advanced Artistry course. This is only valid for 6 months post their certification date. Students can take up to 5 classes.</li>
                        <li>Any damage or theft in academy by the student, he/she will be liable to pay the expense.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Examination & Passing Certificates</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>Every training programme is complete after an assessment of theory and practical examination. These exams are conducted as per guidelines laid by Keywest Academy.</li>
                        <li>A course completion certificate is issued to the students only on successful completion of the course and examination.</li>
                        <li>Certificate will be issued to students on successful completion of the course subject to clearance of any outstanding fee dues.</li>
                        <li>In case of loss or damage to the certificate, a duplicate one will be issued at additional cost.</li>
                        <li>Once the student appears for the examination, no re-exam is allowed.</li>
                        <li>Certificates have to be collected in person from the academy itself.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Attendance and Leave</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>A minimum of 80% attendance is required to be eligible for examination. The student attendance record is maintained in log books and the students have to sign the log book daily.</li>
                        <li>In case of medical issues, the leave application has to be supported by medical certificate.</li>
                        <li>In case of uninformed absence for more than 7 days, the student's name will be struck off rolls and he/she will have to rejoin.</li>
                      </ol>
                      <p className="mt-3 text-gray-300">Students are not allowed to bring any outsider during the working hours.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Grounds of Termination</h3>
                      <p className="text-gray-300">Indiscipline or misbehaviour in the academy premises calls for immediate termination. Keywest Academy reserves the rights to terminate the student without any notice and fee refund.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Degrading a Course</h3>
                      <p className="text-gray-300">Degrading course is not permissible. However, academy reserves the right to change the policy.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Batch Timings</h3>
                      <p className="text-gray-300">The student has to follow the batch timings allotted to him/her at the time of admission. The student agrees to follow the batch timings allotted to them at admission time. Request to change batch timings will be the management's decision.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Punctuality & Discipline</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>Student must report 15 minutes before their batch timings. If a student is late, the class topic will not be repeated.</li>
                        <li>Students are responsible for their own belongings. Keywest Academy will not be responsible for any loss of valuables.</li>
                        <li>Students have to volunteer for being a model during class demos.</li>
                        <li>The use of mobile phone is prohibited in classes. In case of non-adherence, the management reserves the rights to confiscate the phone and take disciplinary action.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Photos and Videos</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>Keywest Academy reserves the rights to use any photographs or videos taken during the programme on brand promotion and social platforms.</li>
                        <li>No videos or photographs of presentations to be taken while classes are being conducted.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Student Redressal Mechanism</h3>
                      <p className="text-gray-300">For any kind of student issues and concerns, you may write a mail at the mail ID shared with you at the time of admission.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Student Products & Kits</h3>
                      <p className="text-gray-300">The student have to use officially approved products and kits in the classroom. Any unauthorised products usage is not permissible.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Student Internship/Placement</h3>
                      <p className="text-gray-300">The student placement and internship assistance depends on their final performance and examination and is available on selected courses.</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">Disclaimer</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>These guidelines are intended as general guide for Keywest Academy students. Keywest reserves the right to make changes in academic programmes and operating procedures at any time. All such changes will be made effective by competent authorities and may apply to enrolled and prospective students.</li>
                        <li>Keywest Academy does not make any commitment, confirmation or guarantee of any kind of job placement to its student.</li>
                      </ol>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

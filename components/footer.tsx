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
                href="#"
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
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">RULES & REGULATIONS</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>FEE ONCE PAID NO REQUEST FOR FEE REFUND IS ENTERTAINED.</li>
                        <li>STUDENTS USING FEE INSTALLMENTS OPTIONS HAVE TO CLEAR THE FEES BEFORE STARTING OF 3RD WEEK OF THE COURSE. INCASE THE FEE IS NOT CLEARED TILL THEN IT WILL LEAD TO TERMINATION OF STUDENT SERVICES. RE-ADMISSION FEE IS APPLICABLE IN SUCH CASES.</li>
                        <li>NO FEE INSTALLMENT FOR PMU COURSE.</li>
                        <li>SEPARATE FEE IS APPLICABLE FOR CERTIFIED INTERNATIONAL ACCREDITATION COURSES.</li>
                        <li>STUDENT MUST RETAIN ALL ORIGINAL FEE SLIPS WHICH MAY BE REQUIRED TILL COURSE COMPLETION.</li>
                        <li>COURSE Dates Subject to change depending on the government rules on Covid19 precautions for educational academy in India.</li>
                        <li>Consent letter must be duly signed by parents/guardian for below 16-year students.</li>
                        <li>Security amount of 200/- will be charged for lockers used by student.</li>
                        <li>AFTERCARE PROGRAMME IS VALID ONLY FOR STUDENTS WHO ARE A part of the Masters in Advanced Artistry course. This is ONLY valid for 6 months post their certification date. STUDENTS CAN TAKE UPTO 5 CLASSES.</li>
                        <li>ANY DAMAGE OR THEFT IN ACADEMY BY THE STUDENT, HE/SHE WILL BE LIABLE TO PAY THE EXPENSE.</li>
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
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">RULES & REGULATIONS</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>FEE ONCE PAID NO REQUEST FOR FEE REFUND IS ENTERTAINED.</li>
                        <li>STUDENTS USING FEE INSTALLMENTS OPTIONS HAVE TO CLEAR THE FEES BEFORE STARTING OF 3RD WEEK OF THE COURSE. INCASE THE FEE IS NOT CLEARED TILL THEN IT WILL LEAD TO TERMINATION OF STUDENT SERVICES. RE-ADMISSION FEE IS APPLICABLE IN SUCH CASES.</li>
                        <li>NO FEE INSTALLMENT FOR PMU COURSE.</li>
                        <li>SEPARATE FEE IS APPLICABLE FOR CERTIFIED INTERNATIONAL ACCREDITATION COURSES.</li>
                        <li>STUDENT MUST RETAIN ALL ORIGINAL FEE SLIPS WHICH MAY BE REQUIRED TILL COURSE COMPLETION.</li>
                        <li>COURSE Dates Subject to change depending on the government rules on Covid19 precautions for educational academy in India.</li>
                        <li>Consent letter must be duly signed by parents/guardian for below 16-year students.</li>
                        <li>Security amount of 200/- will be charged for lockers used by student.</li>
                        <li>AFTERCARE PROGRAMME IS VALID ONLY FOR STUDENTS WHO ARE A part of the Masters in Advanced Artistry course. This is ONLY valid for 6 months post their certification date. STUDENTS CAN TAKE UPTO 5 CLASSES.</li>
                        <li>ANY DAMAGE OR THEFT IN ACADEMY BY THE STUDENT, HE/SHE WILL BE LIABLE TO PAY THE EXPENSE.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">EXAMINATION & PASSING CERTIFICATES</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>EVERY TRAINING PROGRAMME IS COMPLETE AFTER AN ASSESSMENT OF THEORY AND PRACTICAL EXAMINATION. THESE EXAMS ARE CONDUCTED AS PER GUIDELINES LAID BY KEYWEST ACADEMY.</li>
                        <li>A COURSE COMPLETION CERTIFICATE IS ISSUED TO THE STUDENTS ONLY ON SUCCESSFUL COMPLETION OF THE COURSE AND EXAMINATION.</li>
                        <li>CERTIFICATE WILL BE ISSUED TO STUDENTS ON SUCCESSFUL COMPLETION OF THE COURSE SUBJECT TO CLEARANCE OF ANY OUTSTANDING FEE DUES.</li>
                        <li>IN CASE OF LOSS OR DAMAGE TO THE CERTIFICATE, A DUPLICATE ONE WILL BE ISSUED AT ADDITIONAL COST.</li>
                        <li>ONCE THE STUDENT APPEARS FOR THE EXAMINATION, NO RE-EXAM IS ALLOWED.</li>
                        <li>CERTIFICATES HAVE TO BE COLLECTED IN PERSON FROM THE ACADEMY ITSELF.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">ATTENDANCE AND LEAVE</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>A MINIMUM OF 80% ATTENDANCE IS REQUIRED TO BE ELIGIBLE FOR EXAMINATION. THE STUDENT ATTENDANCE RECORD IS MAINTAINED IN LOG BOOKS & THE STUDENTS HAS TO SIGN THE LOG BOOK DAILY.</li>
                        <li>IN CASE OF MEDICAL ISSUES THE LEAVE APPLICATION HAS TO BE SUPPORTED BY MEDICAL CERTIFICATE.</li>
                        <li>IN CASE OF UNINFORMED ABSENCE FOR MORE THAN 7 DAYS THE STUDENT'S NAME WILL BE STRUCK OFF ROLLS AND HE/SHE WILL HAVE TO REJOIN.</li>
                      </ol>
                      <p className="mt-2">Students are not allowed to bring any outsider during the working hours.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">GROUNDS OF TERMINATION</h3>
                      <p>INDISCIPLINE OR MISBEHAVIOUR IN THE ACADEMY PREMISES CALLS FOR IMMEDIATE TERMINATION. KEYWEST ACADEMY RESERVES THE RIGHTS TO TERMINATE THE STUDENT WITHOUT ANY NOTICE AND FEE REFUND.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">DEGRADING A COURSE</h3>
                      <p>DEGRADING COURSE IS NOT PERMISSIBLE. HOWEVER ACADEMY RESERVES THE RIGHT TO CHANGE THE POLICY.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">BATCH TIMINGS</h3>
                      <p>THE STUDENT HAS TO FOLLOW THE BATCH TIMINGS ALLOTTED TO HIM/HER AT THE TIME OF ADMISSION. THE STUDENT AGREES TO FOLLOW THE BATCH TIMINGS ALLOTTED TO THEM AT ADMISSION TIME. REQUEST TO CHANGE BATCH TIMINGS WILL BE THE MANAGEMENT'S DECISION.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">PUNCTUALITY & DISCIPLINE</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>STUDENT MUST REPORT 15 MINUTES BEFORE THEIR BATCH TIMINGS. IF A STUDENT IS LATE, THE CLASS TOPIC WILL NOT BE REPEATED.</li>
                        <li>STUDENTS ARE RESPONSIBLE FOR THEIR OWN BELONGINGS. KEYWEST ACADEMY WILL NOT BE RESPONSIBLE FOR ANY LOSS OF VALUABLES.</li>
                        <li>STUDENTS HAVE TO VOLUNTEER FOR BEING A MODEL DURING CLASS DEMOS.</li>
                        <li>THE USE OF MOBILE PHONE IS PROHIBITED IN CLASSES. IN CASE OF NON-ADHERENCE THE MANAGEMENT RESERVES THE RIGHTS TO CONFISCATE THE PHONE AND TAKE DISCIPLINARY ACTION.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">PHOTOS AND VIDEOS</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>KEYWEST ACADEMY RESERVES THE RIGHTS TO USE ANY PHOTOGRAPHS OR VIDEOS TAKEN DURING THE PROGRAMME ON BRAND PROMOTION AND SOCIAL PLATFORMS.</li>
                        <li>NO VIDEOS OR PHOTOGRAPHS OF PRESENTATIONS TO BE TAKEN WHILE CLASSES ARE BEING CONDUCTED.</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">STUDENT REDRESSAL MECHANISM</h3>
                      <p>FOR ANY KIND OF STUDENT ISSUES AND CONCERNS YOU MAY WRITE A MAIL AT THE MAIL ID SHARED WITH YOU AT THE TIME OF ADMISSION.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">STUDENT PRODUCTS & KITS</h3>
                      <p>THE STUDENT HAVE TO USE OFFICIALLY APPROVED PRODUCTS & KITS IN THE CLASSROOM. ANY UNAUTHORISED PRODUCTS USAGE IS NOT PERMISSIBLE.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">STUDENT INTERNSHIP/PLACEMENT</h3>
                      <p>THE STUDENT PLACEMENT & INTERNSHIP ASSISTANCE DEPENDS ON THEIR FINAL PERFORMANCE AND EXAMINATION AND IS AVAILABLE ON SELECTED COURSES.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-2">DISCLAIMER</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>THESE GUIDELINES ARE INTENDED AS GENERAL GUIDE FOR KEYWEST ACADEMY STUDENTS. KEYWEST RESERVES THE RIGHT TO MAKE CHANGES IN ACADEMIC PROGRAMMES AND OPERATING PROCEDURES AT ANY TIME. ALL SUCH CHANGES WILL BE MADE EFFECTIVE BY COMPETENT AUTHORITIES AND MAY APPLY TO ENROLLED AND PROSPECTIVE STUDENTS.</li>
                        <li>KEYWEST ACADEMY DOES NOT MAKE ANY COMMITMENT, CONFIRMATION OR GUARANTEE OF ANY KIND OF JOB PLACEMENT TO ITS STUDENT.</li>
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

import React from "react";
import { useState } from "react";

// TeachX Landing Page - Single-file React component (Tailwind CSS required)
// Default export a React component so this file can be previewed directly in the canvas.
import dashboardImg from "../assets/dashpreview.webp";

export default function TeachXLanding() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-600 text-white font-bold px-3 py-2 shadow">TX</div>
            <div>
              <h1 className="text-xl font-semibold">TeachX</h1>
              <p className="text-xs text-gray-500">Manage Less, Teach More.</p>
            </div>
          </div>

       <nav className="hidden md:flex items-center gap-6 text-sm">
  <a className="hover:text-blue-600" href="#features">Features</a>
  <a className="hover:text-blue-600" href="#pricing">Pricing</a>
  <a className="hover:text-blue-600" href="#testimonials">Testimonials</a>
  <a className="hover:text-blue-600" href="#contact">Contact</a>

  {/* Get Started button as inline-flex so it stays in the nav row */}
  <a
    href="#contact"
    className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
  >
    Get Started
  </a>
</nav>


             {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-3 py-2 border rounded-md"
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
     {menuOpen && (
  <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
    <a
      href="#features"
      className="hover:text-blue-600"
      onClick={() => setMenuOpen(false)}
    >
      Features
    </a>
    <a
      href="#pricing"
      className="hover:text-blue-600"
      onClick={() => setMenuOpen(false)}
    >
      Pricing
    </a>
    <a
      href="#testimonials"
      className="hover:text-blue-600"
      onClick={() => setMenuOpen(false)}
    >
      Testimonials
    </a>
    <a
      href="#contact"
      className="hover:text-blue-600"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>
    <a
      href="#contact"
      className="w-full py-2 bg-blue-600 text-white rounded-md shadow block text-center"
      onClick={() => setMenuOpen(false)}
    >
      Get Started
    </a>
  </div>
)}

        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Run your coaching or institute smoothly with TeachX</h2>
            <p className="mt-4 text-lg text-gray-600">Attendance, fees, exams, student profiles, QR-based check-ins and a simple mobile-first dashboard — everything a small or mid-size coaching centre needs.</p>

            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow">Start Free Trial</a>
              <a href="#contact" className="px-6 py-3 border rounded-lg text-gray-700">Request Demo</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <li>• Mobile app + Web dashboard</li>
              <li>• Biometric, QR-based student attendance</li>
              <li>• Fee reminders </li>
              <li>• Batch management</li>
            </ul>

            <div className="mt-6 text-xs text-gray-500">Trusted by 200+ coaching centres. No credit card required.</div>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-100">
              {/* Mock Dashboard preview */}
            <div className="p-6">
<div className="w-full h-full bg-black flex items-center justify-center overflow-hidden rounded-md">
  <img
    src={dashboardImg} 
    alt="Dashboard Preview"
    className="object-cover w-full h-full"
  />
</div>


<div className="mt-6 grid grid-cols-2 gap-4">
<div className="h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex flex-col items-center justify-center shadow-sm">
<span className="text-lg font-semibold text-blue-700">Attendance</span>
<span className="text-xs text-gray-500">Biometric, QR-based</span>
</div>
<div className="h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex flex-col items-center justify-center shadow-sm">
<span className="text-lg font-semibold text-green-700">Fees</span>
<span className="text-xs text-gray-500">New, Renew, Due</span>
</div>
<div className="h-24 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg flex flex-col items-center justify-center shadow-sm">
<span className="text-lg font-semibold text-yellow-700">Students</span>
<span className="text-xs text-gray-500">Unlimited Profiles</span>
</div>
<div className="h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex flex-col items-center justify-center shadow-sm">
<span className="text-lg font-semibold text-purple-700">Batches</span>
<span className="text-xs text-gray-500">Batch-wise management</span>
</div>
</div>
</div>
</div>
        

            <div className="absolute -right-8 -bottom-8 opacity-90 hidden lg:block">
              <div className="w-40 h-40 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold">QR</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-20">
          <h3 className="text-2xl font-bold">Features built for coaching centres</h3>
          <p className="text-gray-600 mt-2">Everything you need to manage students, batches and payments — without complicated setup.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Biometric/QR Attendance" desc="Students scan Biometric/QR code to mark attendance — fast and accurate." />
            <FeatureCard title="Fee Management" desc="Manage and send reminders for renew, due or expiry." />
            <FeatureCard title="Student Profiles" desc="Maintain student data, attendance and payment history." />
            <FeatureCard title="Timetable & Batches" desc="Organise batches, allocate teachers and publish schedules." />
            <FeatureCard title="Reports & Analytics" desc="Simple reports for attendance, collection and student data." />
            <FeatureCard title="Mobile-first" desc="Fully responsive dashboard and a lightweight mobile app for teachers." />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-20">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="text-gray-600 mt-2">Simple plans that scale with your centre. No hidden fees.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Starter" price="Free" bullets={["Upto 7 Days", "Try all features", "No Lock-in"]} />
            <PricingCard title="Growth" price="₹9999/ year" bullets={["Unlimited students", "QR Website", "Attendance"]} featured />
            <PricingCard title="Pro" price="Custom" bullets={["Custom Biometric integrations", "Priority support", "Onboarding help"]} />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-20">
          <h3 className="text-2xl font-bold">What centre owners say</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial name="Ravi Sharma" role="Centre Owner">"TeachX reduced our fee delays by 70% — simple and reliable."</Testimonial>
            <Testimonial name="Priya Verma" role="Principal">"Attendance tracking is so much faster now. Parents love the attendance tracking."</Testimonial>
            <Testimonial name="Aman Singh" role="Admin">"Setup was quick, support team helped migrate our data."</Testimonial>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="mt-20 mb-20 bg-white p-8 rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">Get TeachX for your centre</h4>
              <p className="mt-2 text-gray-600">Schedule a demo or start a free trial — no credit card needed.</p>

              <ul className="mt-4 text-sm text-gray-600">
                <li>• 14-day free trial</li>
                <li>• Free data migration (selected plans)</li>
                <li>• Phone & chat support</li>
              </ul>
            </div>

            <div>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm">Centre name</label>
                  <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. Sunshine Coaching" />
                </div>
                <div>
                  <label className="block text-sm">Phone / Email</label>
                  <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Contact number or email" />
                </div>
                <div>
                  <label className="block text-sm">Message (optional)</label>
                  <textarea className="w-full mt-1 px-3 py-2 border rounded-md" rows={3} placeholder="How can we help?" />
                </div>
                <div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Request a demo</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, bullets, featured = false }) {
  return (
    <div className={`p-6 rounded-lg ${featured ? "bg-blue-600 text-white shadow-lg" : "bg-white shadow-sm"}`}>
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="mt-3 text-2xl font-bold">{price}</div>
      <ul className={`mt-4 space-y-2 ${featured ? "text-blue-50" : "text-gray-600"}`}>
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    <div className="mt-6">
  <a
    href="#contact"
    className={`w-full py-2 rounded-md block text-center ${
      featured
        ? "bg-white text-blue-600 font-semibold"
        : "bg-blue-600 text-white"
    }`}
  >
    Choose
  </a>
</div>
    </div>
  );
}

function Testimonial({ children, name, role }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <p className="italic">{children}</p>
      <div className="mt-4 text-sm font-semibold">{name}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-600 text-white px-3 py-2 font-bold">TX</div>
            <div>
              <div className="font-semibold">TeachX</div>
              <div className="text-sm text-gray-500">School · Coaching · Institute Management</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">© {new Date().getFullYear()} TeachX — Mobile First Coaching Management</div>
        </div>
{/* 
        <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
          <div>
            <h5 className="font-semibold">Product</h5>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Pricing</li>
              <li>Demo</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="mt-2 text-sm text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

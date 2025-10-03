import React from "react";
import { useState,useEffect,useRef } from "react";
import Logo from "../assets/logo.jpg"; // adjust path if needed
import AndroidLogo from "../assets/andrlogo.webp";
import AppleLogo from "../assets/applelogo.webp";
import WindowsLogo from "../assets/winlogo.webp";
import { FaRegSmile } from "react-icons/fa";      // Simple UI
import { FaBolt } from "react-icons/fa";          // Fast
import { FaLock } from "react-icons/fa";          // Secure
import { FaUsers } from "react-icons/fa"; 
import dashboard1 from "../assets/dashboard1.webp";
import dashboard2 from "../assets/dashboard2.webp";
import dashboard3 from "../assets/dashboard3.webp";
import dashboard4 from "../assets/dashboard4.webp";
// TeachX Landing Page - Single-file React component (Tailwind CSS required)
// Default export a React component so this file can be previewed directly in the canvas.
import dashboardImg from "../assets/dashpreview.webp";

export default function TeachXLanding() {
  const [isBlurred, setIsBlurred] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
const [count, setCount] = useState(0);
 const counterRef = useRef(null);
   const containerRef = useRef(null);

  const [visibleDeviceLogo, setVisibleDeviceLogo] = useState(false);
  const devices = [
    { logo: AndroidLogo, name: "Android", delay: 0 },
    { logo: AppleLogo, name: "iOS", delay: 200 },
    { logo: WindowsLogo, name: "Windows", delay: 400 },
  ];
const features = [
  {
    title: "Simple UI",
    subtitle: "Start from Day-1",
    icon: FaRegSmile,
    gradient: "from-blue-50 to-blue-100",
    color: "text-blue-700",
    iconColor: "text-blue-400", // lighter icon
  },
  {
    title: "Fast",
    subtitle: "Built with New-Age tech",
    icon: FaBolt,
    gradient: "from-green-50 to-green-100",
    color: "text-green-700",
    iconColor: "text-green-400",
  },
  {
    title: "Secure",
    subtitle: "Encrypted, SSL-protected",
    icon: FaLock,
    gradient: "from-yellow-50 to-yellow-100",
    color: "text-purple-700",
    iconColor: "text-purple-400",
  },
  {
    title: "Unlimited",
    subtitle: "Students of any number",
    icon: FaUsers,
    gradient: "from-purple-50 to-purple-100",
    color: "text-yellow-700",
    iconColor: "text-yellow-400",
  },
];
  const images = [dashboard1, dashboard2, dashboard3, dashboard4];
  const [current, setCurrent] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setIsBlurred(true); // start blurred for next image
      setTimeout(() => setIsBlurred(false), 300); // turn clear after 0.3s
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer = null;

    const startCounting = () => {
      let start = 0;
      const end = 200;
      const duration = 2000;
      const incrementTime = 20;
      const step = Math.ceil((end - start) / (duration / incrementTime));

      timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0); // reset counter
          startCounting();
        } else {
          clearInterval(timer); // stop counting if scrolled out
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleDeviceLogo(true);
        } else {
          setVisibleDeviceLogo(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  return (

    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
<div className="flex items-center">
  <img 
    src={Logo} 
    alt="TeachX Logo" 
    className="h-10 w-10 object-contain rounded-full shadow"
  />
</div>            <div>
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
   <div
    className="absolute top-16 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 flex flex-col space-y-4 md:hidden z-50
               animate-expandDown origin-top"
  >
    <a
      href="#features"
      className="text-white hover:text-blue-400"
      onClick={() => setMenuOpen(false)}
    >
      Features
    </a>
    <a
      href="#pricing"
      className="text-white hover:text-blue-400"
      onClick={() => setMenuOpen(false)}
    >
      Pricing
    </a>
    <a
      href="#testimonials"
      className="text-white hover:text-blue-400"
      onClick={() => setMenuOpen(false)}
    >
      Testimonials
    </a>
    <a
      href="#contact"
      className="text-white hover:text-blue-400"
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
        <div className="text-start">
      <h2 ref={counterRef} className="text-5xl md:text-6xl font-extrabold leading-tight">
        TeachX made{" "}<span className="text-blue-600">{count}+</span>{" "}
        coaching centres manage and teach better.
      </h2>

     <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
  Attendance, fees, batches, student profiles, QR-based check-ins and a simple{" "}
  <span className="font-bold text-blue-600">mobile-first dashboard</span> — everything a coaching centre needs.
</p>
   <div
  ref={containerRef}
  className="px-5 mt-8 w-full flex flex-wrap items-center justify-between"
>
      {devices.map((device) => (
        <div
          key={device.name}
          className={`flex items-center gap-3 opacity-0 ${
            visibleDeviceLogo ? "animate-fadeIn" : ""
          }`}
          style={{ animationDelay: visibleDeviceLogo ? `${device.delay}ms` : "0ms" }}
        >
        <div className="flex flex-col items-center gap-2 opacity-0 animate-fadeIn" style={{ animationDelay: `${device.delay}ms` }}>
  <img src={device.logo} alt={device.name} className="h-10 w-10" />
  <span className="text-gray-600 font-medium">{device.name}</span>
</div>
        </div>
      ))}
    </div>
      <div className="mt-6 flex gap-3 justify-start">
        <a
          href="#pricing"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow"
        >
          Start Free Trial
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border rounded-lg text-gray-700"
        >
          Request Demo
        </a>
      </div>

   

      
    </div>

          <div className="relative">
            <div className="w-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-100">
              {/* Mock Dashboard preview */}
           <div className="p-6 space-y-6">
  {/* Dashboard Carousel */}
       <div className="w-full h-48 overflow-hidden rounded-md relative">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Dashboard ${i + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000
            ${i === current ? (isBlurred ? "blur-md" : "blur-0") : "opacity-0"}
          `}
        />
      ))}
    </div>

  {/* Features Grid */}
  
    <div className="mt-6 grid grid-cols-2 gap-4">
    {features.map((f, i) => {
  const Icon = f.icon;
  return (
    <div
      key={i}
      className={`h-28 bg-gradient-to-br ${f.gradient} rounded-lg flex flex-col items-center justify-center shadow-sm`}
    >
      <Icon className={`h-8 w-8 mb-2 ${f.iconColor}`} />
      <span className={`text-lg font-semibold ${f.color}`}>{f.title}</span>
      <span className="text-xs text-gray-500">{f.subtitle}</span>
    </div>
  );
})}
    </div>
</div>

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
<PricingCard
  title="Starter"
  price="Free"
  bullets={[
    "Access for up to 7 days",
    "Try all features without restrictions",
    "No commitment or lock-in"
  ]}
/><PricingCard
  title="Growth (Small to Mid-Size)"
  price="₹9,999 / year"
  bullets={[
    "Unlimited students",
    "Customizable QR-enabled website",
    "Attendance Tracker",
    "Fee reminders",
    "Batch-wise management",
    "Mobile-first dashboard",
    "Analytics",
    "Lead management",
    "Export data to Excel"
  ]}
  featured
/>           
<PricingCard
  title="Pro (Franchise)"
  price="Custom"
  bullets={[
    "Includes all features from the Growth Pack",
    "Tailored biometric integrations for your centre",
    "Priority support whenever you need it",
    "Dedicated onboarding and setup assistance"
  ]}
/>          </div>
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
                <li>• 7-day free trial</li>
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
    <div
  className={`p-6 rounded-lg flex flex-col h-full ${
    featured ? "bg-blue-600 text-white shadow-lg" : "bg-white shadow-sm"
  }`}
>
  <h4 className="text-lg font-semibold">{title}</h4>
  <div className="mt-3 text-2xl font-bold">{price}</div>

  <ul className={`mt-4 space-y-2 ${featured ? "text-blue-50" : "text-gray-600"}`}>
    {bullets.map((b, i) => (
      <li key={i}>• {b}</li>
    ))}
  </ul>

  <div className="py-7 mt-auto">
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
<div className="flex items-center">
  <img 
    src={Logo} 
    alt="TeachX Logo" 
    className="h-10 w-10 object-contain rounded-full shadow"
  />
</div>            <div>
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

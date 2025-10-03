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
import { motion,AnimatePresence   } from "framer-motion";
import { FaFingerprint, FaMoneyCheckAlt, FaUserGraduate, FaCalendarAlt, FaChartBar, FaMobileAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function TeachXLanding() {
  const [isBlurred, setIsBlurred] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };
const testimonialTabColors = [
  "bg-yellow-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-teal-100",
  "bg-orange-100",
  "bg-gray-100",
];    const [menuOpen, setMenuOpen] = useState(false);
const [count, setCount] = useState(0);
 const counterRef = useRef(null);
   const containerRef = useRef(null);
  const [activeDevice, setActiveDevice] = useState(null);
  useEffect(() => {
    setVisibleDeviceLogo(true);
  }, []);

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

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Centre Owner",
    text: "TeachX reduced our fee delays by 70% — simple and reliable.",
  },
  {
    name: "Priya Verma",
    role: "Principal",
    text: "Attendance tracking is so much faster now. Parents love the attendance tracking.",
  },
  {
    name: "Aman Singh",
    role: "Admin",
    text: "Setup was quick, support team helped migrate our data.",
  },
  {
    name: "Sonia Kapoor",
    role: "Coordinator",
    text: "The batch-wise management feature has made scheduling so easy for our team.",
  },
  {
    name: "Vikram Joshi",
    role: "Gym Owner",
    text: "The mobile-first dashboard allows me to check student attendance anytime, anywhere.",
  },
];
    const [[currentT, directionT], setCurrentT] = useState([0, 0]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentT(([prev]) => [(prev + 1) % testimonials.length, 1]);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlideT = (dir) => {
    setCurrentT(([prev]) => [(prev + dir + testimonials.length) % testimonials.length, dir]);
  };

  const variantsT = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const images = [dashboard1, dashboard2, dashboard3, dashboard4];
const featuresB = [
    { title: "Mobile-first", desc: "Fully responsive dashboard and a lightweight mobile app for teachers.", icon: FaMobileAlt },
  { title: "Unlimited Students", desc: "Maintain student data, attendance and payment history.", icon: FaUserGraduate },
    { title: "Multiple Batches", desc: "Organise batches, allocate teachers and publish schedules.", icon: FaCalendarAlt },
  { title: "Biometric/QR Attendance", desc: "Students scan Biometric/QR code to mark attendance — fast and accurate.", icon: FaFingerprint },
  { title: "Fee Management", desc: "Manage and send reminders for renew, due or expiry.", icon: FaMoneyCheckAlt },
  { title: "Reports & Analytics", desc: "Simple reports for attendance, collection and student data.", icon: FaChartBar },
];

const [[current, direction], setCurrent] = useState([0, 0]);

  // Auto-slide every 3 seconds
   useEffect(() => {
    const interval = setInterval(() => nextSlide(1), 3000);
    return () => clearInterval(interval);
  }, [images.length]);

const nextSlide = (dir) => {
  setCurrent(([prev]) => [
    (prev + dir + images.length) % images.length,
    dir,
  ]);
};

  const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    scale: 0.8,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    scale: 0.8,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

const handleDragEnd = (_, info) => {
  const threshold = 50; // minimum swipe distance
  if (info.offset.x > threshold) nextSlide(-1);
  else if (info.offset.x < -threshold) nextSlide(1);
};
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
<body className="overflow-x-hidden">

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
      <span className="font-bold text-blue-600">
        <Typewriter
          words={["mobile-first dashboard"]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>{" "}
      — everything a coaching centre needs.
    </p>
<div
      ref={containerRef}
      className="px-5 mt-8 w-full flex flex-wrap items-center justify-between"
    >
      {devices.map((device) => {
        const isActive = activeDevice === device.name;

        return (
          <div
            key={device.name}
            className={`flex items-center gap-3 opacity-0 ${
              visibleDeviceLogo ? "animate-fadeIn" : ""
            }`}
            style={{ animationDelay: visibleDeviceLogo ? `${device.delay}ms` : "0ms" }}
          >
            <div
              onClick={() => setActiveDevice(device.name)}
              className={`flex flex-col items-center gap-2 cursor-pointer
                transition-transform duration-300
                ${isActive ? "pop-bounce" : "scale-100"}`}
              style={{ 
                // Remove any animation delay for the clicked pop
                animationDelay: isActive ? "0ms" : `${device.delay}ms` 
              }}
            >
              <img src={device.logo} alt={device.name} className="h-10 w-10" />
              <span className="text-gray-600 font-medium">{device.name}</span>
            </div>
          </div>
        );
      })}
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
   <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Dashboard ${current + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover cursor-grab"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
            onClick={() => setCurrent([i, i > current ? 1 : -1])}
          ></div>
        ))}
      </div>
    </div>

  {/* Features Grid */}
  
<div className="mt-6 grid grid-cols-2 gap-4">
  {features.map((f, i) => {
    const Icon = f.icon;
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className={`bg-gradient-to-br ${f.gradient} rounded-lg flex flex-col items-center shadow-sm p-4 min-h-[120px]`}
      >
        {/* Icon stays fixed at top */}
        <div className="flex-shrink-0">
          <Icon className={`h-10 w-10 mb-2 ${f.iconColor}`} />
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          <span className={`text-lg font-semibold ${f.color}`}>{f.title}</span>
          <span className="text-xs text-gray-500">{f.subtitle}</span>
        </div>
      </motion.div>
    );
  })}
</div>


</div>

</div>
        

          
          </div>
        </section>

        {/* Features */}
   <section id="features" className="mt-20 space-y-8">
      <h3 className="text-2xl font-bold">Features built for coaching centres</h3>
      <p className="text-gray-600 mt-2">
        Everything you need to manage students, batches and payments — without complicated setup.
      </p>

      <div className="mt-8 space-y-6">
        {featuresB.map((f, i) => {
          const Icon = f.icon;
          const isLeft = i % 2 === 0; // alternate sides

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="text-blue-600 text-3xl">
                <Icon />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

        {/* Pricing */}
         <section id="pricing" className="mt-20">
      {/* Heading Animation */}
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pricing
      </motion.h3>

      <motion.p
        className="text-gray-600 mt-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Simple plans that scale with your centre. No hidden fees.
      </motion.p>

      {/* Cards Animation */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Starter",
            price: "Free",
            bullets: [
              "Access for up to 7 days",
              "Try all features without restrictions",
              "No commitment or lock-in",
            ],
          },
          {
            title: "Growth (Small to Mid-Size)",
            price: "₹9,999 / year",
            bullets: [
              "Unlimited students",
              "Customizable QR-enabled website",
              "Attendance Tracker",
              "Fee reminders",
              "Batch-wise management",
              "Mobile-first dashboard",
              "Analytics",
              "Lead management",
              "Export data to Excel",
            ],
            featured: true,
          },
          {
            title: "Pro (Franchise)",
            price: "Custom",
            bullets: [
              "Includes all features from the Growth Pack",
              "Tailored biometric integrations for your centre",
              "Priority support whenever you need it",
              "Dedicated onboarding and setup assistance",
            ],
          },
        ].map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </div>
    </section>

        {/* Testimonials */}
    <section id="testimonials" className="mt-20 relative">
      <h3 className="text-2xl font-bold mb-6 text-center">
        What centre owners say
      </h3>
<div className="relative w-full md:w-2/3 mx-auto overflow-hidden h-72">
  <AnimatePresence custom={directionT}>
    <motion.div
      key={currentT}
      custom={directionT}
      variants={variantsT}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`absolute top-0 left-0 w-full p-6 shadow-lg rounded-lg cursor-grab ${
        testimonialTabColors[currentT % testimonialTabColors.length]
      }`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, info) => {
        if (info.offset.x < -50) nextSlideT(1);
        else if (info.offset.x > 50) nextSlideT(-1);
      }}
    >
      <Testimonial
        name={testimonials[currentT].name}
        role={testimonials[currentT].role}
      >
        {testimonials[currentT].text}
      </Testimonial>
    </motion.div>
  </AnimatePresence>
</div>

{/* Navigation Dots OUTSIDE the slide container */}
<div className="flex justify-center gap-2">
  {testimonials.map((_, i) => (
    <div
      key={i}
      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
        i === currentT ? "bg-blue-600 scale-125" : "bg-gray-300"
      }`}
      onClick={() => setCurrentT([i, i > currentT ? 1 : -1])}
    ></div>
  ))}
</div>

    </section>

     

        {/* Form */}
           <section id="contact" className="mt-20 mb-20 bg-white p-8 rounded-xl shadow">
      {/* Heading Animation */}
      <motion.h4
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get TeachX for your centre
      </motion.h4>

      <motion.p
        className="mt-2 text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Schedule a demo or start a free trial — no credit card needed.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ul className="text-sm text-gray-600">
            <li>• 7-day free trial</li>
            <li>• Free data migration (selected plans)</li>
            <li>• Phone & chat support</li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <label className="block text-sm">Centre name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="e.g. Sunshine Coaching"
            />
          </div>
          <div>
            <label className="block text-sm">Phone / Email</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Contact number or email"
            />
          </div>
          <div>
            <label className="block text-sm">Message (optional)</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              rows={3}
              placeholder="How can we help?"
            />
          </div>
          <div>
            <motion.button
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a demo
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
   
   
      </main>

      <Footer />
    </div>
    </body>
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

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import Package from "./pages/Package";
import Trainers from "./pages/Trainers";
import Community from "./pages/Community";
import Location from "./pages/Location";
import Reviews from "./pages/Reviews";
import Feedback from "./pages/Feedback";
import TrialWaiver from "./pages/TrialWaver";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-4 text-center font-bold text-xl">
        FitLife Gym
      </header>

      {/* Routes */}
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/enquiry" element={<Enquiry />} />
  <Route path="/packages" element={<Package />} />
  <Route path="/trainers" element={<Trainers />} />
  <Route path="/community" element={<Community />} />
  <Route path="/location" element={<Location />} />
  <Route path="/reviews" element={<Reviews />} />
  <Route path="/feedback" element={<Feedback />} />
  <Route path="/trial-waiver" element={<TrialWaiver />} />
</Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <p>&copy; 2025 FitLife Gym. All rights reserved.</p>
      </footer>
    </div>
  );
}

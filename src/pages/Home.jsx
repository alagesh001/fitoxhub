import { Link } from "react-router-dom";
import { User, IndianRupee , Dumbbell, Users, Star, FileText, ClipboardList, Gift, MessageSquare, FileSignature, Ticket } from "lucide-react";

const tabs = [
  { key: "enquiry", label: "Enquiry", desc: "Get to know about our packages", path: "/enquiry", icon: <User className="w-6 h-6 text-blue-400" /> },
    { key: "trial-waiver", label: "Book Trial", desc: "Trial Waiver and Release form", path: "/trial-waiver", icon: <Ticket className="w-6 h-6 text-amber-500" /> },

  { key: "packages", label: "Packages", desc: "Find Packages that suit you", path: "/packages", icon: <IndianRupee  className="w-6 h-6 text-purple-400" /> },
  { key: "trainers", label: "Trainers", desc: "Achievements & Qualifications of our Trainers", path: "/trainers", icon: <Dumbbell className="w-6 h-6 text-cyan-400" /> },
  { key: "community", label: "Community", desc: "Connect with our fitness family", path: "/community", icon: <Users className="w-6 h-6 text-orange-400" /> },
  { key: "reviews", label: "Reviews", desc: "Check out our Google Reviews", path: "/reviews", icon: <Star className="w-6 h-6 text-yellow-400" /> },
  { key: "location", label: "Location", desc: "We are happy to meet and train you.", path: "/location", icon: <MessageSquare className="w-6 h-6 text-teal-400" /> },
  { key: "feedback", label: "Feedback", desc: "Give us your genuine suggestions", path: "/feedback", icon: <MessageSquare className="w-6 h-6 text-teal-400" /> },

];
  const gymName =   localStorage.getItem("gymname");

  const handleReviewsClick = () => {
    window.open(
      "https://www.google.com/search?q=FitLife+Gym&ludocid=1234567890123456789#lrd=1234567890123456789,3",
      "_blank"
    );
  };
export default function Home() {
   


 return (
  <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-black">
    <h2 className="text-3xl font-bold mb-8 text-white">Welcome to {gymName}</h2>
    <div className="flex flex-col space-y-6 w-full max-w-md">
     {tabs
  .filter((tab) => tab.key !== "hidden") // hide a tab
  .map((tab) => (
    <Link
      key={tab.key}
      to={tab.path}
      className="flex items-center p-5 rounded-xl bg-gray-900 text-white border border-white
           shadow-[0_4px_15px_rgba(255,255,255,0.1)] 
           hover:shadow-[0_8px_20px_rgba(255,255,0,0.4)] 
           hover:bg-yellow-400 hover:text-black 
           transform hover:-translate-y-1 transition-all duration-300"

      onClick={
        tab.key === "reviews"
          ? (e) => {
              e.preventDefault();
              window.open(
          "https://search.google.com/local/reviews?placeid=ChIJtxO952jxDDkR0MettqmZScY",
          "_blank"
        )
            }
          : undefined
      }
    >
      <div className="mr-4 text-yellow-400">{tab.icon}</div>
      <div className="text-left">
        <h3 className="text-lg font-semibold">{tab.label}</h3>
        <p className="text-sm opacity-80">{tab.desc}</p>
      </div>
    </Link>
  ))}

    </div>
  </div>
);

}

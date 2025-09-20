import { Link } from "react-router-dom";
import {
  User,
  IndianRupee,
  Dumbbell,
  Users,
  Star,
  MessageSquare,
  GraduationCap,
  Briefcase,
  HeartPulse
} from "lucide-react";
import { ApiContext } from "../ApiContext.jsx";
import { useContext } from "react";

export default function Home() {
  const tabs = [
    { key: "enquiry", label: "Enquiry", desc: "Get to know about our packages", path: "/enquiry", icon: <User className="w-6 h-6 text-blue-400" /> },
    { key: "trial-waiver", label: "Book Trial", desc: "Trial Waiver and Release form", path: "/trial-waiver", icon: <Dumbbell className="w-6 h-6 text-amber-500" /> },
    { key: "packages", label: "Packages", desc: "Find Packages that suit you", path: "/packages", icon: <IndianRupee className="w-6 h-6 text-purple-400" /> },
    { key: "trainers", label: "Trainers", desc: "Achievements & Qualifications of our Trainers", path: "/trainers", icon: <Dumbbell className="w-6 h-6 text-cyan-400" /> },
    { key: "community", label: "Community", desc: "Connect with our fitness family", path: "/community", icon: <Users className="w-6 h-6 text-orange-400" /> },
    { key: "reviews", label: "Reviews", desc: "Check out our Google Reviews", path: "/reviews", icon: <Star className="w-6 h-6 text-yellow-400" /> },
    { key: "location", label: "Location", desc: "We are happy to meet and train you.", path: "/location", icon: <MessageSquare className="w-6 h-6 text-teal-400" /> }
  ];
    const { hubadvertData } = useContext(ApiContext);
  
const iconMap = {
  education: <GraduationCap className="w-8 h-8 text-white" />,
  salon: <Briefcase className="w-8 h-8 text-white" />,
  health: <HeartPulse className="w-8 h-8 text-white" />,
};

const gradientMap = {
  education: "from-pink-500 via-red-500 to-yellow-400",
  salon: "from-blue-500 via-indigo-500 to-purple-500",
  health: "from-green-400 via-emerald-500 to-teal-500",
};
// If ads data not ready yet, show loading
const ads = hubadvertData
  ? hubadvertData
      .filter(ad => ad.type !== "pt") // exclude personal training ads
      .map(item => ({
        id: item.id,
        title: item.title,
        desc: item.description,
        sub: item.sub_title,

        icon: iconMap[item.type] || <Briefcase className="w-8 h-8 text-white" />,
        link: item.map_link || "",   // empty string if null
        mobile: item.mob || "",
        gradient: gradientMap[item.type] || "from-gray-400 via-gray-500 to-gray-600",
        area: item.area_name || "",
        type: item.type,
      }))
  : [];
  // 🎯 Ads JSON
  // const ads = [
  //   {
  //     id: 1,
  //     title: "Sharma Spoken English",
  //     desc: "Boost your career with expert mentors",
  //     icon: <GraduationCap className="w-8 h-8 text-white" />,
  //     link: "https://wa.me/919999999999",
  //     gradient: "from-pink-500 via-red-500 to-yellow-400"
  //   },
  //   {
  //     id: 2,
  //     title: "Jawed Habib",
  //     desc: "Professional Hair stylist",
  //     icon: <Briefcase className="w-8 h-8 text-white" />,
  //     link: "https://wa.me/918888888888",
  //     gradient: "from-blue-500 via-indigo-500 to-purple-500"
  //   },
  //   {
  //     id: 3,
  //     title: "Jacob Wellness & Nutrition Clinic",
  //     desc: "Personalized diet & lifestyle programs",
  //     icon: <HeartPulse className="w-8 h-8 text-white" />,
  //     link: "https://wa.me/917777777777",
  //     gradient: "from-green-400 via-emerald-500 to-teal-500"
  //   }
  // ];

  const gymName = localStorage.getItem("gymname");
  const { hubData } = useContext(ApiContext);

  // Helper component for Ads
const AdCard = ({ ad }) => (
  <a
    key={`ad-${ad.id}`}
    href={ad.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-6 mt-5 rounded-2xl bg-gradient-to-r ${ad.gradient} text-white
                shadow-[0_6px_20px_rgba(0,0,0,0.4)]
                hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)]
                transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}
  >
    {/* Icon */}
    <div className="mr-4 flex-shrink-0">
      {ad.icon}
    </div>

    {/* Text content */}
    <div className="text-left flex-1">
      <h3 className="text-xl font-bold">{ad.title}</h3>

      {ad.sub && (
        <p className="text-lg font-extrabold text-yellow-300 bg-black/20 inline-block px-2 py-1 rounded-lg mt-1 animate-pulse">
          {ad.sub}
        </p>
      )}

      {ad.desc && <p className="text-sm opacity-90 mt-2">{ad.desc}</p>}

      {ad.mobile && (
        <p className="text-sm opacity-90 mt-1">
          <span className="font-semibold">Contact: </span>{ad.mobile}
        </p>
      )}

      {ad.link && (
        <p className="text-xs italic opacity-80 mt-2">Tap to connect</p>
      )}
    </div>
  </a>
);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-black relative">
      <h2 className="text-3xl font-bold mb-8 text-white">Welcome to {gymName}</h2>

      <div className="flex flex-col space-y-6 w-full max-w-md">
        {tabs
          .filter((tab) => tab.key !== "trial-waiver") // FAB handled separately
          .map((tab, index) => (
            <div key={tab.key}>
              {/* Render tab */}
              <Link
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
                        window.open(hubData.review_url, "_blank");
                      }
                    : undefined
                }
              >
                <div className="mr-4">{tab.icon}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{tab.label}</h3>
                  <p className="text-sm opacity-80">{tab.desc}</p>
                </div>
              </Link>

              {/* Inject ads after certain tabs */}
             {index === 0 && ads[0] && <AdCard ad={ads[0]} />} {/* After Enquiry */}
{index === 2 && ads[1] && <AdCard ad={ads[1]} />} {/* After Packages */}
{index === 4 && ads[2] && <AdCard ad={ads[2]} />} {/* After Community */}
            </div>
          ))}
      </div>

      {/* Floating Book Trial Button */}
      <Link
        to="/trial-waiver"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-red-400 text-black 
             rounded-full px-5 py-3 shadow-lg 
             animate-[pulseOpacity_1s_ease-in-out_infinite]
             hover:scale-110 transition-transform duration-300 font-semibold"
      >
        <Dumbbell className="w-6 h-6" />
        <span>Book Trial</span>
      </Link>
    </div>
  );
}

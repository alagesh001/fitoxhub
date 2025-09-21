import React, { useState,useContext,useEffect,useRef } from "react";
import { ApiContext } from "../ApiContext.jsx";
import { UserCheck, Briefcase } from "lucide-react";



export default function Package() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { hubpackData } = useContext(ApiContext);
      const { hubadvertData } = useContext(ApiContext);
const iconMap = {
  gym: <UserCheck className="w-8 h-8 text-white" />,
};
const gradientMap = {
  gym: "from-indigo-500 to-violet-600",
};
 useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const scrollRef = useRef(null);

  const ads = hubadvertData
    ? hubadvertData
        .filter((ad) => ad.type !== "pt")
        .map((item) => ({
          id: item.id,
          title: item.title,
          desc: item.description,
          sub: item.sub_title,
          icon:
            iconMap[item.type] || (
              <Briefcase className="w-8 h-8 text-white" />
            ),
          link: item.map_link || "",
          mobile: item.mob || "",
          gradient:
            gradientMap[item.type] ||
            "from-gray-400 via-gray-500 to-gray-600",
          area: item.area_name || "",
          type: item.type,
        }))
    : [];
  useEffect(() => {
    if (!scrollRef.current || ads.length === 0) return;

    const container = scrollRef.current;
    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        // reached end → go back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [ads]);
  return (
    <div className="p-8 text-center">

      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Membership Plans</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                   {/* Scrollable Ads */}
{ads.length > 0 && (
  <div
    ref={scrollRef}
    className="mt-6 flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth space-x-4"
  >
    {ads.map((ad, index) => {
      const vibrantGradients = [
        "from-pink-500 via-red-500 to-yellow-500",
        "from-indigo-500 via-purple-500 to-pink-500",
        "from-green-400 via-lime-400 to-yellow-300",
        "from-blue-400 via-cyan-400 to-teal-400",
        "from-orange-400 via-pink-400 to-red-400",
        "from-rose-400 via-fuchsia-400 to-indigo-400",
      ];
      const gradient = vibrantGradients[index % vibrantGradients.length];

      return (
    <a
  key={ad.id}
  href={ad.link || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className={`flex-shrink-0 w-72 snap-center p-5 rounded-2xl shadow-lg hover:scale-[1.05] transition-transform
              bg-gradient-to-r ${gradient} text-white`}
>
  <div className="flex items-center gap-3 mb-3">
    {ad.icon}
    <h3 className="text-lg font-bold">{ad.title}</h3>
  </div>

  <p className="text-sm mb-2">{ad.desc}</p>

  {ad.sub && (
  <p className="text-lg font-extrabold text-yellow-400 
                bg-black/40 inline-block px-3 py-1 rounded-xl mt-1 
                shadow-lg shadow-yellow-400/50
                animate-[pulse_1.5s_ease-in-out_infinite] 
                transform-gpu hover:scale-105 transition-transform">
      {ad.sub}
    </p>
  )}

  {/* Mobile and Location */}
  <div className="mt-3 space-y-1 text-sm">
    {ad.mobile && (
      <p className="flex items-center gap-1">
        <span className="font-semibold">📞</span> {ad.mobile}
      </p>
    )}
    {ad.area && (
      <p className="flex items-center gap-1">
        <span className="font-semibold">📍</span> {ad.area}
      </p>
    )}
  </div>
</a>
      );
    })}
  </div>
)}
        {hubpackData.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`
              cursor-pointer
              transform transition duration-300 hover:scale-105
              p-6 rounded-xl shadow-lg
              border-4
              ${
                plan.type === "Offer" 
                  ? "bg-gradient-to-r from-pink-400 via-yellow-400 to-red-400 border-pink-600"
                  : "bg-white border-gray-200"
              }
              ${selectedPlan === plan.id ? "ring-4 ring-blue-500" : ""}
            `}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
            <p className="text-gray-700 mb-2">₹{plan.amount} </p>
            <p className="text-gray-600 text-sm">{plan.info}</p>
            {plan.type === "Offer" && (
              <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
                Offer
              </span>
            )}
          </div>
        ))}
      </div>
  
    </div>
  );
}

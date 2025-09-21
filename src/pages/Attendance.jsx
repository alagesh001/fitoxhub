import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { UserCheck, Briefcase } from "lucide-react";
import { ApiContext } from "../ApiContext.jsx";
import { useContext } from "react";
const iconMap = {
  gym: <UserCheck className="w-8 h-8 text-white" />,
};
const gradientMap = {
  gym: "from-indigo-500 to-violet-600",
};

export default function MarkAttendance() {
  const [mob, setMob] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const gymid = localStorage.getItem("gymid") || 0;
    const { hubadvertData } = useContext(ApiContext);

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

  const handleMark = async () => {
    if (!mob) {
      setMessage("Please enter a mobile number");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://oxadmedia.online/api/mark-attendMar",
        { gymid, mob }
      );

      if (res.data?.success) {
        setMessage(res.data.message);
        setMob("");
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  // Auto scroll effect
useEffect(() => {
  if (!scrollRef.current || ads.length === 0) return;

  const container = scrollRef.current;
  let currentIndex = 0;

  const scrollInterval = setInterval(() => {
    if (!container) return;
    const children = container.children;
    if (children.length === 0) return;

    currentIndex = (currentIndex + 1) % children.length;
    const targetCard = children[currentIndex];

    targetCard.scrollIntoView({
      behavior: "smooth",
      inline: "center",   // horizontal scrolling
      block: "nearest",   // prevents vertical scroll
    });
  }, 2000); // scroll every 2 seconds

  return () => clearInterval(scrollInterval);
}, [ads]);

  return (
<div className="flex flex-col items-center px-4 mt-10">

  {/* Attendance Box Section */}
  <div className="max-w-sm w-full p-6 bg-white rounded-2xl shadow-lg mb-10">
    <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
      <UserCheck className="w-5 h-5 text-green-600" />
      Mark Attendance
    </h2>

   <div className="flex flex-col gap-2">
  <input
    type="tel"
    placeholder="Enter Mobile Number"
    value={mob}
    onChange={(e) => setMob(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
               focus:ring-indigo-500 outline-none"
  />
  <button
    onClick={handleMark}
    disabled={loading}
    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium
               hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? "..." : "Mark"}
  </button>
</div>


    {message && (
      <p className="mt-4 text-center text-sm font-medium text-gray-700">
        {message}
      </p>
    )}
  </div>

  {/* Scrollable Ads Section */}
  {ads.length > 0 && (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div
        ref={scrollRef}
        className="inline-flex gap-4 snap-x snap-mandatory scroll-smooth"
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
                          bg-gradient-to-r ${gradient} text-white cursor-pointer`}
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
    </div>
  )}
</div>


  );
}

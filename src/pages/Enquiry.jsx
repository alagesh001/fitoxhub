import { useState,useContext,useRef,useEffect} from "react";
import axios from "axios";
import { ApiContext } from "../ApiContext.jsx";
import { UserCheck, Briefcase } from "lucide-react";

export default function Enquiry() {
  const [leadname, setLeadname] = useState("");
  const [leadmob, setLeadmob] = useState("");
  const [status, setStatus] = useState("");
  const [accepted, setAccepted] = useState(false);
  const gymid =   localStorage.getItem("gymid") || 0;
  const typeIs = 0;      // default 0
      const { hubadvertData } = useContext(ApiContext);
const iconMap = {
  gym: <UserCheck className="w-8 h-8 text-white" />,
};
const gradientMap = {
  gym: "from-indigo-500 to-violet-600",
};
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
  const handleSubmit = async () => {
      if (!accepted) {
      setStatus("⚠️ Please accept the terms before submitting.");
      return;
    }
    setStatus("Submitting...");

    try {
      const res = await axios.post("https://oxadmedia.online/api/add-hub-enquiry", {
        gymid,
        leadname,
        leadmob,
        typeIs,
              });

      setStatus("✅ Enquiry sent successfully!");
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Failed to send enquiry. Try again.");
    }
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Send us an Enquiry</h2>

      <div className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={leadname}
          onChange={(e) => setLeadname(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Your Mobile"
          value={leadmob}
          onChange={(e) => setLeadmob(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

         {/* Acceptance checkbox */}
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1"
          />
          <span>
            I agree that my mobile number will be used only for gym-related
            communication.
          </span>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Submit
        </button>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
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
    </div>
  );
}

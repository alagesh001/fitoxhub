import { useState, useEffect, useContext, useRef } from "react";
import { Youtube, Instagram, Facebook, Briefcase, UserCheck } from "lucide-react";
import { ApiContext } from "../ApiContext.jsx";

export default function Community() {
  const { hubData, hubadvertData } = useContext(ApiContext);
  const scrollRef = useRef(null);

  const iconMap = {
    gym: <UserCheck className="w-8 h-8 text-white" />,
  };

  const gradientMap = {
    gym: "from-indigo-500 to-violet-600",
  };

  // Prepare ads
  const ads = hubadvertData
    ? hubadvertData
        .filter((ad) => ad.type !== "pt")
        .map((item) => ({
          id: item.id,
          title: item.title,
          desc: item.description,
          sub: item.sub_title,
          icon: iconMap[item.type] || <Briefcase className="w-8 h-8 text-white" />,
          link: item.map_link || "#",
          mobile: item.mob || "",
          gradient: gradientMap[item.type] || "from-gray-400 to-gray-600",
          area: item.area_name || "",
          type: item.type,
        }))
    : [];
 useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
// Auto-scroll only the ads horizontally
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
      inline: "center", // horizontal scroll
      block: "nearest", // prevents vertical scroll of page
    });
  }, 2000);

  return () => clearInterval(scrollInterval);
}, [ads]);

  if (!hubData) return <p>Loading...</p>;

  return (
    <>
      {/* Community Section */}
      <div className="p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6">
          Be part of our fitness family! Share your progress, motivate others, and grow together.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {hubData.yt_url && (
            <a
              href={hubData.yt_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Youtube size={20} /> YouTube
            </a>
          )}
          {hubData.insta_url && (
            <a
              href={hubData.insta_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <Instagram size={20} /> Instagram
            </a>
          )}
          {hubData.fb_url && (
            <a
              href={hubData.fb_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 w-60 justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Facebook size={20} /> Facebook
            </a>
          )}
        </div>
      </div>

      {/* Scrollable Ads Section */}
      {ads.length > 0 && (
        <div className="mt-1 w-full overflow-x-auto no-scrollbar px-4 mb-6">
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
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 w-72 snap-center p-5 rounded-2xl shadow-lg
                              bg-gradient-to-r ${gradient} text-white cursor-pointer
                              hover:scale-[1.05] transition-transform`}
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
    </>
  );
}

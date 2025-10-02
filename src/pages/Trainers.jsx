import React, { useState, useContext,useEffect,useRef  } from "react";
import { ApiContext } from "../ApiContext.jsx";
import { HeartHandshake } from "lucide-react";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { hubtrainerData, hubadvertData} = useContext(ApiContext);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // Define color / style classes per trainer type
  const typeClasses = {
    Normal: "bg-white border-gray-200 text-gray-900",
    "Personal Tutor":
      "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 border-purple-600 text-white",
    Both: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 border-yellow-600 text-white",
  };
  const scrollRef = useRef(null);


  // 🟢 External trainers (ads)
const externalTrainers = hubadvertData
  ? hubadvertData
      .filter(ad => ad.type === "pt") // Only include PT type ads
      .map(item => ({
        id: item.id,
        title: item.sub_title, // or item.title if you want dynamic titles
        content: "Transform your fitness journey today!",
        name: item.title, // using ad title as name
        info: item.description, // customize as needed
        location: item.area_name || "",
        age: item.age || null, // if you have age in data
        link: item.map_link || "",
      }))
  : [];


  useEffect(() => {
    if (!scrollRef.current || externalTrainers.length === 0) return;

    const container = scrollRef.current;

    const scrollInterval = setInterval(() => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      if (container.scrollLeft + clientWidth >= scrollWidth) {
        // Loop back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll by visible width
        container.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }, 2000); // scroll every 2 seconds

    return () => clearInterval(scrollInterval);
  }, [externalTrainers]);
  // const externalTrainers = [
  //   {
  //     id: "ext1",
  //     title: "🔥 Personal Training Offer",
  //     content: "Transform your fitness journey today!",
  //     name: "Arjun Sharma",
  //     info: "Strength & Conditioning | 8 yrs exp",
  //     age: 29,
  //     whatsapp: "919876543210",
  //   },
  //   {
  //     id: "ext2",
  //     title: "💪 Online Coaching Available",
  //     content: "Train with me from anywhere in India",
  //     name: "Simran Kaur",
  //     info: "Yoga & Nutrition Specialist",
  //     age: 27,
  //     whatsapp: "919876543211",
  //   },
  //   {
  //     id: "ext3",
  //     title: "🏋️ Bulk Up Fast",
  //     content: "Custom strength programs for all levels",
  //     name: "Rohit Nair",
  //     info: "Powerlifting & Muscle Gain",
  //     age: 31,
  //     whatsapp: "919876543212",
  //   },
  //   {
  //     id: "ext4",
  //     title: "🔥 Fat Loss Expert",
  //     content: "Drop weight safely with proven methods",
  //     name: "Ananya Gupta",
  //     info: "HIIT & Cardio Specialist",
  //     age: 25,
  //     whatsapp: "919876543213",
  //   },
  //   {
  //     id: "ext5",
  //     title: "⚡ Endurance Builder",
  //     content: "Marathon & sports-specific training",
  //     name: "Vikram Desai",
  //     info: "Sports Science Coach",
  //     age: 34,
  //     whatsapp: "919876543214",
  //   },
  // ];

  return (
<div className="px-1 py-8">
     {/* 🔥 External Trainers Ads Section */}
   
     <div className="px-8 py-8">

      {/* 🏋️ Gym Trainers Section */}
     <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
  Our Tutors
</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hubtrainerData.map((trainer) => (
          <div
            key={trainer.id}
            onClick={() => setSelectedTrainer(trainer.id)}
            className={`
              cursor-pointer
              transform transition duration-300 hover:scale-105
              p-6 rounded-2xl shadow-lg border-4
              ${typeClasses[trainer.type]}
              ${selectedTrainer === trainer.id ? "ring-4 ring-blue-500" : ""}
            `}
          >
            <h4 className="text-xl font-bold mb-1">{trainer.name}</h4>
            <p className="text-sm mb-2">{trainer.info}</p>
            <p className="text-gray-700">{trainer.age} yrs</p>
            <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full bg-black bg-opacity-20">
              {trainer.type}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

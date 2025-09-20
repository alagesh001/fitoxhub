import React, { useState, useContext } from "react";
import { ApiContext } from "../ApiContext.jsx";
import { HeartHandshake } from "lucide-react";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { hubtrainerData, hubadvertData} = useContext(ApiContext);

  // Define color / style classes per trainer type
  const typeClasses = {
    Normal: "bg-white border-gray-200 text-gray-900",
    "Personal Trainer":
      "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 border-purple-600 text-white",
    Both: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 border-yellow-600 text-white",
  };

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
    <div className="p-8 text-center">
      {/* 🔥 External Trainers Ads Section */}
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
        Fitox Featured Personal Trainers
      </h2>
      <div className="overflow-x-auto">
    <div className="flex gap-6 pb-4 max-w-6xl mx-auto overflow-x-auto">
  {externalTrainers.map((trainer) => (
    <div
      key={trainer.id}
      className="relative min-w-[280px] flex-shrink-0 p-6 rounded-2xl shadow-lg border-4 
                 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 text-white"
    >
      {/* Location Badge (Top Right) */}
      <span
        className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-white text-green-600 animate-pulse shadow-md"
      >
        📍 {trainer.location}
      </span>

      <h3 className="text-lg font-bold mt-6 mb-1">{trainer.title}</h3>
      <p className="text-sm opacity-90 mb-3">{trainer.content}</p>
      <p className="text-lg">{trainer.name}</p>
      <p className="text-sm opacity-90 mb-2">{trainer.info}</p>
      {/* <p className="mb-4">{trainer.age} yrs</p> */}

    <a
  href={trainer.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-green-600 font-semibold rounded-full shadow-md hover:scale-105 transition mt-4"
>
  <HeartHandshake className="w-5 h-5" />
  Connect
</a>
    </div>
  ))}
</div>
      </div>

      {/* 🏋️ Gym Trainers Section */}
      <h2 className="text-3xl font-extrabold mb-8 mt-12 text-gray-800">
        Meet Our Trainers
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
  );
}

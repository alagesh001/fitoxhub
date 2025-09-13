import React, { useState,useContext } from "react";
import { ApiContext } from "../ApiContext.jsx";



export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { hubtrainerData } = useContext(ApiContext);

  // Define color / style classes per trainer type
  const typeClasses = {
    "Normal": "bg-white border-gray-200 text-gray-900",
    "Personal Trainer": "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 border-purple-600 text-white",
    "Both": "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 border-yellow-600 text-white",
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Meet Our Trainers</h2>
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

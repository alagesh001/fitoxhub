import React, { useState,useContext } from "react";
import { ApiContext } from "../ApiContext.jsx";



export default function Package() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { hubpackData } = useContext(ApiContext);

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Membership Plans</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

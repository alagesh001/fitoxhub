import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../ApiContext.jsx";
import { Award, User, BookOpen, Calendar, Star,Info } from "lucide-react";

export default function Achievers() {
  const { hubachievedata } = useContext(ApiContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
        Student Achievers 🏆
      </h2>

      {/* Vertical Achievers List */}
      {hubachievedata && hubachievedata.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hubachievedata.map((achiever, index) => {
            const gradients = [
              "from-green-400 via-lime-400 to-yellow-300",
              "from-blue-400 via-cyan-400 to-teal-400",
              "from-pink-500 via-red-500 to-yellow-500",
              "from-indigo-500 via-purple-500 to-pink-500",
              "from-orange-400 via-pink-400 to-red-400",
              "from-rose-400 via-fuchsia-400 to-indigo-400",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={achiever.id}
                className={`p-6 rounded-2xl shadow-lg 
                bg-gradient-to-r ${gradient} text-white hover:scale-[1.03] transition-transform`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-xl font-bold">{achiever.title}</h3>
                </div>

                <p className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <User className="w-5 h-5" /> {achiever.name}
                </p>

                <p className="text-sm flex items-center gap-2 mb-1">
                  <BookOpen className="w-4 h-4" /> Batch: {achiever.batch_name}
                </p>

                <p className="text-sm flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4" /> {achiever.date}
                </p>

<p className="text-sm flex items-center gap-2 mb-2 text-left">
  <Info className="w-4 h-4" /> {achiever.info}
</p>
                <p className="mt-2 font-extrabold text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Score: {achiever.marks}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No achievers found</p>
      )}
    </div>
  );
}

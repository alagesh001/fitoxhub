import React, { useState,useContext } from "react";
import { ApiContext } from "../ApiContext.jsx";

export default function Location() {
  const [loading, setLoading] = useState(true);
  const { hubData } = useContext(ApiContext);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>

      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[500px]">
        {/* Modern Loader */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            <p className="text-gray-600 mb-4 font-medium">Loading Map...</p>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}

        {/* Map */}
        <iframe
          src={hubData.loc_url}
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}

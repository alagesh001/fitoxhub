import { useState } from "react";

export default function Location() {
  const [loading, setLoading] = useState(true);

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.638464106338!2d77.37964527613735!3d28.64059578371329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf168e7bd13b7%3A0xc64999a9b6adc7d0!2sFITOX!5e0!3m2!1sen!2sin!4v1757566828095!5m2!1sen!2sin"
          width="100%"
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

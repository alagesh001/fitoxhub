import { useState } from "react";
import axios from "axios";

export default function Enquiry() {
  const [leadname, setLeadname] = useState("");
  const [leadmob, setLeadmob] = useState("");
  const [status, setStatus] = useState("");
  const [accepted, setAccepted] = useState(false);
  const gymid =   localStorage.getItem("gymid") || 0;
  const typeIs = 0;      // default 0

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
    </div>
  );
}

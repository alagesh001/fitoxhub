import { useState } from "react";
import axios from "axios";

export default function TrialWaiver() {
  const [fullname, setFullname] = useState("");
  const [leadmob, setLeadmob] = useState("");
  const [bookdate, setBookdate] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("");

  const gymid =   localStorage.getItem("gymid") || 0;
  const typeIs = 0;    // default 0

  // Get today's date in YYYY-MM-DD format (for min attribute)
  const today = new Date().toISOString().split("T")[0];

  // Convert picked date to SQL format
  const formatSQLDate = (date) => {
    return date ? `${date}` : null; // YYYY-MM-DD 00:00:00
  };

  const handleSubmit = async (e) => {

    if (!agree) {
      setStatus("⚠️ Please agree to the terms before submitting.");
      return;
    }
    if (!bookdate) {
      setStatus("⚠️ Please select a booking date.");
      return;
    }

    const payload = {
      leadname: fullname,
      leadmob: leadmob, // mapping email to mob for API
      gymid,
      typeIs,
      bookdate: bookdate,
    };

    setStatus("Submitting...");

    try {
      const res = await axios.post("https://oxadmedia.online/api/add-hub-enquiry", payload);
      setStatus("✅ Waiver submitted successfully!");
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Failed to submit waiver. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Trial Waiver & Release Form
      </h2>

      <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile</label>
          <input
            type="mobile"
            value={leadmob}
            onChange={(e) => setLeadmob(e.target.value)}
            placeholder="Enter your Mobile"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
            required
          />
        </div>

        {/* Booking date */}
        <div>
          <label className="block text-sm font-medium mb-1">Trial Date</label>
          <input
            type="date"
            value={bookdate}
            onChange={(e) => setBookdate(e.target.value)}
            min={today} // restrict to today or future
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
            required
          />
        </div>

        <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
          <p>
            By signing this waiver, I acknowledge that participation in physical
            activities carries risks. I release the Gym from liability for
            any injury during my trial session.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="agree" className="text-sm">
            I agree to the terms above
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Sign & Submit
        </button>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </div>
  );
}

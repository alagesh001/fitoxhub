export default function TrialWaiver() {
  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Trial Waiver & Release Form</h2>
      <form className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
          <p>
            By signing this waiver, I acknowledge that participation in physical activities
            carries risks. I release FitLife Gym from liability for any injury during my trial session.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="agree" className="w-4 h-4" />
          <label htmlFor="agree" className="text-sm">
            I agree to the terms above
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Sign & Submit
        </button>
      </form>
    </div>
  );
}

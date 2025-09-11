export default function Feedback() {
  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">We Value Your Feedback</h2>
      <form className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Your Feedback</label>
          <textarea
            placeholder="Write your feedback here..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

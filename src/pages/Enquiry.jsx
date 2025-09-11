export default function Enquiry() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Send us an Enquiry</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button className="w-full bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          Submit
        </button>
      </form>
    </div>
  );
}

export default function Package() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Membership Plans</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Basic</h3>
          <p>₹999 / month</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded-xl shadow">
          <h3 className="font-bold">Pro</h3>
          <p>₹1999 / month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Elite</h3>
          <p>₹2999 / month</p>
        </div>
      </div>
    </div>
  );
}

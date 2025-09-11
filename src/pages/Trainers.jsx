export default function Trainers() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Meet Our Trainers</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {["Amit", "Priya", "Rohan"].map((trainer) => (
          <div
            key={trainer}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <img
              src="https://via.placeholder.com/150"
              alt={trainer}
              className="mx-auto rounded-full mb-4"
            />
            <h4 className="font-bold">{trainer}</h4>
            <p className="text-gray-600">Certified Trainer</p>
          </div>
        ))}
      </div>
    </div>
  );
}

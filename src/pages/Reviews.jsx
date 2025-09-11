export default function Reviews() {
  const reviews = [
    { id: 1, name: "Amit Sharma", text: "Great trainers and amazing atmosphere! 💪", rating: 5 },
    { id: 2, name: "Priya Mehta", text: "Love the group classes. Very motivating.", rating: 4 },
    { id: 3, name: "Ravi Kumar", text: "Affordable packages and friendly staff.", rating: 5 },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-xl shadow-md bg-white border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-yellow-500 mb-2">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

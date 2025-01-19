import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">NomNom Steak Society</h1>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium bg-gray-800 px-3 py-2 rounded">
              Delivery Zone
            </button>
            <span>test@gmail.com</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-200 p-6 text-center">
        <h2 className="text-3xl font-bold">Today's <span className="text-red-600">Steak Society</span> Offer!</h2>
        <p className="text-lg mt-2">Delicious food just for you</p>
      </div>

      {/* Categories */}
      <div className="container mx-auto mt-6 px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {["Appetizers", "Salads", "Pizza", "Lunch Favorites", "Desserts"].map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded-full ${
                index === 0 ? "bg-red-600 text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items */}
      <div className="container mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Finger Food", price: "$12.99", description: "Crispy and delicious snacks" },
          { title: "Cranberry Brie Bites", price: "$12.99", description: "Cheesy and fruity flavors" },
          { title: "Sunshine Stackers", price: "$12.99", description: "Freshly prepared for you" },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/150`}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{item.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-red-600 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 NomNom LLC. Fresh Fast Delivered.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React from "react";

const ProductGrid: React.FC = () => {
  // Product data array
  const products = [
    {
      id: 1,
      name: "Fresh Lime",
      price: 14.99,
      oldPrice: 19.99,
      image: "/FreshLime.png",
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: 4.99,
      oldPrice: 5.99,
      image: "/ChocoMuffin.png",
    },
    {
      id: 3,
      name: "Burger",
      price: 6.49,
      oldPrice: 8.49,
      image: "/Burger.png",
    },
    {
      id: 4,
      name: "Country Burger",
      price: 8.99,
      oldPrice: 10.99,
      image: "/CountryBurger.png",
    },
    {
      id: 5,
      name: "Drink",
      price: 2.49,
      oldPrice: 3.49,
      image: "/Drink.png",
    },
    {
      id: 6,
      name: "Pizza",
      price: 12.99,
      oldPrice: 15.99,
      image: "/Pizza.png",
    },
    {
      id: 7,
      name: "Cheese Butter",
      price: 7.99,
      oldPrice: 9.49,
      image: "/CheseseButer.png",
    },
    {
      id: 8,
      name: "Sandwich Combo",
      price: 9.99,
      oldPrice: 12.49,
      image: "/Sandwiches.png",
    },
    {
      id: 9,
      name: "Spicy Chicken Chup",
      price: 10.49,
      oldPrice: 13.99,
      image: "/ChickenCHup.png",
    },
    {
      id: 10,
      name: "Double Cheese Pizza",
      price: 11.49,
      oldPrice: 14.99,
      image: "/Pizza.png",
    },
    {
      id: 11,
      name: "Mint Lemonade",
      price: 3.99,
      oldPrice: 5.99,
      image: "/Drink.png",
    },
    {
      id: 12,
      name: "Fresh Lime",
      price: 5.49,
      oldPrice: 7.99,
      image: "/FreshLime.png",
    },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left Section */}
          <div className="w-full md:w-3/4">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-4">
                <div>
                  <label className="text-gray-700 font-medium">Sort By:</label>
                  <select className="ml-2 border border-gray-300 rounded p-2">
                    <option value="newest">Newest</option>
                    <option value="popular">Popular</option>
                    <option value="priceLow">Price: Low to High</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Show:</label>
                  <select className="ml-2 border border-gray-300 rounded p-2">
                    <option value="default">Default</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 rounded-lg overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 mt-2">
                      ${product.price.toFixed(2)}{" "}
                      <span className="line-through text-gray-400">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-coffee hover:text-white">
                  3
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search product..."
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            {/* Category Section */}
            <h3 className="text-lg font-bold text-gray-800 mb-4">Category</h3>
            <ul className="space-y-2 mb-8">
              {["Sandwiches", "Burger", "Chicken Chop", "Pizza", "Drinks"].map(
                (category, index) => (
                  <li key={index}>
                    <input type="checkbox" id={category} className="mr-2" />
                    <label htmlFor={category} className="text-gray-600">
                      {category}
                    </label>
                  </li>
                )
              )}
            </ul>

            {/* Filter By Price */}
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Filter By Price
            </h3>
            <input type="range" className="w-full mb-8" min="0" max="100" />

            {/* Product Tags */}
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Product Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Burgers", "Drinks", "Pizza", "Combo"].map((tag, index) => (
                <span
                  key={index}
                  className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

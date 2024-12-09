import React from "react";
import Image from "next/image";

const MainCourse: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-8">Main Course</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <ul className="space-y-6">
              <li className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mt-4">Optic Big Breakfast Combo Menu</h3>
                  <p className="text-gray-500">Toasted French bread topped with romaine, cheddar</p>
                  <p className="text-gray-400 text-sm ">500 CAL</p>
                </div>
                <span className="text-orange-500 font-bold text-lg ">32$</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mt-4">Cashew Chicken with Stir-Fry</h3>
                  <p className="text-gray-500">Oregano, ricotta, mozzarella, kaleggio</p>
                  <p className="text-gray-400 text-sm">430 CAL</p>
                </div>
                <span className="text-orange-500 font-bold text-lg">43$</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mt-4">Vegetables & Green Salad</h3>
                  <p className="text-gray-500">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-gray-400 text-sm">100 CAL</p>
                </div>
                <span className="text-orange-500 font-bold text-lg">14$</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mt-4">Spicy Vegan Potato Curry</h3>
                  <p className="text-gray-500">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-gray-400 text-sm">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold text-lg">35$</span>
              </li>
            </ul>
          </div>
          {/* Right Content */}
          <div>
            <img
              src="/Maincourse.png"
              alt="Main Course Dish"
              className="w-448 h-626 rounded-lg shadow-lg mt-[-60]"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCourse;

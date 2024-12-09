import React from 'react';
import Image from "next/image";

const FavoriteMenu: React.FC = () => {
  const products = [
    { id: 1, name: 'Coffee Beans', price: '$43.78', image: '/Fav-menu1.png' },
    { id: 2, name: 'Espresso', price: '$36.50', image: '/Fav-menu2.png' },
    { id: 3, name: 'Americano', price: '$28.99', image: '/Fav-menu3.png' },
    { id: 4, name: 'Arabica', price: '$30.50', image: '/Fav-menu4.png' },
    { id: 5, name: 'Coffee Stimy', price: '$42.00', image: '/Fav-menu5.png' },
    { id: 6, name: 'Organic Pack', price: '$39.50', image: '/Fav-menu6.png' },
  ];

  return (
    <div className="text-white py-10 px-5 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-black text-3xl md:text-5xl font-bold">Our Favorites Menu</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="mt-bg-black md:w-1/4">
          <ul className="space-y-4">
          <li className="flex items-center gap-4 bg-white text-black border-2 py-2 px-4 rounded hover:bg-coffee hover:text-white cursor-pointer">
  <Image
    src="/DarkCoffee.png" 
    alt=""
    width={50}
    height={50}
    className="rounded-lg shadow-lg border-2 border-coffee"
  />
  <span className="text-lg font-semibold">Americano</span>
</li>

            <li className="flex items-center gap-4 bg-white text-black border-2 py-2 px-4 rounded hover:bg-coffee hover:text-white cursor-pointer">  <Image
    src="/TurkishCoffee.png" 
    alt=""
    width={50}
    height={50}
    className="rounded-lg shadow-lg border-2 border-coffee"
  />
  <span className="text-lg font-semibold">Espresso</span>
</li>
            <li className="flex items-center gap-4 bg-white text-black border-2 py-2 px-4 rounded hover:bg-coffee hover:text-white cursor-pointer">  <Image
    src="/Pancakes.png" 
    alt=""
    width={50}
    height={50}
    className="rounded-lg shadow-lg border-2 border-coffee"
  />
  <span className="text-lg font-semibold">Arabica</span>
</li>
            <li className="flex items-center gap-4 bg-white text-black border-2 py-2 px-4 rounded hover:bg-coffee hover:text-white cursor-pointer">  <Image
    src="/Cappacino.png" 
    alt=""
    width={50}
    height={50}
    className="rounded-lg shadow-lg border-2 border-coffee"
  />
  <span className="text-lg font-semibold">Coffee stimy</span>
</li>
            <li className="flex items-center gap-4 bg-white text-black border-2 py-2 px-4 rounded hover:bg-coffee hover:text-white cursor-pointer">  <Image
    src="/CoffeeBag.png" 
    alt=""
    width={50}
    height={50}
    className="rounded-lg shadow-lg border-2 border-coffee"
  />
  <span className="text-lg font-semibold">Organic Pack</span>
</li>
          </ul>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 font-bold">{product.price}</span>
                  <div className="flex space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <i key={starIndex} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FavoriteMenu };
export default FavoriteMenu;

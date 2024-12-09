

import Image from "next/image";

interface Category {
  title: string;
  description: string;
  icon: string;
}

const categories: Category[] = [
  { title: "Cappuccino", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/Cappacino.png" },
  { title: "Turkish coffee", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/TurkishCoffee.png" },
  { title: "Cafe latte", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/CoffeeLatte.png" },
  { title: "Pancakes", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/Pancakes.png" },
  { title: "Dark coffee", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/DarkCoffee.png" },
  { title: "Coffee Bag", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.", icon: "/CoffeeBag.png" },
];

const CoffeeCategory: React.FC = () => {
  return (
    <section className="relative bg-transparent text-black py-16 px-4 md:px-20 lg:px-32 -mt-60 z-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-coffee text-3xl md:text-4xl font-bold mb-4 opacity-50">Coffee Category</h2>
        <p className="text-coffee text-lg md:text-xl mb-12 opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        {/* Coffee Cup */}
        <div className="relative flex justify-center mb-12">
          <Image
            src="/MidCoffeeGlass.png" 
            alt="Coffee Cup"
            width={250}
            height={280}
            className="z-10"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-transparent border-coffee p-6 rounded-lg hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={category.icon}
                  alt={`${category.title} Icon`}
                  width={100}
                  height={100}
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              {/* Description */}
              <p className="text-gray-400 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeCategory;

  
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className= "h-[912px] bg-dark text-white py-16 px-4 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-coffee text-4xl md:text-5xl font-bold leading-tight">
            Heal the world with coffee
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-300">
            Learn how to make coffee an essential, enjoyable part of your day.
            Indulge in our premium coffee blends.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-transparent border border-coffee py-2 px-6 rounded-lg font-semibold hover:bg-coffee hover:text-black">
              Order Now
            </button>
            <button className="bg-transparent border border-coffee py-2 px-6 rounded-lg font-semibold hover:bg-coffee hover:text-black">
              See More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <Image
            src="/HeroCoffeeCup.png" 
            alt="Coffee Cup"
            width={536}
            height={596}
            className="rounded-lg shadow-lg p-4 border-2 border-coffee"
        
            
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


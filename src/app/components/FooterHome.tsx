
import React from 'react';
import Image from "next/image";

const NewsletterFooter: React.FC = () => {
  return (
    <div className="bg-dark text-white">
      {/* Subscribe Section */}
      <div className="bg-white text-gray-900 py-10 px-5 md:px-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Subscribe To Our Newsletter</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full md:w-1/2 px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button className="bg-coffee text-white px-6 py-2 rounded font-semibold hover:bg-yellow-700 transition">
            Subscribe now
          </button>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

    {/* Footer Section */}
<div className="bg-brown py-10 px-5 md:px-20 opacity-40">
  <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center">
    {/* Left Section */}
    <div className="flex-1">
        <h3 className="text-4xl font-bold text-coffee">Foodtuck</h3>
      <p className="mt-2 text-sm md:text-base text-white text-left">
        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      </p>
    </div>

    {/* Explore Links */}
    <div className="flex-1">
      <h4 className="text-lg font-semibold mb-4">Explore</h4>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About us</a></li>
        <li><a href="#" className="hover:text-white">Contact us</a></li>
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">Team</a></li>
        <li><a href="#" className="hover:text-white">Our Menu</a></li>
      </ul>
    </div>

    {/* Contact Section */}
    <div className="flex-1">
      <h4 className="text-lg font-semibold mb-4">Contact us</h4>
      <ul className="space-y-2 text-gray-400">
        <li>Kolkata India, 3rd Floor, Office 45</li>
        <li>00965 - 96659986</li>
        <li>M.Alyaqout@4house.Co</li>
        <li>Sun - Sat / 10:00 AM - 8:00 PM</li>
      </ul>
    </div>
  </div>
</div>


      {/* Bottom Footer */}
      <div className="bg-coffee text-center py-4">
        <p className="text-sm md:text-base">Copyright &copy; 2022 by Ayeman. All Rights Reserved.</p>
      </div>
      
      <Image
            src="/FooterLeaf.png" 
            alt=""
            width={200}
            height={200}
            className="rounded-lg shadow-lg p-4 mt-[-205px] ml-auto opacity-100"
          />
  
    </div>
  );
};

export default NewsletterFooter;

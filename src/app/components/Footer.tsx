import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import Image from "next/image"
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white py-0 ">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us.</h3>
            <p className="text-sm mb-4">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and
              professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center space-x-4">
  <Image src="/footerWatch.png" alt="Opening Hours" width={77} height={71} />
  <div>
    <h4 className="text-sm font-medium mb-1">Opening Hours</h4>
    <p className="text-sm">Mon - Sat: 8:00 - 6:00</p>
    <p className="text-sm">Sunday: Closed</p>
  </div>
</div>

          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="text-sm space-y-2">
     
              <li><Link className="hover:text-orange-400" href="/About">About</Link></li>
              <li><Link className="hover:text-orange-400" href="/News">News</Link></li>
              <li><Link className="hover:text-orange-400" href="/Partners">Partners</Link></li>
              <li><Link className="hover:text-orange-400" href="/Team">Team</Link></li>
              <li><Link className="hover:text-orange-400" href="/Menu">Menu</Link></li>
              <li><Link className="hover:text-orange-400" href="/Contact">Contact</Link></li>
              
              </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help?</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400">Reporting</a></li>
              <li><a href="#" className="hover:text-orange-400">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-400">Support Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div >
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#" className="flex items-start hover:text-orange-400">
                  <img src="/footerpic1.png" alt="Post 1" className="w-12 h-12 mr-4" />
                  <div>
                    <p>Is fast food good for your body?</p>
                    <span className="text-gray-400 text-xs">February 26, 2022</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start hover:text-orange-400">
                  <img src="/footerpic1.png" alt="Post 2" className="w-12 h-12 mr-4" />
                  <div>
                    <p>Change your food habits with organic food.</p>
                    <span className="text-gray-400 text-xs">February 26, 2022</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start hover:text-orange-400">
                  <img src="/footerpic1.png" alt="Post 3" className="w-12 h-12 mr-4" />
                  <div>
                    <p>Do you like fast food for your life?</p>
                    <span className="text-gray-400 text-xs">February 26, 2022</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    {/* Divider */}
    <div className="border-t border-gray-700 mt-8"></div>

      {/* Bottom Section */}
     
      <div className="h-[99px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center mt-0 bg-[#4F4F4F]">
  <p className="text-xs text-white">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
  <div className="flex space-x-4 mt-4 md:mt-0">
    <FaFacebook className="text-white hover:text-black cursor-pointer" />
    <FaTwitter className="text-white hover:text-black cursor-pointer" />
    <FaInstagram className="text-white hover:text-black cursor-pointer" />
    <FaYoutube className="text-white hover:text-black cursor-pointer" />
    <FaEnvelope className="text-white hover:text-black cursor-pointer" />
  </div>
</div>
    </div>
  );
};


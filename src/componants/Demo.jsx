import React from 'react';
import { Link } from 'react-router-dom';

const restroCities = [
  "Agra Restaurants", "Ahmedabad Restaurants", "Ajmer Restaurants", "Alappuzha Restaurants",
  "Allahabad Restaurants", "Amravati Restaurants", "Amritsar Restaurants", "Aurangabad Restaurants",
  "Bengaluru Restaurants", "Bhopal Restaurants", "Bhubaneswar Restaurants", "Chandigarh Restaurants",
  "Chennai Restaurants", "Coimbatore Restaurants", "Cuttack Restaurants", "Darjeeling Restaurants",
  "Dehradun Restaurants", "Delhi NCR Restaurants", "Dharamshala Restaurants", "Gangtok Restaurants",
  "Goa Restaurants", "Gorakhpur Restaurants", "Guntur Restaurants", "Guwahati Restaurants",
  "Gwalior Restaurants", "Haridwar Restaurants", "Hyderabad Restaurants", "Indore Restaurants",
  "Jabalpur Restaurants", "Jaipur Restaurants", "Jalandhar Restaurants", "Jammu Restaurants",
  "Jamnagar Restaurants", "Jamshedpur Restaurants", "Jhansi Restaurants", "Jodhpur Restaurants",
  "Junagadh Restaurants", "Kanpur Restaurants", "Khajuraho Restaurants", "Khamgaon Restaurants",
  "Kharagpur Restaurants", "Kochi Restaurants", "Kolhapur Restaurants", "Kolkata Restaurants",
  "Kota Restaurants", "Lucknow Restaurants", "Ludhiana Restaurants", "Madurai Restaurants",
  "Manali Restaurants", "Mangalore Restaurants", "Manipal Restaurants", "Meerut Restaurants",
  "Mumbai Restaurants", "Mussoorie Restaurants", "Mysore Restaurants", "Nagpur Restaurants",
  "Nainital Restaurants", "Nashik Restaurants", "Neemrana Restaurants", "Ooty Restaurants",
  "Palakkad Restaurants", "Patiala Restaurants", "Patna Restaurants", "Puducherry Restaurants",
  "Pune Restaurants", "Pushkar Restaurants", "Raipur Restaurants", "Rajkot Restaurants",
  "Ranchi Restaurants", "Rishikesh Restaurants", "Salem Restaurants", "Shimla Restaurants",
  "Siliguri Restaurants", "Srinagar Restaurants", "Surat Restaurants", "Thrissur Restaurants",
  "Tirupati Restaurants", "Trichy Restaurants", "Trivandrum Restaurants", "Udaipur Restaurants",
  "Vadodara Restaurants", "Varanasi Restaurants", "Vellore Restaurants", "Vijayawada Restaurants",
  "Visakhapatnam Restaurants"
];

function Demo() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-400"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/030/095/491/non_2x/spaghetti-with-tomatoes-beans-and-vegetables-on-a-wooden-board-ai-generated-free-photo.jpg')",
        }}
      >
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-transparent">
          <div className="text-white text-2xl font-bold">zomato</div>
          <ul className="flex gap-6 text-white font-medium">
            <li><a href="/add" className="hover:text-red-400">Add restaurant</a></li>
            <li><a href="/login" className="hover:text-red-400">Log in</a></li>
            <li><a href="#" className="hover:text-red-400">Sign up</a></li>
          </ul>
        </nav>

        <div className="mt-5 w-full pt-[15%] flex flex-col items-center text-center text-white px-5">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="Zomato Logo"
            className="w-80 md:w-52 mb-5"
          />
          <h1 className="text-4xl md:text-2xl text-gray-200">
            Find the best restaurants, cafes <br /> and bars in India
          </h1>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="mt-12 px-6 p-5">
        <h1 className="text-4xl mb-4">Popular locations in India</h1>
        <p className="text-xl text-center text-gray-500 mb-10">
          From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all.
          Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {restroCities.map((city, index) => {
            const citySlug = city.replace(' Restaurants', '').trim();
            return (
              <Link
                key={index}
                to={`/city/${encodeURIComponent(citySlug)}`}
                className="block text-xl max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md flex justify-between hover:bg-gray-100"
              >
                <h6 className="text-xl text-gray-900">{city}</h6>
                <svg className="w-3 h-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 mt-20 font-sans">
        {/* Top Row */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center border-t">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato Logo"
            className="w-32 md:w-36 mb-4 md:mb-0"
          />
          <div className="flex gap-4">
            <select className="border border-gray-300 px-3 py-2 rounded-md text-sm cursor-pointer">
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
            </select>
            <select className="border border-gray-300 px-3 py-2 rounded-md text-sm cursor-pointer">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-8 py-10 text-sm">
          <div>
            <h4 className="font-bold mb-3">ABOUT ZOMATO</h4>
            <ul className="space-y-2">
              {["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Press Kit", "Contact Us"].map((item, i) => (
                <li key={i}><a href="#" className="hover:underline cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">ZOMAVERSE</h4>
            <ul className="space-y-2">
              {["Zomato", "Blinkit", "Feeding India", "Hyperpure", "Zomaland"].map((item, i) => (
                <li key={i}><a href="#" className="hover:underline cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">FOR RESTAURANTS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline cursor-pointer">Partner With Us</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Apps For You</a></li>
            </ul>
            <h4 className="font-bold mt-6 mb-3">FOR ENTERPRISES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline cursor-pointer">Zomato For Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">LEARN MORE</h4>
            <ul className="space-y-2">
              {["Privacy", "Security", "Terms", "Sitemap"].map((item, i) => (
                <li key={i}><a href="#" className="hover:underline cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">SOCIAL LINKS</h4>
            <div className="flex gap-4 text-xl text-gray-600 mb-4">
              <a href="#"><i className="fab fa-linkedin hover:text-black"></i></a>
              <a href="#"><i className="fab fa-instagram hover:text-black"></i></a>
              <a href="#"><i className="fab fa-x-twitter hover:text-black"></i></a>
              <a href="#"><i className="fab fa-youtube hover:text-black"></i></a>
              <a href="#"><i className="fab fa-facebook hover:text-black"></i></a>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src="https://b.zmtcdn.com/web_assets/9b6d69d7e05847d7f2118d9bb7c671ae1599427165.png"
                alt="App Store"
                className="w-32"
              />
              <img
                src="https://b.zmtcdn.com/web_assets/13c49ce7bdb05e508b176fe62b0f5f961594271672.png"
                alt="Play Store"
                className="w-32"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-xs text-gray-500 py-6 border-t px-4 leading-relaxed">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. <br />
          All trademarks are properties of their respective owners. © 2008–2025 Zomato™ Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Demo;

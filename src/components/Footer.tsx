
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center text-food-orange font-bold text-2xl">
              <span className="mr-2">🍽️</span>
              <span>TastyBites</span>
            </div>
            <p className="mt-4 text-gray-400">
              Delicious food delivered to your doorstep. Fast, reliable, and always tasty.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-food-orange transition-colors">Home</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-food-orange transition-colors">Restaurants</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-food-orange transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-food-orange transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@tastybites.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Food Street, Yummy City</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for the latest updates and offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="py-2 px-3 rounded-l-md text-gray-900 w-full focus:outline-none"
              />
              <button className="bg-food-orange hover:bg-food-orange-dark px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 TastyBites. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-food-orange">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-food-orange">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-food-orange">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

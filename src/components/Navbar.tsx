
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-food-orange font-bold text-2xl">
          <span className="mr-2">🍽️</span>
          <span>TastyBites</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-food-orange transition-colors">
            Home
          </Link>
          <Link to="/restaurants" className="font-medium hover:text-food-orange transition-colors">
            Restaurants
          </Link>
          <Link to="/menu" className="font-medium hover:text-food-orange transition-colors">
            Menu
          </Link>
          <Link to="/about" className="font-medium hover:text-food-orange transition-colors">
            About
          </Link>
        </div>

        {/* Search Bar Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search food, restaurants..."
              className="bg-transparent border-none outline-none w-40"
            />
          </div>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:text-food-orange">
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-food-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hover:text-food-orange">
            <Bell size={20} />
          </Button>
          <Button variant="default" className="bg-food-orange hover:bg-food-orange-dark text-white">
            Sign In
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:text-food-orange">
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-food-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className={cn("container mx-auto px-4 py-2 md:hidden transition-all duration-300", 
        isSearchOpen ? "h-16 opacity-100" : "h-0 opacity-0 overflow-hidden")}>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search food, restaurants..."
            className="bg-transparent border-none outline-none w-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("bg-white md:hidden transition-all duration-300", 
        isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="font-medium py-2 hover:text-food-orange transition-colors">
            Home
          </Link>
          <Link to="/restaurants" className="font-medium py-2 hover:text-food-orange transition-colors">
            Restaurants
          </Link>
          <Link to="/menu" className="font-medium py-2 hover:text-food-orange transition-colors">
            Menu
          </Link>
          <Link to="/about" className="font-medium py-2 hover:text-food-orange transition-colors">
            About
          </Link>
          <Button variant="default" className="bg-food-orange hover:bg-food-orange-dark text-white w-full">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from '@/context/CartContext';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  
  const notifications = [
    { id: 1, text: "Your order #123 has been delivered", time: "2 mins ago" },
    { id: 2, text: "Special offer: 20% off on all desserts!", time: "1 hour ago" },
    { id: 3, text: "New restaurant added: Spice Garden", time: "3 hours ago" }
  ];
  
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
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-food-orange relative">
                <Bell size={20} />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-3 w-3"></span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4 border-b">
                <h3 className="font-medium">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium">{notification.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center">
                <Button variant="link" size="sm" className="text-food-orange">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Link to="/signin">
            <Button variant="default" className="bg-food-orange hover:bg-food-orange-dark text-white">
              Sign In
            </Button>
          </Link>
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
          <Link to="/signin">
            <Button variant="default" className="bg-food-orange hover:bg-food-orange-dark text-white w-full">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

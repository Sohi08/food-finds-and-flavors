
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import CategorySection from "@/components/CategorySection";
import { foodItems, restaurants, FoodItem, Restaurant } from "@/data/foodData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>([]);
  const popularRestaurants = restaurants.filter(restaurant => restaurant.popular);
  const featuredRestaurant = restaurants.find(restaurant => restaurant.featured);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(foodItems);
    } else {
      setFilteredItems(foodItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const popularItems = foodItems.filter(item => item.popular).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Delicious Food,<br />
                <span className="text-food-orange">Delivered Fast</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                Order your favorite meals from the best restaurants in town. Quick delivery and amazing taste guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter delivery address" 
                    className="pl-10 pr-4 py-3 bg-white rounded-md shadow-sm border border-gray-200 w-full sm:w-80"
                  />
                  <Search className="absolute top-3 left-3 text-gray-400" size={20} />
                </div>
                <Button className="bg-food-orange hover:bg-food-orange-dark text-white">
                  Find Food
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
                alt="Delicious Food" 
                className="rounded-lg shadow-lg w-full h-auto md:h-96 object-cover animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-food-green-light rounded-full p-2">
                    <svg className="w-6 h-6 text-food-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Over 2,000+ users</p>
                    <p className="text-xs text-gray-500">Trust our service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Items Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Most Popular Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Restaurant */}
      {featuredRestaurant && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gray-900 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src={featuredRestaurant.image} 
                  alt={featuredRestaurant.name}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col items-start">
                <span className="bg-food-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Restaurant
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {featuredRestaurant.name}
                </h2>
                <p className="text-gray-300 mb-4">{featuredRestaurant.cuisine}</p>
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full mr-3">
                    <span className="text-yellow-300 mr-1">★</span>
                    <span className="text-white text-sm">{featuredRestaurant.rating}</span>
                  </div>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-sm">
                    {featuredRestaurant.deliveryTime}
                  </div>
                </div>
                <Link to={`/restaurant/${featuredRestaurant.id}`}>
                  <Button className="bg-food-orange hover:bg-food-orange-dark text-white">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Category and Menu Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <CategorySection 
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Popular Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Restaurants</h2>
            <Link to="/restaurants" className="text-food-orange hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRestaurants.map((restaurant) => (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="block group">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden food-card-hover">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{restaurant.name}</h3>
                      <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{restaurant.cuisine}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-1">
                        {restaurant.deliveryTime}
                      </span>
                      <span className="text-sm text-gray-500">
                        Min. order: ${restaurant.minOrder}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Promotion Section */}
      <section className="py-12 bg-food-orange-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download Our Mobile App
              </h2>
              <p className="text-lg mb-6 max-w-md">
                Enjoy a better experience and track your orders in real-time with our mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-900 hover:bg-black text-white">
                  App Store
                </Button>
                <Button className="bg-gray-900 hover:bg-black text-white">
                  Google Play
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://www.transparentpng.com/thumb/mobile-png/download-learn-phone-mobile-png-18.png" 
                alt="Mobile App" 
                className="max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Star, Clock, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { foodItems, getRecommendations, FoodItem } from "@/data/foodData";
import { useCart } from "@/context/CartContext";

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [food, setFood] = useState<FoodItem | null>(null);
  const [recommendations, setRecommendations] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (id) {
      const foodId = parseInt(id);
      const foundFood = foodItems.find(item => item.id === foodId) || null;
      setFood(foundFood);
      
      if (foundFood) {
        setRecommendations(getRecommendations(foodId));
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (food) {
      for (let i = 0; i < quantity; i++) {
        addToCart(food);
      }
    }
  };

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Food item not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-food-orange">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/menu" className="hover:text-food-orange">Menu</Link>
          <span className="mx-2">›</span>
          <span className="font-medium text-gray-700">{food.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Food Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={food.image} 
              alt={food.name} 
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          
          {/* Food Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{food.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="w-5 h-5 text-food-yellow fill-food-yellow mr-1" />
                <span className="font-medium">{food.rating}</span>
              </div>
              <div className="flex items-center mr-4 text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>{food.prepTime}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ChefHat className="w-4 h-4 mr-1" />
                <span>{food.restaurant}</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{food.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {food.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-2xl font-bold text-food-orange mb-6">
              ${food.price.toFixed(2)}
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center border rounded-md mr-6">
                <Button
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                className="bg-food-orange hover:bg-food-orange-dark text-white px-8"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((item) => (
                <FoodCard key={item.id} food={item} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default FoodDetail;

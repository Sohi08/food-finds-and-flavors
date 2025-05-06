
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FoodItem } from '@/data/foodData';
import { useCart } from '@/context/CartContext';

interface FoodCardProps {
  food: FoodItem;
  showAddButton?: boolean;
}

const FoodCard = ({ food, showAddButton = true }: FoodCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden food-card-hover">
      <Link to={`/food/${food.id}`}>
        <div className="h-40 overflow-hidden">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/food/${food.id}`} className="block">
            <h3 className="font-bold text-lg line-clamp-1">{food.name}</h3>
          </Link>
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-food-yellow fill-food-yellow mr-1" />
            <span className="text-sm font-medium">{food.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{food.description}</p>
        
        <div className="flex items-center mt-2">
          <span className="text-xs bg-gray-100 rounded-full px-2 py-1 mr-2">{food.prepTime}</span>
          <span className="text-xs bg-gray-100 rounded-full px-2 py-1">{food.restaurant}</span>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-food-orange">${food.price.toFixed(2)}</span>
          
          {showAddButton && (
            <Button 
              className="bg-food-orange hover:bg-food-orange-dark text-white text-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(food);
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;


import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItemType } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => {
  return (
    <div className="flex border-b border-gray-200 py-4">
      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <span className="font-bold text-food-orange">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.restaurant}</p>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost" 
              size="icon"
              className="h-8 w-8 p-0"
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="ghost" 
              size="icon"
              className="h-8 w-8 p-0"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            variant="ghost" 
            size="icon"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={() => removeItem(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

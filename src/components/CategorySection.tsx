
import { ChefHat, Pizza, Coffee, Utensils, Cake } from 'lucide-react';
import { categories } from '@/data/foodData';
import { useState } from 'react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategorySection = ({ onSelectCategory, selectedCategory }: CategorySectionProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'pizza':
        return <Pizza className="h-5 w-5" />;
      case 'sandwich':
        return <ChefHat className="h-5 w-5" />;
      case 'coffee':
        return <Coffee className="h-5 w-5" />;
      case 'cake':
        return <Cake className="h-5 w-5" />;
      case 'utensils':
        return <Utensils className="h-5 w-5" />;
      case 'salad':
        return <ChefHat className="h-5 w-5" />;
      default:
        return <Utensils className="h-5 w-5" />;
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        <div 
          className={`flex-shrink-0 cursor-pointer transition-all rounded-full px-4 py-2
            ${selectedCategory === 'All' 
              ? 'bg-food-orange text-white' 
              : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => onSelectCategory('All')}
        >
          <span className="whitespace-nowrap">All</span>
        </div>
        
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex-shrink-0 cursor-pointer transition-all rounded-full px-4 py-2
              ${selectedCategory === category.name 
                ? 'bg-food-orange text-white' 
                : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => onSelectCategory(category.name)}
          >
            <div className="flex items-center space-x-2">
              <span>{getIcon(category.icon)}</span>
              <span className="whitespace-nowrap">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

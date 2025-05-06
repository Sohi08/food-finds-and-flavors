
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurant: string;
  rating: number;
  prepTime: string;
  popular: boolean;
  tags: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 1, name: "Pizza", icon: "pizza" },
  { id: 2, name: "Burger", icon: "sandwich" },
  { id: 3, name: "Pasta", icon: "utensils" },
  { id: 4, name: "Dessert", icon: "cake" },
  { id: 5, name: "Drinks", icon: "coffee" },
  { id: 6, name: "Salad", icon: "salad" },
  { id: 7, name: "Indian", icon: "utensils" },
  { id: 8, name: "Thali", icon: "utensils" }
];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella cheese, and basil",
    price: 499,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww",
    category: "Pizza",
    restaurant: "Italian Delights",
    rating: 4.5,
    prepTime: "20-25 min",
    popular: true,
    tags: ["Vegetarian", "Italian"]
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 349,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fHww",
    category: "Burger",
    restaurant: "Burger Palace",
    rating: 4.3,
    prepTime: "15-20 min",
    popular: true,
    tags: ["Beef", "American"]
  },
  {
    id: 3,
    name: "Fettuccine Alfredo",
    description: "Creamy pasta with parmesan cheese and butter sauce",
    price: 599,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV0dHVjY2luZSUyMGFsZnJlZG98ZW58MHx8MHx8fDA%3D",
    category: "Pasta",
    restaurant: "Italian Delights",
    rating: 4.7,
    prepTime: "20-25 min",
    popular: false,
    tags: ["Vegetarian", "Italian", "Creamy"]
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center",
    price: 299,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "Dessert",
    restaurant: "Sweet Treats",
    rating: 4.9,
    prepTime: "15 min",
    popular: true,
    tags: ["Sweet", "Chocolate", "Hot"]
  },
  {
    id: 5,
    name: "BBQ Chicken Pizza",
    description: "Tangy BBQ sauce, grilled chicken, red onions, and cilantro",
    price: 699,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    category: "Pizza",
    restaurant: "Pizza Hub",
    rating: 4.6,
    prepTime: "25-30 min",
    popular: true,
    tags: ["Chicken", "BBQ", "Spicy"]
  },
  {
    id: 6,
    name: "Greek Salad",
    description: "Fresh cucumbers, tomatoes, olives, feta cheese with olive oil dressing",
    price: 349,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Salad",
    restaurant: "Mediterranean Flavors",
    rating: 4.4,
    prepTime: "10 min",
    popular: false,
    tags: ["Vegetarian", "Healthy", "Mediterranean"]
  },
  {
    id: 7,
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, pickles and vegan mayo",
    price: 449,
    image: "https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fHww",
    category: "Burger",
    restaurant: "Green Eats",
    rating: 4.2,
    prepTime: "15-20 min",
    popular: false,
    tags: ["Vegan", "Healthy", "Plant-based"]
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: 399,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D",
    category: "Dessert",
    restaurant: "Italian Delights",
    rating: 4.8,
    prepTime: "5 min",
    popular: true,
    tags: ["Italian", "Coffee", "Creamy"]
  },
  {
    id: 9,
    name: "Butter Chicken",
    description: "Tender chicken in a rich and creamy tomato-based curry with butter and cream",
    price: 549,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Indian",
    restaurant: "Spice Garden",
    rating: 4.8,
    prepTime: "25-30 min",
    popular: true,
    tags: ["Chicken", "Curry", "Creamy", "North Indian"]
  },
  {
    id: 10,
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese cubes in a spiced tomato gravy",
    price: 499,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D",
    category: "Indian",
    restaurant: "Spice Garden",
    rating: 4.7,
    prepTime: "20-25 min",
    popular: true,
    tags: ["Vegetarian", "Spicy", "Paneer", "North Indian"]
  },
  {
    id: 11,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with seasoned potatoes, served with sambar and chutney",
    price: 249,
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Indian",
    restaurant: "Dosa House",
    rating: 4.6,
    prepTime: "15 min",
    popular: true,
    tags: ["Vegetarian", "South Indian", "Breakfast"]
  },
  {
    id: 12,
    name: "Veg Thali",
    description: "Complete meal with rice, roti, dal, paneer dish, vegetable curry, raita, and dessert",
    price: 399,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwdGhhbGl8ZW58MHx8MHx8fDA%3D",
    category: "Thali",
    restaurant: "Spice Garden",
    rating: 4.5,
    prepTime: "20 min",
    popular: false,
    tags: ["Vegetarian", "Complete Meal", "North Indian"]
  },
  {
    id: 13,
    name: "Chicken Biryani",
    description: "Fragrant rice cooked with spiced chicken, saffron, and aromatic spices",
    price: 449,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    category: "Indian",
    restaurant: "Biryani House",
    rating: 4.7,
    prepTime: "30 min",
    popular: true,
    tags: ["Chicken", "Biryani", "Rice", "Spicy"]
  },
  {
    id: 14,
    name: "Gulab Jamun",
    description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup",
    price: 199,
    image: "https://images.unsplash.com/photo-1589114984556-4998bbc6ddc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Dessert",
    restaurant: "Sweet Treats",
    rating: 4.9,
    prepTime: "5 min",
    popular: true,
    tags: ["Sweet", "Indian Dessert"]
  }
];

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minOrder: number;
  image: string;
  popular: boolean;
  featured?: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Italian Delights",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    minOrder: 399,
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    popular: true
  },
  {
    id: 2,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "15-25 min",
    minOrder: 299,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    popular: true
  },
  {
    id: 3,
    name: "Pizza Hub",
    cuisine: "Italian, American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: 349,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
    popular: true
  },
  {
    id: 4,
    name: "Sweet Treats",
    cuisine: "Desserts, Indian Sweets",
    rating: 4.8,
    deliveryTime: "15-20 min",
    minOrder: 199,
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydCUyMHNob3B8ZW58MHx8MHx8fDA%3D",
    popular: false,
    featured: true
  },
  {
    id: 5,
    name: "Mediterranean Flavors",
    cuisine: "Mediterranean, Greek",
    rating: 4.6,
    deliveryTime: "25-35 min",
    minOrder: 399,
    image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRlcnJhbmVhbiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    popular: false
  },
  {
    id: 6,
    name: "Green Eats",
    cuisine: "Vegan, Healthy",
    rating: 4.4,
    deliveryTime: "20-30 min",
    minOrder: 349,
    image: "https://images.unsplash.com/photo-1565895405227-31cffbe0cb86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
    popular: false
  },
  {
    id: 7,
    name: "Spice Garden",
    cuisine: "Indian, North Indian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    minOrder: 399,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    popular: true,
    featured: true
  },
  {
    id: 8,
    name: "Dosa House",
    cuisine: "South Indian",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: 249,
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
    popular: true
  },
  {
    id: 9,
    name: "Biryani House",
    cuisine: "Indian, Biryani",
    rating: 4.7,
    deliveryTime: "30-40 min",
    minOrder: 449,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    popular: true
  }
];

export const getRecommendations = (itemId: number): FoodItem[] => {
  const currentItem = foodItems.find(item => item.id === itemId);
  if (!currentItem) return [];
  
  // Get items from the same category or restaurant
  return foodItems
    .filter(item => 
      item.id !== itemId && 
      (item.category === currentItem.category || 
       item.restaurant === currentItem.restaurant))
    .slice(0, 4);
};

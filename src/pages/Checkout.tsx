
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  
  // Fixed values for demo
  const deliveryFee = 49;
  const tax = Math.round(cartTotal * 0.05); // 5% GST
  const totalWithTax = cartTotal + deliveryFee + tax;

  // Validate Indian phone number (10 digits, optionally starting with +91)
  const validatePhone = (value: string) => {
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(phone)) {
      toast.error("Please enter a valid Indian phone number");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Order placed successfully!");
      navigate("/");
    }, 2000);
  };
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" placeholder="Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      required 
                      className={`mt-1 ${phoneError ? "border-red-500" : ""}`}
                      placeholder="9876543210" 
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (e.target.value) {
                          validatePhone(e.target.value);
                        } else {
                          setPhoneError("");
                        }
                      }}
                    />
                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" required className="mt-1" placeholder="123 Gandhi Road" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" placeholder="Mumbai" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Pin Code</Label>
                    <Input id="zipCode" required className="mt-1" placeholder="400001" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                    <Input id="instructions" className="mt-1" placeholder="Apartment number, landmark, etc." />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit / Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi">UPI</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" className="mt-1" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input id="expiry" className="mt-1" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" className="mt-1" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="mt-4">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" className="mt-1" placeholder="name@bank" />
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-food-orange hover:bg-food-orange-dark text-white py-4 text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : (
                  <span className="flex items-center justify-center">
                    Pay <IndianRupee className="h-4 w-4 mx-1" /> {totalWithTax}
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">x{item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      <span>{(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    <span>{cartTotal}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    <span>{deliveryFee}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    <span>{tax}</span>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  <span>{totalWithTax}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;

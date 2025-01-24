import { ShoppingCart } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { User } from "lucide-react";
import "./styles.css"
import { Categories } from "../admin/_components/Categories";
import { Footer } from "../admin/_components/footer";
export default function App() {
  return (
    <div>
      <div className="w-[full] h-[68px] bg-[#18181B] flex items-center justify-between  ">
        <img className="w-[146px] h-[44px] ml-16 " src="Logo.png" />
        <div className=" flex  mr-16 gap-4">
          <ShoppingCart className="text-black bg-white rounded-full"/>
          <User className="text-black bg-[#EF4444] rounded-full"/>
        </div>
      </div>
      <img className="w-full h-aut" src="BG.png" />
      <div className="text-[30px] font-[600] text-black ml-16 h-[500px] justify-center">
        {" "}
        Categories
        <div className="text-xl pt-10 flex gap-10">
          <p className="bg-red-500">Appetizers</p>
          <p className="border rounded-full ">Salads</p>
          <p>Pizzas</p>
          <p>Side dish</p>
          <p>Brunch</p>
          <p>Luch favorites</p>
          <p>Desserts</p>
          <p>Main Dishes</p>
          <p>Fish & Sea foods</p>
          <p>Beverages</p>

        </div>
      </div>
   

      <div className="bg-white w-[400px] h-[350px] rounded-3xl shadow-lg">
        <img
          src="finger-food.png"
          className="w-full h-[210px] object-cover object-center rounded-t-3xl"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mt-2">
            <p className="text-red-500 font-semibold text-2xl">Finger food</p>
            <p className="text-lg font-semibold">$12.99</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
 
 
 
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
          <ShoppingCart className="text-black bg-white rounded-full  "/>
          <User className="text-black bg-[#EF4444] rounded-full"/>
        </div>
      </div>
      <img className="w-full h-[500]" src="BG.png" />
      <div className="text-[30px] font-[600] text-black ml-16 w-full justify-center ">
        Categories
        <div className="text-xl pt-10 flex gap-8 text-center ">
          <p className="bg-red-500 border border-solid-1px rounded-full p-2">Appetizers</p>
          <p className="border rounded-full border-solid-1px p-2">Salads</p>
          <p className="border rounded-full border-solid-1px p-2">Pizzas</p>
          <p className="border rounded-full border-solid-1px p-2">Side dish</p>
          <p className="border rounded-full border-solid-1px p-2">Brunch</p>
          <p className="border rounded-full border-solid-1px p-2">Luch favorites</p>
          <p className="border rounded-full border-solid-1px p-2">Desserts</p>
          <p className="border rounded-full border-solid-1px p-2">Main Dishes</p>
          <p className="border rounded-full border-solid-1px p-2">Fish & Sea foods</p>
          <p className="border rounded-full border-solid-1px p-2">Beverages</p>

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
 
 
 
 
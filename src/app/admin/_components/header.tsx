"use client"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar";
import { Truck } from "lucide-react";
import { Settings } from "lucide-react";
import { Blocks } from "lucide-react";
import { useState } from "react";


export function Header() {
  const [activeMenu, setActiveMenu] = useState("Food Menu")
    return (
   
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/7 bg-white p-6">


          <h1 className="text-2xl font-bold text-red-500 flex justify-around">
            <span className="mr-2 justify-around">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7996 5.59758C18.614 5.78305 18.6072 5.82326 18.6246 6.634C18.6345 7.09786 18.6109 7.50909 18.5721 7.5477C18.5333 7.58631 18.1224 7.67318 17.6589 7.7406C15.6267 8.03646 13.9182 8.63254 12.1049 9.67846C10.7956 10.4337 10.0859 10.965 9.01375 11.9928C7.90531 13.0553 7.17363 13.9819 6.23113 15.5167C5.96048 15.9576 5.44001 16.9893 5.44001 17.0851C5.44001 17.1048 5.35513 17.3065 5.2514 17.5333C4.66788 18.8091 4.14879 21.1645 4.13002 22.6215C4.11707 23.6292 4.15729 23.5859 3.14883 23.6781C2.38498 23.748 2.26394 23.7788 2.13692 23.9356C1.93728 24.1821 1.95659 24.4507 2.1907 24.6848C2.38705 24.8811 2.39631 24.8824 3.24405 24.8327C3.7145 24.8051 5.13358 24.7318 6.3976 24.6698C7.66162 24.6077 9.29911 24.5228 10.0365 24.4809C12.1539 24.361 12.6898 24.3333 13.7519 24.2897C14.7965 24.2468 16.7168 24.145 18.8463 24.0197C19.5415 23.9787 20.6126 23.9271 21.2264 23.905C21.8401 23.8829 22.6158 23.8494 22.95 23.8307C23.2843 23.812 24.385 23.7602 25.3963 23.7156C26.4075 23.6711 27.7864 23.602 28.4606 23.5621C29.1347 23.5222 30.0827 23.4698 30.5673 23.4456C31.0518 23.4214 31.6551 23.3868 31.9079 23.3687C32.1607 23.3506 32.7985 23.3158 33.3251 23.2913C36.7595 23.1318 37.6852 23.054 37.8426 22.9115C38.0484 22.7252 38.0534 22.2553 37.8515 22.0726C37.7278 21.9606 37.5719 21.9429 36.8564 21.9593C36.3898 21.9701 35.9828 21.9537 35.952 21.9229C35.9212 21.8921 35.8381 21.4809 35.7673 21.0092C35.6237 20.0515 35.5955 19.9161 35.4379 19.4237C35.3771 19.2341 35.2873 18.9238 35.2382 18.7342C35.189 18.5446 35.1177 18.3297 35.0797 18.2565C35.0416 18.1833 35.0105 18.0844 35.0105 18.0369C35.0105 17.8573 34.2817 16.233 33.9005 15.5629C33.3958 14.6759 32.9517 13.9931 32.7228 13.7521C32.6242 13.6482 32.4525 13.4426 32.3413 13.2951C31.8704 12.6706 30.9125 11.7135 30.1298 11.0854C29.5216 10.5972 27.8426 9.49177 27.3497 9.2549C25.1752 8.20997 23.1423 7.67402 20.9658 7.57198C20.279 7.53973 19.9505 7.49369 19.8759 7.41915C19.8116 7.3548 19.7667 7.139 19.7628 6.87555C19.7481 5.88371 19.7262 5.72582 19.5814 5.56579C19.3807 5.34401 19.0392 5.35787 18.7996 5.59758ZM12.7161 11.0926C12.7152 11.1453 12.5686 11.4174 12.3905 11.6973C11.9016 12.4653 10.956 14.2412 10.9558 14.3917C10.9557 14.426 10.8696 14.6425 10.7642 14.8728C10.6589 15.103 10.5727 15.3352 10.5727 15.3888C10.5727 15.4423 10.5407 15.5189 10.5015 15.5589C10.3983 15.6644 9.91457 17.5768 9.77591 18.4278C9.65687 19.1579 9.61343 19.5927 9.53874 20.8026C9.4724 21.8762 9.27605 22.0249 7.89765 22.0459C6.82844 22.0622 6.6334 21.9802 6.43996 21.4327C6.29633 21.0263 6.39553 20.4905 6.897 18.9641C7.30831 17.7122 7.39664 17.4916 7.83215 16.6275C8.52476 15.2534 9.1282 14.3339 10.0442 13.2568C11.2838 11.7992 12.7239 10.6327 12.7161 11.0926ZM23.3279 26.45C22.0597 26.4806 18.6825 26.6351 16.9694 26.7408C15.573 26.827 14.9509 26.8617 12.8709 26.9697C11.6701 27.032 10.2739 27.1165 9.76833 27.1576C9.26272 27.1987 7.86655 27.2703 6.66573 27.3168C5.4649 27.3634 4.43484 27.4169 4.37677 27.4358C4.26814 27.4712 4.27603 27.5963 4.43706 28.3868C4.55603 28.9712 4.89479 30.089 5.05842 30.4372C5.144 30.6192 5.26933 30.9131 5.33689 31.0905C5.68201 31.9955 6.42051 33.2759 7.08569 34.1226C7.28847 34.3808 7.46007 34.592 7.46704 34.592C7.47401 34.592 7.6499 34.5101 7.85797 34.41C8.9199 33.8993 9.41931 33.6767 9.75538 33.5642C10.8431 33.2005 12.6613 32.9651 13.9016 33.0275C15.0552 33.0855 21.1029 33.0837 21.9489 33.0251C22.8339 32.9638 23.3544 32.859 23.8641 32.6399C24.0326 32.5674 24.5497 32.3532 25.0132 32.164C25.4767 31.9748 25.8904 31.7926 25.9325 31.7591C25.9746 31.7256 26.4125 31.5233 26.9056 31.3095C27.3985 31.0957 27.8639 30.8867 27.9398 30.8451C28.1046 30.7546 28.7031 30.4831 30.1459 29.8444C30.7358 29.5832 31.3908 29.2883 31.6015 29.1889C31.8121 29.0895 32.1913 28.9164 32.4441 28.8041C32.9494 28.5798 33.5685 28.2934 34.5271 27.8405C34.8722 27.6775 35.176 27.5441 35.2023 27.5441C35.3114 27.5441 36.0727 27.163 36.1216 27.084C36.1508 27.0368 36.1109 26.9266 36.0331 26.8392C35.6878 26.4515 35.0148 26.3731 34.1243 26.617C33.3567 26.8272 32.3156 27.149 32.1377 27.2312C32.0534 27.27 31.7087 27.3903 31.3716 27.4984C30.435 27.7989 28.3777 28.5184 28.0973 28.6436C27.96 28.7049 27.6753 28.8132 27.4647 28.8844C27.254 28.9555 26.7369 29.1337 26.3155 29.2804C25.4751 29.573 22.8901 30.1261 22.019 30.1998C21.3457 30.2568 21.1069 30.2028 20.9464 29.9578C20.6687 29.534 20.8766 28.9483 21.3728 28.7569C21.639 28.6542 22.7345 28.4665 23.0775 28.4648C23.3624 28.4634 25.1116 28.1841 26.1983 27.9664C26.9659 27.8127 27.5385 27.5172 27.6908 27.1963C27.8397 26.8825 27.839 26.8178 27.6839 26.5811L27.5585 26.3897L25.7879 26.4114C24.8141 26.4235 23.7071 26.4408 23.3279 26.45Z" fill="#EF4444"/>
            </svg>
            </span>
            NomNom
          </h1>
   
          <p className="text-gray-500 mt-1">Swift delivery</p>


          <ul className="mt-6 space-y-6 text-black ">
            <li>
            <button
              onClick={() => setActiveMenu("Food menu")}
              className={`flex gap-x-2.5 w-full text-left px-4 py-2 rounded-full ${
                activeMenu === "Food menu"
                  ? "bg-black text-white"
                  : "hover:text-white hover:bg-black"
              }`}
            >
               <Blocks />
              Food menu
            </button>

            </li>
            <li>
            <button
              onClick={() => setActiveMenu("Orders")}
              className={`flex gap-x-2.5 w-full text-left px-4 py-2 rounded-full ${
                activeMenu === "Orders"
                  ? "bg-black text-white"
                  : "hover:text-white hover:bg-black"
              }`}
            > 
            <Truck />
              Orders
            </button>
              
            </li>
            <li>
             <button
              onClick={() => setActiveMenu("Settings")}
              className={`flex gap-x-2.5 w-full text-left px-4 py-2 rounded-full ${
                activeMenu === "settings"
                  ? "bg-black text-white"
                  : "hover:text-white hover:bg-black"
              }`}
            > 
             <Settings />
              settings
            </button>
             

            </li>
          </ul>
        </div>

       </div>
      
    );
  }

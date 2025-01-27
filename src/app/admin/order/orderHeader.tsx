"use client";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Prompt } from "next/font/google";

export function OrderHeader() {
  return (
    <div className="grid grid-cols-1">
      <div className="flex items-center justify-between bg-[#FFFFFF] text-black p-4  rounded-tl-lg rounded-tr-xl">
        <div>
          <h1 className="text-[20px] font-[700]">Orders</h1>
          <p className="text-[12px] font-[500] text-gray-400">32 Items</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-gray px-4 py-2 rounded-full border border-[#E4E4E7]">
            <CalendarDays onClick={alert} className="size-[16px] mr-2" />
          </div>
          <button
            onClick={alert}
            className="bg-gray-800 hover:bg-gray-700 text-white text-[14px] font-[500] px-4 py-2 rounded-full"
          >
            Change delivery state
          </button>
        </div>
      </div>

      <div className="space-y-4 bg-white">
        <div className="grid grid-cols-9 items-center gap-6 border border-gray-200 p-2 ">
          <input type="checkbox" className="col-span-1 w-4 h-4" />
          <span className="col-span-1 text-[#09090B]">№</span>
          <span className="col-span-2 text-[#71717A] truncate">Customer</span>
          <span className="col-span-1 text-[#71717A]">Food</span>
          <span className="col-span-1 text-[#71717A]">Date</span>
          <span className="col-span-1 text-[#71717A]">Total</span>
          <span className="col-span-1 text-[#71717A]">Delivery address</span>
          <div className="col-span-1 text-[#71717A]  ml-10">Delivery state</div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
 
type CategoryType = {
  categoryName: string;
  _id: string;
}
export function Categories() {
 
  const [categories, setCategories] = useState<CategoryType[]>([]);
 
 
  const addCategory = async () => {  
    
    const categoryName = prompt('Enter new category name');
    const response = await fetch('http://localhost:5000/food-category/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
}
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/food-category');
      const data = await response.json();
      setCategories(data);
    };
 
    fetchData();
  })

  return (
    <div className=" w-full p-6 rounded-2xl  flex flex-col gap-4 bg-background ">
      <h4 className=" text-xl font-semibold  ">Dishes Category</h4>
      <div className="flex flex-wrap gap-3 cursor-pointer">
        {categories?.map((category) => {
          return (
            <Badge
              key={category._id}
              className=" rounded-full border py-2 px-4 flex gap-2 text-sm font-medium text-black bg-white"
            >
              {category.categoryName}
            </Badge>
          
          );
          
        })} <Dialog>
<DialogTrigger><button className="bg-red-500 p-2 mt-2 rounded-full" onClick={addCategory}> + </button></DialogTrigger>
<DialogContent>
  <DialogHeader>
    <DialogTitle>Are you absolutely sure?</DialogTitle>
    <DialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
 
      </div>
    </div>
    
  );
};


 
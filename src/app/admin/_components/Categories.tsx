
"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


type CategoryType = {
  categoryName: string;
  _id: string;
};

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const addCategory = async () => {

    const response = await fetch("http://localhost:5000/food-category/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: newCategoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
    setNewCategoryName(""); 
    setIsDialogOpen(false); 
  };

 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/food-category");
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-6 rounded-2xl flex flex-col gap-4 bg-background">
      <h4 className="text-xl font-semibold">Dishes category</h4>
      <div className="flex flex-wrap gap-3 cursor-pointer">
        {categories?.map((category) => {
          return (
            <Badge
              key={category._id}
              className="rounded-full border py-2 px-4 flex gap-2 text-sm font-medium text-black bg-white"
            >
              {category.categoryName}
            </Badge>
          );
        })}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="bg-red-500 p-2 mt-2 rounded-full text-white">
              +
            </button>
          </DialogTrigger>
          <DialogContent className="text-[#09090B] text-2xl">
            Add new category
            <DialogHeader> 
              <DialogTitle className="text-[#09090B] text-sm">Category name</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Add Category"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Back
              </Button>
              <Button onClick={addCategory}>ADD</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

 
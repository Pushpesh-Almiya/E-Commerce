import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function CartItem() {
  return (
    <div className="border p-5 shadow-lg rounded-md ">
      <div className="flex ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[11rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-ethnic-set/r/c/t/xxl-1-maa-collection-original-imagmcn2ezkvkkxf.jpeg?q=70"
            alt="kurta"
          />
        </div>
        <div className="space-y-1 ml-5">
          <h1 className="font-medium text-xl py-1">
            Men Solid Cotton Blend straight Kurta
          </h1>
          <p className="text-m text-gray-600">
            Size: <span> M.White</span>
          </p>
          <p className="text-m text-gray-600">
            Seller : <span> Folgen</span>
          </p>
          <div className="flex space-x-3">
            <p className="text-gray-600 line-through">$1299</p>
            <p className="font-medium">$385</p>
            <p className="text-green-500 font-medium">70% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center lg:space-x-2">
          <div className="text-red-500">
            <RemoveCircleOutlineIcon />
          </div>

          <span className="py-1 px-7 border rounded-md font-medium text-xl">3</span>
          <div className="text-green-500">
            <AddCircleOutlineIcon />
          </div>
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)", fontWeight:"600"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

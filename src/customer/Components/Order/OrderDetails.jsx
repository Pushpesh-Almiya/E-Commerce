import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { StarBorder } from "@mui/icons-material";

function OrderDetails() {
  return (
    <div className="px-5 lg:px-20">
      <div className="space-y-3">
        <h1 className="font-semibold text-2xl">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-12">
        <OrderTracker activeStep={3} />
      </div>
      <div className="flex flex-col space-y-8 mb-8">
        {[1, 1, 1, 1].map((item) => (
          <div className="flex justify-between items-center shadow-xl rounded-md p-5 border">
            <div className="flex items-center justify-center space-x-2">
              <img
                className="w-[10rem] h-[10rem] object-contain object-top"
                src="https://5.imimg.com/data5/ANDROID/Default/2021/6/CH/VN/SC/112649382/product-jpeg-500x500.jpg"
                alt=""
              />
              <div className="space-y-1 px-5">
                <h1 className="font-semibold">Girls Designer Kurti</h1>
                <p className="text-md opacity-60 space-x-5">
                  <span>Color : Black</span> <span>Size : M</span>
                </p>
                <p className="font-medium">Seller : Rajhans</p>
                <p className="text-green-600 font-medium">$120</p>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 text-purple-700 font-bold">
              <StarBorder />
              <p>Rate & Review Product</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderDetails;

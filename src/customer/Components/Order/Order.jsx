import React from "react";
import OrderCard from "./OrderCard";

function Order() {
  const OrderStatus = [
    { lable: "On the way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },
  ];
  return (
    <div class="grid grid-rows-3 grid-flow-col px-5 lg:px-20 gap-6">
      {/* left side  */}
      <div class="row-span-3">
        <div className="h-auto shadow-lg p-5 sticky top-5">
          <h1 className="text-xl font-semibold">Filter</h1>
          <div className="space-y-4 mt-10">
            <h1 className="font-semibold">Order Status</h1>
            {OrderStatus.map((option) => (
              <div className="flex items-center">
                <input
                defaultValue={option.value}
                  type="checkbox"
                  className="h-4 w-4 border-gray-600 text-indigo-600 focus:ring-indigo-500"
                />
                <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.lable}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right side */}

      <div class="col-span-2 space-y-2 ">
        {
          [1,1,1,1].map((item)=><OrderCard/>)
        }
      </div>
    </div>
  );
}

export default Order;

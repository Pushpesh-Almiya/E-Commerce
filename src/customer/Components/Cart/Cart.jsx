import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate()
  const handleCheckout =()=>{
    navigate(`/checkout?step=2`)
  }
  return (
    <div>
      <div className="lg:grid grid-cols-2 lg:px-16 relative">
        <div className="col-span-1">
          {[1,1,1,1,1].map((item)=>(<CartItem />))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 p-5 pb-4">Price Details</p>
            <hr />
            <div className="space-y-2 font-semibold mb-10 px-5 ">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$299</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-$299</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Ammount</span>
                <span className="text-green-600">$1000</span>
              </div>
            </div>
            <Button onClick={handleCheckout} className="w-full"
                  variant="contained"
                  sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                >Checkout
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

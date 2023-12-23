import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
function OrderCard() {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl border text-md">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[7rem] h-[7rem] object-cover object-top"
              src="https://5.imimg.com/data5/SELLER/Default/2022/12/WV/YY/NE/42050940/screenshot-2022-12-15-083616.png"
              alt=""
            />
            <div className="ml-5 scroll-py-2">
              <p className="">Women Suit for a beautiful girl</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold "> Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
                <p>
              <AdjustIcon sx={{width:"15px", height:'15px'}} className="text-green-600 mr-2 text-sm" />
              <span>Delivered on May 05</span>
            </p>
            <p className="text-xs">Your item has been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on May 10</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;

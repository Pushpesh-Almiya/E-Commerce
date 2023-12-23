import React from "react";
import "./productCard.css"
import { useNavigate } from "react-router-dom";
function ProductCard({product}) {
  const navigate =useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="product"
        />
      </div>
      <div className="textpart p-3">
        <div>
          <p className="font-bold opacity-50">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="font-semibold flex space-x-2 items-center">
          <p>{product.discountedPrice}</p>
          <p className="line-through  opacity-50">{product.price}</p>
          <p className="text-green-600">{product.discountPersent}% Off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

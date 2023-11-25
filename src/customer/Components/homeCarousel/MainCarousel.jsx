import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const data = [
    { id : 1,
      image: "https://m.media-amazon.com/images/I/81XVQ5xc-rL._SX3000_.jpg" },
    {
      id : 2,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Winter-store_GW_PC_Rec._CB572850495_.jpg",
    },
    { id : 3,
      image: "https://m.media-amazon.com/images/I/61tdRVJkIqL._SX3000_.jpg" },
    {
      id : 4,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/RedmiA2/GW/Nov/D103348663_INWLD_RedmiA2_BAU_Desktop_3000x1200._CB572867097_.jpg",
    },
    {
      id : 5,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg",
    },
  ];
const MainCarousel = () => {
    const items = data.map((e)=><img className="cursor-pointer" role="presentation" src={e.image} alt="" />)
  return (
    <div className="z-[-10]">
      <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
    </div>
  )
};
export default MainCarousel;

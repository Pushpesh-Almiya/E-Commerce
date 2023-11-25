import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const CardCarousel = ({ data ,section }) => {
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    720: { items: 3 },
    960: { items: 4 },
    1024: { items: 5 },
  };
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    console.log(activeIndex);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    console.log(activeIndex);
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{section}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          autoPlay
          infinite 
          autoPlayInterval={8000}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              bgcolor: "white",
              transform: "translateX(50%) rotate(-90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50  bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              bgcolor: "white",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
export default CardCarousel;

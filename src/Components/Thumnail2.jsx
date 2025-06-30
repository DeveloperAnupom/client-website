import React from "react";
import thumbnail2 from "../Images/day-of-play.jpg";
import thumbnail3 from "../Images/brac-image-15-1webcrop.jpg";
import thumbnail4 from "../Images/boatschools_0.jpg";
import thumbnail5 from "../Images/FZiGbMgUEAUjLbS.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Thumnail2() {
  return (
    <div className="w-4/6 mx-auto border-4 rounded-2xl">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 2000, // 3 sec
          disableOnInteraction: false,
        }}
        loop={true} // loop must be true for smooth autoplay
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={thumbnail2}
            className="h-[450px] w-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thumbnail3}
            className="h-[450px] w-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thumbnail4}
            className="h-[450px] w-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thumbnail5}
            className="h-[450px] w-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

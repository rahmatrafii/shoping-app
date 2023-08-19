import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const DiscoundSlide = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-lg overflow-hidden"
    >
      <SwiperSlide>
        <img src="/img/satu.webp" alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/dua.webp" alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/tiga.webp" alt="" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default DiscoundSlide;

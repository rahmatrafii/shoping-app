import React, { useEffect, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./../Fragments/Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { getProducts } from "../../services/product.service";
import { Link } from "react-router-dom";

const Recomed = () => {
  const [recomed, setRecomed] = useState([]);

  useEffect(() => {
    try {
      getProducts().then((res) => {
        setRecomed(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="py-7 mb-8">
      <div>
        <h1 className="">Recomend</h1>
      </div>
      <Swiper
        slidesPerView={5}
        slidesPerGroupSkip={5}
        spaceBetween={20}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper py-7 "
      >
        {Object.keys(recomed).length > 0 ? (
          recomed.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={"/product/" + item.id}>
                <CardProduct>
                  <CardProduct.Image image={item.image} />
                  <CardProduct.Body
                    price={item.price}
                    rate={item.rating.rate}
                    count={item.rating.count}
                    title={item.title}
                  />
                </CardProduct>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Recomed;

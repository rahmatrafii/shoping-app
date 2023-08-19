import React from "react";
import DiscoundSlide from "../components/Layouts/DiscountSlide";
import Recomed from "../components/Layouts/Recomed";
import Electronic from "../components/Layouts/Electronic";
import Jewelery from "../components/Layouts/Jewelery";
import WomensClothing from "../components/Layouts/womensClothing";
import MensClothing from "../components/Layouts/mensClothing";

const Home = () => {
  return (
    <div className="pt-28 ">
      <div className="container mx-auto px-6">
        <DiscoundSlide />
        <Recomed />
        <Electronic />
        <MensClothing />
        <WomensClothing />
        <Jewelery />
      </div>
    </div>
  );
};

export default Home;

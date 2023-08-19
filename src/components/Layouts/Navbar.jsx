import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCart(sum);
    console.log(cart);
  }, [cart]);

  const headerRef = useRef();
  window.onscroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add("navFixed");
    } else {
      headerRef.current.classList.remove("navFixed");
    }
  };
  return (
    <header className="fixed w-full z-[9999]" ref={headerRef}>
      <div className="container px-4  mx-auto ">
        <div className="flex justify-between items-center py-4">
          <div className="mr-10">
            <Link className="text-blue-500 text-4xl font-semibold">
              RafStore
            </Link>
          </div>
          <div className="w-[600px] ">
            <input
              type="text"
              placeholder="Cari di RafStore"
              className="w-full rounded-md border-2 px-4 py-3 focus:outline-none shadow-md"
            />
          </div>
          <div className="flex  items-center gap-x-10 px-5">
            <Link to={"/cart"} className="text-3xl p-1 relative">
              <AiOutlineShoppingCart />
              {totalCart > 0 && (
                <span className="absolute flex items-center justify-center w-[25px] h-[25px] bg-blue-500 text-white  rounded-full -top-1 p-1 -right-2 border-2 border-white text-sm">
                  {totalCart}
                </span>
              )}
            </Link>
            <Link to={""} className="text-3xl p-1 font-semibold relative">
              <IoMdNotificationsOutline />
              <span className="absolute hidden  items-center justify-center w-[25px] h-[25px] bg-blue-500 text-white  rounded-full -top-1 p-1 -right-2 border-2 border-white text-sm">
                12
              </span>
            </Link>
            <Link to={""} className="text-3xl p-1 relative">
              <MdOutlineMailOutline />
              <span className="absolute hidden  items-center justify-center w-[25px] h-[25px] bg-blue-500 text-white  rounded-full -top-1 p-1 -right-2 border-2 border-white text-sm">
                1
              </span>
            </Link>
          </div>
          <div className="flex gap-x-10 ">
            <Link to={""} className="text-4xl text-blue-500">
              <FaStore />
            </Link>
            <Link to={""} className="text-4xl text-blue-500">
              <BsPersonCircle />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

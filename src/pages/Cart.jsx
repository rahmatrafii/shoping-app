import React from "react";
import CardCart from "../components/Fragments/CardCart";
import { useSelector } from "react-redux";
import { ConvertPrice } from "../services/ConvertPrice.servies";
import { TotalPrice } from "../services/TotalPrice.service";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartReverse = [...cart].reverse();
  const totalPrice = TotalPrice(cartReverse);
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-x-4">
          <div className="w-[55%] ">
            <h1>Cart</h1>
            <div className="flex flex-col gap-y-3 p-5">
              {cartReverse.length > 0 &&
                cartReverse.map((item) => (
                  <CardCart
                    key={item.id}
                    id={item.id}
                    price={item?.price}
                    quantity={item?.quantity}
                    title={item?.title}
                    image={item.image}
                  />
                ))}

              {cartReverse.length === 0 && (
                <div className="flex justify-center items-center gap-y-3 flex-col">
                  <h2 className="text-green-600 font-semibold text-2xl text-center my-5">
                    Wow, your shopping cart is empty <br />
                    Come on, fill it with your dream items!🥳
                  </h2>
                  <button
                    onClick={() => (window.location = "/")}
                    className="bg-green-600 text-white text-lg font-semibold px-10 py-2 rounded-lg shadow-lg "
                  >
                    start shopping
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className=" w-[40%] h-max rounded-xl border-opacity-50 right-0 border border-slate-400 shadow-lg p-4">
            <div className="text-base p-2 border border-slate-200 rounded-lg ">
              <h2 className="font-semibold ">Detail :</h2>
              <div className="my-4 flex justify-between ">
                <h2 className="">
                  Total Harga Barang (
                  {cart.reduce((acc, cur) => acc + cur.quantity, 0)}) :
                </h2>
                <span>Rp.{ConvertPrice(totalPrice)}</span>
              </div>
              <div className="my-4 flex justify-between ">
                <h2 className="">Total Discount Barang : </h2>
                <span>- Rp. 0</span>
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <h2 className="text-lg">Total Harga:</h2>
              <span>Rp.{ConvertPrice(totalPrice)}</span>
            </div>
            <button className="bg-green-600 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-lg">
              Beli
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

import { ConvertPrice } from "../../services/ConvertPrice.servies";

const CardProduct = ({ children }) => {
  return (
    <div className=" h-[400px]  overflow-hidden   rounded-xl shadow-lg">
      {children}
    </div>
  );
};
const Image = ({ image }) => {
  return (
    <div className="h-[60%]">
      <img src={image} alt="" className="h-full object-cover" />
    </div>
  );
};

const Body = ({ title, price, rate, count }) => {
  return (
    <div className="p-2 h-[40%] ">
      <h2 className="text-lg font-normal mb-3">
        {title.length > 40 ? title.substring(0, 40) + "..." : title}
      </h2>
      <span className="text-xl font-bold mb-3 block">
        Rp.{ConvertPrice(price)}
      </span>
      <div className="flex gap-x-2 text-slate-600">
        <img src="/logo/star.svg" className="w-[25px] h-[25px]" />
        <span>{rate}</span> |<span>Terjual {count}</span>
      </div>
    </div>
  );
};

CardProduct.Image = Image;
CardProduct.Body = Body;

export default CardProduct;

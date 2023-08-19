import { ConvertPrice } from "../../services/ConvertPrice.servie";

const CardProductDetail = ({ children }) => {
  return <div className="flex gap-x-10  max-w-[1000px] "></div>;
};

const Image = ({ image }) => {
  return (
    <div className=" w-1/2 relative">
      <img
        src={image}
        alt=""
        className="  h-full  object-cover rounded-lg"
        loading="lazy"
      />
    </div>
  );
};

const Information = () => {
  return (
    <form className="flex-auto p-6 w-1/2 ">
      <div className="flex flex-wrap items-baseline">
        <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
          {product.title}
        </h1>
        <div className="flex-auto text-3xl font-bold text-slate-500">
          <span>Rp. {ConvertPrice(product.price)}</span>
        </div>
      </div>
      <div className="flex flex-col items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        {Object.keys(product).length > 0 && (
          <span className="mb-10">
            {product.rating.rate} | Terjual {product.rating.count}
          </span>
        )}
        <p>{product.description}</p>
      </div>
      <div className="flex space-x-4 mb-5 text-sm font-medium">
        <div className="flex-auto flex space-x-4 pr-4">
          <button
            className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
            type="button"
          >
            Add to bag
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Free shipping on all continental US orders.
      </p>
    </form>
  );
};

export default CardProductDetail;

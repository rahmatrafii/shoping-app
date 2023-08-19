import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ConvertPrice } from "../../services/ConvertPrice.servies";
import { useDispatch } from "react-redux";
import { plus, reduce, removeToCard } from "../../redux/slices/cartSlice";
const CardCart = ({ title, price, quantity, image, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeToCard(id));
  };
  const handleReduce = () => {
    dispatch(reduce(id));
  };
  const handlePlus = () => {
    dispatch(plus(id));
  };
  return (
    <div className="p-2 border-y-2 border-slate-500">
      <div>
        <div className="flex ">
          <img
            src={image}
            alt=""
            className="w-[100px] h-[100px] bg-red-300 mr-5"
          />
          <div>
            <h2 className="text-3xl mb-3 font-semibold">{title}</h2>
            <span>Rp.{ConvertPrice(price)}</span>
          </div>
        </div>
        <div className="p-1 flex justify-end gap-x-6 text-2xl items-center font-semibold">
          <button onClick={handleDelete}>
            <BsTrash />
          </button>
          <div className="flex gap-x-5 items-center">
            {quantity === 1 ? (
              <button disabled className="opacity-50">
                <AiOutlineMinusCircle />
              </button>
            ) : (
              <button onClick={handleReduce}>
                <AiOutlineMinusCircle />
              </button>
            )}
            <span>{quantity}</span>
            <button onClick={handlePlus}>
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

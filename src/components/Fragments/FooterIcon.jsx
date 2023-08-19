import { Link } from "react-router-dom";

const FooterIcon = ({ nama }) => {
  return (
    <Link className="relative group p-1">
      <p className="absolute text-xs p-1 bg-black text-white left-1/2 -translate-x-1/2 -top-3 scale-0 opacity-0 rounded-md group-hover:-top-7 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        {nama}
      </p>
      <img src={`/logo/${nama}.svg`} alt="" className="w-[25px]" />
    </Link>
  );
};

export default FooterIcon;

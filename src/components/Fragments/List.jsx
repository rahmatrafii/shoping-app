import { Link } from "react-router-dom";

const List = ({ children }) => {
  return (
    <li className="mb-1">
      <Link className="hover:text-blue-500 font-normal transition w-full">
        {children}
      </Link>
    </li>
  );
};
export default List;

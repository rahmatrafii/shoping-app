import { useEffect, useState } from "react";
import { getProductsBy } from "../../services/product.service";
import { Link } from "react-router-dom";
import CardProduct from "../Fragments/CardProduct";
import Loading from "../Fragments/Loading";

const MensClothing = () => {
  const [productsMensClothing, setProductsMensClothing] = useState([]);
  useEffect(() => {
    getProductsBy("men's clothing").then((res) => {
      setProductsMensClothing(res);
    });
  }, []);
  return (
    <div className="mb-14">
      <div>
        <h1>Pakaian Pria</h1>
      </div>
      <div className="flex gap-x-4">
        {Object.keys(productsMensClothing).length > 0 ? (
          productsMensClothing.map((item) => (
            <Link className="w-1/5" key={item.id} to={"/product/" + item.id}>
              <CardProduct>
                <CardProduct.Image image={item.image} />
                <CardProduct.Body
                  title={item.title}
                  price={item.price}
                  rate={item.rating.rate}
                  count={item.rating.count}
                />
              </CardProduct>
            </Link>
          ))
        ) : (
          <>
            <Loading width="w-[280px]" height="h-[400px]" />
            <Loading width="w-[280px]" height="h-[400px]" />
            <Loading width="w-[280px]" height="h-[400px]" />
            <Loading width="w-[280px]" height="h-[400px]" />
            <Loading width="w-[280px]" height="h-[400px]" />
          </>
        )}
      </div>
    </div>
  );
};

export default MensClothing;

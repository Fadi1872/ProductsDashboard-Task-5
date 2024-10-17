import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Services/ProductsServices";
import BackButton from "../components/BackButton";
import ProductShow from "../components/ProductShow";

const ItemShow = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>(null);
  console.log(item);

  const handleGetItem = async () => {
    const response = await Product.show(Number(id));
    if (response?.status == 201) {
      setItem(response.data);
    }
  };

  useEffect(() => {
    handleGetItem();
  }, []);

  return (
    <div className="h-full">
      {item ? (
        <div>
          <BackButton />
          <ProductShow item={item} />
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <div>loading</div>
        </div>
      )}
    </div>
  );
};

export default ItemShow;

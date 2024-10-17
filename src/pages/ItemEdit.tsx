import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import FormTitle from "../components/FormTitle";
import ProductForm from "../components/ProductForm";
import { useEffect, useState } from "react";
import { Product } from "../Services/ProductsServices";

const ItemEdit = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const handleGetItem = async () => {
    const response = await Product.show(Number(id));
    if (response?.status == 201) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    handleGetItem();
  }, []);
  return (
    <div>
      <BackButton />
      <FormTitle title="Edit Item" />
      {!product ? (
        <p>loading</p>
      ) : (
        <>
          <ProductForm
            productData={{
              name: product.name,
              price: product.price,
              image: product.imageUrl,
            }}
            id={Number(id)}
            additionalData={{
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ItemEdit;

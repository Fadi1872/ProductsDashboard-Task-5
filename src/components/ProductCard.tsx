import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../Services/ProductsServices";
import defaultProductImage from "./../assets/box.png"

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const [del, setDel] = useState<boolean>(false);
  const [image, setImage] = useState(product.imageUrl)
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = product.delete();
    if (!response) setDel(false);
  };

  return (
    <div className="w-2.3/10 aspect-square relative overflow-hidden rounded-xl shadow-xl">
      <img
        src={typeof image == "string" ? image : ""}
        alt="product image"
        className="w-full h-full object-contain"
        onError={() => setImage(defaultProductImage)}
      />
      <div className="absolute z-50 top-0 w-full h-full flex flex-col items-center justify-center p-5 bg-white-transparent opacity-0 transition duration-500 cursor-default hover:opacity-100">
        <p
          className="text-3xl text-center font-medium mb-4 cursor-pointer"
          onClick={() => navigate("/item/show/" + product.id)}
        >
          {product.name}
        </p>
        <div className="flex w-full gap-4">
          <Link
            to={"/item/edit/" + product.id}
            className="grow text-center bg-orange-450 text-sm text-white py-1.5"
          >
            Edit
          </Link>
          <button
            className="grow text-center bg-red-600 text-sm text-white py-1.5"
            onClick={() => setDel(true)}
          >
            delete
          </button>
        </div>
      </div>
      {del && (
        <div className="fixed top-0 start-0 w-screen h-screen bg-black-transparent backdrop-blur-md z-10000 flex justify-center items-center">
          <div className="bg-white rounded-xl p-11 px-24">
            <p className="mb-14 text-xl font-semibold">
              Are you sure you wnat to delete {product.name}
            </p>
            <div className="flex justify-around gap-8">
              <button
                className="bg-orange-450 rounded text-white px-11 py-1 text-3xl"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="bg-orange-450 rounded text-white px-11 py-1 text-3xl"
                onClick={() => setDel(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

import { useState } from "react";
import { Type } from "../enums/Type";
import { InputProps } from "../interfaces/InputProps";
import LabeledFileInput from "./LabeledFileInput";
import LabeledInput from "./LabeledInput";
import { Product } from "../Services/ProductsServices";
import { useNavigate } from "react-router-dom";

type ProductErrors = {
  name?: string;
  price?: string;
  image?: string;
};

interface ProductFormProps {
  productData: {
    name: string;
    price: number;
    image: string | File | null;
  };
  id?: number;
  additionalData?: {
    createdAt: string;
    updatedAt: string;
  };
}

const ProductForm = ({ productData, id, additionalData }: ProductFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState(productData);
  const [errors, setErrors] = useState<ProductErrors>({});
  const nameInput: InputProps = {
    type: Type.Text,
    placeholder: "Enter the product Name",
    name: "name",
  };
  const priceInput: InputProps = {
    type: Type.Number,
    placeholder: "Enter the product Price",
    name: "price",
  };
  const handleAddProduct = async () => {    
    setLoading(true);
    let response;
    if (!id) {
      response = await Product.addProduct(
        product.name,
        product.price,
        product.image as File
      );
    } else if (id && additionalData) {
      const productData = new Product(
        id,
        product.name,
        product.image,
        product.price,
        additionalData.updatedAt,
        additionalData.createdAt
      );
      response = await productData.updateProduct();
    }
    if (!response) navigate("/");
    else setErrors(response);
    
    setLoading(false);
    
  };

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className="flex mt-20 gap-6">
            <div className="grow flex flex-col gap-10">
              <LabeledInput
                label="Name"
                fInput={nameInput}
                error={errors.name?.[0] || ""}
                bigLabel
                set={setProduct}
                state={product}
              />
              <LabeledInput
                label="Price"
                fInput={priceInput}
                error={errors.price?.[0] || ""}
                bigLabel
                set={setProduct}
                state={product}
              />
            </div>
            <div className="grow">
              <LabeledFileInput
                label="Image"
                name="image"
                id="product_image"
                error={errors.image?.[0] || ""}
                bigLabel
                set={setProduct}
                state={product}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="mt-20 bg-orange-450 text-white xl:py-3.5 lg:py-2 px-6 rounded text-xl"
              onClick={handleAddProduct}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductForm;

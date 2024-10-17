import BackButton from "../components/BackButton";
import FormTitle from "../components/FormTitle";
import ProductForm from "../components/ProductForm";

const ItemAdd = () => {
  return (
    <div>
      <BackButton />
      <FormTitle title="Add New Item" />
      <ProductForm productData={{ name: "", price: -1, image: null }} />
    </div>
  );
};

export default ItemAdd;

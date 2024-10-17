import { Product } from "../Services/ProductsServices";
import FormTitle from "./FormTitle";
import ProductDetailes from "./ProductDetailes";

const ProductShow = ({ item }: { item: Product }) => {
  return (
    <div>
      <FormTitle title={item.name} />
      <div className="aspect-square mx-auto xl:w-96 md:w-72">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 mt-10">
        <ProductDetailes title="Price" detail={item.price + "$"} />
        <ProductDetailes title="Added At" detail={item.createdAt} />
        <ProductDetailes title="Updated At" detail={item.updatedAt} />
      </div>
    </div>
  );
};

export default ProductShow;

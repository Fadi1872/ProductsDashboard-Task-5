import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { Product } from "../Services/ProductsServices";
import Pagination from "../components/Pagination";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Array<Product> | null>(null);
  const getProducts = async () => {
    let productsArray = await Product.getAllProducts();
    if (search) {
      productsArray = productsArray?.filter((product: Product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setProducts(productsArray);
  };

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
    <div>
      <SearchBar
        placeholder="Search product by name"
        search={search}
        setSearch={setSearch}
      />
      <div className="flex justify-end xl:mt-12 lg:mt-5 xl:mb-8 lg:mb-2">
        <Link
          to="/item/add"
          className="bg-orange-450 text-white xl:py-3.5 lg:py-2 px-6 rounded"
        >
          Add New Product
        </Link>
      </div>
      <Pagination products={products} />
    </div>
  );
};

export default Home;

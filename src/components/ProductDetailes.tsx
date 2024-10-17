interface ProductDetailesProps {
    title: string;
    detail: string;
}

const ProductDetailes = ({title, detail}: ProductDetailesProps) => {
  return (
    <p>
      <span className="font-semibold xl:text-6xl md:text-4xl">{title}:</span>{" "}
      <span className="font-medium opacity-50 ms-2.5 xl:text-4xl md:text-2xl">
        {detail}
      </span>
    </p>
  );
};

export default ProductDetailes;

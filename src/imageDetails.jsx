import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams from React Router
import useFetchProducts from "./hooks/useFetchProducts";
import ProductCard from "./utilities/productCard";

const ImageDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const navigate = useNavigate();
  const {
    products: product,
    loading,
    error,
  } = useFetchProducts(`https://fakestoreapi.com/products/${id}`, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details: {error.message}</p>;

  return (
    <div className="container">
      {product && (
        <ProductCard
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          buttonText="Go back"
          onClick={() => {
            navigate("/");
          }}
        />
      )}
    </div>
  );
};

export default ImageDetails;

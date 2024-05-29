import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "./hooks/useFetchProducts";
import Pagination from "@mui/material/Pagination";
import { Box, TextField } from "@mui/material";
import ProductCard from "./utilities/productCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const { products, loading, error } = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredProduct = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayProducts = searchTerm
    ? filteredProduct
    : products.slice(startIndex, endIndex);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
          },
          ml: { md: "24%" },
          mb: "30px",
          width: "100%",
        }}
      >
        <TextField
          margin="normal"
          sx={{
            width: {
              md: 450,
              xs: 200,
              lg: 500,
            },
          }}
          InputLabelProps={{ shrink: true }}
          label="Search by name"
          variant="outlined"
          onChange={handleSearchTerm}
          value={searchTerm}
        />
      </Box>
      <div className="grid-container">
        {displayProducts?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            buttonText="See details"
            onClick={() => handleClick(product.id)}
          />
        ))}
      </div>
      {!searchTerm && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        />
      )}
    </div>
  );
};

export default Home;

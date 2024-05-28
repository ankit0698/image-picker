import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (url, dependencies = [], options = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        let resData = response.data;

        setProducts(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, dependencies);

  return { products, loading, error };
};

export default useFetchProducts;

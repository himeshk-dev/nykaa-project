import { useEffect, useState } from "react";
import DATA from "../../assets/products-dataset.json";

function useProducts() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [limit] = useState(14);
  const [startIndex, endIndex] = [page * limit, page * limit + limit];
  const getData = () => {
    setLoading(true);
    const data = DATA.slice(startIndex, endIndex);
    setProducts((prevProducts) => {
      return [...prevProducts, ...data];
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    setHasMore(DATA.length > products.length);
  }, [products.length]);
  useEffect(() => {
    if (search) {
      setLoading(true);
      const data = DATA.filter(
        (item) => item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setHasMore(false);
      setFilteredData([...data]);
      setLoading(false);
    } else {
      setHasMore(DATA.length > products.length);
      setFilteredData([]);
    }
  }, [search]);

  return {
    products: search ? filteredData : products,
    page,
    setPage,
    hasMore,
    loading,
    setSearch,
  };
}

export default useProducts;

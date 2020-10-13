import React, { useCallback } from "react";
import useProducts from "./hooks/useProducts";
import Products from "./components/Products";
import ScrollTop from "./components/ScrollTop";
import SearchBar from "./components/SearchBar";
import debounce from "./utils/debounce";
import logo from "./assets/nykaa_logo.svg";
import "./App.css";

function App() {
  const { products, setPage, hasMore, loading, setSearch } = useProducts();
  const debounceInput = useCallback(debounce(setSearch, 300), []);

  const inputHandler = (e) => {
    debounceInput(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchBar inputHandler={inputHandler} />
      <Products
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        products={products}
      />
      <ScrollTop />
    </div>
  );
}

export default App;

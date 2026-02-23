import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("asc");
  const [query, setQuery] = useState("");

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(category);
  const filterProducts = products
    .filter((product) => category === "all" || product.category === category)
    .filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    );

  const priceSort = [...filterProducts].sort((a, b) =>
    sort === "asc" ? a.price - b.price : b.price - a.price,
  );
  return (
    <>
      <div>
        <p>Category </p>
        <select
          name=""
          id=""
          className="border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <p>Sort by Price</p>
        <select
          className="border ml-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
        <input
          type="text"
          placeholder="Search....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 ml-2"
        />
      </div>
      <div className="grid grid-cols-5 px-12 py-10">
        {priceSort.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductListing;

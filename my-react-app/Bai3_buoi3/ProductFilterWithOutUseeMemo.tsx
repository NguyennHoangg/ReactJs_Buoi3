import React from "react";
import { mockProducts } from "./Mockdata";

export default function ProductFilter() {
  const [search, setSearch] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(10000);

  const filterProduct = mockProducts.filter((product: any) => {
    console.log("rerender...")
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  const totalPrice = filterProduct.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  return (
    <div>
      <h2>Product filter</h2>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <p>Tổng tiền: {totalPrice}</p>
      <p>Số sản phẩm: {filterProduct.length}</p>
    </div>
  );
}

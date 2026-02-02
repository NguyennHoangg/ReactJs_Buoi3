import React, { useMemo } from "react";
import { mockProducts } from "./Mockdata";

export default function ProductFilterWithUseMemo() {
  const [search, setSearch] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(1000);

  const filterProduct = mockProducts.filter((product: any) => {
     return product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.price <= maxPrice &&
        product.price >= minPrice;
    });

  const totalPrice = useMemo(() => {
    console.log("rerender...")
     return filterProduct.reduce((sum, product) => sum + product.price, 0);
  }, [search, minPrice, maxPrice]);

  return (
    <div>
      <h1>ProductFilterWithUseMemo</h1>
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

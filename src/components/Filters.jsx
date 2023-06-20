import "./Filters.css";
import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters";

export function Filters () {
  const {filters, setFilters} = useFilters();

  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

console.log(minPriceFilterId, categoryFilterId);

  const handleMinPriceChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price up to:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId} >Category</label>
        <select name="select" id={categoryFilterId}  onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="phones">Phones</option>
        </select>
      </div>
    </section>
  );
}

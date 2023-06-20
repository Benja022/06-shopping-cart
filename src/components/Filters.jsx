import "./Filters.css";
import { useState, useId } from "react";

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

console.log(minPriceFilterId, categoryFilterId);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryChange = (event) => {
    onChange((prevState) => ({
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
          name="price"
          min="0"
          max="1000"
          onChange={handleMinPriceChange}
        />
        <span>${minPrice}</span>
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

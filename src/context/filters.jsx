import { createContext } from "react";
import { useState } from "react";


//Create context
export const FiltersContext = createContext();

//Provider component
export function FiltersProvider({ children }) {

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}


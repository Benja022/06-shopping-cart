import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer.jsx";



function App() {

  const [products] = useState(initialProducts);
  const {filterProducts} = useFilters();
  const filteredProducts= filterProducts(products);

  return 
  <>
  <Header />
  <Products products={filteredProducts} />
  {IS_DEVELOPMENT && <Footer />}
  </>
}

export default App;

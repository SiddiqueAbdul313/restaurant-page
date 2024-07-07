import { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Headers from "./components/headers/Headers";
import Products from "./components/products/Products";
import { useDebounce } from "use-debounce";

const queryClient = new QueryClient();
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  return (
    <div className="">
        <QueryClientProvider client={queryClient}>
          <Headers
            cartCount={cartCount}
            setCartCount={setCartCount}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Products
            cartCount={cartCount}
            setCartCount={setCartCount}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            debouncedSearchTerm={debouncedSearchTerm}
          />
        </QueryClientProvider>
    </div>
  );
}

export default App;

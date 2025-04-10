import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

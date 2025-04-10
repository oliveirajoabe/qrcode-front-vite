import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/:id" element={<RedirectPage />} />
    </Routes>
  );
}

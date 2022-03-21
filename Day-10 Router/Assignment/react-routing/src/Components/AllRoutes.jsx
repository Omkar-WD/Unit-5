import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { NotFoundPage } from "./NotFoundPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/products/:id" element={<ProductsDetailsPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

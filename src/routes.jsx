import { Routes, Route } from "react-router-dom";

import MenuPage from "./pages/MenuPage";
import IngredientPage from "./pages/IngredientPage";
import PartyIngredientsPage from "./pages/PartyIngredientsPage";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />

      <Route
        path="/ingredient/:id"
        element={<IngredientPage />}
      />

      <Route
        path="/party-summary"
        element={<PartyIngredientsPage />}
      />
    </Routes>
  );
}
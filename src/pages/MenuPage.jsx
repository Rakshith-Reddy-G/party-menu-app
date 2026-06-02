import { useState } from "react";
import { useNavigate } from "react-router-dom";

import menuData from "../data/menuData";

import DishModal from "../components/DishModal";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import FilterToggle from "../components/FilterToggle";
import DishCard from "../components/DishCard";
import BottomSummary from "../components/BottomSummary";

export default function MenuPage() {
  const navigate = useNavigate();

  const categories = [
    "Starter",
    "Main Course",
    "Dessert",
    "Sides",
  ];

  const [activeCategory, setActiveCategory] =
    useState("Starter");

  const [search, setSearch] =
    useState("");

  const [veg, setVeg] =
    useState(false);

  const [nonVeg, setNonVeg] =
    useState(false);

  const [selectedDishes, setSelectedDishes] =
    useState([]);

  const [activeDish, setActiveDish] =
    useState(null);

  const toggleDish = (id) => {
    setSelectedDishes((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const openModal = (dish) => {
    setActiveDish(dish);
  };

  const closeModal = () => {
    setActiveDish(null);
  };

  let dishes = menuData.filter(
    (dish) =>
      dish.category === activeCategory
  );

  dishes = dishes.filter((dish) =>
    dish.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (veg && !nonVeg) {
    dishes = dishes.filter(
      (dish) => dish.type === "veg"
    );
  }

  if (!veg && nonVeg) {
    dishes = dishes.filter(
      (dish) => dish.type === "nonveg"
    );
  }

  const selectedCounts = {};

  categories.forEach((cat) => {
    selectedCounts[cat] = menuData.filter(
      (dish) =>
        dish.category === cat &&
        selectedDishes.includes(dish.id)
    ).length;
  });

  return (
    <div className="mobileContainer">
      <h2>Menu</h2>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryTabs
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
        selectedCounts={selectedCounts}
      />

      <FilterToggle
        veg={veg}
        setVeg={setVeg}
        nonVeg={nonVeg}
        setNonVeg={setNonVeg}
      />

      <div className="dishList">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            selected={selectedDishes.includes(
              dish.id
            )}
            toggleDish={toggleDish}
            openModal={openModal}
          />
        ))}
      </div>

      <BottomSummary
        totalSelected={
          selectedDishes.length
        }
        selectedDishes={
          selectedDishes
        }
      />

      {activeDish && (
        <DishModal
          dish={activeDish}
          selected={selectedDishes.includes(
            activeDish.id
          )}
          onClose={closeModal}
          onToggle={toggleDish}
          onIngredient={(id) =>
            navigate(`/ingredient/${id}`)
          }
        />
      )}
    </div>
  );
}
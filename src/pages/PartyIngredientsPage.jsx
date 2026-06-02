import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import menuData from "../data/menuData";

export default function PartyIngredientsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedIds =
    location.state?.selectedDishes || [];

  const dishes = menuData.filter(
    (dish) => selectedIds.includes(dish.id)
  );

  return (
    <div className="ingredientPage">

      

      <button
        className="backIconBtn"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack />
      </button>

      <h1>Party Ingredients</h1>

      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.name}</h2>

          {dish.ingredients.map(
            (ingredient, index) => (
              <div
                key={index}
                className="ingredientRow"
              >
                <span>{ingredient.name}</span>
                <span>{ingredient.quantity}</span>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
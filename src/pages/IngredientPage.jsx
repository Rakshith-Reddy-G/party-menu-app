import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import menuData from "../data/menuData";

export default function IngredientPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = menuData.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="ingredientPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack />
      </button>

      <h2>Ingredient List</h2>

      <img
        src={dish.image}
        alt={dish.name}
        className="ingredientImage"
      />

      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <h3>Ingredients</h3>

      {dish.ingredients.map((item, index) => (
        <div
          key={index}
          className="ingredientRow"
        >
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}
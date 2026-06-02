import "./DishModal.css";

export default function DishModal({
  dish,
  onClose,
  onIngredient,
  onToggle,
  selected
}) {
  if (!dish) return null;

  return (
    <div className="modalOverlay">
      <div className="modalCard">

        <img
          src={dish.image}
          alt={dish.name}
          className="modalImage"
        />

        <div className="modalContent">

          <div className="modalHeader">
            <h2>{dish.name}</h2>

            <button
              onClick={onClose}
              className="closeBtn"
            >
              ✕
            </button>
          </div>

          <p>{dish.description}</p>

          <div className="modalActions">

            <button
              onClick={() =>
                onIngredient(dish.id)
              }
              className="ingredientBtn"
            >
              Ingredients
            </button>

            <button
              onClick={() =>
                onToggle(dish.id)
              }
              className="addDishBtn"
            >
              {selected
                ? "Remove"
                : "Add Dish"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
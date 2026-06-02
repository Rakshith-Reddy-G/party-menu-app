export default function DishCard({
  dish,
  selected,
  toggleDish,
  openModal
}) {
  return (
    <div
      className="dishCard"
      onClick={() => openModal(dish)}
    >
      <div className="dishInfo">

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <span className="ingredientLink">
          View Details
        </span>

      </div>

      <div className="dishImageBox">

        <img
          src={dish.image}
          alt={dish.name}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleDish(dish.id);
          }}
          className="addBtn"
        >
          {selected
            ? "Remove"
            : "Add +"}
        </button>

      </div>
    </div>
  );
}
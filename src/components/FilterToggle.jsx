export default function FilterToggle({
  veg,
  setVeg,
  nonVeg,
  setNonVeg
}) {
  return (
    <div className="filters">
      <button
        className={veg ? "filter activeFilter" : "filter"}
        onClick={() => setVeg(!veg)}
      >
        Veg
      </button>

      <button
        className={nonVeg ? "filter activeFilter" : "filter"}
        onClick={() => setNonVeg(!nonVeg)}
      >
        Non-Veg
      </button>
    </div>
  );
}
export default function CategoryTabs({
  categories,
  active,
  setActive,
  selectedCounts
}) {
  return (
    <div className="tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "tab active" : "tab"}
          onClick={() => setActive(cat)}
        >
          {cat} {selectedCounts[cat] || 0}
        </button>
      ))}
    </div>
  );
}
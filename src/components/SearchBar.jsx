import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchBar">
      <FiSearch />
      <input
        placeholder="Search dish for your party..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
import { useNavigate } from "react-router-dom";

export default function BottomSummary({
  totalSelected,
  selectedDishes
}) {
  const navigate = useNavigate();

  return (
    <div className="bottomBar">

      <div>
        Total Dish Selected
        {" "}
        {totalSelected}
      </div>

      <button
        className="continueBtn"
        onClick={() =>
          navigate(
            "/party-summary",
            {
              state: {
                selectedDishes
              }
            }
          )
        }
      >
        Continue
      </button>

    </div>
  );
}
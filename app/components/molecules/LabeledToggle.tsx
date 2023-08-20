import ToggleButton, { typeToggle } from "../atoms/buttons/ToggleButton";

export default function LabeledToggle({
  className = "",
  label,
  position = "left",
  colors,
}: typeToggle) {
  return (
    <div>
      <div
        className={`inline-flex items-center gap-2 ${
          position == "right" && "flex-row-reverse"
        } ${className}`}
      >
		<h1>{label}</h1>
        <ToggleButton colors={colors} />
      </div>
    </div>
  );
}

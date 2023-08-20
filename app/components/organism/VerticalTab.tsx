import { typeButton } from "../molecules/Button";

interface typeTab extends typeButton {
  trailIcon?: JSX.Element;
}

export default function VerticalTab({
  className = "",
  label,
  icon,
  trailIcon,
  ...props
}: typeTab) {
  return (
    <button
      className={`inline-flex justify-between p-2 ${className}`}
      {...props}
    >
      <div className="flex gap-2">
        {icon && icon}
        <h1>{label}</h1>
      </div>
      {trailIcon && <div>{trailIcon}</div>}
    </button>
  );
}

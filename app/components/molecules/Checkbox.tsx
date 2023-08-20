import { InputHTMLAttributes } from "react";

interface typeCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: JSX.Element;
}

export default function Checkbox({ className, label, ...props }: typeCheckbox) {
  className += " h-4 w-4 mt-1 cursor-pointer";
  return (
    <div className={"flex items-center gap-2"}>
      <input type="checkbox" className={className} {...props} />
      {label && label}
    </div>
  );
}

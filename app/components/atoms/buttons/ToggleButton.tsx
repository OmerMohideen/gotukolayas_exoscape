"use client";
import { ButtonHTMLAttributes, useState } from "react";

type toggleColors = {
  on: string;
  off: string;
};

export interface typeToggle extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  position?: string;
  colors?: toggleColors;
}

const defaultColors: toggleColors = {
  on: "bg-black",
  off: "bg-gray-300",
};


export default function ToggleButton({colors = defaultColors, ...props}: typeToggle) {
  const [toggle, setToggled] = useState(false);
  const handleClick = () => setToggled((toggle) => !toggle);

  return (
    <button
      className={`border-0 rounded-full cursor-pointer h-6 relative w-10 appearance-none ${
        toggle ? colors.on : colors.off
      }`}
	  onClick={handleClick}
	  {...props}
    >
      <span
        className={`bg-white rounded-full h-4 w-4 left-1 absolute top-1 transition ease-out duration-500 ${
          toggle ? "translate-x-4" : ""
        }`}
      />
    </button>
  );
}

import { MouseEventHandler } from "react";
import IconButton from "../atoms/buttons/IconButton";
import ArrowTailedLeftIcon from "../atoms/icons/ArrowTailedLeftIcon";
import Text from "./Text";

interface BackProps {
	showLabel?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement>,
		label?: string,
		color?: string
}

export default function BackButton({showLabel = true, label = "", onClick, color = "black"}: BackProps) {
	return (
    <div className={`w-full z-10 sm:mx-auto sm:max-w-sm flex flex-row items-center mt-2 text-${color}`}>
      <IconButton
        type="button"
        className={`border-2 border-${color} rounded-xl`}
		icon={<ArrowTailedLeftIcon />}
		onClick={onClick}
      />
	  {showLabel && label && (<Text className="mx-auto font-medium text-[24px]" label={label} />)}
    </div>
  );
}

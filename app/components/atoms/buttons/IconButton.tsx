import { ButtonHTMLAttributes } from "react";

export interface typeIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	roundedSize?: string,
	icon: JSX.Element,
}

export default function IconButton({className = "", roundedSize = "full", icon, ...props}: typeIconButton) {
	return (
		<div className="flex items-center">
			<button className={`inline-block rounded-${roundedSize} p-3 ${className}`} {...props}>
				{icon}
			</button>
		</div>
	)
}

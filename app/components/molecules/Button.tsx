import { ButtonHTMLAttributes } from "react"
import { typeText } from "./Text"

export interface typeButton extends ButtonHTMLAttributes<HTMLButtonElement>, typeText {}

export default function Button({className = "", label, position = "none", icon, ...props}: typeButton) {
	return (
		<button className={"flex justify-center items-center gap-2 rounded-xl py-3 px-4 " + className} {...props}>
			{icon && position !== "none" ? (
				<div className="inline-flex">{icon}</div>
			) : null}
			<h1 className="inline-flex">
				{label}
			</h1>
		</button>
	)
}

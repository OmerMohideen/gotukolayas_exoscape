import { typeButton } from "./Button";

export default function Pill({className = "", label, position = "none", icon, ...props}: typeButton) {
	return (
		<div>
			<button className={"inline-flex items-center gap-2 rounded-full py-3 px-4 " + className} {...props}>
				{icon && position !== "none" ? (
					<div className="inline-block">{icon}</div>
				) : null}
				<h1 className="inline-block">
					{label}
				</h1>
			</button>
		</div>
	)
}


export interface typeText {
	className?: string,
	label: string,
	position?: string,
	icon?: JSX.Element
}

export default function Text({className = "", label, position = "none", icon}: typeText) {
	return (
			<div className={position == "none" ? className : "inline-flex items-center gap-2 py-3 px-4 " + className  }>
				{icon && position !== "none" ? (
					<div className="inline-block">{icon}</div>
				) : null}
				<h1 className="inline-block">
					{label}
				</h1>
			</div>
	)
}

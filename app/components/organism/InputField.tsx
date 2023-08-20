import { InputHTMLAttributes } from "react"

export interface typeInput extends InputHTMLAttributes<HTMLInputElement> {
	className?: string,
	label: JSX.Element,
	icon?: JSX.Element
}

export default function InputField({className = "", label, icon, ...props}: typeInput) {
	
	return (
		<div className="flex flex-col w-full max-w-sm">
				{label}
				<div className={`inline-flex flex-row justify-between ${className}`}>
					<input className="flex-grow mx-1 h-[48px] p-2 outline-none placeholder:absolute placeholder:left-2" {...props}/> 
					{icon && icon}
				</div>
			</div>
	)
}

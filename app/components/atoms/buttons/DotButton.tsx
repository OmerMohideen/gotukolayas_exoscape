import { InputHTMLAttributes } from "react"

interface typeDotButton extends InputHTMLAttributes<HTMLInputElement> {
	className?: string,
}

export default function DotButton({...props}: typeDotButton) {
	return (
		<div>
			<input type="radio" {...props}/>
		</div>
	)
}

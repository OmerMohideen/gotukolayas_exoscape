import { HTMLAttributes, ReactNode } from "react";

interface Navigation extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export default function NavigationBar({children, className, ...props}: Navigation) {
	return (
		<div className={`flex flex-row justify-between px-2 ${className}`} {...props}>
 			{children}		
		</div>
	)
}

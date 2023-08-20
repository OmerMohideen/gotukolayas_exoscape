import { ReactNode } from "react";

interface NewsProps {
	children: ReactNode
}

export default function NewsCard({children}: NewsProps) {
	return (
		<div className="flex flex-col shadow-gray-400 rounded-xl shadow-md p-[12px]">
			{children}
		</div>
	)
}

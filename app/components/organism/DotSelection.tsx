import DotButton from "../atoms/buttons/DotButton";

export default function DotSelection({className = "", count = 3, clicked = "1"}) {
	let listOfDots: JSX.Element[] = [];
	for (let i = 1; i <= count; i++) {
		listOfDots.push(<DotButton readOnly checked={clicked === `${i}`} className={`appearance-none cursor-pointer h-3 w-3 rounded-full ${className}`}  key={i} value={`${i}`}/>)
	}

	return (
		<div className="flex gap-2">
			{listOfDots}
		</div>
	)
}

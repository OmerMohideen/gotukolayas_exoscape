import TravelDestinationSVG from "../atoms/svgs/TravelDestinationSVG";
import TicketCardSVG from "../atoms/svgs/TicketCardSVG";
import Text from "./Text";
import Pill from "./Pill";
import { Ticket } from "@/app/types";
import { MouseEventHandler } from "react";

interface ticketProps {
	ticket: Ticket;
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function TicketCard({ ticket, onClick }: ticketProps) {
  const departure = ticket.ship.departure.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="text-gray-100 relative w-[327px] h-[230px]">
      <TicketCardSVG />
      <svg
        className="absolute top-[10.5rem] left-4"
        width="294"
        height="2"
        viewBox="0 0 294 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.593994 1H293.43"
          stroke="#61646B"
          strokeLinecap="round"
          strokeDasharray="5 5"
        />
      </svg>
      <TravelDestinationSVG />
      <div className="absolute w-full top-10 h-[115px] flex flex-col justify-between">
        <div className="text-black flex flex-row justify-between mx-4 items-end">
          <div className="flex flex-col">
            <Text
              className="font-medium text-[24px]"
              label={ticket.from.galaxy.name}
            />
            <Text className="text-[14px]" label={ticket.from.name} />
          </div>
          <div className="flex items-end flex-col">
            <Text
              className="font-medium text-[24px]"
              label={ticket.to.galaxy.name}
            />
            <Text className="text-[14px]" label={ticket.to.name} />
          </div>
        </div>
        <div className="flex items-start flex-row justify-between mx-4 text-[14px]">
          <div className="flex flex-col text-black">
            <Text className="text-gray-400 uppercase" label="Date & time" />
            <Text label={departure} />
          </div>
          <div className="flex items-end flex-col text-black">
            <Text className="text-gray-400 uppercase" label="Ship number" />
            <Text label={ticket.ship.id} />
          </div>
        </div>
		<div className="mt-10 text-black flex items-center flex-row justify-between mx-4 text-[14px]">
			<Pill className="bg-primary text-black font-medium" label={ticket.status} onClick={onClick}/>
          	<Text className="font-bold text-[18px]" label={`${ticket.price} GOTU`}/>
        </div>
      </div>
    </div>
  );
}

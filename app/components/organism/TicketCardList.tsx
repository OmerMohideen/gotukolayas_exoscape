import { Ticket } from "@/app/types";
import TicketCard from "../molecules/TicketCard";

export default function TicketCardList({onClick}: any) {
  const ticketList: Ticket[] = [
    {
      id: 1203,
      from: { galaxy: { name: "G1" }, name: "Planet 01" },
      to: { galaxy: { name: "G1" }, name: "Planet 02" },
      ship: { id: "A100", departure: new Date(2023, 11, 1, 24, 30) },
      status: "On Going",
		price: 1405,
    },
    {
      id: 231,
      from: { galaxy: { name: "G1" }, name: "Planet 01" },
      to: { galaxy: { name: "G1" }, name: "Planet 02" },
      ship: { id: "A110", departure: new Date() },
      status: "On Going",
      price: 2100,
    },
    {
      id: 14,
      from: { galaxy: { name: "G1" }, name: "Planet 01" },
      to: { galaxy: { name: "G1" }, name: "Planet 02" },
      ship: { id: "A200", departure: new Date() },
      status: "On Going",
      price: 1500,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-6 mb-20">
      {ticketList.map((ticket, index) => {
		  return <TicketCard key={index} ticket={ticket} onClick={onClick}/>;
      })}
    </div>
  );
}

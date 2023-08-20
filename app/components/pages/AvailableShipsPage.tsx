import { pageProps } from "@/app/page";
import { Planet, STATES, Ship } from "@/app/types";
import TicketCard from "../molecules/TicketCard";
import BackButton from "../molecules/BackButton";
import Text from "../molecules/Text";
import { Dispatch, SetStateAction } from "react";

interface availableShipsProps extends pageProps {
  setAvailable: Dispatch<SetStateAction<Array<any>>>	
  from?: Planet;
  to?: Planet;
}
// { galaxy: {name: "G1"}, name: "Jupiya", position: [306, 563] },
//    { galaxy: {name: "G1"}, name: "Thabiliya", position: [544, 110] },
//    { galaxy: {name: "G1"}, name: "Loku Thabiliya", position: [972, 124] },
//    { galaxy: {name: "G1"}, name: "Loku Jupiya", position: [1029, 642] },
const ships: Ship[] = [  {
    id: "209",
    from: { galaxy: { name: "G1" }, name: "Earth Malli", position: [740, 255] },
    to: { galaxy: { name: "G1" }, name: "Jupiya", position: [306, 563] },
    departure: new Date(Date.now() + 1000000000),
  },
  {
    id: "209",
    from: { galaxy: { name: "G1" }, name: "Earth Malli", position: [740, 255] },
    to: { galaxy: { name: "G1" }, name: "Jupiya", position: [306, 563] },
    departure: new Date(Date.now() + 1000000000),
  },
	  {
    id: "209",
    from: { galaxy: { name: "G1" }, name: "Earth Malli", position: [740, 255] },
    to: { galaxy: { name: "G1" }, name: "Jupiya", position: [306, 563] },
    departure: new Date(Date.now() + 1000000000),
  },
];

export default function AvailableShipsPage({
  setPage,
  setAvailable,
  from,
  to,
}: availableShipsProps) {
  if (from !== undefined && to !== undefined)
    return (
      <div className="w-full sm:max-w-sm mx-auto">
        <div className="mx-[20px] py-[20px]">
          <BackButton
            onClick={() => {
              setPage(STATES.BOOK);
            }}
          />
		  <Text className="text-[40px] my-4" label="Available Ships" />
		  <div className="flex flex-col gap-6 mb-20">
          {ships.map((ship) => {
            if (ship.from.name === from.name && ship.to.name === to.name)
              return (
                <TicketCard
                  ticket={{
                    id: 1,
                    from: ship.from,
                    to: ship.to,
                    price: 100,
                    ship: ship,
                    status: "Book now",
				  }}
				  onClick={() => {
					  setAvailable([ship.from, ship.to, ship.departure])
					  setPage(STATES.CONFIRM)
				  }}
                />
              );
		  })}
	  </div>
        </div>
      </div>
    );
  else setPage(STATES.BOOK);
}

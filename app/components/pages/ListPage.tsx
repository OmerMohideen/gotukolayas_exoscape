import { pageProps } from "@/app/page";
import BackButton from "../molecules/BackButton";
import Text from "../molecules/Text";
import TicketCardList from "../organism/TicketCardList";
import { STATES } from "@/app/types";

export default function ListPage({ setPage }: pageProps) {
  return (
    <div className="w-full sm:max-w-sm mx-auto">
      <div className="mx-[20px] py-[20px]">
        <BackButton
          onClick={() => {
            setPage(STATES.DASHBOARD);
          }}
        />
        <Text className="text-[40px] my-4" label="My Trips" />
		<TicketCardList onClick={() => {setPage(STATES.PASS)}}/>
      </div>
    </div>
  );
}

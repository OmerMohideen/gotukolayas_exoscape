import { pageProps } from "@/app/page";
import Text from "../molecules/Text";
import Image from "next/image";
import NewsList from "../organism/NewsList";
import { STATES } from "@/app/types";

export default function DashboardPage({ setPage }: pageProps) {
  if (false) setPage(STATES.REGISTER);
  else
    return (
        <div className="m-[20px] mb-20">
          <div className="w-full sm:mx-auto sm:max-w-sm">
            <Text className="font-regular text-[40px]" label="Discovery" />
            <Image
              className="my-2 w-full cursor-pointer"
              src={"/images/dashboard_discovery_image.jpg"}
              width={353}
              height={234}
              alt="Discovery Image of planets"
			  loading="lazy"
			  onClick={() => {setPage(STATES.BOOK)}}
            />
            <Text className="font-regular text-[40px]" label="News" />
            <NewsList />
          </div>
        </div>
    );
}

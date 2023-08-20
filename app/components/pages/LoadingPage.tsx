import { useEffect, useState } from "react";
import BigLogoIcon from "../atoms/icons/BigLogoIcon";
import Text from "../molecules/Text";
import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";

export default function LoadingPage({ page, setPage }: pageProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true); 
    }, 1000);
  }, [show]);

	useEffect(() => {
		if (show && page === "load") {
			 setTimeout(() => {
        		setPage(STATES.WELCOME);
      		}, 1000);
		}
	}, [show, page, setPage])

  if (!show) return null;

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen gap-2 m-auto animate-launch">
        <BigLogoIcon />
        <Text
          className="font-light text-[24px] uppercase"
          label="Escape. explore. see."
        />
      </div>
    </div>
  );
}

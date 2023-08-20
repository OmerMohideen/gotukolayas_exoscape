import { useContext, useEffect, useState } from "react";
import BigLogoIcon from "../atoms/icons/BigLogoIcon";
import Text from "../molecules/Text";
import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";
import { AuthContext } from "@/app/contexts";

export default function LoadingPage({ page, setPage }: pageProps) {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [show]);

  useEffect(() => {
    if (!show || page !== "load") return;

    const timeout = setTimeout(() => {
      if (!user?.user) {
        setPage(STATES.LOGIN);
      } else {
        if (user?.isNewUser) {
          setPage(STATES.WELCOME);
          return;
        }
        setPage(STATES.DASHBOARD);
      }
    }, 1000);
    return () => clearTimeout(timeout);

  }, [show, page, user, setPage])

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

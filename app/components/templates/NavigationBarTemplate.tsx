import IconButton from "../atoms/buttons/IconButton";
import HomeIcon from "../atoms/icons/HomeIcon";
import RocketIcon from "../atoms/icons/RocketIcon";
import NavigationBar from "../organism/NavigationBar";
import ListIcon from "../atoms/icons/ListIcon";
import ProfileIcon from "../atoms/icons/ProfileIcon";
import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";

export default function NavigationBarTemplate({
  page = "",
  setPage,
}: pageProps) {
  const navPages = [STATES.DASHBOARD, STATES.BOOK, STATES.LIST, STATES.PROFILE, STATES.AVAILABLE];

  if (navPages.includes(page))
    return (
		<NavigationBar className="fixed z-[1000] w-full sm:max-w-sm bg-white border-t-[1px] py-2 bottom-0 left-1/2 translate-x-[-50%]">
        <IconButton
          onClick={() => {
            setPage(STATES.DASHBOARD);
          }}
          className={page === STATES.DASHBOARD ? "text-black" : "text-gray-500"}
          icon={<HomeIcon />}
        />
        <IconButton
          onClick={() => {
            setPage(STATES.BOOK);
          }}
          className={page === STATES.BOOK ? "text-black" : "text-gray-500"}
          icon={<RocketIcon />}
        />
        <IconButton
          onClick={() => {
            setPage(STATES.LIST);
          }}
          className={page === STATES.LIST ? "text-black" : "text-gray-500"}
          icon={<ListIcon />}
        />
        <IconButton
          onClick={() => {
            setPage(STATES.PROFILE);
          }}
          className={page === STATES.PROFILE ? "text-black" : "text-gray-500"}
          icon={<ProfileIcon />}
        />
      </NavigationBar>
    );
}

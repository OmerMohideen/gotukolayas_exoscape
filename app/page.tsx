"use client";
import DashboardPage from "./components/pages/DashboardPage";
import LoadingPage from "./components/pages/LoadingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import WelcomePage from "./components/pages/WelcomePage";
import { Dispatch, SetStateAction, useState } from "react";
import NavigationBarTemplate from "./components/templates/NavigationBarTemplate";
import dynamic from "next/dynamic";
import ListPage from "./components/pages/ListPage";
import ProfilePage from "./components/pages/ProfilePage";
import { STATES } from "@/app/types";
import AvailableShipsPage from "./components/pages/AvailableShipsPage";
import ChooseSeatPage from "./components/pages/ChooseSeatPage";
import BookConfirmationPage from "./components/pages/BookConfirmationPage";
import PaymentPage from "./components/pages/PaymentPage";
import BookingPassPage from "./components/pages/BookingPassPage";
import { AuthContextProvider } from "./contexts";

export interface pageProps {
  page?: string;
  setPage: Dispatch<SetStateAction<string>>;
}

const BookPage = dynamic(() => import("./components/pages/BookPage"), {
  ssr: false,
});

export default function Home() {
  const [available, setAvailble] = useState([undefined, undefined])
  const [page, setPage] = useState(STATES.LOAD);
  const pages = {
    [STATES.LOAD]: <LoadingPage page={page} setPage={setPage} />,
    [STATES.WELCOME]: <WelcomePage setPage={setPage} />,
    [STATES.DASHBOARD]: <DashboardPage setPage={setPage} />,
    [STATES.REGISTER]: <RegisterPage setPage={setPage} />,
    [STATES.LOGIN]: <LoginPage setPage={setPage} />,
    [STATES.BOOK]: <BookPage setPage={setPage} setAvailable={setAvailble} />,
    [STATES.LIST]: <ListPage setPage={setPage} />,
    [STATES.PROFILE]: <ProfilePage setPage={setPage} />,
    [STATES.AVAILABLE]: <AvailableShipsPage setAvailable={setAvailble} setPage={setPage} from={available[0]} to={available[1]} />,
    [STATES.SEAT]: <ChooseSeatPage />,
    [STATES.CONFIRM]: <BookConfirmationPage available={available} setPage={setPage} />,
    [STATES.PAYMENT]: <PaymentPage setPage={setPage} />,
    [STATES.PASS]: <BookingPassPage setPage={setPage} />
  };

  return (
    <AuthContextProvider>
      <main>
        <div className="sm:max-w-[650px] sm:w-[100%] sm:m-auto">
          {pages[page]}
          <NavigationBarTemplate page={page} setPage={setPage} />
        </div>
      </main>
    </AuthContextProvider>
  );
}

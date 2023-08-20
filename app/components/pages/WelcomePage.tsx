import { useState } from "react";
import WelcomeTemplate, {
  WelcomeButton,
  WelcomeImage,
  WelcomeText,
} from "../templates/WelcomeTemplate";
import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";

export default function WelcomePage({setPage}: pageProps) {
  const [pageNo, setPageNo] = useState(1);
  const welcomePages = [
    {
      src: "/images/welcome_image_one.jpg",
      alt: "Planet with a space station",
      title: "Travel Around The Universe",
      description: "Travel around the galaxy with style",
      button: "Next",
      onClick: () => {
        setPageNo(2);
      },
    },
    {
      src: "/images/welcome_image_two.jpg",
      alt: "tezt",
      title: "The Dream Is Alive",
      description: "Fuel your dreams with traveling with us",
      button: "Next",
      onClick: () => {
        setPageNo(3);
      },
    },
    {
      src: "/images/welcome_image_three.jpg",
      alt: "tezt",
      title: "Across The Sea Of Space, The Stars Are Other Suns",
      longText: true,
      description: "Explore beyond your imagination",
      button: "Get Started",
      onClick: () => {
        setPage(STATES.DASHBOARD);
      },
    },
  ];
  return (
    <div className="w-full max-w-sm mx-auto">
      {welcomePages.map((page, index) => {
        return (
          pageNo === index + 1 && (
            <WelcomeTemplate
              key={index}
              onSkip={() => {
				setPage(STATES.DASHBOARD);  
              }}
            >
              <WelcomeImage src={page.src} alt={page.alt} />
              <WelcomeText
                title={page.title}
                description={page.description}
                longText={page?.longText}
              />
              <WelcomeButton
                page={index + 1}
                label={page.button}
                onClick={page.onClick}
              />
            </WelcomeTemplate>
          )
        );
      })}
    </div>
  );
}

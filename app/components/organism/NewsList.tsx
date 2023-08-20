import Image from "next/image";
import NewsCard from "../molecules/NewsCard";
import Text from "../molecules/Text";

export default function NewsList() {
  const newsList = [
    {
      title: "Thriving Haven",
      description:
        "Planet CY-200 Reaches 2,000,000 Population Milestone, Paving the Way for a Promising Future",
      image: "/images/dashboard_news_image_one.jpg",
      alt: "Planet from the sky",
    },
    {
      title: "New Frontier Unveiled",
      description:
        "Scientists Discover Uninhabitable Exoplanet with Extreme Conditions",
      image: "/images/dashboard_news_image_two.jpg",
      alt: "Planet with extreme conditions",
    },
  ];
  return (
    <div className="flex flex-col gap-9">
      {newsList.map((news, index) => {
        return (
          <NewsCard key={index}>
            <Text className="text-[24px]" label={news.title} />
            <Text className="text-[16px] my-[10px]" label={news.description} />
			<Image
			  className="w-full"
              src={news.image}
              width={353}
              height={234}
              alt={news.alt}
              loading="lazy"
            />
          </NewsCard>
        );
      })}
    </div>
  );
}

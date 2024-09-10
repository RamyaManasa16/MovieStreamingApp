import { useState } from "react";
import { latest, recommended, upcome } from "../../dummyData";
import Banner from "../banner/Banner";
import Trending from "../trending/Trending";
import MoviesBanner from "../banner/MoviesBanner";

const HomeScreen = () => {
  const [items, setItems] = useState(upcome);
  const [latestData, setLatestData] = useState(latest);
  const [recommendedData, setRecommendedData] = useState(recommended);
  return (
    <>
      <Banner/>
      <MoviesBanner items={items} title="Upcoming Movies" />
      <MoviesBanner items={latestData} title="Latest Movies" />
      <Trending />
      <MoviesBanner items={recommendedData} title="Recommended Movies" />
    </>
  )
}

export default HomeScreen;

import { useState } from "react";
import Homes from "../components/home/Homes";
import { latest, recommended, upcome } from "../dummyData";
import Upcomming from "../components/upcoming/Upcomming";
import Trending from "../components/trending/Trending";


const HomePages = () => {
  const [items, setItems] = useState(upcome);
  const [latestData, setLatestData] = useState(latest);
  const [recommendedData, setRecommendedData] = useState(recommended);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcoming Movies" />
      <Upcomming items={latestData} title="Latest Movies" />
      <Trending/>
      <Upcomming items={recommendedData} title="Recommended Movies" />
    </>
  )
}

export default HomePages

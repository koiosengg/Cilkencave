import React from "react";
import HomeBanner from "./Home/HomeBanner";
import HomeServices from "./Home/HomeServices";
import HomeIndustires from "./Home/HomeIndustires";
import HomeUniqueness from "./Home/HomeUniqueness";

function Home() {
  return (
    <div className="Home">
      <HomeBanner />
      <HomeServices />
      <HomeIndustires />
      <HomeUniqueness />
    </div>
  );
}

export default Home;

import React from "react";
import Banner from "./sections/Banner";
import Categories from "./sections/categories";
import RunningJobs from "./sections/RunningJobs";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <RunningJobs />
    </>
  );
}

export default Home;

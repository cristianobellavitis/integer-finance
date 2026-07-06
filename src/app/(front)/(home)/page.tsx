import React from "react";

import HomeCover from "./home-cover";
import HomeTicker from "./home-ticker";
import HomeProductHighlights from "./home-product-highlights";
import HomeCtaBanner from "./home-cta-banner";
import HomeRateCalculator from "./home-rate-calculator";
import HomeMission from "./home-mission";
import HomeFocusCarousel from "./home-focus-carousel";
import HomeWhatWeDo from "./home-what-we-do";
import HomeOverview from "./home-overview";
import HomeNewsletter from "./home-newsletter";

export default function Home() {
  return (
    <>
      <HomeCover />

      <HomeTicker />

      <HomeProductHighlights />

      <HomeCtaBanner />

      <HomeMission />

      <HomeRateCalculator />

      <HomeFocusCarousel />

      <HomeWhatWeDo />

      <HomeOverview />

      <HomeNewsletter />
    </>
  );
}

import React from "react";
import HeroSection from "../components/About/HeroSection";
import StorySection from "../components/About/StorySection";
import MissionVisionSection from "../components/About/MissionVisionSection";
import ValuesSection from "../components/About/ValuesSection"
import TeamSection from "../components/About/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}

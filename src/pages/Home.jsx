import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import Explore from "../components/Explore";
import Discounted from "../components/Discounted";

export default function Home() {
  return (
    <>
      <Landing></Landing>
      <Highlights></Highlights>
      <Features></Features>
      <Discounted></Discounted>
      <Explore></Explore>
    </>
  );
}

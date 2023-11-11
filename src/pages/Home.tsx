import React from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { Main } from "../components/Home/Main";
import { Importance } from "../components/Home/Importance";
import { GoldenCircle } from "../components/Home/GoldenCircle";
import { Sort } from "../components/Home/Sort";

// 홈 페이지
export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Importance />
      <GoldenCircle />
      <Sort />
      <Footer />
    </div>
  );
};

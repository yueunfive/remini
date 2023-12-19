import React, { useEffect } from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { Main } from "../components/Home/Main";
import { Importance } from "../components/Home/Importance";
import { GoldenCircle } from "../components/Home/GoldenCircle";
import { Sort } from "../components/Home/Sort";
import AOS from "aos";
import "aos/dist/aos.css";

// 홈 페이지
export const Home: React.FC = () => {
  // 스크롤 애니메이션
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Sort />
      <Importance />
      <GoldenCircle />
      <Footer />
    </div>
  );
};

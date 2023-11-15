import React from "react";
import ViewAllWrap from "./ViewAllWrap.tsx";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer";
import { RetroBox } from "../../components/RetroBox.tsx";
import paginationImg from "../../img/UI/Pagination.png";

// 임시저장 전체보기
export const TempStorage: React.FC = () => {
  return (
    <>
      <Header />
      <ViewAllWrap>
        <h1>임시저장</h1>
        <div className="retro_container">
          <div className="retro_line">
            <RetroBox hideLikes />
            <RetroBox hideLikes />
            <RetroBox hideLikes />
          </div>
          <div className="retro_line">
            <RetroBox hideLikes />
            <RetroBox hideLikes />
            <RetroBox hideLikes />
          </div>
          <div className="retro_line">
            <RetroBox hideLikes />
            <RetroBox hideLikes />
            <RetroBox hideLikes />
          </div>
        </div>
        {/* 페이지네이션 : API 연동하면서 구현 예정입니다 */}
        <img
          src={paginationImg}
          alt="paginationImg"
          className="paginationImg"
        />
      </ViewAllWrap>
      <Footer />
    </>
  );
};

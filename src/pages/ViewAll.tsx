import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { RetroBox } from "../components/RetroBox.tsx";
import paginationImg from "../img/UI/Pagination.png";

type ButtonType = "popular" | "latest" | "category";

// 둘러보기
export const ViewAll: React.FC = () => {
  const [activeButton, setActiveButton] = useState("popular");
  const [activeCategory, setActiveCategory] = useState("KPT"); // 추가된 부분

  const handleButtonClick = (buttonType: ButtonType) => {
    setActiveButton(buttonType);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Header />
      <ViewAllWrap showCategory={activeButton === "category"}>
        <nav>
          <div className="main_btn">
            <button
              className={activeButton === "popular" ? "active" : ""}
              onClick={() => handleButtonClick("popular")}
            >
              인기 회고
            </button>
            <button
              className={activeButton === "latest" ? "active" : ""}
              onClick={() => handleButtonClick("latest")}
            >
              최신 회고
            </button>
            <button
              className={activeButton === "category" ? "active" : ""}
              onClick={() => handleButtonClick("category")}
            >
              카테고리별 회고
            </button>
          </div>
          {activeButton === "category" && (
            <div className="category_btn">
              <button
                className={activeCategory === "KPT" ? "active" : ""}
                onClick={() => handleCategoryClick("KPT")}
              >
                KPT
              </button>
              <button
                className={
                  activeCategory === "Continue-Stop-Start" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Continue-Stop-Start")}
              >
                Continue-Stop-Start
              </button>
              <button
                className={activeCategory === "5F" ? "active" : ""}
                onClick={() => handleCategoryClick("5F")}
              >
                5F
              </button>
              <button
                className={activeCategory === "TIL" ? "active" : ""}
                onClick={() => handleCategoryClick("TIL")}
              >
                TIL
              </button>
              <button
                className={activeCategory === "4L" ? "active" : ""}
                onClick={() => handleCategoryClick("4L")}
              >
                4L
              </button>
              <button
                className={activeCategory === "ORID" ? "active" : ""}
                onClick={() => handleCategoryClick("ORID")}
              >
                ORID
              </button>
              <button
                className={activeCategory === "AAR" ? "active" : ""}
                onClick={() => handleCategoryClick("AAR")}
              >
                AAR
              </button>
              <button
                className={activeCategory === "YWT" ? "active" : ""}
                onClick={() => handleCategoryClick("YWT")}
              >
                YWT
              </button>
              <button
                className={activeCategory === "개인적 회고" ? "active" : ""}
                onClick={() => handleCategoryClick("개인적 회고")}
              >
                개인적 회고
              </button>
              <button
                className={
                  activeCategory === "성과/수치 중심 회고" ? "active" : ""
                }
                onClick={() => handleCategoryClick("성과/수치 중심 회고")}
              >
                성과/수치 중심 회고
              </button>
            </div>
          )}
        </nav>
        <div className="retro_container">
          <div className="retro_line">
            <RetroBox />
            <RetroBox />
            <RetroBox />
          </div>
          <div className="retro_line">
            <RetroBox />
            <RetroBox />
            <RetroBox />
          </div>
          <div className="retro_line">
            <RetroBox />
            <RetroBox />
            <RetroBox />
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

const ViewAllWrap = styled.div<{ showCategory: boolean }>`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  nav {
    margin-top: 40px;
    margin-left: ${(props) => (props.showCategory ? "45px" : "0")};

    .main_btn {
      display: flex;
      gap: 24px;
      margin-right: ${(props) => (props.showCategory ? "0" : "444px")};
      margin-bottom: ${(props) => (props.showCategory ? "0" : "20px")};

      button {
        padding: 13px 32px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
        border: none;

        color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &.active {
          background: var(--primary-900, #233e2c);
          color: var(--primary-400, #79cd96);
        }
      }
    }

    .category_btn {
      display: flex;
      gap: 16px;
      margin-top: 24px;

      button {
        padding: 7px 16px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        border: none;

        color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        &.active {
          background: var(--primary-900, #233e2c);
          color: var(--primary-400, #79cd96);
        }
      }
    }
  }

  .retro_container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .retro_line {
      display: flex;
      gap: 32px;
    }
  }

  .paginationImg {
    margin-top: 41px;
    margin-bottom: ${(props) => (props.showCategory ? "85px" : "120px")};
  }
`;

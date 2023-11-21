import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { RetroBox } from "../components/RetroBox.tsx";
import Pagination from "../components/Pagination.tsx";

import axios from "axios";

type ButtonType = "popular" | "latest" | "category";

type RetroDataType = {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
};

// 둘러보기
export const Browsing: React.FC = () => {
  const [activeButton, setActiveButton] = useState("popular");
  const [activeCategory, setActiveCategory] = useState("");
  const [retroData, setRetroData] = useState<RetroDataType[]>([]); // RetroBox에 사용될 데이터 상태
  const [pageNumber, setPageNumber] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 전체 개수 확인(for pagination)
  const pageSize = 9;

  useEffect(() => {
    fetchRetroData();
  }, [activeButton, pageNumber]); // activeButton 또는 pageNumber가 변경될 때마다 데이터를 다시 가져옴

  // 인기, 최신 회고 목록 조회
  const fetchRetroData = async () => {
    try {
      let url = "";

      if (activeButton === "popular") {
        url = `https://www.remini.store/api/remini/popular?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      } else if (activeButton === "latest") {
        url = `https://www.remini.store/api/remini/recent?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      }

      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setRetroData(response.data.content);
      setTotalElements(response.data.totalElements);
      console.log(response.data.content);
      console.log(response.data.totalElements);
    } catch (error) {
      console.error("Error fetching retro data:", error);
    }
  };

  // 카테고리별 회고 목록 조회
  const handleCategoryClick = async (category: string) => {
    try {
      setActiveCategory(category);
      setPageNumber(0); // 카테고리 변경 시 페이지 번호 초기화

      const pageSize = 9;
      let url = `https://www.remini.store/api/remini/category?category=${category}&pageNumber=0&pageSize=${pageSize}`;
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setRetroData(response.data.content);
      setTotalElements(response.data.totalElements);
      console.log(response.data.content);
      console.log(response.data.totalElements);
    } catch (error) {
      console.error("Error fetching retro data:", error);
    }
  };

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const handleButtonClick = (buttonType: ButtonType) => {
    setActiveButton(buttonType);
    setPageNumber(0); // 버튼이 바뀌면 페이지 번호 초기화
  };

  // 회고 박스 클릭 -> 회고 상세 조회
  const handleRetroBoxClick = async (reminiId: number) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://www.remini.store/api/remini/${reminiId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Retrieved retro data:", data);
        // 회고 작성 완료 페이지로 이동하는 코드 필요
      }
    } catch (error) {
      console.error("Error fetching retro data:", error);
    }
  };

  return (
    <>
      <Header />
      <BrowsingWrap showCategory={activeButton === "category"}>
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
              onClick={() => {
                handleButtonClick("category");
                handleCategoryClick("KPT");
              }}
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
                className={activeCategory === "CSS" ? "active" : ""}
                onClick={() => handleCategoryClick("CSS")}
              >
                Continue-Stop-Start
              </button>
              <button
                className={activeCategory === "FIVE_F" ? "active" : ""}
                onClick={() => handleCategoryClick("FIVE_F")}
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
                className={activeCategory === "FOUR_L" ? "active" : ""}
                onClick={() => handleCategoryClick("FOUR_L")}
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
                className={activeCategory === "PERSONAL" ? "active" : ""}
                onClick={() => handleCategoryClick("PERSONAL")}
              >
                개인적 회고
              </button>
              <button
                className={activeCategory === "RESULT" ? "active" : ""}
                onClick={() => handleCategoryClick("RESULT")}
              >
                성과/수치 중심 회고
              </button>
            </div>
          )}
        </nav>
        <div className="retro_container">
          {retroData.map((item: RetroDataType) => (
            <div className="retroBox" key={item.reminiId}>
              <RetroBox
                key={item.reminiId}
                createdDate={item.createdDate}
                liked={item.liked}
                likesCount={item.likesCount}
                reminiId={item.reminiId}
                reminiImage={item.reminiImage}
                title={item.title}
                goToResult={() => handleRetroBoxClick(item.reminiId)}
              />
            </div>
          ))}
        </div>
        <Pagination
          totalItems={totalElements}
          itemsPerPage={pageSize}
          onPageChange={handlePageChange}
        />
      </BrowsingWrap>
      <Footer />
    </>
  );
};

const BrowsingWrap = styled.div<{ showCategory: boolean }>`
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
    flex-wrap: wrap;
    gap: 20px;

    width: 916px;
    height: 838px;

    .retroBox {
      margin-left: 6px;
      margin-right: 6px;
    }
  }
`;

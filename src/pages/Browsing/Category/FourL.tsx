import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../../components/Header.tsx";
import { Footer } from "../../../components/Footer.tsx";
import { RetroBox } from "../../../components/RetroBox.tsx";
import Pagination from "../../../components/Pagination.tsx";

import axios from "axios";

type RetroDataType = {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
};

// 둘러보기 - 카테고리별 회고 - FourL
export const CategoryFourL: React.FC = () => {
  const navigate = useNavigate();

  const [retroData, setRetroData] = useState<RetroDataType[]>([]); // RetroBox에 사용될 데이터 상태
  const [pageNumber, setPageNumber] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 전체 개수 확인(for pagination)
  const pageSize = 9;

  // FourL 회고 목록 조회
  const fetchCategoryRetroData = async () => {
    try {
      let url = `https://www.remini.store/api/remini/category?category=FOUR_L&pageNumber=${pageNumber}&pageSize=${pageSize}`;
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
    setPageNumber(newPageNumber - 1);
  };

  // pageNumber가 변경될 때마다 데이터를 다시 가져옴
  useEffect(() => {
    fetchCategoryRetroData();
  }, [pageNumber]);

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

  const goToPopular = () => {
    navigate("/browsing/popular");
  };

  const goToLatest = () => {
    navigate(`/browsing/latest`);
  };

  const goToAAR = () => {
    navigate(`/browsing/category/aar`);
  };
  const goToContinue = () => {
    navigate(`/browsing/category/continue`);
  };
  const goToFiveF = () => {
    navigate(`/browsing/category/5f`);
  };
  const goToKPT = () => {
    navigate(`/browsing/category/kpt`);
  };
  const goToORID = () => {
    navigate(`/browsing/category/orid`);
  };
  const goToPerformance = () => {
    navigate(`/browsing/category/performance`);
  };
  const goToPersonal = () => {
    navigate(`/browsing/category/personal`);
  };
  const goToTIL = () => {
    navigate(`/browsing/category/til`);
  };
  const goToYWT = () => {
    navigate(`/browsing/category/ywt`);
  };

  return (
    <>
      <Header />
      <BrowsingWrap>
        <nav>
          <div className="main_btn">
            <button onClick={goToPopular}>인기 회고</button>
            <button onClick={goToLatest}>최신 회고</button>
            <button className="active">카테고리별 회고</button>
          </div>

          <div className="category_btn">
            <button onClick={goToKPT}>KPT</button>
            <button onClick={goToContinue}>Continue-Stop-Start</button>
            <button onClick={goToFiveF}>5F</button>
            <button onClick={goToTIL}>TIL</button>
            <button className="active">4L</button>
            <button onClick={goToORID}>ORID</button>
            <button onClick={goToAAR}>AAR</button>
            <button onClick={goToYWT}>YWT</button>
            <button onClick={goToPersonal}>개인적 회고</button>
            <button onClick={goToPerformance}>성과/수치 중심 회고</button>
          </div>
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

const BrowsingWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  nav {
    margin-top: 40px;
    margin-left: 45px;

    .main_btn {
      display: flex;
      gap: 24px;
      margin-right: 0;
      margin-bottom: 0;

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

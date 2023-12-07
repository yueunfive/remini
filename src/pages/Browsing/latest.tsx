import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import { RetroBox } from "../../components/RetroBox.tsx";
import Pagination from "../../components/Pagination.tsx";

import axios from "axios";

type RetroDataType = {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
};

// 둘러보기 - 최신 회고
export const Latest: React.FC = () => {
  const navigate = useNavigate();

  const [retroData, setRetroData] = useState<RetroDataType[]>([]); // RetroBox에 사용될 데이터 상태
  const [pageNumber, setPageNumber] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 전체 개수 확인(for pagination)
  const pageSize = 9;

  // 최신 회고 목록 조회
  const fetchLatestRetroData = async () => {
    try {
      const url = `https://www.remini.store/api/remini/recent?pageNumber=${pageNumber}&pageSize=${pageSize}`;
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
      console.error("Error fetching latest retro data:", error);
    }
  };

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber - 1);
  };

  // pageNumber가 변경될 때마다 데이터를 다시 가져옴
  useEffect(() => {
    fetchLatestRetroData();
  }, [pageNumber]);

  const goToPopular = () => {
    navigate("/browsing/popular");
  };

  const goToCategory = () => {
    navigate(`/browsing/category/kpt`);
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
      <BrowsingWrap>
        <nav>
          <div className="main_btn">
            <button onClick={goToPopular}>인기 회고</button>
            <button className="active">최신 회고</button>
            <button onClick={goToCategory}>카테고리별 회고</button>
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
    margin-left: 0;

    .main_btn {
      display: flex;
      gap: 24px;
      margin-right: 444px;
      margin-bottom: 20px;

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

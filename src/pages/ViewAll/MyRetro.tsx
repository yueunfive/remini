import React, { useEffect, useState } from "react";
import ViewAllWrap from "./ViewAllWrap.tsx";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer";
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

// 나의 회고 전체보기
export const MyRetro: React.FC = () => {
  const [retroData, setRetroData] = useState<RetroDataType[]>([]); // RetroBox에 사용될 데이터 상태
  const [pageNumber, setPageNumber] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 전체 개수 확인(for pagination)
  const pageSize = 9;

  useEffect(() => {
    fetchRetroData();
  }, [pageNumber]);

  // 회고 목록 조회
  const fetchRetroData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(
        `https://www.remini.store/api/remini/private?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

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
      <ViewAllWrap>
        <h1>나의 회고</h1>
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
      </ViewAllWrap>
      <Footer />
    </>
  );
};

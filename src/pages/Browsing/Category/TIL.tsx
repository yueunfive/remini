import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryBrowsingWrap } from "./CategoryBrowsingWrap.tsx";
import { Header } from "../../../components/Header.tsx";
import { Footer } from "../../../components/Footer.tsx";
import { RetroBox } from "../../../components/RetroBox.tsx";
import Pagination from "../../../components/Pagination.tsx";

import axios from "axios";
import LoginModal from "../../../components/Modal/LoginModal.tsx";
import ModalOverlay from "../../../components/Modal/ModalOverlay.tsx";

type RetroDataType = {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
};

// 둘러보기 - 카테고리별 회고 - TIL
export const CategoryTIL: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부를 관리하는 상태
  const [retroData, setRetroData] = useState<RetroDataType[]>([]); // RetroBox에 사용될 데이터 상태
  const [pageNumber, setPageNumber] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 전체 개수 확인(for pagination)
  const pageSize = 9;

  // KPT 회고 목록 조회
  const fetchCategoryRetroData = async () => {
    try {
      let url = `https://www.remini.store/api/remini/category?category=TIL&pageNumber=${pageNumber}&pageSize=${pageSize}`;
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

  // 로그일 모달 관련 ---------------------------------------------------------------------
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // 스크롤 비활성화
    } else {
      document.body.style.overflow = ""; // 스크롤 활성화
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  // 모달창 외부 영역 클릭시 모달창 닫기
  const handleOverlayClick = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  // -------------------------------------------------------------------------------------------

  // 회고 박스 클릭
  const handleRetroBoxClick = async (reminiId: number) => {
    navigate(`/complete-writing/${reminiId}`); // 로그인 O : 작성완료 페이지로 이동
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
  const goToFourL = () => {
    navigate(`/browsing/category/4l`);
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
  const goToYWT = () => {
    navigate(`/browsing/category/ywt`);
  };

  return (
    <>
      <Header />
      {showModal && (
        <>
          <LoginModal closeModal={closeModal} />
          <ModalOverlay onClick={handleOverlayClick} />
        </>
      )}
      <CategoryBrowsingWrap>
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
            <button className="active">TIL</button>
            <button onClick={goToFourL}>4L</button>
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
                setShowModal={setShowModal}
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
      </CategoryBrowsingWrap>
      <Footer />
    </>
  );
};

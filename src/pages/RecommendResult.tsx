import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { KPT } from "../components/RecommendSort/KPT";
import { ORID } from "../components/RecommendSort/ORID";
import { TIL } from "../components/RecommendSort/TIL";
import { AAR } from "../components/RecommendSort/AAR";
import { Continue } from "../components/RecommendSort/Continue";
import { FiveF } from "../components/RecommendSort/FiveF";
import { Performance } from "../components/RecommendSort/Performance";
import { Personal } from "../components/RecommendSort/Personal";
import { YWT } from "../components/RecommendSort/YWT";
import { FourL } from "../components/RecommendSort/FourL";
import { useNavigate } from "react-router-dom";

// 맞춤 회고 유형 추천 결과 페이지
export default function RecommendResult() {
  const navigate = useNavigate();

  const goToSelectMethod = () => {
    navigate("/selectMethod");
  };

  const recommendedRetro = JSON.parse(
    localStorage.getItem("recRetro") || "null"
  );
  const recommendedRetroString = recommendedRetro.join(", ");

  // localStorage에서 가져온 값에 따라 해당하는 컴포넌트 렌더링
  const renderComponent = () => {
    return recommendedRetro.map((retroType: string) => {
      switch (retroType) {
        case "KPT":
          return <KPT />;
        case "ORID":
          return <ORID />;
        case "TIL":
          return <TIL />;
        case "AAR":
          return <AAR />;
        case "Continue-Stop-Start":
          return <Continue />;
        case "5F":
          return <FiveF />;
        case "성과/수치 중심 회고":
          return <Performance />;
        case "Personal Retrospective":
          return <Personal />;
        case "YWT":
          return <YWT />;
        case "4L":
          return <FourL />;
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Header />
      <RecommendResultWrap>
        <div className="recommend_title">맞춤 회고 유형 추천</div>
        <h3 className="recommend_text">
          레미니님께 추천하는 회고 유형은 {recommendedRetroString}이에요
        </h3>
        <div className="recommend_box">{renderComponent()}</div>
        <button className="next_btn" onClick={goToSelectMethod}>
          회고 작성하러가기
        </button>
        <Footer />
      </RecommendResultWrap>
    </>
  );
}

const RecommendResultWrap = styled.div`
  background: var(--Background, #121212);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  .recommend_title {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    text-align: center;
    padding: 26px 0;
    box-sizing: border-box;
    margin-top: 44px;

    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .recommend_text {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }

  .recommend_box {
    display: flex;
    gap: 61px;
  }

  .next_btn {
    border: none;
    border-radius: 8px;
    background: var(--primary-400, #79cd96);
    padding: 16px 60px;
    box-sizing: border-box;

    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

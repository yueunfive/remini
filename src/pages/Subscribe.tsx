import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import ModalOverlay from "../components/Modal/ModalOverlay.tsx";
import SubscribeModal from "../components/Modal/SubscribeModal.tsx";

// 구독 모델 변경페이지
export const Subscribe: React.FC = () => {
  const [model, setModel] = useState("STANDARD");
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부를 관리하는 상태

  const handleShowModal = () => {
    setShowModal(true);
  };

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

  return (
    <>
      <Header />
      {showModal && (
        <>
          <SubscribeModal
            model={model}
            closeModal={closeModal}
            setModel={setModel}
          />
          <ModalOverlay onClick={handleOverlayClick} />
        </>
      )}
      <SubscribeWrap>
        <div className="container">
          <h1>Remini 구독 모델을 선택해주세요</h1>
          <div className="subscribe-conatiner">
            <div className="subscribe-box">
              <h4>Standard</h4>
              <h5>무료</h5>
              <ul>
                <li>회고 횟수 무제한</li>
                <li>회고란에 사진 첨부 가능</li>
                <li>URL 공유 가능</li>
                <li>임시 저장</li>
                <li>지정한 시간대에 카카오톡 알림 발송</li>
              </ul>
              <button
                className="standard-btn"
                onClick={handleShowModal}
                disabled={model === "STANDARD"}
              >
                {model === "STANDARD" ? "현재 사용 중" : "시작하기"}
              </button>
            </div>
            <div className="subscribe-box">
              <h4>Premium</h4>
              <h5>매 월 ----원</h5>
              <ul>
                <li>Standard 기능 포함</li>
                <li>회고에 대한 썸네일 자동 생성</li>
                <li>사용자 특화 템플릿 제공</li>
              </ul>
              <button
                className="premium-btn"
                onClick={handleShowModal}
                disabled={model === "PREMIUM"}
              >
                {model === "PREMIUM" ? "현재 사용 중" : "시작하기"}
              </button>
            </div>
          </div>
        </div>
      </SubscribeWrap>
      <Footer />
    </>
  );
};

const SubscribeWrap = styled.div`
  background: var(--Background, #121212);
  min-width: 1280px;
  min-height: 586px;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    h1 {
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .subscribe-conatiner {
      display: flex;
      gap: 40px;

      .subscribe-box {
        width: 400px;
        height: 363px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        box-sizing: border-box;
        position: relative;

        h4 {
          color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        h5 {
          color: var(--primary-400, #79cd96);
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-top: 8px;
        }

        ul {
          color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          margin-top: 16px;
          padding-left: 22px;
        }

        button {
          padding: 16px 60px;
          border-radius: 8px;
          border: none;
          display: flex;
          margin: 0 auto;
          background: var(--primary-400, #79cd96);
          color: #000;
          text-align: center;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          &:disabled {
            background: var(--primary-800, #305d40);
          }
        }

        .disabled {
          background: var(--primary-800, #305d40);
        }

        .standard-btn {
          margin-top: 31px;
        }

        .premium-btn {
          margin-top: 85px;
        }
      }
    }
  }
`;

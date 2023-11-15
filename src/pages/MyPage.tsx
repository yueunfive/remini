import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { RetroBox } from "../components/RetroBox.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../components/Modal/LogoutModal.tsx";
import WithdrawalModal from "../components/Modal/WithdrawalModal.tsx";

// 마이페이지
export const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
    document.body.style.overflow = "hidden"; // 페이지 스크롤 비활성화
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
    document.body.style.overflow = ""; // 페이지 스크롤 활성화
  };

  const openWithdrawalModal = () => {
    setIsWithdrawalModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeWithdrawalModal = () => {
    setIsWithdrawalModalOpen(false);
    document.body.style.overflow = "";
  };

  const goToMyRetro = () => {
    navigate("/myRetro");
  };

  const goToTempStorage = () => {
    navigate("/tempStorage");
  };

  return (
    <>
      <Header />
      <ModalOverlay isOpen={isLogoutModalOpen || isWithdrawalModalOpen} />
      <MyPageWrap>
        <div className="myPage">
          <h1>마이 페이지</h1>
        </div>
        <article>
          <div className="profile">
            <h3>내 프로필</h3>
            <div className="kakao_profile">
              <div className="profile_img"></div>
              <p>레미니</p>
            </div>
          </div>
          <div className="alarm"></div>
          <div className="subscribe"></div>
        </article>
        <div className="retro">
          <div className="retro_text">
            <h3>나의 회고</h3>
            <p className="pointer" onClick={goToMyRetro}>
              전체보기 {`>`}
            </p>
          </div>
          <div className="retro_container">
            <RetroBox />
            <RetroBox />
            <RetroBox />
          </div>
        </div>
        <div className="retro">
          <div className="retro_text">
            <h3>임시저장</h3>
            <p className="pointer" onClick={goToTempStorage}>
              전체보기 {`>`}
            </p>
          </div>
          <div className="retro_container">
            <RetroBox hideLikes />
            <RetroBox hideLikes />
            <RetroBox hideLikes />
          </div>
        </div>
        <div className="footer_btn">
          <p className="logout pointer" onClick={openLogoutModal}>
            로그아웃
          </p>
          <p className="delete_account pointer" onClick={openWithdrawalModal}>
            탈퇴하기
          </p>
        </div>
      </MyPageWrap>
      <Footer />
      {isLogoutModalOpen && <LogoutModal closeModal={closeLogoutModal} />}
      {isWithdrawalModalOpen && (
        <WithdrawalModal closeModal={closeWithdrawalModal} />
      )}
    </>
  );
};

const MyPageWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .myPage {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  .myPage h1 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-left: 245px;
  }

  article {
    display: flex;
    gap: 32px;
    margin-bottom: 22px;
  }
  .profile h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 20px;
  }

  .kakao_profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .profile_img {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background: #ffe9bf;
  }
  .kakao_profile p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .alarm {
    width: 280px;
    margin-left: 80px;
  }

  .subscribe {
    width: 280px;
  }

  .retro {
    margin-bottom: 10px;
  }
  .retro_text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .retro_container {
    display: flex;
    gap: 32px;
  }

  .footer_btn {
    width: 186px;
    height: 21px;
    display: flex;
    gap: 60px;
    margin: 70px 0 80px 717px;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    .logout {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    }
    .delete_account {
      color: var(--Error, #cf6679);
    }
  }
`;

type ModalOverlayProps = {
  isOpen: boolean;
};

// 모달 창 뒤의 배경을 어둡게 처리하는 컴포넌트
const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998; // 모달창과 마이페이지 사이에 위치
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

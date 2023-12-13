import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoBlack from "../img/logo/logo_black.png";
import LoginModal from "./Modal/LoginModal";
import ModalOverlay from "./Modal/ModalOverlay";

interface UserData {
  expirationDate: string;
  nickName: string;
  profileImageUrl: string;
  state: string;
}

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부를 관리하는 상태

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData: UserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  // 회고 작성하러 가기 버튼 클릭
  const goToSelectMethod = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      navigate("/select-method"); // 로그인 O : 회고 작성 페이지로 이동
    } else {
      setShowModal(true); // 로그인 X : 로그인 유도 모달 띄우기
    }
  };

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

  const goToBrowsing = () => {
    navigate("/browsing/popular");
  };

  const goToMyPage = () => {
    navigate("/my-page");
  };

  return (
    <HeaderWrap>
      {showModal && (
        <>
          <LoginModal closeModal={closeModal} />
          <ModalOverlay onClick={handleOverlayClick} />
        </>
      )}
      <img src={logoBlack} alt="logo" onClick={goToHome} />
      <div className="text-box font">
        <p onClick={goToSelectMethod}>회고하기</p>
        <p onClick={goToBrowsing}>둘러보기</p>
      </div>
      {userData ? (
        <div className="user-info font" onClick={goToMyPage}>
          <div
            className="profile-img"
            style={{
              backgroundImage: `url(${userData.profileImageUrl})`,
            }}
          ></div>
          <p>{userData.nickName}</p>
        </div>
      ) : (
        <div className="login font" onClick={goToLogin}>
          <p>로그인</p>
        </div>
      )}
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  height: 90px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 280px; // 피그마 : 243px

  img {
    width: 162px;
    height: 39px;
    cursor: pointer;
  }

  .text-box {
    height: 21px;
    display: flex;
    gap: 60px;
    align-items: center;
  }

  .login {
    width: 162px;
    text-align: right;
  }

  .font {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }

  .user-info {
    width: 162px;
    display: flex;
    align-items: center;

    .profile-img {
      width: 40px;
      height: 40px;
      border-radius: 266.667px;
      background-size: cover;
      background-position: center;
      margin-right: 20px;
    }
  }
`;

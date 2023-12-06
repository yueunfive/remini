import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoBlack from "../img/logo/logo_black.png";

interface UserData {
  expirationDate: string;
  nickName: string;
  profileImageUrl: string;
  state: string;
}

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

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

  const goToSelectMethod = () => {
    navigate("/select-method");
  };

  const goToBrowsing = () => {
    navigate("/browsing/popular");
  };

  const goToMyPage = () => {
    navigate("/my-page");
  };

  return (
    <HeaderWrap>
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
    width: 194px; // 사파리 화면 깨짐 해결
    height: 21px;
    display: flex;
    gap: 60px;
    align-items: center;
  }

  .login {
    // HeaderWrap justify-content 비율 맞추려고 임시로 조정
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

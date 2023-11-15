import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoBlack from "../img/logo/logo_black.png";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToSelectMethod = () => {
    navigate("/selectMethod");
  };

  const goToBrowsing = () => {
    navigate("/Browsing");
  };

  return (
    <HeaderWrap>
      <img src={logoBlack} alt="logo" onClick={goToHome} />
      <div className="text-box font">
        <p onClick={goToSelectMethod}>회고하기</p>
        <p onClick={goToBrowsing}>둘러보기</p>
      </div>
      <div className="login font">
        <p onClick={goToLogin}>로그인</p>
      </div>
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
`;

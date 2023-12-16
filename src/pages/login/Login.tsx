import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import kakaoLogo from "../../img/UI/kakaoLogo.png";

// 로그인/회원가입 페이지

export default function Login() {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const kakaoOAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoOAuthLink;
  };

  return (
    <div>
      <Header />
      <LoginWrap>
        <div className="container">
          <h3 className="login_text">로그인</h3>
          <button onClick={loginHandler} className="kakao">
            <img src={kakaoLogo} alt="kakaoLogo"></img>
            카카오 계정으로 계속하기
          </button>
        </div>
      </LoginWrap>
      <Footer />
    </div>
  );
}

const LoginWrap = styled.div`
  box-sizing: border-box;
  background-color: #121212;
  height: calc(100vh - 246px);

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 60px;

    .login_text {
      margin: 0;
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .kakao {
      width: 530px;
      height: 62px;
      border: none;
      border-radius: 8px;
      background: #fee500;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      color: #371d1e;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

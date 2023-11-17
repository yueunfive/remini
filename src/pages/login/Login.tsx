import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

// 로그인/회원가입 페이지

/*const REDIRECT_URI = "이 부분 ";
// 로컬 개발할 때는 http://localhost:3000/callback 잠깐 바꿔서 개발하다가
// PR 올릴 때는 : https://remini.vercel.app/callback로 다시 교체 하기!!*/

export default function Login() {
  const REST_API_KEY = "4d9aacde53f8f2b4edd1d27d4ddf98e9";
  const REDIRECT_URI = "https://remini.vercel.app/";

  const kakaoOAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoOAuthLink;
  };

  return (
    <div>
      <Header />
      <LoginWrap>
        <h3 className="login_text">로그인</h3>
        <button onClick={loginHandler} className="kakao">
          카카오 계정으로 계속하기
        </button>
      </LoginWrap>
      <Footer />
    </div>
  );
}

const LoginWrap = styled.div`
  height: 505px;
  box-sizing: border-box;
  padding: 172.5px 0;
  background-color: #121212;

  display: flex;
  flex-direction: column;
  align-items: center;
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

    color: #371d1e;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

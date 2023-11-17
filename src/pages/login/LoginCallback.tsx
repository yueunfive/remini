import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loadingGIF from "../../img/UI/loading.gif";

function LogingCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("redirect");
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      console.log("code", code);

      if (code) {
        sendCodeToServer(code);
      }
    }
  }, [navigate]);

  const sendCodeToServer = async (code: string) => {
    try {
      const response = await axios.post(
        "http://www.remini.store/api/auth/kakao",
        {
          authorizationCode: code,
        }
      );
      console.log("response", response);

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      // 로그인 처리 완료 후 Home 페이지로 리디렉트
      navigate("/");
    } catch (error) {
      console.error("Error sending code to server:", error);
    }
  };

  return (
    <LogingCallbackWrap>
      <img className="gif" src={loadingGIF} alt="Loading" />
      <div className="text">Remini와 함께 성장해보세요!</div>
    </LogingCallbackWrap>
  );
}

export default LogingCallback;

const LogingCallbackWrap = styled.div`
  display: flex;
  width: 100%;
  height: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--Background, #121212);

  .gif {
    width: 160px;
    height: 120px;
    flex-shrink: 0;
  }
  .text {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

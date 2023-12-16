import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

// 회고 진행 방식 선택 페이지
export default function SelectMethod() {
  const navigate = useNavigate();

  const goToSelectRetro = () => {
    navigate("/select-retro");
  };

  const handleSelect = (value: string) => {
    localStorage.setItem("selectMethod", value);
  };

  return (
    <>
      <Header />
      <SelectMethodWrap>
        <div className="select-method-container">
          <h2 className="select_title">회고 진행 방식을 선택해주세요</h2>
          <div className="select_container">
            <div className="select1">
              <button
                onClick={() => {
                  handleSelect("guideline");
                  goToSelectRetro();
                }}
              >
                회고 유형 가이드라인
              </button>
              <p>
                선택한 맞춤 회고 유형에 대한 <br /> 가이드라인을 제공합니다.
              </p>
            </div>
            <div className="select2">
              <button
                onClick={() => {
                  handleSelect("step-by-step");
                  goToSelectRetro();
                }}
              >
                Step by Step
              </button>
              <p>
                회고를 처음하는 분들을 위해 <br /> 단계별 안내를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </SelectMethodWrap>
      <Footer />
    </>
  );
}

const SelectMethodWrap = styled.div`
  box-sizing: border-box;
  background-color: #121212;
  text-align: center;
  height: calc(100vh - 246px);

  .select-method-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;

    .select_title {
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }

    .select_container {
      display: flex;
      justify-content: center;
      gap: 80px;
    }

    .select_container button {
      width: 269px;
      height: 53px;
      padding-top: 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
      border-radius: 16px;
      border: 1px solid var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      background: rgba(255, 255, 255, 0.1);

      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .select_container button:hover {
      background: rgba(255, 255, 255, 0);
    }

    .select_container p {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top: 30px;
    }
  }
`;

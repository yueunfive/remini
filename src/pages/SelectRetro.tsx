import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { KPT } from "../components/RecommendSort/KPT";
import { Continue } from "../components/RecommendSort/Continue";
import { FiveF } from "../components/RecommendSort/FiveF";
import { TIL } from "../components/RecommendSort/TIL";
import { FourL } from "../components/RecommendSort/FourL";
import { ORID } from "../components/RecommendSort/ORID";
import { AAR } from "../components/RecommendSort/AAR";
import { YWT } from "../components/RecommendSort/YWT";
import { Personal } from "../components/RecommendSort/Personal";
import { Performance } from "../components/RecommendSort/Performance";
import { useNavigate } from "react-router-dom";

// 회고 제목/유형 선택
export default function SelectRetro() {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("");
  const [inputValue, setInputValue] = useState("");
  const storedSelectMethod = localStorage.getItem("selectMethod");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "kpt":
        return <KPT />;
      case "continue":
        return <Continue />;
      case "5f":
        return <FiveF />;
      case "til":
        return <TIL />;
      case "4l":
        return <FourL />;
      case "orid":
        return <ORID />;
      case "aar":
        return <AAR />;
      case "ywt":
        return <YWT />;
      case "personal":
        return <Personal />;
      case "performance":
        return <Performance />;

      default:
        return null;
    }
  };

  const retroBtnClick = () => {
    // 페이지 이동
    navigate(`/${storedSelectMethod}/${activeComponent}`);

    // 백엔드 연동용 type 값 변경 후 저장
    let type = "";
    switch (activeComponent) {
      case "kpt":
        type = "KPT";
        break;
      case "continue":
        type = "CSS";
        break;
      case "5f":
        type = "FIVE_F";
        break;
      case "til":
        type = "TIL";
        break;
      case "4l":
        type = "FOUR_L";
        break;
      case "orid":
        type = "ORID";
        break;
      case "aar":
        type = "AAR";
        break;
      case "ywt":
        type = "YWT";
        break;
      case "personal":
        type = "PERSONAL";
        break;
      case "performance":
        type = "RESULT";
        break;
      default:
        type = "";
    }
    localStorage.setItem("type", type);
    localStorage.setItem("title", inputValue);
  };

  return (
    <>
      <Header />
      <SelectRetroWrap>
        <div className="container">
          <div className="select_container">
            <h3>회고하기</h3>
            <div className="retro_title">
              <p>회고 제목</p>
              <input
                type="text"
                placeholder="회고 제목을 작성해주세요"
                value={inputValue}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="btn_container">
              <p>회고 유형 선택</p>
              <div className="btn_box">
                <div>
                  <button
                    onClick={() => handleButtonClick("kpt")}
                    className={activeComponent === "kpt" ? "active" : ""}
                  >
                    KPT
                  </button>
                  <button
                    onClick={() => handleButtonClick("continue")}
                    className={activeComponent === "continue" ? "active" : ""}
                  >
                    Continue-Stop-Start
                  </button>
                  <button
                    onClick={() => handleButtonClick("5f")}
                    className={activeComponent === "5f" ? "active" : ""}
                  >
                    5F
                  </button>
                  <button
                    onClick={() => handleButtonClick("til")}
                    className={activeComponent === "til" ? "active" : ""}
                  >
                    TIL
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleButtonClick("4l")}
                    className={activeComponent === "4l" ? "active" : ""}
                  >
                    4L
                  </button>
                  <button
                    onClick={() => handleButtonClick("orid")}
                    className={activeComponent === "orid" ? "active" : ""}
                  >
                    ORID
                  </button>
                  <button
                    onClick={() => handleButtonClick("aar")}
                    className={activeComponent === "aar" ? "active" : ""}
                  >
                    AAR
                  </button>
                  <button
                    onClick={() => handleButtonClick("ywt")}
                    className={activeComponent === "ywt" ? "active" : ""}
                  >
                    YWT
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleButtonClick("personal")}
                    className={activeComponent === "personal" ? "active" : ""}
                  >
                    개인적 회고
                  </button>
                  <button
                    onClick={() => handleButtonClick("performance")}
                    className={
                      activeComponent === "performance" ? "active" : ""
                    }
                  >
                    성과/수치 중심 회고
                  </button>
                </div>
              </div>
            </div>
          </div>
          {renderActiveComponent()}
        </div>
        <div className="retro_btn">
          <button
            disabled={inputValue.length < 1 || activeComponent == ""}
            onClick={retroBtnClick}
          >
            회고 작성하기
          </button>
        </div>
      </SelectRetroWrap>
      <Footer />
    </>
  );
}

const SelectRetroWrap = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  .container {
    margin-top: 93px;
    display: flex;
    justify-content: center;
    gap: 86px;
  }

  .select_container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .select_container h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .select_container p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
  }

  .retro_title input {
    width: 504px;
    height: 54px;
    box-sizing: border-box;
    padding: 16px 0 16px 20px;
    background-color: #121212;
    border-radius: 8px;
    border: 2px solid var(--text-high-emphasis, rgba(255, 255, 255, 0.87));

    color: white;
    font-size: 18px;
  }
  .retro_title input::placeholder {
    color: var(--text-disabled, rgba(255, 255, 255, 0.38));
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn_box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 50px;
  }
  .btn_box button {
    padding: 10px 25px;
    border-radius: 8px;
    background: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    border: none;
    margin-right: 16px;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .btn_box button:hover {
    background: var(--primary-400, #79cd96);
  }
  .btn_box button.active {
    background: var(--primary-400, #79cd96);
  }

  .retro_btn {
    text-align: center;
    margin-top: 92px;
    margin-bottom: 60px;
  }

  .retro_btn button {
    box-sizing: border-box;
    padding: 16px 60px;
    border: none;
    border-radius: 8px;
    background: var(--primary-400, #79cd96);
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .retro_btn button:disabled {
    background: var(--primary-800, #305d40);
  }
`;

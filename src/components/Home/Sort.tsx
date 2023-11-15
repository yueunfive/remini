import React, { useState } from "react";
import styled from "styled-components";
import { KPT } from "../Sort/KPT";
import { Continue } from "../Sort/Continue";
import { FiveF } from "../Sort/FiveF";
import { TIL } from "../Sort/TIL";
import { FourL } from "../Sort/FourL";
import { ORID } from "../Sort/ORID";
import { AAR } from "../Sort/AAR";
import { YWT } from "../Sort/YWT";
import { Personal } from "../Sort/Personal";
import { Performance } from "../Sort/Performance";

export const Sort: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("KPT");

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "KPT":
        return <KPT />;
      case "Continue":
        return <Continue />;
      case "FiveF":
        return <FiveF />;
      case "TIL":
        return <TIL />;
      case "FourL":
        return <FourL />;
      case "ORID":
        return <ORID />;
      case "AAR":
        return <AAR />;
      case "YWT":
        return <YWT />;
      case "Personal":
        return <Personal />;
      case "Performance":
        return <Performance />;

      default:
        return null;
    }
  };

  return (
    <SortWrap>
      <h3 className="sort_title">회고의 종류</h3>
      <div className="container">
        <div className="btn_box">
          <div>
            <button
              onClick={() => handleButtonClick("KPT")}
              className={activeComponent === "KPT" ? "active" : ""}
            >
              KPT
            </button>
            <button
              onClick={() => handleButtonClick("Continue")}
              className={activeComponent === "Continue" ? "active" : ""}
            >
              Continue-Stop-Start
            </button>
            <button
              onClick={() => handleButtonClick("FiveF")}
              className={activeComponent === "FiveF" ? "active" : ""}
            >
              5F
            </button>
            <button
              onClick={() => handleButtonClick("TIL")}
              className={activeComponent === "TIL" ? "active" : ""}
            >
              TIL
            </button>
          </div>
          <div>
            <button
              onClick={() => handleButtonClick("FourL")}
              className={activeComponent === "FourL" ? "active" : ""}
            >
              4L
            </button>
            <button
              onClick={() => handleButtonClick("ORID")}
              className={activeComponent === "ORID" ? "active" : ""}
            >
              ORID
            </button>
            <button
              onClick={() => handleButtonClick("AAR")}
              className={activeComponent === "AAR" ? "active" : ""}
            >
              AAR
            </button>
            <button
              onClick={() => handleButtonClick("YWT")}
              className={activeComponent === "YWT" ? "active" : ""}
            >
              YWT
            </button>
          </div>
          <div>
            <button
              onClick={() => handleButtonClick("Personal")}
              className={activeComponent === "Personal" ? "active" : ""}
            >
              개인적 회고
            </button>
            <button
              onClick={() => handleButtonClick("Performance")}
              className={activeComponent === "Performance" ? "active" : ""}
            >
              성과/수치 중심 회고
            </button>
          </div>
        </div>
        {renderActiveComponent()}
      </div>
    </SortWrap>
  );
};

const SortWrap = styled.div`
  /* background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.2) -0.04%,
    rgba(255, 255, 255, 0) 50%
  ); */
  background: linear-gradient(
    to right,
    rgba(18, 18, 18, 1) 50%,
    rgba(18, 18, 18, 0.8)
  );

  display: flex;
  height: 600px;
  padding: 100px 47px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .sort_title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
  }

  .container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 68px;
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
  button:hover {
    background: var(--primary-400, #79cd96);
  }
  button.active {
    background: var(--primary-400, #79cd96);
  }
`;

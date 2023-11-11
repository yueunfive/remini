import React from "react";
import styled from "styled-components";
import logo from "../../img/UI/Group 39571.svg";

export const GoldenCircle: React.FC = () => {
  return (
    <GoldenCircleWrap>
      <div className="title">
        <img src={logo} alt="logo" />팀 Remini의 Golden Circle
      </div>
      <div className="GC_text">
        <p className="what_text">
          <span>
            WHAT &nbsp;&nbsp;&nbsp;&nbsp;------------------------------●
          </span>{" "}
          우리는 끊임없는 성장을 추구하며 함께 더 나은 자신, 팀이 될 수 있는
          가치있는 활동을 하고자 합니다.
        </p>
        <p className="how_text">
          <span>
            HOW &nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------●
          </span>{" "}
          우리는 누구에게나 쉽고 간편한 회고 경험을 제공하여 지속적으로 성장할
          수 있도록 합니다.
        </p>
        <p className="why_text">
          <span>
            WHY
            &nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------●
          </span>{" "}
          우리는 회고의 end to end(맞춤 회고 유형 추천, 회고 가이드) 서비스를
          제공합니다.
        </p>
      </div>
      <div className="what">
        <div className="how">
          <div className="why"></div>
        </div>
      </div>
    </GoldenCircleWrap>
  );
};

const GoldenCircleWrap = styled.div`
  background: var(--Background, #121212);
  display: flex;
  height: 618px;
  padding: 100px 0px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title {
    height: 38px;
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .what {
    width: 330px;
    height: 330px;
    flex-shrink: 0;
    border-radius: 330px;
    opacity: 0.5;
    background: var(--primary-800, #305d40);

    margin-right: 580px; // 눈대중
  }
  .how {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background: var(--primary-600, #4b9f6b);
    border-radius: 330px;

    margin-top: 65px;
    margin-left: 65px;
    padding: 0.1px;
    z-index: 1;
  }
  .why {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    background: var(--primary-400, #79cd96);
    border-radius: 330px;

    margin-top: 55px;
    margin-left: 55px;
    z-index: 2;
  }
  .GC_text {
    width: 100%;
    position: absolute;

    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .GC_text span {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .GC_text p {
    margin: 0;
    position: absolute;
    left: 413px;
  }

  .what_text {
    top: 117px;
  }
  .how_text {
    top: 176px;
  }
  .why_text {
    top: 244px;
  }
`;

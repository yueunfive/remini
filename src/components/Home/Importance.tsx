import React from "react";
import styled from "styled-components";

export const Importance: React.FC = () => {
  return (
    <ImportanceWrap>
      <div className="text">
        <h3>회고의 중요성과 필요성</h3>
        <div className="intro">
          <p>
            회고는 향후 자신의 업무가 더 좋은 성과로 이어질 수 있도록 미리
            준비하는 과정이자
          </p>
          <p>
            앞으로 나아가기 위해 뒤를 돌아보고, 어떻게 앞으로의 어려움을
            극복해낼지에 대한 교훈을 찾는 과정입니다.
          </p>
        </div>
        <h4>
          즉, <span>회고문화</span>는 개인과 조직의 성장을 위해 중요한
          활동입니다
        </h4>
      </div>
    </ImportanceWrap>
  );
};

const ImportanceWrap = styled.div`
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Background, #121212);
  text-align: center;

  .text {
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
  }

  h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
  .intro {
    height: 63px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
  span {
    color: var(--primary-400, #79cd96);
  }
  h4 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

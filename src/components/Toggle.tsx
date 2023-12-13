import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  .toggle-container {
    width: 51px;
    height: 31px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.38);
    transition: background-color 0.5s;
  }

  .toggle-container.toggle-checked {
    background-color: rgba(121, 205, 150, 1);
    transition: 0.5s;
  }

  .toggle-circle {
    position: absolute;
    top: 2px;
    left: 1px;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: left 0.5s;
  }

  .toggle-circle.toggle-checked {
    left: 22px;
    transition: 0.5s;
  }
`;

// 토글(마이페이지 - 알림 발송 시간 설정)
export const Toggle: React.FC<{
  toggleOn: boolean;
  toggleHandler: () => void;
}> = ({ toggleOn, toggleHandler }) => {
  return (
    <ToggleContainer onClick={toggleHandler}>
      <div className={`toggle-container ${toggleOn ? "toggle-checked" : ""}`} />
      <div className={`toggle-circle ${toggleOn ? "toggle-checked" : ""}`} />
    </ToggleContainer>
  );
};

// https://velog.io/@fejigu/React-Toggle-Component-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

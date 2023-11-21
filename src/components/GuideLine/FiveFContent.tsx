//세로 가이드라인 회고일 경우

import styled from "styled-components";

//세로로 된 회고 유형 css
const GuideLineVerticleContent = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .AllmainConten_container {
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 50px;
  }

  .Content-Container {
    width: 1040px;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 31px;
  }

  .mainContent_Btn {
    display: flex;
    width: 320px;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .maintext_container {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-feature-settings: "clig" off, "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
  }

  .mainContent_Input {
    display: flex;
    width: 1040px;
    height: 160px;
    padding: 24px;
    align-items: flex-start;
    gap: 30px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #fff;
    background: var(--Background, #121212);
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .text_num {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 8px;
  }
`;

export default GuideLineVerticleContent;

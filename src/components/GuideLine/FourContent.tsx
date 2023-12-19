//4개짜리 가이드라인 회고일 경우(가로)

import styled from "styled-components";

const GuideLineFourContent = styled.div`
  background-color: #121212;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  //가이드라인 회고 모두 동일 css
  .AllmainConten_container {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-block-end: 30px;
    margin-block-start: 30px;
  }

  .leftContent_container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .middleContent_container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .rightContent_container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  //가이드라인 회고 모두 동일 css
  .mainContent_Btn {
    display: flex;
    width: 260px;
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
    text-align: center;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16.5px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .mainContent_Input {
    display: flex;
    width: 260px;
    height: 320px;
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
    outline: none;
    margin-block-end: 30px;
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

  .mainContent_Btn,
  .mainContent_Input {
    box-sizing: border-box;
  }

  textarea {
    font-family: "Pretendard-Regular", sans-serif;
  }
`;

export default GuideLineFourContent;

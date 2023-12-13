//세로 가이드라인 회고 && 버튼 없는 경우

import styled from "styled-components";

const GuideLinePersonalContent = styled.div`
  background-color: #121212;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  //가이드라인 회고 모두 동일 css
  .AllmainConten_container {
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
  }

  .Content-Container {
    width: 1040px;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 31px;
  }

  .maintext_container {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-feature-settings: "clig" off, "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 16px;
  }

  .mainContent_Input {
    display: flex;
    width: 1040px;
    height: 160px;
    padding: 24px;
    box-sizing: border-box;
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

export default GuideLinePersonalContent;

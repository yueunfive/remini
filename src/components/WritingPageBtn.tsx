import styled from "styled-components";

const WritingPageBtnWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;

  .temporary_btn {
    display: inline-flex;
    padding: 16px 60px;
    box-sizing: border-box;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.77);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: var(--Background, #121212);
    border: none;
    margin-right: 30px;
  }
  .completed_btn {
    display: inline-flex;
    padding: 16px 60px;
    box-sizing: border-box;
    border-radius: 8px;
    background: var(--primary-800, #79cd96);
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
  }
`;

export default WritingPageBtnWrap;

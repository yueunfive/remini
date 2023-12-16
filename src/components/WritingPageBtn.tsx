import styled from "styled-components";

const WritingPageBtnWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
  height: 100dp;

  .temporary_btn {
    width: 190px;
    height: 53px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
    width: 190px;
    height: 53px;
    margin-top: 30px;
    display: inline-flex;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
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

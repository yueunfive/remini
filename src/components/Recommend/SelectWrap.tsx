import styled from "styled-components";

const SelectWrap = styled.div`
  width: 475px;
  height: 260px;
  display: flex;
  flex-direction: column;
  gap: 52px;

  .select_title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }

  .select_box {
    margin-left: 67px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  // 체크박스 디자인 생략
  .select_box input {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: black;
    border: 2px solid white;
    cursor: pointer;
  }

  .select_box p {
    margin: 0;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .select_box.checked p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
  }
`;

export default SelectWrap;

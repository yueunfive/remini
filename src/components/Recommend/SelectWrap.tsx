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

  /* 기본적인 체크박스 스타일 */
  input[type="checkbox"] {
    display: none;
  }

  /* 체크박스 레이블 스타일 */
  input[type="checkbox"] + label {
    display: inline-block;
    width: 16.5px;
    height: 16.5px;
    border: 1.5px solid white; /* 클릭하기 전 테두리 */
    cursor: pointer;
    position: relative;
    vertical-align: middle;
    border-radius: 3px;
    margin-bottom: 1px;
  }

  /* 체크박스가 체크된 경우 레이블 스타일 */
  input[type="checkbox"]:checked + label {
    background-color: rgba(121, 205, 150, 1);
    border: 1.5px solid transparent;
    margin-bottom: 1px;
  }

  /* 체크박스가 체크된 경우 표시하는 체크 표시 스타일 */
  input[type="checkbox"]:checked + label::after {
    content: "✔";
    font-size: 13px;
    width: 16.5px;
    height: 16.5px;

    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 20px;
    border-radius: 3px;
    vertical-align: middle;
  }

  .select_box p {
    margin: 0;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
  }

  .select_box.checked p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
  }
`;

export default SelectWrap;

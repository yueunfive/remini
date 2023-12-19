import styled from "styled-components";

// 회고 종류 컴포넌트 10개 동시에 적용되는 디자인

const SortDetailWrap = styled.div`
  width: 550px;
  height: 305px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .title {
    color: var(--primary-400, #79cd96);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 8px;

    .stepNumImg {
      margin-left: 12px;
    }
  }
  p {
    margin: 0;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  .main_text p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`;

export default SortDetailWrap;

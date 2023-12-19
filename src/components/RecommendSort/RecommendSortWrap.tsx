import styled from "styled-components";

const RecommendSortWrap = styled.div`
  width: 490px;
  height: 420px;
  padding: 30px 24px 0px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 25px;

  border: none;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );

  .title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
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
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-bottom: 9px;
  }
  .main_text p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default RecommendSortWrap;

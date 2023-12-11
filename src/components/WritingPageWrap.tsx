import styled from "styled-components";

const WritingPageWrap = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    .title_container {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 50px;
    }
    .title_main {
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .title_content {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .temporary_btn:disabled {
      /* isContentFilled가 false일 때 버튼 스타일 */
      opacity: 0.6;
    }
  }
`;

export default WritingPageWrap;

import styled from "styled-components";

const CompleteWritingWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title_container {
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  .title_content {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .Button-contnet-container {
    position: absolute;
    display: flex;
    width: 164px;
    height: 20px;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
    top: 180px;
    right: 300px;
  }

  .likes {
    margin-block-end: 20dp;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .likes p {
    color: rgba(255, 255, 255, 0.87);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .sharebtn {
    margin-block-end: 20dp;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .editbtn {
    margin-block-end: 20dp;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .deletebtn {
    margin-block-end: 20dp;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export default CompleteWritingWrap;
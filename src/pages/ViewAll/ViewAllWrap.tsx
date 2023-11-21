import styled from "styled-components";

const ViewAllWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  h1 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 80px;
    margin-bottom: 0;
    width: 904px;
  }

  .retro_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    width: 916px;
    height: 838px;

    .retroBox {
      margin-left: 6px;
      margin-right: 6px;
    }
  }
`;

export default ViewAllWrap;

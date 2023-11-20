import styled from "styled-components";

// 모달 창 뒤의 배경을 어둡게 처리하는 컴포넌트
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998; // 모달창과 마이페이지 사이에 위치
`;

export default ModalOverlay;

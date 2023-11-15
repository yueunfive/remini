import React from "react";
import ModalWrap from "./ModalWrap.tsx";

// 로그아웃 모달
const LogoutModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalWrap onClick={handleOverlayClick}>
      <h1>정말 로그아웃 하시겠어요?</h1>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={closeModal}>
          로그아웃
        </button>
      </div>
    </ModalWrap>
  );
};

export default LogoutModal;

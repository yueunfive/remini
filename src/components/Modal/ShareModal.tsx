import React from "react";
import ModalWrap from "./ModalWrap.tsx";

//공유 확인 모달
const ShareModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const closeAndStay = () => {
    closeModal();
    document.body.style.overflow = "";
  };

  return (
    <ModalWrap>
      <h1>회고의 URL이 복사되었어요! </h1>
      <p>URL을 공유해보세요.</p>
      <div className="btn_container">
        <button className="main_btn" onClick={closeAndStay}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default ShareModal;

import React from "react";
import ModalWrap from "./ModalWrap.tsx";

const ShareModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log("클립보드 복사 성공");
    } catch (error) {
      console.error("클립보드 복사에 실패했습니다.", error);
    }
  };

  const copyAndStay = () => {
    copyUrlToClipboard();
    closeModal();
    document.body.style.overflow = "";
  };

  return (
    <ModalWrap>
      <h1>회고의 URL이 복사되었어요! </h1>
      <p>URL을 공유해보세요.</p>
      <div className="btn_container">
        <button className="main_btn" onClick={copyAndStay}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default ShareModal;

import React from "react";
import ModalWrap from "./ModalWrap.tsx";

// 탈퇴하기 모달
const WithdrawalModal: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  return (
    <ModalWrap>
      <h1>정말 탈퇴하시겠어요?</h1>
      <p>탈퇴 시 모든 정보가 삭제되며, 복구되지 않습니다.</p>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={closeModal}>
          탈퇴하기
        </button>
      </div>
    </ModalWrap>
  );
};

export default WithdrawalModal;

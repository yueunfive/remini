import React, { Dispatch, SetStateAction } from "react";
import ModalWrap from "./ModalWrap.tsx";

// 구독 모델 변경 모달
const SubscribeModal: React.FC<{
  model: string;
  closeModal: () => void;
  setModel: Dispatch<SetStateAction<string>>;
}> = ({ model, closeModal, setModel }) => {
  // 현재 월의 마지막 일자 반환
  const getLastDayOfMonth = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();
    return `${month}월 ${lastDay}일`;
  };

  const handleBtnClick = () => {
    setModel((prevModel) =>
      prevModel === "STANDARD" ? "PREMIUM" : "STANDARD"
    );
    closeModal();
    document.body.style.overflow = ""; // 스크롤 활성화
  };

  return (
    <ModalWrap>
      {model === "STANDARD" ? (
        <div>
          <h1>Premium으로 변경하시겠어요?</h1>
          <p>오늘부터 Premium 혜택이 적용됩니다.</p>
        </div>
      ) : (
        <div>
          <h1>Standard로 변경하시겠어요?</h1>
          <p>
            {getLastDayOfMonth()}
            까지 Premium 혜택이 유지되고,
            <br />
            이후 Standard로 자동 전환됩니다.
          </p>
        </div>
      )}
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          아니요
        </button>
        <button className="main_btn" onClick={handleBtnClick}>
          네, 변경할게요
        </button>
      </div>
    </ModalWrap>
  );
};

export default SubscribeModal;

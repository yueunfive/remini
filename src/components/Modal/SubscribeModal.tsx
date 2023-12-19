import React from "react";
import ModalWrap from "./ModalWrap.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 구독 모델 변경 모달
const SubscribeModal: React.FC<{
  state: string;
  toBeState: string;
  closeModal: () => void;
  expirationDate: string | null;
}> = ({ state, closeModal, toBeState, expirationDate }) => {
  const navigate = useNavigate();

  // 구독 모델 변경
  const handleBtnClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    let newModelState = "";

    if (state === "STANDARD") {
      newModelState = "PREMIUM";
    } else if (state === "PREMIUM" && toBeState === "STANDARD") {
      newModelState = "PREMIUM";
    } else if (state === "PREMIUM" && toBeState === "PREMIUM") {
      newModelState = "STANDARD";
    }

    const axiosInstance = axios.create({
      baseURL: "https://www.remini.store",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    axiosInstance
      .patch("/api/user/state", { state: newModelState })
      .then((response) => {
        console.log("Model state updated successfully:", response.data);
        closeModal();
        document.body.style.overflow = ""; // 스크롤 활성화
        navigate("/my-page");
      })
      .catch((error) => {
        console.error("Error updating model state:", error);
      });
  };

  return (
    <ModalWrap>
      {state === "STANDARD" ? (
        <div>
          <h1>Premium으로 변경하시겠어요?</h1>
          <p>오늘부터 Premium 혜택이 적용됩니다.</p>
        </div>
      ) : state === "PREMIUM" && toBeState === "PREMIUM" ? (
        <div>
          <h1>Standard로 변경하시겠어요?</h1>
          <p>
            {expirationDate}
            까지 Premium 혜택이 유지되고,
            <br />
            이후 Standard로 자동 전환됩니다.
          </p>
        </div>
      ) : (
        <div>
          <h1>해지를 취소하시겠어요?</h1>
          <p>
            기존 다음 결제일에 자동으로 결제가 되며, Premium 혜택이 유지됩니다.
            <br></br>
            다음 결제일 : {expirationDate}
          </p>
        </div>
      )}
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          아니요
        </button>
        <button className="main_btn" onClick={handleBtnClick}>
          {state === "PREMIUM" && toBeState === "STANDARD"
            ? "네, 취소할게요"
            : "네, 변경할게요"}
        </button>
      </div>
    </ModalWrap>
  );
};

export default SubscribeModal;

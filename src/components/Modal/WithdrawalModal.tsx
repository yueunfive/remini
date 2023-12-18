import React from "react";
import ModalWrap from "./ModalWrap.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 탈퇴하기 모달
const WithdrawalModal: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const navigate = useNavigate();

  const handleWithdrawal = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.delete(
        "https://www.remini.store/api/user/delete",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("탈퇴 요청이 성공했습니다.", response.data);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("탈퇴 요청 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <ModalWrap>
      <h1>정말 탈퇴하시겠어요?</h1>
      <p>탈퇴 시 모든 정보가 삭제되며, 복구되지 않습니다.</p>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={handleWithdrawal}>
          탈퇴하기
        </button>
      </div>
    </ModalWrap>
  );
};

export default WithdrawalModal;

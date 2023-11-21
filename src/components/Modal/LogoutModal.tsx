import React from "react";
import ModalWrap from "./ModalWrap.tsx";
import { useNavigate } from "react-router-dom";

// 로그아웃 모달
const LogoutModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    closeModal();
    navigate("/");
  };

  return (
    <ModalWrap>
      <h1>정말 로그아웃 하시겠어요?</h1>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </ModalWrap>
  );
};

export default LogoutModal;

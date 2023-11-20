import React from "react";
import { useNavigate } from "react-router-dom";
import ModalWrap from "./ModalWrap.tsx";

// 로그인 (유도) 모달
const LoginModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    closeModal();
    navigate("/login");
    document.body.style.overflow = ""; // 스크롤 활성화
  };

  return (
    <ModalWrap>
      <h1>로그인이 필요한 서비스입니다.</h1>
      <p>카카오 간편 로그인을 통해 Remini를 이용해보세요.</p>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={goToLogin}>
          로그인하기
        </button>
      </div>
    </ModalWrap>
  );
};

export default LoginModal;

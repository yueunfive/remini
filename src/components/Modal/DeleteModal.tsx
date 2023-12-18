import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalWrap from "./ModalWrap.tsx";

const DeleteModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`https://www.remini.store/api/remini/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate(-1);
    } catch (error) {
      console.error("Error deleting retrospective:", error);
    }

    closeModal();
  };

  return (
    <ModalWrap>
      <h1>정말 삭제하시겠어요?</h1>
      <p>삭제 시 작성한 회고의 내용이 복구되지 않습니다.</p>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={handleDelete}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default DeleteModal;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styled from "styled-components";
import AAR from "../../components/CompleteWriting/AAR";
import Continue from "../../components/CompleteWriting/Continue";
import FiveF from "../../components/CompleteWriting/FiveF";
import FourL from "../../components/CompleteWriting/FourL";
import KPT from "../../components/CompleteWriting/KPT";
import ORID from "../../components/CompleteWriting/ORID";
import Performance from "../../components/CompleteWriting/Performance";
import Personal from "../../components/CompleteWriting/Personal";
import TIL from "../../components/CompleteWriting/TIL";
import YWT from "../../components/CompleteWriting/YWT";
import filledHeart from "../../img/UI/filledHeart.png";
import emptyHeart from "../../img/UI/emptyHeart.png";
import sharebtn from "../../img/UI/Ic_Share.png";
import ShareModal from "../../components/Modal/ShareModal";
import ModalOverlay from "../../components/Modal/ModalOverlay";

//작성완료 조회 페이지
interface Retrospective {
  title: string;
  type: string;
  liked: boolean;
  likesCount: number;
}

function CompleteWriting() {
  const { id } = useParams();
  const [retrospective, setRetrospective] = useState<Retrospective | null>(
    null
  );
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const fetchRetrospective = async () => {
    try {
      if (id) {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `https://www.remini.store/api/remini/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data;
        setRetrospective(data);
        setIsLiked(data.liked);
        setLikesCount(data.likesCount);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching retrospective:", error);
    }
  };

  useEffect(() => {
    fetchRetrospective();
  }, [id]);

  //type 값에 맞는 랜더링
  const renderContent = () => {
    if (!retrospective) {
      return <p>Loading...</p>;
    }

    switch (retrospective.type) {
      case "AAR":
        return <AAR />;
      case "CSS":
        return <Continue />;
      case "FIVE_F":
        return <FiveF />;
      case "FOUR_L":
        return <FourL />;
      case "KPT":
        return <KPT />;
      case "ORID":
        return <ORID />;
      case "RESULT":
        return <Performance />;
      case "PERSONAL":
        return <Personal />;
      case "TIL":
        return <TIL />;
      case "YWT":
        return <YWT />;
      default:
        return <p>Unknown retrospective type</p>;
    }
  };

  //좋아요
  const handleLikeClick = async () => {
    const currentIsLiked = isLiked;

    const accessToken = localStorage.getItem("accessToken");

    try {
      let response;
      if (!currentIsLiked) {
        response = await axios.post(
          `https://www.remini.store/api/remini/${id}/likes`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      } else {
        response = await axios.delete(
          `https://www.remini.store/api/remini/${id}/likes`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }

      if (response.status !== 200) {
        // 요청 실패 시 상태 되돌리기
        setIsLiked(!currentIsLiked);
        setLikesCount(currentIsLiked ? likesCount - 1 : likesCount + 1);
      } else {
        // 요청 성공 시
        const likesCountResponse = await response.data;
        setIsLiked(likesCountResponse.isLiked);
        setLikesCount(likesCountResponse.likesCount);
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

  const handleShareClick = () => {
    setShowModal(true);
  };

  const handleOverlayClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">
            {retrospective ? retrospective.title : "Loading..."}
          </div>
          <div className="title-contnet-container">
            <div className="likes" onClick={handleLikeClick}>
              <img
                src={isLiked ? filledHeart : emptyHeart}
                alt={isLiked ? "좋아요 취소" : "좋아요"}
              />
              <p>{likesCount}</p>
            </div>
            <div className="sharebtn" onClick={handleShareClick}>
              <img src={sharebtn} alt="Share" />
            </div>
          </div>
        </div>
        <div className="mainContent-container">{renderContent()}</div>
        <div className="completeButtom-contaner">
          {/*
          <button className="deleteBtn">삭제</button>
          <button className="editBtn">수정</button>
          */}
        </div>
      </CompleteWritingWrap>
      {showModal && (
        <>
          <ShareModal closeModal={() => setShowModal(false)} />
          <ModalOverlay onClick={handleOverlayClick} />
        </>
      )}
    </>
  );
}

export default CompleteWriting;

const CompleteWritingWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title_container {
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  .title_content {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .completeButtom-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
  .deleteBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(207, 102, 121, 0.5);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
  }
  .editBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--primary-900, #233e2c);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
  }

  .likes {
    position: absolute;
    top: 180px;
    right: 320px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .likes p {
    color: rgba(255, 255, 255, 0.87);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .sharebtn {
    position: absolute;
    top: 180px;
    right: 280px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

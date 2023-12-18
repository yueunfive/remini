import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import CompleteWritingWrap from "../Complete/CompleteWritingWrap";
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
import editbtn from "../../img/UI/edit.png";
import deletebtn from "../../img/UI/delete.png";
import ShareModal from "../../components/Modal/ShareModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import ModalOverlay from "../../components/Modal/ModalOverlay";

//작성완료 조회 페이지
interface Retrospective {
  title: string;
  type: string;
  liked: boolean;
  likesCount: number;
  owner: boolean;
}

function CompleteWriting() {
  const { id } = useParams();
  const [retrospective, setRetrospective] = useState<Retrospective | null>(
    null
  );
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
    setShowShareModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  // const closeModals = () => {
  //   setShowShareModal(false);
  //   setShowDeleteModal(false);
  // };

  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">
            {retrospective ? retrospective.title : "Loading..."}
          </div>
          <div className="Button-contnet-container">
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
            {/* 유저의 글에만 보임: 수정, 삭제 */}
            {retrospective && retrospective.owner && (
              <>
                <div className="editbtn">
                  <img src={editbtn} alt="edit" />
                </div>
                <div className="deletebtn" onClick={handleDeleteClick}>
                  <img src={deletebtn} alt="delete" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mainContent-container">{renderContent()}</div>
        <div className="empty-box">
          <br />
          <br />
          <br />
        </div>
      </CompleteWritingWrap>
      {showShareModal && (
        <ShareModal closeModal={() => setShowShareModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteModal closeModal={() => setShowDeleteModal(false)} />
      )}
      {(showShareModal || showDeleteModal) && (
        <ModalOverlay
          onClick={() => {
            setShowShareModal(false);
            setShowDeleteModal(false);
          }}
        />
      )}
    </>
  );
}

export default CompleteWriting;

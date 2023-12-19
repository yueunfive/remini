import React, { useEffect } from "react";
import styled from "styled-components";
import emptyHeart from "../img/UI/emptyHeart.png";
import filledHeart from "../img/UI/filledHeart.png";
import { useState } from "react";
import axios from "axios";

interface RetroBoxProps {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
  goToResult: () => void;
  setShowModal?: (value: boolean) => void; // 선택적(optional)으로 설정 (전체보기에서는 필요 X)
  hideLikes?: boolean;
}

// 둘러보기, 마이페이지 등에 삽입할 회고 1칸
export const RetroBox: React.FC<RetroBoxProps> = ({
  createdDate,
  liked,
  likesCount,
  reminiId,
  reminiImage,
  title,
  goToResult,
  setShowModal,
  hideLikes = false,
}) => {
  const [count, setCount] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(liked);

  // 날짜 형식 변환
  const formattedDate = new Date(createdDate)
    .toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");

  // 좋아요
  const handleLikeClick = async () => {
    const currentIsLiked = isLiked;

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        let response;
        if (!currentIsLiked) {
          response = await axios.post(
            `https://www.remini.store/api/remini/${reminiId}/likes`,
            {},
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setIsLiked(true);
        } else {
          response = await axios.delete(
            `https://www.remini.store/api/remini/${reminiId}/likes`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setIsLiked(false);
        }
      } catch (error) {
        console.error("좋아요 처리 중 오류 발생:", error);
      }
    } else {
      if (setShowModal) {
        setShowModal(true); // 로그인 X : 로그인 유도 모달 띄우기
      }
    }
  };

  // 회고 조회(좋아요 실시간 연동용)
  const fetchRetrospective = async () => {
    try {
      if (reminiId) {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `https://www.remini.store/api/remini/${reminiId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data;
        setIsLiked(data.liked);
        setCount(data.likesCount);
      }
    } catch (error) {
      console.error("Error fetching retrospective:", error);
    }
  };

  useEffect(() => {
    fetchRetrospective();
  }, [handleLikeClick]);

  const retroImgStyle = {
    backgroundImage: `url(${reminiImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <RetroBoxWrap>
      <div
        className="retro_img pointer"
        style={retroImgStyle}
        onClick={goToResult}
      >
        <div className="darkOverlay" />
        {!hideLikes && (
          <div className="likes" onClick={(e) => e.stopPropagation()}>
            <img
              src={isLiked ? filledHeart : emptyHeart}
              alt="Heart"
              onClick={handleLikeClick}
            />
            <p style={{ color: isLiked ? "var(--primary-400, #79CD96)" : "" }}>
              {count}
            </p>
          </div>
        )}
      </div>
      <h4 className="pointer" onClick={goToResult}>
        {title}
      </h4>
      <p>{formattedDate}</p>
    </RetroBoxWrap>
  );
};

const RetroBoxWrap = styled.div`
  width: 280px;
  height: 266px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .retro_img {
    width: 100%;
    height: 200px;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 12px;
  }

  .darkOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: rgba(0, 0, 0, 0.3); /* 배경을 반투명하게 설정 */
  }

  .likes {
    position: absolute;
    left: 16px;
    bottom: 16px;

    display: flex;
    align-items: center;
    gap: 8px;

    p {
      color: rgba(255, 255, 255, 0.87);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  h4 {
    color: rgba(255, 255, 255, 0.87);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
  }

  p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
  }
`;

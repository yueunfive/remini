import React from "react";
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
  hideLikes?: boolean;
}

// 둘러보기, 마이페이지 등에 삽입할 회고 1칸
export const RetroBox: React.FC<RetroBoxProps> = ({
  createdDate,
  liked,
  likesCount,
  reminiId,
  // reminiImage,
  title,
  goToResult,
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

  // 좋아요(POST / DELETE)
  const handleLikeClick = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!isLiked) {
        const response = await axios.post(
          `https://www.remini.store/api/remini/${reminiId}/likes`,
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          setIsLiked(true);
          setCount(count + 1);
        }
      } else {
        const response = await axios.delete(
          `https://www.remini.store/api/remini/${reminiId}/likes`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          setIsLiked(false);
          setCount(count - 1);
        }
      }
      window.location.reload(); // 좋아요 실시간 반영이 안되서 일단 새로고침으로
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const retroImgStyle = {
    // backgroundImage: `url(${reminiImage})`,
    backgroundColor: "grey",
  };

  return (
    <RetroBoxWrap>
      <div
        className="retro_img pointer"
        style={retroImgStyle}
        onClick={goToResult}
      >
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

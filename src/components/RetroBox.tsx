import React from "react";
import styled from "styled-components";
import emptyHeart from "../img/UI/emptyHeart.png";
import filledHeart from "../img/UI/filledHeart.png";
import { useState } from "react";

// 둘러보기, 마이페이지 등에 삽입할 회고 1칸
export const RetroBox: React.FC<{ hideLikes?: boolean }> = ({ hideLikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(50);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <RetroBoxWrap>
      <div className="retro_img pointer">
        {hideLikes ? null : (
          <div className="likes" onClick={handleLikeClick}>
            <img src={isLiked ? filledHeart : emptyHeart} alt="Heart" />
            <p style={{ color: isLiked ? "var(--primary-400, #79CD96)" : "" }}>
              {likesCount}
            </p>
          </div>
        )}
      </div>
      <h4 className="pointer">제목입니다.</h4>
      <p>2023.09.25</p>
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
    width: 280px;
    height: 200px;
    border-radius: 16px;
    background: grey;
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

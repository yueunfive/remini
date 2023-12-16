import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import axios from "axios";
import GuideLineTheeContent from "../../components/GuideLine/ThreeContent";
import filledHeart from "../../img/UI/filledHeart.png";
import emptyHeart from "../../img/UI/emptyHeart.png";

type DataType = {
  createdDate: string;
  liked: boolean;
  likesCount: number;
  nickname: String;
  reminiImage: string;
};

function CompleteWritingKPT() {
  const { id } = useParams();
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [retrospectiveData, setRetrospectiveData] = useState<DataType | null>(
    null
  );
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.remini.store/api/remini/${id}`
        );
        const data = response.data;

        setRetrospectiveData(data);
        if (data.sectionTexts && data.sectionTexts.length === 3) {
          setFirstContent(data.sectionTexts[0]);
          setSecondContent(data.sectionTexts[1]);
          setThirdContent(data.sectionTexts[2]);
        }
      } catch (error) {
        console.error("Error fetching retrospective data:", error);
      }
    };

    if (id) {
      fetchData();
    }

    if (retrospectiveData) {
      setIsLiked(retrospectiveData.liked);
      setLikesCount(retrospectiveData.likesCount);
    }
  }, [id, retrospectiveData]);

  //좋아요
  const handleLikeClick = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.log("로그인이 필요합니다.");
      return;
    }

    try {
      let response;
      if (!isLiked) {
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

      if (response.status === 200) {
        setIsLiked(!isLiked);
        setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

  return (
    <>
      <CompleteWritingWrap>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">KPT 회고</div>
            <div className="WritingKind_content">
              회고 3가지 관점에서 업무를 돌아보고, 다음 액션 아이템을 도출해내는
              데 도움이 되는 회고예요
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img src={BasicProfile} />
              </div>
              <div className="user-name">
                {retrospectiveData?.nickname || "레미니"}
              </div>
            </div>
            <div className="date-info">
              작성일: {retrospectiveData?.createdDate || "Date not available"}
            </div>
          </div>
          <div className="Image_container">
            <img
              src={retrospectiveData?.reminiImage || CompleteImg}
              alt="CompleteImg"
              className="CompleteImg"
            />
            <div className="likes" onClick={(e) => e.stopPropagation()}>
              <img
                src={isLiked ? filledHeart : emptyHeart}
                alt="Heart"
                onClick={handleLikeClick}
              />
              <p
                style={{ color: isLiked ? "var(--primary-400, #79CD96)" : "" }}
              >
                {likesCount}
              </p>
            </div>
          </div>
        </div>
        <div className="mainContent-container">
          <GuideLineTheeContent>
            <div className="AllmainConten_container">
              <div className="leftContent_container">
                <div className="mainContent_Btn">Keep</div>
                <div className="maintext_container">
                  <p>좋은 결과를 만들었고,</p>
                  <p>계속해서 유지해 나가야할 것을 작성해주세요.</p>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={firstContent}
                    onChange={(e) => setFirstContent(e.target.value)}
                    style={{ resize: "none" }}
                  ></textarea>
                  <p className="text_num">{firstContent.length}/200</p>
                </div>
              </div>
              <div className="middleContent_container">
                <div className="mainContent_Btn">Problem</div>
                <div className="maintext_container">
                  <p>아쉬운 결과를 만들었고,</p>
                  <p>앞으로 개선되어야 할 것</p>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={secondContent}
                    onChange={(e) => setSecondContent(e.target.value)}
                    style={{ resize: "none" }}
                  ></textarea>
                  <p className="text_num">{secondContent.length}/200</p>
                </div>
              </div>
              <div className="rightContent_container">
                <div className="mainContent_Btn">Try</div>
                <div className="maintext_container">
                  <p>문제를 파악하고,</p>
                  <p>이를 해결하기 위한 구체적인 개선방안</p>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={thirdContent}
                    onChange={(e) => setThirdContent(e.target.value)}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{thirdContent.length}/200</p>
                </div>
              </div>
            </div>
          </GuideLineTheeContent>
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWritingKPT;

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

  .content-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }

  .WritingKind_container {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .WritingKind_title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .WritingKind_content {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    max-width: 800px;
    text-align: justify;
    margin: auto;
    padding: 20px;
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }

  .Image_container {
    position: relative;
    width: 280px;
    height: 230px;
    margin-left: 320px;
    border-radius: 16px;
  }

  .CompleteImg {
    width: 280;
    height: 230px;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
  }

  .likes {
    position: absolute;
    top: 190px;
    right: 200px;
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

  .user-name {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .date-info {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .completeButtom-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
`;

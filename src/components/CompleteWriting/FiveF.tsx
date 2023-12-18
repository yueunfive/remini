import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import GuideLineVerticleContent from "../../components/GuideLine/FiveFContent";
import { useParams } from "react-router-dom";
import axios from "axios";

type DataType = {
  createdDate: string;
  nickname: String;
  reminiImage: string;
  profileImageURL: string;
};

interface isEditModeTypeProps {
  isEditMode: boolean;
}

function CompleteWritingFiveF({ isEditMode: isEditModeTypeProps }) {
  const { id } = useParams();
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFiftheContent] = useState("");
  const [retrospectiveData, setRetrospectiveData] = useState<DataType | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.remini.store/api/remini/${id}`
        );
        const data = response.data;

        setRetrospectiveData(data);
        if (data.sectionTexts && data.sectionTexts.length === 5) {
          setFirstContent(data.sectionTexts[0]);
          setSecondContent(data.sectionTexts[1]);
          setThirdContent(data.sectionTexts[2]);
          setFourContent(data.sectionTexts[3]);
          setFiftheContent(data.sectionTexts[4]);
        }
      } catch (error) {
        console.error("Error fetching retrospective data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  //데이터 수정
  const editData = async () => {
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      instantSave: false,
      sectionTexts: [
        firstContent,
        secondContent,
        thirdContent,
        fourContent,
        fifthContent,
      ],
      step: 1,
      title: localStorage.getItem("title"),
      type: localStorage.getItem("type"),
    };

    try {
      const response = await axios.patch(
        `https://www.remini.store/api/remini/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("수정 요청 성공:", response.data);
      alert("수정이 완료되었습니다!🥳");
      window.location.reload();
      setIsEditMode(false);
    } catch (error) {
      console.error("수정 요청 실패:", error);
    }
  };

  const handleCancel = () => {
    window.location.reload();
    setIsEditMode(false);
  };

  const renderContentInput = (content, setContent) => {
    return isEditMode ? (
      <textarea
        className="mainContent_Input"
        placeholder="텍스트를 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ resize: "none" }}
      />
    ) : (
      <div className="mainContent_Input">{content}</div>
    );
  };

  return (
    <>
      <CompleteWritingWrap>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">5F 회고</div>
            <div className="WritingKind_content">
              다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
              회고예요
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img
                  src={retrospectiveData?.profileImageURL || BasicProfile}
                  alt="profileImag"
                  className="user-profile"
                />
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
          </div>
        </div>

        <div className="mainContent-container">
          <GuideLineVerticleContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="mainContent_Btn">Fact</div>
                <div className="maintext_container">
                  우리가 무엇을 시작하여야 할 지에 대해 작성하기
                </div>
              </div>
              <div>
                <div>{renderContentInput(firstContent, setFirstContent)}</div>
                <p className="text_num">{firstContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="mainContent_Btn">Feelings</div>
                <div className="maintext_container">
                  한 일에 대한 느낀점을 작성하기
                </div>
              </div>
              <div>
                <div>{renderContentInput(secondContent, setSecondContent)}</div>
                <p className="text_num">{secondContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="mainContent_Btn">Finding</div>
                <div className="maintext_container">
                  무엇을 배웠는지, 인사이트, 교훈을 작성하기
                </div>
              </div>
              <div>
                <div>{renderContentInput(thirdContent, setThirdContent)}</div>
                <p className="text_num">{thirdContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="mainContent_Btn">Future Action</div>
                <div className="maintext_container">향후 계획을 작성하기</div>
              </div>
              <div>
                <div>{renderContentInput(fourContent, setFourContent)}</div>
                <p className="text_num">{fourContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="mainContent_Btn">Feedback</div>
                <div className="maintext_container">
                  향후 계획에 대한 피드백을 작성하기
                </div>
              </div>
              <div>
                <div>{renderContentInput(fifthContent, setFiftheContent)}</div>
                <p className="text_num">{fifthContent.length}/200</p>
              </div>
            </div>
          </GuideLineVerticleContent>
          {/* 수정 모드 일 때만 보임 */}
          {isEditMode && (
            <div className="editButton-contaner">
              <button className="cancelBtn" onClick={handleCancel}>
                취소
              </button>
              <button className="completeEditBtn" onClick={editData}>
                확인
              </button>
            </div>
          )}
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWritingFiveF;

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
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }

  .user-profile {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .Image_container {
    width: 280px;
    height: 200px;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-left: 300px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }

  .CompleteImg {
    width: 280px;
    height: 200px;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
    object-fit: cover;
    object-position: center;
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

  .editButton-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
  .cancelBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--Text-High-Emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
    margin-right: 20px;
  }
  .completeEditBtn {
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
`;

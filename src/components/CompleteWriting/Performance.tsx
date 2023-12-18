import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import GuideLinePersonalContent from "../../components/GuideLine/PersonalContent";
import { useParams } from "react-router-dom";
import axios from "axios";

type DataType = {
  createdDate: string;
  nickname: String;
  reminiImage: string;
  profileImageURL: string;
};

function CompleteWritingPerfomance() {
  const { id } = useParams();
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const [sixthContent, setSixthContent] = useState("");
  const [seventhContent, setSeventhContent] = useState("");
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
        if (data.sectionTexts && data.sectionTexts.length === 7) {
          setFirstContent(data.sectionTexts[0]);
          setSecondContent(data.sectionTexts[1]);
          setThirdContent(data.sectionTexts[2]);
          setFourContent(data.sectionTexts[3]);
          setFifthContent(data.sectionTexts[4]);
          setSixthContent(data.sectionTexts[5]);
          setSeventhContent(data.sectionTexts[6]);
        }
      } catch (error) {
        console.error("Error fetching retrospective data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, retrospectiveData]);

  return (
    <>
      <CompleteWritingWrap>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">성과/수치 중심 회고</div>
            <div className="WritingKind_content">
              성과/수치 중심 회고는 보통 분기/일 년 회고를 할 때 많이 사용하는
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
          <GuideLinePersonalContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="maintext_container">
                  연초(분기초)에 세운 목표치를 몇% 달성하였는지 작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{firstContent}</div>
                <p className="text_num">{firstContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  만일 높은(71~100%) 달성률을 기록했다면 목표를 너무 낮게 잡은
                  것은 아닌지, 달성한 목표를 수정한다면 무엇을 바꿔야 하는지
                  작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{secondContent}</div>
                <p className="text_num">{secondContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  목표를 달성하는 과정에서의 기여 요인은 무엇인지 작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{thirdContent}</div>
                <p className="text_num">{thirdContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  목표를 달성하는 과정에서 성공을 가로막은 것은 무엇인지
                  작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{fourContent}</div>
                <p className="text_num">{fourContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  무엇을 개선한다면, 더 높은 성과를 달성할 수 있는지 작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{fifthContent}</div>
                <p className="text_num">{fifthContent.length}/200</p>
              </div>
              {/* 6부터 */}
              <div className="Content-Container">
                <div className="maintext_container">
                  스스로 평가하는 성과는 어떠한가? 지난해(분기) 대비 얼마나
                  성장하였는지 작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{sixthContent}</div>
                <p className="text_num">{sixthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  이번 교훈을 통해 내년(다음 분기)에는 무엇을 바꿔야 하는지
                  작성하기
                </div>
              </div>
              <div>
                <div className="mainContent_Input">{seventhContent}</div>
                <p className="text_num">{seventhContent.length}/200</p>
              </div>
            </div>
          </GuideLinePersonalContent>
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWritingPerfomance;

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

  .completeButtom-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
`;

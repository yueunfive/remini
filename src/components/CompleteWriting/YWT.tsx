import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import axios from "axios";
import GuideLineTheeContent from "../../components/GuideLine/ThreeContent";

type DataType = {
  createdDate: string;
  nickname: String;
  reminiImage: string;
};

function CompleteWritingYWT() {
  const { id } = useParams();
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
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
  }, [id, retrospectiveData]);

  return (
    <>
      <CompleteWritingWrap>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">YWT 회고</div>
            <div className="WritingKind_content">
              YWT는 일본 도요타에서 사용한 방식으로 짧게 진행되는 회고예요는
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img src={BasicProfile} />
              </div>
              <div className="user-name">
                {" "}
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
          <GuideLineTheeContent>
            <div className="AllmainConten_container">
              <div className="leftContent_container">
                <div className="mainContent_Btn">
                  한 일<br />
                  (やったこと-yattakoto)
                </div>
                <div className="maintext_container">
                  <p>
                    일을 통해 명확히 알게 되었거나
                    <br />
                    이해한 부분 작성하기
                  </p>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={firstContent}
                    onChange={(e) => setFirstContent(e.target.value)}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{firstContent.length}/200</p>
                </div>
              </div>
              <div className="middleContent_container">
                <div className="mainContent_Btn">
                  배운 것들
                  <br />
                  (わかったこと-wakattakoto)
                </div>
                <div className="maintext_container">
                  <p>
                    배운 점과 시사점 작성하기
                    <br />
                    <br />
                  </p>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={secondContent}
                    onChange={(e) => setSecondContent(e.target.value)}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{secondContent.length}/200</p>
                </div>
              </div>
              <div className="rightContent_container">
                <div className="mainContent_Btn">
                  앞으로 할 일<br />
                  (つぎにやること-tsuginiyarukoto)
                </div>
                <div className="maintext_container">
                  <p>
                    응용하여 배운 것을
                    <br />
                    어디에 어떻게 적용할 지 작성하기
                  </p>
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

export default CompleteWritingYWT;

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

  .Image_container {
    position: relative;
    width: 280px;
    margin-left: 400px;
  }

  .CompleteImg {
    width: 280dp;
    height: 230px;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
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
  .shareBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-left: 30dp;
    border: none;
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
`;

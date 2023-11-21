import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineThreeContent from "../../../components/GuideLine/ThreeContent";

//GuideLine YWT 회고 페이지
export default function YWT() {
  const [firstContent, setContinueContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;

  const goToAttachPicture = () => {
    const sectionTexts = [firstContent, secondContent, thirdContent];
    localStorage.setItem("sectionTexts", JSON.stringify(sectionTexts));
    navigate("/attachPicture");
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="title_container">
          <div className="title_main">YWT 회고</div>
          <div className="title_content">
            YWT는 일본 도요타에서 사용한 방식으로 짧게 진행되는 회고예요
          </div>
        </div>
        <GuideLineThreeContent>
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
                  onChange={(e) => setContinueContent(e.target.value)}
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
        </GuideLineThreeContent>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled
            }
          >
            임시 저장
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor:
                isFirstContentFilled &&
                isSecondContentFilled &&
                isThirdContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled
            }
            onClick={() => {
              goToAttachPicture();
            }}
          >
            작성 완료
          </button>
        </WritingPageBtn>
      </WritingPageWrap>
    </>
  );
}

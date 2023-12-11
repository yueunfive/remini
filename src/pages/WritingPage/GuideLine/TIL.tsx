import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineTheeContent from "../../../components/GuideLine/ThreeContent";

//GuideLine TIL 회고 페이지
export default function TIL() {
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
    navigate("/attach-picture");
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="container">
          <div className="title_container">
            <div className="title_main">TIL 회고</div>
            <div className="title_content">
              TIL 회고는 Today I Learned의 줄임말로 매일의 배움을 기록하는
              회고예요
            </div>
          </div>
          <GuideLineTheeContent>
            <div className="AllmainConten_container">
              <div className="leftContent_container">
                <div className="mainContent_Btn">잘한 점</div>
                <div className="maintext_container">
                  <p>
                    성취 - 오늘의 나는
                    <br />
                    무엇을 잘했는지 작성하기
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
                <div className="mainContent_Btn">개선 점</div>
                <div className="maintext_container">
                  <p>
                    개선 - 오늘의 나는 어떤 문제를 겪었는지,
                    <br />
                    앞으로 어떻게 해결할 것인지 작성하기
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
                <div className="mainContent_Btn">배운 점</div>
                <div className="maintext_container">
                  <p>
                    학습 - 오늘의 일에서
                    <br />
                    나는 어떤 것을 배웠는지 작성하기
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

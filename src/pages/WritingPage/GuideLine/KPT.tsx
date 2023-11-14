import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineTheeContent from "../../../components/GuideLine/ThreeContent";

//GuideLine KPT 회고 페이지
export default function KPT() {
  const [firstContent, setFirstContent] = useState(""); // Keep 컨텐츠 상태
  const [secondContent, setSecondContent] = useState(""); // Problem 컨텐츠 상태
  const [thirdContent, setThirdContent] = useState(""); // Try 컨텐츠 상태
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThridContentFilled = thirdContent.trim().length > 0;

  const goToCompleteWriting = () => {
    navigate("/attachPicture");
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="title_container">
          <div className="title_main">KPT 회고</div>
          <div className="title_content">
            회고 3가지 관점에서 업무를 돌아보고, 다음 액션 아이템을 도출해내는
            데 도움이 되는 회고예요
          </div>
        </div>
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
                  style={{ resize: "none" }} // 사이즈 조절 방지
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
                  style={{ resize: "none" }} // 사이즈 조절 방지
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
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThridContentFilled
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
                isThridContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThridContentFilled
            }
            onClick={() => {
              goToCompleteWriting();
            }}
          >
            작성 완료
          </button>
        </WritingPageBtn>
      </WritingPageWrap>
    </>
  );
}

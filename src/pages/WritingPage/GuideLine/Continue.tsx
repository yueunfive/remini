import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineTheeContent from "../../../components/GuideLine/GuideLineTheeContent";

//GuideLine Contiue 회고 페이지
export default function KPT() {
  const [continueContent, setContinueContent] = useState("");
  const [stopContent, setStopContent] = useState("");
  const [startContent, setStartContent] = useState("");
  const navigate = useNavigate();

  const isKeepContentFilled = continueContent.trim().length > 0;
  const isProblemContentFilled = stopContent.trim().length > 0;
  const isTryContentFilled = stopContent.trim().length > 0;

  const goToCompleteWriting = () => {
    navigate("/attachPicture");
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="title_container">
          <div className="title_main">Continue-Stop-Start 회고</div>
          <div className="title_content">
            해결법 지향적이고, 무엇을 시작하고 그만둘지의 변화에 중점을 드는
            회고예요
          </div>
        </div>
        <GuideLineTheeContent>
          <div className="AllmainConten_container">
            <div className="leftContent_container">
              <div className="mainContent_Btn">Continue</div>
              <div className="maintext_container">
                <p>우리가 무엇을 계속할 지에 대해 작성하기</p>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={continueContent}
                  onChange={(e) => setContinueContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{continueContent.length}/200</p>
              </div>
            </div>
            <div className="middleContent_container">
              <div className="mainContent_Btn">Stop</div>
              <div className="maintext_container">
                <p>우리가 무엇을 그만두어야 할 지에 대해 작성하기</p>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={stopContent}
                  onChange={(e) => setStopContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{stopContent.length}/200</p>
              </div>
            </div>
            <div className="rightContent_container">
              <div className="mainContent_Btn">Start</div>
              <div className="maintext_container">
                <p>우리가 무엇을 시작하여야 할 지에 대해 작성하기</p>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={startContent}
                  onChange={(e) => setStartContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{stopContent.length}/200</p>
              </div>
            </div>
          </div>
        </GuideLineTheeContent>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isKeepContentFilled ||
              !isProblemContentFilled ||
              !isTryContentFilled
            }
          >
            임시 저장
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor:
                isKeepContentFilled &&
                isProblemContentFilled &&
                isTryContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isKeepContentFilled ||
              !isProblemContentFilled ||
              !isTryContentFilled
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

import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineFourContent from "../../../components/GuideLine/FourContent";

//GuideLine ORID 회고 페이지
export default function ORID() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;

  const goToAttachPicture = () => {
    const sectionTexts = [
      firstContent,
      secondContent,
      thirdContent,
      fourContent,
    ];
    localStorage.setItem("sectionTexts", JSON.stringify(sectionTexts));
    navigate("/attach-picture");
  };
  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="title_container">
          <div className="title_main">ORID 회고</div>
          <div className="title_content">
            ORID 회고는 Objective(지각 단계)-Reflective(반응
            단계)-Interpretive(해석 단계)-Decisional(결정 단계)의
            <br />
            줄임말로, 사고와 대화를 촉진하는 회고예요
          </div>
        </div>
        <GuideLineFourContent>
          <div className="AllmainConten_container">
            <div className="leftContent_container">
              <div className="mainContent_Btn">Objective</div>
              <div className="maintext_container">
                <p>
                  객관적인 사실과 경험을 중심으로
                  <br />
                  스스로 알고 있는 것을 확인하여 작성하기
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
              <div className="mainContent_Btn">Reflective</div>
              <div className="maintext_container">
                <p>
                  그 때의 감정이나 느낌은 무엇인지
                  <br />
                  감정과 느낌을 탐색하며 작성하기
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
              <div className="mainContent_Btn">Interpretive</div>
              <div className="maintext_container">
                <p>
                  각각의 일들이 시사하는 점이 무엇인지
                  <br />
                  해석과 분석을 하며 작성하기
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
            <div className="rightContent_container">
              <div className="mainContent_Btn">Decisional</div>
              <div className="maintext_container">
                <p>
                  문제해결을 위해 미래에 대한 <br />
                  행동과 변화를 결정하여 작성하기
                </p>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={fourContent}
                  onChange={(e) => setFourContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{fourContent.length}/200</p>
              </div>
            </div>
          </div>
        </GuideLineFourContent>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled
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
                isThirdContentFilled &&
                isFourContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled
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

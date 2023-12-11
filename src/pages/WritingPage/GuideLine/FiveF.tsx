import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineVerticleContent from "../../../components/GuideLine/FiveFContent";

//GuideLine FiveF 회고 페이지
export default function FiveF() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFiftheContent] = useState("");
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;
  const isFiftheContentFilled = fifthContent.trim().length > 0;

  const goToAttachPicture = () => {
    const sectionTexts = [
      firstContent,
      secondContent,
      thirdContent,
      fourContent,
      fifthContent,
    ];
    localStorage.setItem("sectionTexts", JSON.stringify(sectionTexts));
    navigate("/attach-picture");
  };
  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="container">
          <div className="title_container">
            <div className="title_main">5F 회고</div>
            <div className="title_content">
              다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
              회고예요
            </div>
          </div>
          <GuideLineVerticleContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="mainContent_Btn">Fact</div>
                <div className="maintext_container">
                  우리가 무엇을 시작하여야 할 지에 대해 작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Feelings</div>
                <div className="maintext_container">
                  한 일에 대한 느낀점을 작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Finding</div>
                <div className="maintext_container">
                  무엇을 배웠는지, 인사이트, 교훈을 작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Future Action</div>
                <div className="maintext_container">향후 계획을 작성하기</div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Feedback</div>
                <div className="maintext_container">
                  향후 계획에 대한 피드백을 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={fifthContent}
                  onChange={(e) => setFiftheContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{fifthContent.length}/200</p>
              </div>
            </div>
          </GuideLineVerticleContent>
        </div>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled ||
              !isFiftheContentFilled
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
                isFourContentFilled &&
                isFiftheContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled ||
              !isFiftheContentFilled
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

import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLinePersonalContent from "../../../components/GuideLine/PersonalContent";

//Performance 회고 페이지
export default function Performance() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const [sixthContent, setSixthContent] = useState("");
  const [seventhContent, setSeventhContent] = useState("");
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;
  const isFifthContentFilled = fifthContent.trim().length > 0;
  const isSixthContentFilled = sixthContent.trim().length > 0;
  const isSeventhContentFilled = seventhContent.trim().length > 0;

  const goToCompleteWriting = () => {
    navigate("/attachPicture");
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="title_container">
          <div className="title_main">성과/수치 중심 회고</div>
          <div className="title_content">
            성과/수치 중심 회고는 보통 분기/일 년 회고를 할 때 많이 사용하는
            회고예요
          </div>
        </div>
        <GuideLinePersonalContent>
          <div className="AllmainConten_container">
            <div className="Content-Container">
              <div className="maintext_container">
                연초(분기초)에 세운 목표치를 몇% 달성하였는지 작성하기
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
              <div className="maintext_container">
                만일 높은(71~100%) 달성률을 기록했다면 목표를 너무 낮게 잡은
                것은 아닌지, 달성한 목표를 수정한다면 무엇을 바꿔야 하는지
                작성하기
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
              <div className="maintext_container">
                목표를 달성하는 과정에서의 기여 요인은 무엇인지 작성하기
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
              <div className="maintext_container">
                목표를 달성하는 과정에서 성공을 가로막은 것은 무엇인지 작성하기
              </div>
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
              <div className="maintext_container">
                무엇을 개선한다면, 더 높은 성과를 달성할 수 있는지 작성하기
              </div>
            </div>
            <div>
              <textarea
                className="mainContent_Input"
                placeholder="텍스트를 입력해주세요"
                value={fifthContent}
                onChange={(e) => setFifthContent(e.target.value)}
                style={{ resize: "none" }} // 사이즈 조절 방지
              ></textarea>
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
              <textarea
                className="mainContent_Input"
                placeholder="텍스트를 입력해주세요"
                value={sixthContent}
                onChange={(e) => setSixthContent(e.target.value)}
                style={{ resize: "none" }} // 사이즈 조절 방지
              ></textarea>
              <p className="text_num">{sixthContent.length}/200</p>
            </div>
            <div className="Content-Container">
              <div className="maintext_container">
                이번 교훈을 통해 내년(다음 분기)에는 무엇을 바꿔야 하는지
                작성하기
              </div>
            </div>
            <div>
              <textarea
                className="mainContent_Input"
                placeholder="텍스트를 입력해주세요"
                value={seventhContent}
                onChange={(e) => setSeventhContent(e.target.value)}
                style={{ resize: "none" }} // 사이즈 조절 방지
              ></textarea>
              <p className="text_num">{seventhContent.length}/200</p>
            </div>
          </div>
        </GuideLinePersonalContent>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled ||
              !isFifthContentFilled ||
              !isSixthContentFilled ||
              !isSeventhContentFilled
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
                isFifthContentFilled &&
                isSixthContentFilled &&
                isSeventhContentFilled
                  ? "#79CD96"
                  : " #305D40",
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled ||
              !isFifthContentFilled ||
              !isSixthContentFilled ||
              !isSeventhContentFilled
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

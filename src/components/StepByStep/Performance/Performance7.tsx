import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img7 from "../../../img/ProgressBar/Performance7.png";
import WritingPageBtnWrap from "../../WritingPageBtn";
import { useNavigate } from "react-router-dom";

//Step by Step Performance 회고 페이지 7
interface Performance7Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function Performance7({
  content,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
}: Performance7Props) {
  const navigate = useNavigate();

  const goToCompleteWriting = () => {
    navigate("/attach-picture");
  };

  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent]; // content 배열에 inputContent 추가
      localStorage.setItem("sectionTexts", JSON.stringify(updatedContent)); // 작성 완료 시 content 배열을 localStorage에 저장
    }
  };

  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img7} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="main_text_container">
            <p>
              이번 교훈을 통해{" "}
              <span style={{ fontWeight: 700 }}>
                내년(다음 분기)에는 무엇을 바꿔야 하는지
              </span>{" "}
              작성해주세요.
            </p>
          </div>
          <div>
            <textarea
              className="mainContent_Input"
              placeholder="텍스트를 입력해주세요"
              value={inputContent}
              onChange={(e) => {
                const text = e.target.value; // 200자를 초과하는 입력 방지
                if (text.length <= 200) {
                  setInputContent(text);
                }
              }}
              style={{ resize: "none" }} // 사이즈 조절 방지
            ></textarea>
            <p className="text_num">{inputContent.length}/200</p>
          </div>
        </div>
        <WritingPageBtnWrap>
          <button className="temporary_btn" disabled={!isContentFilled}>
            임시 저장
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor: isContentFilled ? "#79CD96" : " #305D40",
            }}
            disabled={!isContentFilled}
            onClick={() => {
              handleNext();
              goToCompleteWriting();
            }}
          >
            작성 완료
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}

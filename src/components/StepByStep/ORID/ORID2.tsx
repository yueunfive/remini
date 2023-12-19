import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img2 from "../../../img/ProgressBar/ORID2.png";
import WritingPageBtnWrap from "../../WritingPageBtn";

//Step by Step ORID 회고 페이지 2
interface ORID2Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function ORID2({
  content,
  handleComplete,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
  setContent, // setContent 속성 추가
}: ORID2Props) {
  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent]; // content 배열에 inputContent 추가
      setContent(updatedContent); // content 업데이트
      setInputContent("");
      handleComplete();
    }
  };
  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img2} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="mainContent_Btn">Reflective</div>
          <div className="main_text_container">
            <p>그 때의 감정이나 느낌은 무엇인지</p>
            <p>
              <span style={{ fontWeight: 700 }}>감정과 느낌을 탐색</span> 하며
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
          <button
            className="completed_btn"
            style={{
              backgroundColor: isContentFilled ? "#79CD96" : " #305D40",
            }}
            disabled={!isContentFilled}
            onClick={handleNext}
          >
            다음
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}

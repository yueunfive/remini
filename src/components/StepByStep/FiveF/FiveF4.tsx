import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img4 from "../../../img/ProgressBar/FiveF4.png";
import WritingPageBtnWrap from "../../WritingPageBtn";

//Step by Step FiveF 회고 페이지 4
interface FiveF4Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function FiveF4({
  content,
  handleComplete,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
  setContent, // setContent 속성 추가
}: FiveF4Props) {
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
          <img src={img4} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="mainContent_Btn">Future Action</div>
          <div className="main_text_container">
            <p>
              <span style={{ fontWeight: 700 }}>향후 계획</span>을 작성해주세요.
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

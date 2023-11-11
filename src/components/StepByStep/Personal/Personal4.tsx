import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img4 from "../../../img/ProgressBar/Personal4.png";
import WritingPageBtnWrap from "../../WritingPageBtn";

//Step by Step Personal 회고 페이지 4
interface Personal4Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function Personal4({
  content,
  handleComplete,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
  setContent, // setContent 속성 추가
}: Personal4Props) {
  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content, inputContent];
      setContent(updatedContent);
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
          <div className="main_text_container">
            <p>
              <span style={{ fontWeight: 700 }}>뭘 더 잘할 수 있을지</span>{" "}
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
            onClick={handleNext}
          >
            다음
          </button>
        </WritingPageBtnWrap>
      </StepByStepWrap>
    </>
  );
}

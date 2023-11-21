import React from "react";
import StepByStepWrap from "../StepByStepWrap";
import img3 from "../../../img/ProgressBar/KPT3.png";
import WritingPageBtnWrap from "../../WritingPageBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Step by Step KPT 회고 페이지 3
interface KPT3Props {
  content: string[];
  handleComplete: () => void;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  isContentFilled: boolean; // isContentFilled 속성 추가
  setContent: (content: string[]) => void; // setContent 속성 추가
}

export default function KPT3({
  content,
  inputContent,
  setInputContent,
  isContentFilled, // isContentFilled 속성 추가
}: KPT3Props) {
  const navigate = useNavigate();
  const indexToFill = 2;

  const goToCompleteWriting = () => {
    navigate("/attachPicture");
  };

  const handleNext = () => {
    if (inputContent.trim().length > 0) {
      const updatedContent = [...content];
      updatedContent[indexToFill] = inputContent;
      localStorage.setItem("sectionTexts", JSON.stringify(updatedContent)); // 작성 완료 시 content 배열을 localStorage에 저장
    }
  };

  // 임시 저장
  const tempStore = () => {
    if (inputContent.trim().length > 0) {
      if (inputContent.trim().length > 0) {
        const updatedContent = [...content];
        updatedContent[indexToFill] = inputContent;

        const accessToken = localStorage.getItem("accessToken");

        const data = {
          instantSave: true,
          sectionTexts: updatedContent,
          step: indexToFill + 1,
          title: localStorage.getItem("title"),
          type: localStorage.getItem("type"),
        };

        // Axios를 사용한 POST 요청 보내기
        axios
          .post("https://www.remini.store/api/remini", data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            console.log("임시 저장 완료", response.data);
            alert("임시 저장에 성공했습니다!");
            navigate("/MyPage"); // MyPage로 이동
          })
          .catch((error) => {
            console.error("임시 저장 실패:", error);
          });
      }
    }
  };

  return (
    <>
      <StepByStepWrap>
        <div className="progressBar_container">
          <img src={img3} alt="progressBar" />
        </div>
        <div className="mainContent_container">
          <div className="mainContent_Btn">Try</div>
          <div className="main_text_container">
            <p>문제를 파악하고,</p>
            <p>
              이를{" "}
              <span style={{ fontWeight: 700 }}>
                해결하기 위한 구체적인 개선방안
              </span>
              을 작성해주세요.
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
            className="temporary_btn"
            disabled={!isContentFilled}
            onClick={tempStore}
          >
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

import React from "react";
import { Header } from "../../../components/Header";
import TIL1 from "../../../components/StepByStep/TIL/TIL1";
import TIL2 from "../../../components/StepByStep/TIL/TIL2";
import TIL3 from "../../../components/StepByStep/TIL/TIL3";
import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step TIL 회고 페이지
export default function TIL() {
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState<string[]>([]);
  const [inputContent, setInputContent] = useState("");

  const isContentFilled = inputContent.trim().length > 0;

  const handleComplete = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setInputContent("");
  };

  // currentStep이 변경될 때마다 스크롤을 위로 올리는 기능 추가
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="all-container">
          <div className="container">
            <div className="title_container" style={{ marginRight: "360px" }}>
              <div className="title_main">TIL 회고</div>
              <div className="title_content">
                TIL 회고는 Today I Learned의 줄임말로 매일의 배움을 기록하는
                회고예요
              </div>
            </div>
            {currentStep === 1 && (
              <TIL1
                content={content}
                setContent={setContent}
                handleComplete={handleComplete}
                inputContent={inputContent}
                setInputContent={setInputContent}
                isContentFilled={isContentFilled}
              />
            )}
            {currentStep === 2 && (
              <TIL2
                content={content}
                setContent={setContent}
                handleComplete={handleComplete}
                inputContent={inputContent}
                setInputContent={setInputContent}
                isContentFilled={isContentFilled}
              />
            )}
            {currentStep === 3 && (
              <TIL3
                content={content}
                setContent={setContent}
                handleComplete={handleComplete}
                inputContent={inputContent}
                setInputContent={setInputContent}
                isContentFilled={isContentFilled}
              />
            )}
          </div>
        </div>
      </WritingPageWrap>
    </>
  );
}

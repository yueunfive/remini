import React from "react";
import { Header } from "../../../components/Header";
import YWT1 from "../../../components/StepByStep/YWT/YWT1";
import YWT2 from "../../../components/StepByStep/YWT/YWT2";
import YWT3 from "../../../components/StepByStep/YWT/YWT3";
import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step YWT 회고 페이지
export default function YWT() {
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
        <div className="title_container">
          <div className="title_main">YWT 회고</div>
          <div className="title_content">
            YWT는 일본 도요타에서 사용한 방식으로 짧게 진행되는 회고예요
          </div>
        </div>
        {currentStep === 1 && (
          <YWT1
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 2 && (
          <YWT2
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 3 && (
          <YWT3
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
      </WritingPageWrap>
    </>
  );
}

import React from "react";
import { Header } from "../../../components/Header";
import AAR1 from "../../../components/StepByStep/AAR/AAR1";
import AAR2 from "../../../components/StepByStep/AAR/AAR2";
import AAR3 from "../../../components/StepByStep/AAR/AAR3";
import AAR4 from "../../../components/StepByStep/AAR/AAR4";
import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step AAR 회고 페이지
export default function AAR() {
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
          <div className="title_main">AAR 회고</div>
          <div className="title_content">
            AAR은 After Action Review/Report의 줄임말로 짧은 시간 내에 유연하고
            편하게 진행되는 회고예요
          </div>
        </div>
        {currentStep === 1 && (
          <AAR1
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 2 && (
          <AAR2
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 3 && (
          <AAR3
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 4 && (
          <AAR4
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

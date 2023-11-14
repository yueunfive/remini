import React from "react";
import { Header } from "../../../components/Header";
import KPT1 from "../../../components/StepByStep/KPT/KPT1";
import KPT2 from "../../../components/StepByStep/KPT/KPT2";
import KPT3 from "../../../components/StepByStep/KPT/KPT3";
import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step KPT 회고 페이지
export default function KPT() {
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
          <div className="title_main">KPT 회고</div>
          <div className="title_content">
            회고 3가지 관점에서 업무를 돌아보고, 다음 액션 아이템을 도출해내는
            데 도움이 되는 회고예요
          </div>
        </div>
        {currentStep === 1 && (
          <KPT1
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 2 && (
          <KPT2
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 3 && (
          <KPT3
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

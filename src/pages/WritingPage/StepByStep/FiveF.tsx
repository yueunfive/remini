import React from "react";
import { Header } from "../../../components/Header";
import FiveF1 from "../../../components/StepByStep/FiveF/FiveF1";
import FiveF2 from "../../../components/StepByStep/FiveF/FiveF2";
import FiveF3 from "../../../components/StepByStep/FiveF/FiveF3";
import FiveF4 from "../../../components/StepByStep/FiveF/FiveF4";
import FiveF5 from "../../../components/StepByStep/FiveF/FiveF5";
import { useState, useEffect } from "react";
import WritingPageWrap from "../WritingPageWrap";

//Step by Step FiveF 회고 페이지
export default function FiveF() {
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
          <div className="title_main">5F 회고</div>
          <div className="title_content">
            다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
            회고예요
          </div>
        </div>
        {currentStep === 1 && (
          <FiveF1
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 2 && (
          <FiveF2
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 3 && (
          <FiveF3
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 4 && (
          <FiveF4
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 5 && (
          <FiveF5
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

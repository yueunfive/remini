import React from "react";
import { Header } from "../../../components/Header";
import ORID1 from "../../../components/StepByStep/ORID/ORID1";
import ORID2 from "../../../components/StepByStep/ORID/ORID2";
import ORID3 from "../../../components/StepByStep/ORID/ORID3";
import ORID4 from "../../../components/StepByStep/ORID/ORID4";
import { useState, useEffect } from "react";
import WritingPageWrap from "../WritingPageWrap";

//Step by Step ORID 회고 페이지
export default function ORID() {
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
          <div className="title_main">ORID 회고</div>
          <div className="title_content">
            <p>
              ORID 회고는 Objective(지각 단계)-Reflective(반응
              단계)-Interpretive(해석 단계)-Decisional(결정 단계)의
            </p>
            <p>줄임말로, 사고와 대화를 촉진하는 회고예요</p>
          </div>
        </div>
        {currentStep === 1 && (
          <ORID1
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 2 && (
          <ORID2
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 3 && (
          <ORID3
            content={content}
            setContent={setContent}
            handleComplete={handleComplete}
            inputContent={inputContent}
            setInputContent={setInputContent}
            isContentFilled={isContentFilled}
          />
        )}
        {currentStep === 4 && (
          <ORID4
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

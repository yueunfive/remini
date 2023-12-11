import React from "react";
import { Header } from "../../../components/Header";
import Continue1 from "../../../components/StepByStep/Continue/Continue1";
import Continue2 from "../../../components/StepByStep/Continue/Continue2";
import Continue3 from "../../../components/StepByStep/Continue/Continue3";

import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step Continue 회고 페이지
export default function Continue() {
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
        <div className="container">
          <div className="title_container" style={{ marginRight: "90px" }}>
            <div className="title_main">Continue-Stop-Start 회고</div>
            <div className="title_content">
              해결법 지향적이고, 무엇을 시작하고 그만둘지의 변화에 중점을 드는
              회고예요
            </div>
          </div>
          {currentStep === 1 && (
            <Continue1
              content={content}
              setContent={setContent}
              handleComplete={handleComplete}
              inputContent={inputContent}
              setInputContent={setInputContent}
              isContentFilled={isContentFilled}
            />
          )}
          {currentStep === 2 && (
            <Continue2
              content={content}
              setContent={setContent}
              handleComplete={handleComplete}
              inputContent={inputContent}
              setInputContent={setInputContent}
              isContentFilled={isContentFilled}
            />
          )}
          {currentStep === 3 && (
            <Continue3
              content={content}
              setContent={setContent}
              handleComplete={handleComplete}
              inputContent={inputContent}
              setInputContent={setInputContent}
              isContentFilled={isContentFilled}
            />
          )}
        </div>
      </WritingPageWrap>
    </>
  );
}

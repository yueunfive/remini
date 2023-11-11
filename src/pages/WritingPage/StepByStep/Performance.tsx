import React from "react";
import { Header } from "../../../components/Header";
import Performance1 from "../../../components/StepByStep/Performance/Performance1";
import Performance2 from "../../../components/StepByStep/Performance/Performance2";
import Performance3 from "../../../components/StepByStep/Performance/Performance3";
import Performance4 from "../../../components/StepByStep/Performance/Performance4";
import Performance5 from "../../../components/StepByStep/Performance/Performance5";
import Performance6 from "../../../components/StepByStep/Performance/Performance6";
import Performance7 from "../../../components/StepByStep/Performance/Performance7";

import { useState, useEffect } from "react";
import WritingPageWrap from "../WritingPageWrap";

//Step by Step Performance 회고 페이지
export default function Performance() {
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState<string[]>([]);
  const [inputContent, setInputContent] = useState("");
  const components = [
    Performance1,
    Performance2,
    Performance3,
    Performance4,
    Performance5,
    Performance6,
    Performance7,
  ];
  const SelectedComponent = components[currentStep - 1];

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
          <div className="title_main">성과/수치 중심 회고</div>
          <div className="title_content">
            성과/수치 중심 회고는 보통 분기/일 년 회고를 할 때 많이 사용하는
            회고예요
          </div>
        </div>
        {currentStep >= 1 && currentStep <= 7 && (
          <SelectedComponent // 컴포넌트 배열에서 필요한 컴포넌트를 선택
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

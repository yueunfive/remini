import React from "react";
import { Header } from "../../../components/Header";
import Personal1 from "../../../components/StepByStep/Personal/Personal1";
import Personal2 from "../../../components/StepByStep/Personal/Personal2";
import Personal3 from "../../../components/StepByStep/Personal/Personal3";
import Personal4 from "../../../components/StepByStep/Personal/Personal4";
import Personal5 from "../../../components/StepByStep/Personal/Personal5";
import Personal6 from "../../../components/StepByStep/Personal/Personal6";
import Personal7 from "../../../components/StepByStep/Personal/Personal7";
import Personal8 from "../../../components/StepByStep/Personal/Personal8";
import Personal9 from "../../../components/StepByStep/Personal/Personal9";
import Personal10 from "../../../components/StepByStep/Personal/Personal10";
import Personal11 from "../../../components/StepByStep/Personal/Personal11";

import { useState, useEffect } from "react";
import WritingPageWrap from "../../../components/WritingPageWrap";

//Step by Step Personal 회고 페이지
export default function Personal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState<string[]>([]);
  const [inputContent, setInputContent] = useState("");
  const components = [
    Personal1,
    Personal2,
    Personal3,
    Personal4,
    Personal5,
    Personal6,
    Personal7,
    Personal8,
    Personal9,
    Personal10,
    Personal11,
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
        <div className="container">
          <div className="title_container" style={{ marginRight: "70px" }}>
            <div className="title_main">개인적 회고</div>
            <div className="title_content">
              개인적 회고는 주로 일 년을 돌아보는 회고로, 개인이 보낸 한 해를
              돌아보고 다음 한 해를 준비하기 좋은 회고예요
            </div>
          </div>
          {currentStep >= 1 && currentStep <= 11 && (
            <SelectedComponent // 컴포넌트 배열에서 필요한 컴포넌트를 선택
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

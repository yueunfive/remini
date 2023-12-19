import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import CompleteAmin from "../../img/anim/CompleteAmin.json";

function CompleteLanding() {
  const CompleteAminRef = useRef(null);

  useEffect(() => {
    if (CompleteAminRef.current) {
      lottie.loadAnimation({
        container: CompleteAminRef.current,
        animationData: CompleteAmin,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }
  }, []);

  return (
    <CompleteLandingWrap>
      <div className="container">
        <div className="complete-anim" ref={CompleteAminRef}></div>
        <div className="content">새로운 회고 작성을 완료했어요!</div>
      </div>
    </CompleteLandingWrap>
  );
}

export default CompleteLanding;

const CompleteLandingWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--Background, #121212);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .complete-anim {
    width: 300px;
    height: 250px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .content {
    color: var(--Text-High-Emphasis, rgba(255, 255, 255, 0.87));
    font-family: Pretendard;
    font-size: 35px;
    font-weight: 700;
  }
`;

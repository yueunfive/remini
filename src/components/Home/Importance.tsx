import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const Importance: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const revealText = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    };

    const titleObserver = new IntersectionObserver(revealText, observerOptions);
    const introObserver = new IntersectionObserver(revealText, observerOptions);
    const contentObserver = new IntersectionObserver(
      revealText,
      observerOptions
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    if (introRef.current) {
      introObserver.observe(introRef.current);
    }
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      titleObserver.disconnect();
      introObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  return (
    <ImportanceWrap>
      <div className="text" ref={titleRef}>
        <h3 className="title">회고의 중요성과 필요성</h3>
      </div>
      <div className="text" ref={introRef}>
        <div className="intro">
          <p>
            회고는 향후 자신의 업무가 더 좋은 성과로 이어질 수 있도록 미리
            준비하는 과정이자
          </p>
          <p>
            앞으로 나아가기 위해 뒤를 돌아보고, 어떻게 앞으로의 어려움을
            극복해낼지에 대한 교훈을 찾는 과정입니다.
          </p>
        </div>
      </div>
      <div className="text" ref={contentRef}>
        <h4 className="content">
          즉, <span>회고문화</span>는 개인과 조직의 성장을 위해 중요한
          활동입니다
        </h4>
      </div>
    </ImportanceWrap>
  );
};

const ImportanceWrap = styled.div`
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Background, #121212);
  text-align: center;
  flex-direction: column;

  .text {
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transition: opacity 1s;
    &.reveal {
      opacity: 1;
    }
  }

  h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
  .intro {
    height: 63px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
  span {
    color: var(--primary-400, #79cd96);
  }
  h4 {
    color: #fff;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

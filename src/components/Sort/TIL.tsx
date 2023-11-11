import React from "react";
import SortDetailWrap from "./SortDetailWrap";

export const TIL: React.FC = () => {
  return (
    <SortDetailWrap>
      <h3 className="title">TIL 회고</h3>
      <div className="text_box">
        <p>
          TIL 회고는 Today I Learned의 줄임말로 매일의 배움을 기록하는 회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>잘한 점 (성취 - 오늘의 나는 무엇을 잘했는지)</p>
          <p>
            개선 점 (개선 - 오늘의 나는 어떤 문제를 겪었는지, 앞으로 어떻게
            해결할 것인지)
          </p>
          <p>배운 점 (학습 - 오늘의 일에서 나는 어떤 것을 배웠는지)</p>
        </span>
      </div>
    </SortDetailWrap>
  );
};

import React from "react";
import RecommendSortWrap from "./RecommendSortWrap";
import stepNum from "../../img/UI/stepNum.svg";

export const FiveF: React.FC = () => {
  return (
    <RecommendSortWrap>
      <div className="title">
        <span>5F 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>5</span>
      </div>
      <div className="text_box">
        <p>
          5F 회고는 다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
          회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>Fact (한 일에 대한 사실)</p>
          <p>Feelings (한 일에 대한 느낀점)</p>
          <p>Finding (무엇을 배웠는지, 인사이트, 교훈)</p>
          <p>Future Action (향후 계획)</p>
          <p>Feedback (향후 계획에 대한 피드백)</p>
        </span>
      </div>
    </RecommendSortWrap>
  );
};

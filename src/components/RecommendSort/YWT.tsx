import React from "react";
import RecommendSortWrap from "./RecommendSortWrap";
import stepNum from "../../img/UI/contract_edit.svg";

export const YWT: React.FC = () => {
  return (
    <RecommendSortWrap>
      <div className="title">
        <span>YWT 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>3</span>
      </div>
      <div className="text_box">
        <p>YWT는 일본 도요타에서 사용한 방식으로 짧게 진행되는 회고예요.</p>
        <br />
        <span className="main_text">
          <p>
            한 일(やったこと-yattakoto) : 일을 통해 명확히 알게 되었거나 이해한
            부분
          </p>
          <p>배운 것들(わかったこと-wakattakoto) : 배운 점과 시사점</p>
          <p>
            앞으로 할 일(つぎにやること-tsuginiyarukoto) : 응용하여 배운 것을
            어디에 어떻게 적용할 지
          </p>
        </span>
      </div>
    </RecommendSortWrap>
  );
};

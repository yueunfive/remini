import React from "react";
import RecommendSortWrap from "./RecommendSortWrap";
import stepNum from "../../img/UI/stepNum.svg";

export const Continue: React.FC = () => {
  return (
    <RecommendSortWrap>
      <div className="title">
        <span>Continue-Stop-Start 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>3</span>
      </div>
      <div className="text_box">
        <p>
          Continue-Stop-Start 회고는 해결법 지향적이고, 무엇을 시작하고
          그만둘지의 변화에 중점을 두는 회고예요.
        </p>
        <p>필요하다면 긍정적인 점과 부정적인 점들의 논의되기도 해요.</p>
        <br />
        <span className="main_text">
          <p>Continue (우리가 무엇을 계속할 지에 대해 작성)</p>
          <p>Stop (우리가 무엇을 그만두어야 할 지에 대해 작성)</p>
          <p>Start (우리가 무엇을 시작하여야 할 지에 대해 작성)</p>
          <br />
        </span>
        <p>
          Continue-Stop-Start 회고의 강점은 변화에 초점을 둠으로써 새로운
          아이디어를 가져올 여지를 남겨두는 것이에요.
        </p>
        <p>
          칭찬과 감사의 표시가 직접적으로 존재하지 않으니, 칭찬과 감사의 표시도
          회고를 하면서 함께 할 수 있도록 유의해주세요.
        </p>
      </div>
    </RecommendSortWrap>
  );
};

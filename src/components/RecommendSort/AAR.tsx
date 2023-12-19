import React from "react";
import RecommendSortWrap from "./RecommendSortWrap";
import stepNum from "../../img/UI/contract_edit.svg";

export const AAR: React.FC = () => {
  return (
    <RecommendSortWrap>
      <div className="title">
        <span>AAR 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>3</span>
      </div>
      <div className="text_box">
        <p>
          AAR은 After Action Review/Report의 줄임말로 짧은 시간 내에 유연하고
          편하게 진행되는 회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>초기 목표 (의도한 결과는 무엇이었나?)</p>
          <p>현실 (실제 어떤 일들이 일어났나?)</p>
          <p>
            배운 점들 (계획과 실제 결과의 차이는 왜 발생되었는가? 무엇을
            배웠는가?)
          </p>
          <p>목적 (지속, 개선 혹은 포기할 것들은 무엇인가?)</p>
        </span>
      </div>
    </RecommendSortWrap>
  );
};

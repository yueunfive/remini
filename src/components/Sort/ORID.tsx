import React from "react";
import SortDetailWrap from "./SortDetailWrap";
import stepNum from "../../img/UI/contract_edit.png";

export const ORID: React.FC = () => {
  return (
    <SortDetailWrap>
      <div className="title">
        <span>ORID 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>4</span>
      </div>
      <div className="text_box">
        <p>
          ORID 회고는 Objective(지각 단계)-Reflective(반응
          단계)-Interpretive(해석 단계)-Decisional(결정 단계)의 줄임말로 사고와
          대화를 촉진하는 회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>
            Objective (지각 단계 - 상황을 지각하는 것, 객관적인 정보나 사실을
            확인하는 단계)
          </p>
          <p>
            Reflective (반응 단계 - 사실과 정보에 대한 우리의 반응을 살피는 것,
            감정이나 느낌을 살펴보는 단계)
          </p>
          <p>
            Interpretive (해석 단계 - 이런 반응은 왜 나타나는 것인지, 지각
            단계에서 우리가 파악한 사실 등이 현재 우리에게 어떤 의미가 있는지
            해석하고 생각하는 단계)
          </p>
          <p>
            Decisional (결정 단계 - 문제해결을 위해 취할 수 있는 행동을 논의하고
            결정하는 단계)
          </p>
        </span>
      </div>
    </SortDetailWrap>
  );
};

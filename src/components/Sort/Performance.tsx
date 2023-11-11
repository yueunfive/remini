import React from "react";
import SortDetailWrap from "./SortDetailWrap";

export const Performance: React.FC = () => {
  return (
    <SortDetailWrap>
      <h3 className="title">성과/수치 중심 회고</h3>
      <div className="text_box">
        <p>
          성과/수치 중심 회고는 보통 분기/일 년 회고를 할 때 많이 사용하는
          회고예요. 분기/일 년 목표를 세웠을 때 성과/수치 중심 회고를 한다면
          가장 효과적일 거예요.
        </p>
        <br />
        <span className="main_text">
          <p>연초(분기초)에 세운 목표치를 몇% 달성하였는가?</p>
          <p>
            만일 높은(71~100%) 달성률을 기록했다면, 목표를 너무 낮게 잡은 것은
            아닌가? 달성한 목표를 수정한다면 무엇을 바꿔야 하는가?
          </p>
          <p>목표를 달성하는 과정에서의 기여 요인은 무엇인가?</p>
          <p>목표를 달성하는 과정에서 성공을 가로막은 것은 무엇인가?</p>
          <p>무엇을 개선한다면, 더 높은 성과를 달성할 수 있는가?</p>
          <p>
            스스로 평가하는 성과는 어떠한가? 지난해(분기) 대비 얼마나
            성장하였는가?
          </p>
          <p>이번 교훈을 통해 내년(다음 분기)에는 무엇을 바꿔야 하는가?</p>
        </span>
      </div>
    </SortDetailWrap>
  );
};

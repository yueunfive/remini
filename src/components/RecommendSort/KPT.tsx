import React from "react";
import RecommendSortWrap from "./RecommendSortWrap";

export const KPT: React.FC = () => {
  return (
    <RecommendSortWrap>
      <h3 className="title">KPT 회고</h3>
      <div className="text_box">
        <p>KPT는 각각 Keep, Problem, Try의 약자입니다.</p>
        <p>
          이름에서 알 수 있듯 3가지 관점에서 업무를 돌아보고, 다음 액션 아이템을
          도출해내는 데 도움이 되는 회고 템플릿이에요.
        </p>
        <br />
        <span className="main_text">
          <p>
            Keep (프로젝트에서 만족했고, 앞으로의 업무에서 지속하고 싶은 부분)
          </p>
          <p>Problem (프로젝트에서 부정적인 요소로 작용했거나 아쉬웠던 점)</p>
          <p>
            Try (Problem에 대한 해결 방식으로 다음 프로젝트에서 시도해볼 점)
          </p>
          <br />
        </span>
        <p>무엇보다 KPT에서 중요한 관점은 Try이에요!</p>
        <p>
          이번 프로젝트에서 아쉬웠던 점을 Try를 통해 어떻게 보완할 수 있을지
          정리해보면서 구체적인 실천 방안을 세울 수 있다는 장점이 있어요.
        </p>
      </div>
    </RecommendSortWrap>
  );
};

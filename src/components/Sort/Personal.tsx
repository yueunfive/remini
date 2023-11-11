import React from "react";
import SortDetailWrap from "./SortDetailWrap";

export const Personal: React.FC = () => {
  return (
    <SortDetailWrap>
      <h3 className="title">개인적 회고</h3>
      <div className="text_box">
        <p>
          개인적 회고는 주로 일 년을 돌아보는 회고로, 개인이 보낸 한 해를
          돌아보고 다음 한 해를 준비하기 좋은 회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>올해 가장 자랑스러운 일은?</p>
          <p>올해 가장 감사한 일은?</p>
          <p>올해 가장 즐겼던 일은?</p>
          <p>뭘 더 잘할 수 있을까?</p>
          <p>올해 극복해낸 챌린지는(난관은)?</p>
          <p>올해 얻은 교훈은? 어떻게 성장했을까?</p>
          <p>하겠다고 해놓고 안 한 일은? / 다시 하고싶은 일은?</p>
          <p>내가 집중했지만 내게 도움이 되지 않았던 일은?</p>
          <p>삶에서 더 하고 싶은 일은? / 삶에서 덜 하고 싶은 일은?</p>
        </span>
      </div>
    </SortDetailWrap>
  );
};

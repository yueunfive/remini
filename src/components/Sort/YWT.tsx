import React from "react";
import SortDetailWrap from "./SortDetailWrap";

export const YWT: React.FC = () => {
  return (
    <SortDetailWrap>
      <h3 className="title">YWT 회고</h3>
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
    </SortDetailWrap>
  );
};

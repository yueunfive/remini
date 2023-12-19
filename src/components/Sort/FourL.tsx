import React from "react";
import SortDetailWrap from "./SortDetailWrap";
import stepNum from "../../img/UI/contract_edit.png";

export const FourL: React.FC = () => {
  return (
    <SortDetailWrap>
      <div className="title">
        <span>4L 회고</span>
        <img src={stepNum} alt="stepNumImg" className="stepNumImg" />
        <span>4</span>
      </div>
      <div className="text_box">
        <p>
          4L 회고는 오로지 내가 수행하였던 일에만 집중해서 솔직하게 정리하는
          회고예요.
        </p>
        <br />
        <span className="main_text">
          <p>Liked (좋았던 것)</p>
          <p>Learned (배운 것)</p>
          <p>Lacked (부족했던 것)</p>
          <p>Longed for (바라는 것)</p>
        </span>
      </div>
    </SortDetailWrap>
  );
};

import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page3bProps {
  pd: (checkboxIndex: number) => void;
}

export const Page3b: React.FC<Page3bProps> = ({ pd }) => {
  const [isChecked, setIsChecked] = useAtom(isCheckedAtoms);

  const handleParagraphClick = (index: number) => {
    const newCheckedState = [...isChecked];
    setIsChecked(newCheckedState);
    pd(index + 1);
  };

  return (
    <SelectWrap>
      <h3 className="select_title"> 프로젝트가 진행된 기간을 알려주세요</h3>
      <div className={`select_box ${isChecked[0] ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked[0]}
            onChange={() => pd(1)}
            id="checkbox1"
          />
          <label htmlFor="checkbox1"></label>
        </div>
        <p onClick={() => handleParagraphClick(0)}>한 달 이하</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[1]}
          onChange={() => pd(2)}
          id="checkbox2"
        />
        <label htmlFor="checkbox2"></label>
        <p onClick={() => handleParagraphClick(1)}>분기 (3개월) 이상</p>
      </div>
    </SelectWrap>
  );
};

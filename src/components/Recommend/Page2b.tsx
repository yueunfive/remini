import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page2bProps {
  pd: (checkboxIndex: number) => void;
}

export const Page2b: React.FC<Page2bProps> = ({ pd }) => {
  const [isChecked, setIsChecked] = useAtom(isCheckedAtoms);

  const handleParagraphClick = (index: number) => {
    const newCheckedState = [...isChecked];
    setIsChecked(newCheckedState);
    pd(index + 1);
  };

  return (
    <SelectWrap>
      <h3 className="select_title">얼마 동안의 기간을 회고하고자 하나요? </h3>
      <div className={`select_box ${isChecked[0] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[0]}
          onChange={() => pd(1)}
          id="checkbox1"
        />
        <label htmlFor="checkbox1"></label>
        <p onClick={() => handleParagraphClick(0)}>분기 (3개월)</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[1]}
          onChange={() => pd(2)}
          id="checkbox2"
        />
        <label htmlFor="checkbox2"></label>
        <p onClick={() => handleParagraphClick(1)}>일 년</p>
      </div>
    </SelectWrap>
  );
};

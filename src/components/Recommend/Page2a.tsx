import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page2aProps {
  pd: (checkboxIndex: number) => void;
}

export const Page2a: React.FC<Page2aProps> = ({ pd }) => {
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
        <p onClick={() => handleParagraphClick(0)}>하루</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[1]}
          onChange={() => pd(2)}
          id="checkbox2"
        />
        <label htmlFor="checkbox2"></label>
        <p onClick={() => handleParagraphClick(1)}>일주일</p>
      </div>
      <div className={`select_box ${isChecked[2] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[2]}
          onChange={() => pd(3)}
          id="checkbox3"
        />
        <label htmlFor="checkbox3"></label>
        <p onClick={() => handleParagraphClick(2)}>한 달</p>
      </div>
    </SelectWrap>
  );
};

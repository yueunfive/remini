import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page3aProps {
  pd: (checkboxIndex: number) => void;
}

export const Page3a: React.FC<Page3aProps> = ({ pd }) => {
  const [isChecked, setIsChecked] = useAtom(isCheckedAtoms);

  const handleParagraphClick = (index: number) => {
    const newCheckedState = [...isChecked];
    setIsChecked(newCheckedState);
    pd(index + 1);
  };

  return (
    <SelectWrap>
      <h3 className="select_title">얼마 동안의 기간을 회고하고자 하나요?</h3>
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
        <p onClick={() => handleParagraphClick(0)}>한 달</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[1]}
          onChange={() => pd(2)}
          id="checkbox2"
        />
        <label htmlFor="checkbox2"></label>
        <p onClick={() => handleParagraphClick(1)}>분기 (3개월)</p>
      </div>
    </SelectWrap>
  );
};

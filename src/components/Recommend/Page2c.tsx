import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page2cProps {
  pd: (checkboxIndex: number) => void;
}

export const Page2c: React.FC<Page2cProps> = ({ pd }) => {
  const [isChecked, setIsChecked] = useAtom(isCheckedAtoms);

  const handleParagraphClick = (index: number) => {
    const newCheckedState = [...isChecked];
    setIsChecked(newCheckedState);
    pd(index + 1);
  };

  return (
    <SelectWrap>
      <h3 className="select_title">프로젝트 진행 여부를 알려주세요 </h3>
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
        <p onClick={() => handleParagraphClick(0)}>프로젝트를 진행 중이에요</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked[1]}
          onChange={() => pd(2)}
          id="checkbox2"
        />
        <label htmlFor="checkbox2"></label>
        <p onClick={() => handleParagraphClick(1)}>프로젝트를 마무리했어요</p>
      </div>
    </SelectWrap>
  );
};

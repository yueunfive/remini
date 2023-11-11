import React from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../store/atom";
import SelectWrap from "./SelectWrap";

interface Page1Props {
  pd: (checkboxIndex: number) => void;
}

export const Page1: React.FC<Page1Props> = ({ pd }) => {
  const [isChecked] = useAtom(isCheckedAtoms);

  return (
    <SelectWrap>
      <h3 className="select_title">
        어떠한 상황에 대해 회고를 하고 싶은지 알려주세요
      </h3>
      <div className={`select_box ${isChecked[0] ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked[0]}
            onChange={() => pd(1)}
          />
        </div>
        <p>일상을 돌아보기 위한 회고를 하고 싶어요</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input type="checkbox" checked={isChecked[1]} onChange={() => pd(2)} />
        <p>목표를 평가하는 회고를 하고 싶어요</p>
      </div>
      <div className={`select_box ${isChecked[2] ? "checked" : ""}`}>
        <input type="checkbox" checked={isChecked[2]} onChange={() => pd(3)} />
        <p>프로젝트 관련 회고를 하고 싶어요</p>
      </div>
    </SelectWrap>
  );
};

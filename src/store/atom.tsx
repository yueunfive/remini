// 상태를 저장하는 Jotai 원자 (Atoms) 생성
// 원자는 컴포넌트 간에 공유할 수 있는 상태의 컨테이너 역할을 한다.
import { atom } from "jotai";

export const pageAtom = atom("Page1"); // 현재 페이지를 저장하는 원자
export const contentAtom = atom("");

export const isCheckedAtoms = atom([false, false, false]); // 체크박스 상태를 저장하는 원자

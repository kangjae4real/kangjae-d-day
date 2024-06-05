import { atom } from "recoil";

type TimeViewType = "years" | "months" | "days" | "hours" | "minutes" | "seconds";

const TIME_VIEW_TYPE_MAP: Record<TimeViewType, string> = {
  years: "연도",
  months: "달",
  days: "날짜",
  hours: "시간으",
  minutes: "분으",
  seconds: "초",
};

const timeViewTypeAtom = atom<TimeViewType>({
  key: "timeViewType",
  default: "days",
});

const humanizeTimeViewType = (type: TimeViewType) => TIME_VIEW_TYPE_MAP[type];

export type { TimeViewType };
export { timeViewTypeAtom, humanizeTimeViewType };

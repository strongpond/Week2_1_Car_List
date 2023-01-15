import { atom } from "recoil";

export const segmentAtom = atom({
  key: "segment", // unique ID (with respect to other atoms/selectors)
  default: "전체", // default value (aka initial value)
});

export const filteredListAtom = atom({
  key: "filteredList",
  default: [],
});

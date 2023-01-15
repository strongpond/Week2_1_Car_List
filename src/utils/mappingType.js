const segmentMap = {
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV",
};

export const executeSegment = segmentType => {
  return segmentMap[segmentType];
};

const fuelMap = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드",
};

export const executeFuel = fuelType => {
  return fuelMap[fuelType];
};

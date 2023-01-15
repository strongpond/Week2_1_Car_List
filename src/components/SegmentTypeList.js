import styled from "styled-components";

import SegmentType from "./SegmentType";

const SegmentTypeList = ({ selectedSegment, onClickSegment }) => {
  const segment = ["전체", "대형", "중형", "소형", "SUV"];
  return (
    <SegmentTypeListBox>
      {segment.map(li => {
        return (
          <SegmentType
            key={li}
            name={li}
            selectedSegment={selectedSegment}
            onClickSegment={onClickSegment}
          />
        );
      })}
    </SegmentTypeListBox>
  );
};

export default SegmentTypeList;

const SegmentTypeListBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 390px;
  padding: 7px 0;
  border-bottom: 1px solid black;
`;

import styled from "styled-components";

const SegmentType = ({ name, selectedSegment, onClickSegment }) => {
  return (
    <SegmentTypeItem value={name} isActive={selectedSegment === name} onClick={onClickSegment}>
      {name}
    </SegmentTypeItem>
  );
};

export default SegmentType;

const SegmentTypeItem = styled.button`
  margin-left: 8px;
  padding: 5px 18px;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 700;
  border-radius: 62px;
  border: none;
  background-color: ${({ theme, ...props }) =>
    props.isActive ? theme.colors.skyblue : theme.colors.grey};
  color: ${({ theme, ...props }) => (props.isActive ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
`;

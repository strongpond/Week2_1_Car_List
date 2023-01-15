import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { getCarList } from "../apis";
import { filteredListAtom, segmentAtom } from "../atoms";
import { SegmentTypeList, CarList } from "../components";
import { executeSegment } from "../utils";

const Main = () => {
  const [cars, setCars] = useState([]);
  const [filteredList, setFilteredList] = useRecoilState(filteredListAtom);
  const [selectedSegment, setSelectedSegment] = useRecoilState(segmentAtom);

  const getCars = useCallback(async () => {
    const result = await getCarList();
    setCars(result.data.payload);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  const onClickSegment = e => {
    setSelectedSegment(e.target.value);
    setFilteredList(
      e.target.value === "전체"
        ? cars
        : cars.filter(car => executeSegment(car.attribute.segment) === e.target.value)
    );
  };

  return (
    <Container>
      <Header>전체차량</Header>
      <SegmentTypeList selectedSegment={selectedSegment} onClickSegment={onClickSegment} />
      <CarList cars={selectedSegment === "전체" ? cars : filteredList} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: 755px;
  border: 1px solid black;
`;

const Header = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  justify-content: center;
  width: 390px;
  padding: 20px 0;
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  border-bottom: 1px solid black;
`;

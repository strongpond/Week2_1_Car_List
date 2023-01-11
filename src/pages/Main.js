import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { getCarList } from "../apis";
import { SegmentTypeList, CarList } from "../components";

const Main = () => {
  const [cars, setCars] = useState([]);

  const getCars = useCallback(async () => {
    const result = await getCarList();
    setCars(result.data.payload);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <Container>
      <Header>전체차량</Header>
      <SegmentTypeList cars={cars} />
      <CarList cars={cars} />
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

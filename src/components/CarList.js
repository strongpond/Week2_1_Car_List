import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getCarList } from "../apis";
import CarListItem from "./CarListItem";

const CarList = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  const getCars = useCallback(async () => {
    const result = await getCarList();
    setCars(result.data.payload);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <ListWrapper>
      {cars.map(data => {
        return (
          <CarListItem
            key={data.id}
            brand={data.attribute.brand}
            name={data.attribute.name}
            fuelType={data.attribute.fuelType}
            segment={data.attribute.segment}
            imageUrl={data.attribute.imageUrl}
            amount={data.amount}
          />
        );
      })}
    </ListWrapper>
  );
};

export default CarList;

const ListWrapper = styled.div``;

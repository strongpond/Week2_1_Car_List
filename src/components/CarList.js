import React from "react";
import styled from "styled-components";

import CarListItem from "./CarListItem";

const CarList = ({ cars }) => {
  return (
    <ListWrapper>
      {cars.map(data => {
        const { id, attribute, amount } = data;
        const { brand, name, fuelType, segment, imageUrl } = attribute;

        return (
          <CarListItem
            key={id}
            id={id}
            brand={brand}
            name={name}
            fuelType={fuelType}
            segment={segment}
            imageUrl={imageUrl}
            amount={amount}
          />
        );
      })}
    </ListWrapper>
  );
};

export default CarList;

const ListWrapper = styled.div``;

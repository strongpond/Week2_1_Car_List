import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CarListItem from "./CarListItem";

const CarList = () => {
  return (
    <ListWrapper>
      <CarListItem />
      <CarListItem />
    </ListWrapper>
  );
};

export default CarList;

const ListWrapper = styled.div``;

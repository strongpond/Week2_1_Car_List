import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <div>상세페이지</div>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) => theme.common.flexCenterColumn};
  height: 800px;
  width: 390px;
  border: 1px solid black;
`;

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
  ${({ theme }) => theme.flex("null", "center", "column")};
  height: 100vh;
  margin-top: 5%;
`;

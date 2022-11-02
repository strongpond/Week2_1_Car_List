import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <div>메인페이지</div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  ${({ theme }) => theme.flex("null", "center", "column")};
  height: 100vh;
  margin-top: 5%;
`;

import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <Box>메인페이지</Box>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  height: 100vh;
  margin-top: 5%;
`;

const Box = styled.div`
  color: ${({ theme }) => theme.colors.skyblue};
`;

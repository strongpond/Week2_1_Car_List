import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";
import { CAR_DESC as form } from "../data";
import { ItemDesc } from "../components";

const Detail = () => {
  return (
    <Container>
      <Header>
        <ImArrowLeft2 className="arrow" />
        <Headline>차량상세</Headline>
      </Header>
      <ImageBox>이미지</ImageBox>
      <OverviewBox>
        <ItemBrand>현대</ItemBrand>
        <ItemName>아반떼 CN7</ItemName>
      </OverviewBox>
      <ItemAmount>월 600,000 원</ItemAmount>
      {form.menu.map((e, i) => {
        return (
          <DescBox key={i}>
            <ItemTitle>{e.name}</ItemTitle>
            <ItemDesc lists={e.lists} />
          </DescBox>
        );
      })}
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
  width: 392px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const Header = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  justify-content: center;
  flex-direction: row;
  width: 390px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  .arrow {
    position: absolute;
    left: 5%;
    top: 2.5%;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Headline = styled.h1`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
`;

const ImageBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  justify-content: center;
  height: 205px;
  width: 390px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const OverviewBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  width: 390px;
`;

const ItemBrand = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.detailSubtitle};
  font-weight: 700;
`;

const ItemName = styled.p`
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.detailTitle};
  font-weight: 700;
`;

const ItemAmount = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 14px 20px;
  width: 390px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 400;
`;

const DescBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  padding: 13px 20px;
  height: 48px;
  width: 390px;
  background-color: ${({ theme }) => theme.colors.skyblue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
`;

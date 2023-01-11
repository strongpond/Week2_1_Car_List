import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import dayjs from "dayjs";
import styled from "styled-components";
import { getCarList } from "../apis";
import { ItemDesc } from "../components";

const Detail = () => {
  const [desc, setDesc] = useState([]);
  const navigate = useNavigate();
  let params = useParams();
  const { id } = params;
  const { amount, attribute, insurance, additionalProducts, startDate } = desc;
  const { brand, fuelType, imageUrl, name, segment } = attribute || {};

  const segmentMap = {
    C: "소형",
    D: "중형",
    E: "대형",
    SUV: "SUV",
  };

  const executeSegment = segmentType => {
    return segmentMap[segmentType];
  };

  const fuelMap = {
    gasoline: "가솔린",
    ev: "전기",
    hybrid: "하이브리드",
  };

  const executeFuel = fuelType => {
    return fuelMap[fuelType];
  };

  const date = dayjs(startDate, "YYYY-MM-DD HH:mm:ss");
  const getDesc = useCallback(async () => {
    const result = await getCarList();
    setDesc(result.data.payload.filter(e => e.id === Number(id))[0]);
  }, [id]);

  useEffect(() => {
    getDesc();
  }, [getDesc]);

  const goBackToCarList = async () => {
    navigate("/");
  };

  const carDesc = [
    {
      name: "차량 정보",
      lists: [
        { name: "차종", description: executeSegment(segment) },
        { name: "연료", description: executeFuel(fuelType) },
        { name: "이용 가능일", description: date.format("YY년 MM월 DD일") },
      ],
    },
    { name: "보험", lists: insurance },
    { name: "추가상품", lists: additionalProducts },
  ];

  return (
    <Container>
      <Header>
        <ImArrowLeft2 className="arrow" onClick={goBackToCarList} />
        <Headline>차량상세</Headline>
      </Header>
      <ImageBox src={imageUrl} />
      <OverviewBox>
        <ItemBrand>{brand}</ItemBrand>
        <ItemName>{name}</ItemName>
      </OverviewBox>
      <ItemAmount>월 {amount} 원</ItemAmount>
      {carDesc.map((e, i) => {
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

    &:hover {
      cursor: pointer;
    }
  }
`;

const Headline = styled.h1`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
`;

const ImageBox = styled.img`
  ${({ theme }) => theme.common.flexCenter};
  height: 205px;
  width: 390px;
  object-fit: cover;
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

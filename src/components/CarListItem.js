import react from "react";
import styled from "styled-components";

const CarListItem = () => {
  return (
    <ItemWrapper>
      <DescBox>
        <ItemTitleBox>
          <ItemBrand>기아</ItemBrand>
          <ItemName>EV6</ItemName>
        </ItemTitleBox>
        <ItemDescBox>
          <ItemType>중형 / 전기</ItemType>
          <ItemAmount>월 600,000 원 부터</ItemAmount>
        </ItemDescBox>
      </DescBox>
      <ImageBox>이미지</ImageBox>
    </ItemWrapper>
  );
};

export default CarListItem;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 390px;
  padding: 25px 20px;
  border-bottom: 1px solid black;
`;

const DescBox = styled.div``;

const ItemTitleBox = styled.div``;

const ItemBrand = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 700;
`;

const ItemName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 700;
`;

const ItemDescBox = styled.div`
  padding-top: 8px;
`;

const ItemType = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
`;

const ItemAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
`;

const ImageBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  padding: 20px;
  height: 80px;
  width: 152px;
  border: 1px solid black;
`;

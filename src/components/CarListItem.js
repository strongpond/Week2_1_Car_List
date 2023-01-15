import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { executeSegment, executeFuel } from "../utils";

const CarListItem = ({ id, brand, name, fuelType, segment, imageUrl, amount }) => {
  const navigate = useNavigate();

  const goToDetail = selectId => {
    navigate(`/detail/${selectId}`);
  };

  return (
    <ItemWrapper key={id} onClick={() => goToDetail(id)}>
      <DescBox>
        <ItemTitleBox>
          <ItemBrand>{brand}</ItemBrand>
          <ItemName>{name}</ItemName>
        </ItemTitleBox>
        <ItemDescBox>
          <ItemType>
            {executeSegment(segment)} / {executeFuel(fuelType)}
          </ItemType>
          <ItemAmount>월 {amount} 원 부터</ItemAmount>
        </ItemDescBox>
      </DescBox>
      <ImageBox src={imageUrl} alt={name} />
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

  &:hover {
    cursor: pointer;
  }
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

const ImageBox = styled.img`
  ${({ theme }) => theme.common.flexCenter};
  padding: 20px;
  height: 80px;
  width: 152px;
  object-fit: cover;
  border: 1px solid black;
`;

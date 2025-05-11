import styled from 'styled-components';

import bed from "../../assets/icons/bed.svg?react";
import bath from "../../assets/icons/bath.svg?react";
import garage from "../../assets/icons/car.svg?react";
import ruler from "../../assets/icons/ruler.svg?react";
import love from "../../assets/icons/love.svg?react";
import resize from "../../assets/icons/resize.svg?react";

const Container = styled.div`
  width: 380px;
  max-height: 430px;
  background-color: rebeccapurple;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

  margin: 100px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

const Info = styled.div`
  text-decoration: line-through;
  text-decoration-color: #000;
  margin-bottom: 5px;
`;

export { Container, Img, Content, Details, Icons, Divider, Info };

// https://github.com/mukhtorov/houzing/tree/house-card/src/components/HouseCard
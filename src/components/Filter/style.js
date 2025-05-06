import styled from 'styled-components';
import houses from '../../assets/icons/houses.svg?react';
import filter from '../../assets/icons/setting.svg?react';
import search from '../../assets/icons/search.svg?react';

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;

Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

Icons.Filter = styled(filter)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section };

// dropdawnga oid xatoni shu yerdan to'girladim
// https://github.com/DavDevPro/houzing/blob/filter/src/components/Filter/index.jsx

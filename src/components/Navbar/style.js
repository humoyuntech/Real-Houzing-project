import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import logoImg from "../../assets/icons/logo.svg?react"

const Container =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 10px solid #ffff; */
    
    background: var(--colorPrimary);
    color: #ffff;
    padding: var(--padding);
    height: 64px;

    font-size: 16px;
    max-width: 1440px;
  `;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};

  .active {
    color: #b8ff06;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
`;


export {Container, Wrapper, Section, Logo, Link};
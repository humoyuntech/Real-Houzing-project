import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {navbar} from "../../utils/navbar"
import {  Container, Link, Logo, Main, Menu, Section, Wrapper } from './style';

export function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
      <Wrapper>
        <Section onClick={() => navigate('/home')} logo> <Logo/> <h3>Houzing</h3> </Section>
        <Section>
            {navbar.map(({ title, path }, index) => {
              return <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
            })}
        </Section>
        <Section><button>Sing in</button></Section>
      </Wrapper>
      <Outlet />
      </Main>
    </Container>
  )
}

export default Navbar
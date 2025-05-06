import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {navbar} from "../../utils/navbar"
import {  Container, Link, Logo, Main, Menu, Section, Wrapper } from './style';
import {Button} from '../Generic';
import Filter from '../Filter';

export function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
      <Wrapper>
        <Section onClick={() => navigate('/home')} logo> <Logo/> <h3>Houzing</h3> </Section>
        <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return !hidden && (<Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>)
            })}
        </Section>
        <Section>
          <Button onClick={()=> navigate('/signin')} type="dark">Sing Up</Button>
        </Section>
      </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  )
}

export default Navbar

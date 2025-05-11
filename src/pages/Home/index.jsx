import React from 'react'
import {Container} from './style'
import {Button, Input} from '../../components/Generic/';
import Carousel from '../../components/Carousel';
import HouseCard from '../../components/HouseCard';

function Home() {
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  )
}

export default Home
import React from 'react'
import {Container, Image } from './style'
// import Input from '../../components/Generic/Input'
import {Button, Input} from '../../components/Generic/';

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"Say Hi"} width={200} />
      <br/>
      <Button onClick={() => alert("hello")}>Click me</Button>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, distinctio ea? Corrupti, numquam illum? Neque, consequuntur quisquam deserunt minus voluptate maiores quaerat, eum nisi placeat harum est sapiente quae voluptatem?
      </p>
        <Image src="https://a.mktgcdn.com/p/UFfj4tJHJVHsN88wySa8fg0YDL7lW5zvi-1gfXmKRuE/2912x1942.jpg"/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, distinctio ea? Corrupti, numquam illum? Neque, consequuntur quisquam deserunt minus voluptate maiores quaerat, eum nisi placeat harum est sapiente quae voluptatem?
      </p>
    </Container>
  )
}

export default Home
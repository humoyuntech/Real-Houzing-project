import React, { useEffect, useState } from 'react'
import {Container} from './style'
import { mockData } from "../../mock/mock";

function Properties() {
  const [data, setData] = useState(mockData);

  // const url = import.meta.env.VITE_BASE_URL;
  // console.log("url:", url);
  
  // useEffect(()=>{
  //   fetch(`${url}/houses`)
  //     .then((res)=> res.json())
  //     .then((res) => {
  //       console.log(typeof res);
  //     })
  // }, [])
  
  return (
         <Container>
          test
          </Container>
  )
}

export default Properties
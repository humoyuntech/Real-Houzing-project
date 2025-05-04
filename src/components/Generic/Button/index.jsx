import React from "react";
import { Container } from "./style";
 

export function Button({ children, type, onClick, width, height }) {
    return (
      <Container onClick={onClick} type={type} width={width} height={height}>
        {children || "Generec Butten" }
      </Container>
    )
}
  
  export default Button
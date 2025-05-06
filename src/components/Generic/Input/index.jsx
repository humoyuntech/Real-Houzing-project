import React from 'react';
import { Container, Wrapper, Icon } from './style';

export const Input = ({
  type,
  onChange,
  value,
  defalutValue,
  placeholder,
  name,
  width,
  height,
  icon,
}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        icon={icon}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defalutValue}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
        />
      </Wrapper>
  );
};

export default Input;  
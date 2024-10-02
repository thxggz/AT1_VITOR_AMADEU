import React from "react";
import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: flex;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  margin-top: 100px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: black;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }
`;

const ToggleSwitch = ({ toggleTheme }) => {
  return (
    <Switch>
      <input type="checkbox" onChange={toggleTheme} />
      <Slider />
    </Switch>
  );
};

export default ToggleSwitch;

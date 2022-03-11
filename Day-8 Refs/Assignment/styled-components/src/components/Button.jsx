import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  outline: ${({ info }) => info.outline};
  outline-color: hsl(0, 0%, 73%);
  outline-width: thin;
  border: 0.1px;
  border-radius: 15px;
  box-shadow: none;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  color: ${({ info }) => info.color};
  border-color: ${({ info }) => info.color};
  border-radius: 5px;
  background-color: ${({ info }) => info.backgroundColor};

  &:hover {
    color: ${({ info }) => info.hoverColor};
    background-color: ${({ info }) => info.hoverBackgroundColor};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Button;

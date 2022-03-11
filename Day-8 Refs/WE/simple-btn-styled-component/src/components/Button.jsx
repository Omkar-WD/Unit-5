import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  color: red;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

// function Button({ children, onClick }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

export { Button };

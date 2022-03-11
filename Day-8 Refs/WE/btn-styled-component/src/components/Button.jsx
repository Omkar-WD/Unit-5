import styled from "styled-components";

// Create a button element using styled-components library

export const Button = styled.button`
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: ${({ theme }) => (theme == "Dark" ? "#D82148" : "#DADBBD")};
  background-color: ${({ theme }) => (theme == "Dark" ? "#151D3B" : "#6EBF8B")};
  &:hover {
    color: ${({ theme }) => (theme == "Dark" ? "green" : "yellow")};
    background-color: ${({ theme }) =>
      theme == "Dark" ? "#6EBF8B" : "#151D3B"};
  }
`;

// export function ChildrenProp({ children, onClick }) {
//   return (
//     <button onClick={onClick} className="aC">
//       {children}
//     </button>
//   );
// }

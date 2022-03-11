import styled from "styled-components";
const ChildrenProp = styled.button`
  padding: 10px;
  color: ${({ theme }) => (theme == "Dark" ? "blue" : "red")};
  background-color:${({ theme }) => (theme == "Dark" ? "red" : "blue")}
  &:hover {
    color: ${({ theme }) => (theme == "Dark" ? "red" : "blue")};
      background-color:${({ theme }) => (theme == "Dark" ? "blue" : "red")}
  }
`;
// function ChildrenProp({ children, onClick }) {
//   return (
//     <button onClick={onClick} className="aC">
//       {children}
//     </button>
//   );
// }

export { ChildrenProp };

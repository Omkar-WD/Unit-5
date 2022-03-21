import { Link } from "react-router-dom";
import { AllRoutes } from "./AllRoutes";

const links = [
  { to: "/", title: "Home" },
  { to: "/products", title: "Products" },
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
      <AllRoutes />
    </>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavContainer>
      <Link to={"/"}>CINEFLEX</Link>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;

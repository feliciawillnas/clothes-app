import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1></h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/additem" style={linkStyle}>
              add item
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  color: red;
  background-color: blue;
  width: 100%;
`;

// LINK STYLES
const linkStyle: ReactRouterCSS = (props) => ({
  display: "block",
  borderRadius: "0.3rem",
  padding: "0.3rem 0.5rem",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "0.8rem",
  background: props.isActive ? "lightgrey" : "inherit",
});

interface ReactRouterLinkProps {
  isActive: boolean;
  isPending: boolean;
}
type ReactRouterCSS = (props: ReactRouterLinkProps) => CSSProperties;

export default Header;

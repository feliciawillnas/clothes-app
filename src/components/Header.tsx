import { CSSProperties } from "react";
import { FiPlus, FiStar } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <li></li>
        <StyledHomeLink>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </StyledHomeLink>
        <StyledAddLink>
          <li>
            <NavLink to="/wishlist">
              <FiStar />
            </NavLink>
          </li>
          <li>
            <NavLink to="/additem">
              <FiPlus />
            </NavLink>
          </li>
        </StyledAddLink>
      </StyledWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  color: red;
  width: 100%;
  height: 200px;
`;

const StyledWrapper = styled.div`
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  align-items: center;
`;

const StyledHomeLink = styled.div`
  font-size: 19px;
`;

const StyledAddLink = styled.div`
  font-size: 30px;
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

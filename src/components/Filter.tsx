import styled from "styled-components";

export function Filter() {
  return (
    <StyledWrapper>
      <StyledLogo></StyledLogo>
      <StyledAllLinks>
        <ul>
          <li>tops</li>
          <li>bottoms</li>
        </ul>
        <ul>
          <li>skirts</li>
          <li>shoes</li>
        </ul>
        <ul>
          <li>accessories</li>
          <li>housewares</li>
        </ul>
      </StyledAllLinks>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const StyledLogo = styled.div`
  color: red;
`;

const StyledAllLinks = styled.div`
  display: flex;
`;

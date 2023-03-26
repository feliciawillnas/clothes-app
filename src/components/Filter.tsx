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
          <li></li>
        </ul>
        <ul>
          <li>hej</li>
          <li>hej</li>
        </ul>
      </StyledAllLinks>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #fff8ea;
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const StyledLogo = styled.div`
  background-color: #fff8ea;
  color: red;
`;

const StyledAllLinks = styled.div`
  display: flex;
`;

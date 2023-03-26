import styled from "styled-components";

export type CardProps = {
  image: string;
  title: string;
  description: string;
};

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <StyledCardWrapper>
      <StyledCardImage src={image} alt={title} />
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDesc>{description}</StyledCardDesc>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  background-color: #fff8ea;
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const StyledCardImage = styled.img`
  background-color: #fff8ea;
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const StyledCardTitle = styled.div`
  background-color: #fff8ea;
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const StyledCardDesc = styled.div`
  background-color: #fff8ea;
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

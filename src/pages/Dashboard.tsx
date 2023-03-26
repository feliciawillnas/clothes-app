import styled from "styled-components";
import { Card, CardProps } from "../components/Card";
import { Filter } from "../components/Filter";

const card1: CardProps = {
  title: "",
  image: "",
  description: "",
};

function Dashboard() {
  return (
    <StyledMain>
      <Filter />
      <Card {...card1} />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 80%;
  padding: 2rem;
  height: fit-content;
  margin: auto;
  border: 1px solid black;
`;

export default Dashboard;

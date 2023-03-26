import styled from "styled-components";
import { Card, CardProps } from "../components/Card";
import { Filter } from "../components/Filter";

const card1: CardProps = {
  title: "leather jacket",
  image: "./images/leatherjacket.jpeg",
  description: "",
};

const card2: CardProps = {
  title: "satin skirt with y2k belt",
  image: "src../images/skirtwitbelt.jpeg",
  description: "",
};

const card3: CardProps = {
  title: "chunky heart necklace",
  image: "/images/heartnecklace.jpeg",
  description: "",
};

function WishList() {
  return (
    <StyledMain>
      <h1>wishlist</h1>
      <Filter />
      <Card {...card1} />
      <Card {...card2} />
      <Card {...card3} />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 500px;
  background-color: blue;
  height: fit-content;
  margin: auto;
  border: 1px solid black;
`;

export default WishList;

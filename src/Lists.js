import styled from "styled-components";
import RegularList from "./RegularList";
import NumberedList from "./NumberedList";
import SmallPersonListItem from "./People/SmallPersonListItem";
import LargePersonListItem from "./People/LargePersonListItem";
import SmallProductListItem from "./Products/SmallProductListItem";
import LargeProductListItem from "./Products/LargeProductListItem";

const Div = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  text-decoration: underline;
`;

const people = [
  {
    name: "Tommie Theron",
    age: 31,
    haircolor: "brown",
    hobbies: ["golf", "gym", "reading", "horse riding"],
  },
  {
    name: "Luke Matthew",
    age: 28,
    haircolor: "blond",
    hobbies: ["table tennis", "walking", "swimming", "fishing"],
  },
  {
    name: "Mary Brown",
    age: 29,
    haircolor: "black",
    hobbies: ["reading", "stamp collecting", "running", "walking"],
  },
  {
    name: "Mark Cooper",
    age: 22,
    haircolor: "brown",
    hobbies: ["gym", "fishing", "cycling", "running"],
  },
];

const products = [
  {
    name: "Sandals",
    description: "100% leather Sandals",
    price: 74.99,
    rating: 9.2,
  },
  {
    name: "Running shoes",
    description: "Best ever running shoes",
    price: 210.0,
    rating: 9.3,
  },
  {
    name: "Slippers",
    description: "Comfortable slippers",
    price: 29.55,
    rating: 8.4,
  },
  {
    name: "Fishing shoes",
    description: "Best practical fishing shoes",
    price: 48.95,
    rating: 9.0,
  },
];

function Lists() {
  return (
    <Div>
      <Heading>Small Person List Item</Heading>
      <br />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr />
      <br />
      <Heading>Large Person List Item</Heading>
      <br />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <hr />
      <br />
      <Heading>Small Product List Item</Heading>
      <br />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <hr />
      <br />
      <Heading>Large Product List Item</Heading>
      <br />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </Div>
  );
}

export default Lists;

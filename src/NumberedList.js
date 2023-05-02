import styled from "styled-components";

const Heading3 = styled.h3`
  text-align: center;
  width: 2%;
  height: 5%;
  margin: auto;
  border: 1px solid #000;
  border-radius: 55%;
`;

const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <Heading3>{index + 1}</Heading3>
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;

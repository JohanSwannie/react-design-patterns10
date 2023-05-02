import Hobbies from "./Hobbies";

const LargePersonListItem = ({ person }) => {
  const { name, age, haircolor, hobbies } = person;
  return (
    <>
      <p>Name : {name}</p>
      <p>Age: {age} years</p>
      <p>Haircolor: {haircolor}</p>
      <br />
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <Hobbies key={index} hobby={hobby} />
        ))}
      </ul>
      <br />
    </>
  );
};

export default LargePersonListItem;

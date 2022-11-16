// This example was taken from https://www.w3schools.com/react/react_customhooks.asp

import useFetch from "./useFetch";

function CustomHook() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1>customHook</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default CustomHook;

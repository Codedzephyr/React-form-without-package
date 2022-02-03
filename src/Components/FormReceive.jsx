import React from "react";

const FormReceive = ({data}) => {
  const {name,password} = data;
  // console.log(props.name);

  // const name = props.name;
  console.log(data);

  return (
    <div>
      <p>{name}</p>
      <p>{password}</p>
    </div>
  );
};

export default FormReceive;

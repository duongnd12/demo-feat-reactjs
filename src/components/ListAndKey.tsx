/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";


function ListAndKey (props: any) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  const numbers = [1, 2, 3, 4, 5];

export default ListAndKey;
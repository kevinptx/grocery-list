import React from "react";
import Grocery from "./Grocery";

const List = ({ items, name }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {items.map(item => (
        <List key={item.id} {...item} />
      ))}
    </ul>
  </div>
);

export default List;

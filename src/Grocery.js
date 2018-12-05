import React from "react";

const Grocery = ({ id, name, complete, groceryClick }) => (
  <li
    onClick={() => groceryClick(id)}
    style={
      complete ? { ...styles.grocery, ...styles.complete } : styles.grocery
    }
  >
    {name}
  </li>
);

const styles = {
  grocery: { cursor: "pointer" },
  complete: { color: "grey", textDecoration: "line-through" }
};

export default Grocery;

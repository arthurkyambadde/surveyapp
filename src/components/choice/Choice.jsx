import React from "react";
import CheckBox from "../inputs/CheckBox";
import Radio from "../inputs/Radio";

function Choice({ type, ...props }) {
  console.log("type", type);

  if (type === "multi_select") {
    return <CheckBox {...props} />;
  }

  if (type === "single_select") {
    return <Radio {...props} />;
  }

  return null;
}

export default Choice;

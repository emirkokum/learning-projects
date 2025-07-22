import { useState } from "react";
import NameInput from "./NameInput";
import NameDisplay from "./NameDisplay";

function Parent() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>
      <NameInput name={name} setName={setName} />
      <NameDisplay name={name} />
    </div>
  );
}

export default Parent;

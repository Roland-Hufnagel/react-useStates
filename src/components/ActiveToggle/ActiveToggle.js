import "./ActiveToggle.css";
import { useState } from "react";

function ActiveToggle() {
  const [active, setActive] = useState(false);
  return (
    <main>
      <div className={"box " + (active ? "box--active" : "")}/>
      <button onClick={() => setActive(previousActive => !previousActive)}
      type="button">{active ? "Deactivate" : "Activate"}</button>
    </main>
  );
}

export default ActiveToggle;

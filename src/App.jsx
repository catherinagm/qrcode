import { useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Catherina García</a>.
      </div>
    </>
  );
}

export default App;

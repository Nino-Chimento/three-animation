import { useState } from "react";
import "./App.css";
import { MyScene } from "./components/scene";

function App() {
  const [name, setName] = useState("");
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(true);
  return (
    <div className="App">
      {!isVisibleAnimation && (
        <div className="container-input">
          <input
            placeholder="set you name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setIsVisibleAnimation(true)}>Set name</button>
        </div>
      )}
      {isVisibleAnimation && (
        <>
          <div id="name">{name}</div>
          <MyScene />
        </>
      )}
    </div>
  );
}

export default App;

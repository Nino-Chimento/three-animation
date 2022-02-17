import { useState } from "react";
import "./App.css";
import { MyScene } from "./components/scene";

function App() {
  const [name, setName] = useState("");
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  return (
    <div className="App">
      {!isVisibleAnimation && (
        <div className="container-input">
          <input
            minLength={3}
            maxLength={8}
            placeholder="set you name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            disabled={name.length < 3}
            onClick={() => setIsVisibleAnimation(true)}
          >
            Set name
          </button>
        </div>
      )}
      {isVisibleAnimation && (
        <>
          <MyScene name={name} />
        </>
      )}
    </div>
  );
}

export default App;

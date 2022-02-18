import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { MyScene } from "./components/scene";
import { login } from "./redux/store/user";

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  const handleSubmit = () => {
    dispatch(login(name));
    setIsVisibleAnimation(true);
  };
  return (
    <div className="App">
      {!isVisibleAnimation && (
        <div className="container-input">
          <h1>Ricorda al nostro eroe il suo nome</h1>
          <div className="form-group">
            <input
              className="h-100"
              minLength={3}
              maxLength={8}
              placeholder="set you name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary mt-2"
            disabled={name.length < 3}
            onClick={handleSubmit}
          >
            Set name
          </button>
        </div>
      )}
      {isVisibleAnimation && (
        <>
          <MyScene />
        </>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter App</h1>

        <h2 className="count">{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrease
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="message">
          Message: {message}
        </p>

        {count >= 5 && (
          <h3 className="goal">
            Goal Reached!
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
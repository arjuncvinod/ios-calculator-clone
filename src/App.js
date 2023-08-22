import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
        <form action="">
          <input type="text" />
        </form>
        <div className="keypads">
          <button className="controls">AC</button>
          <button className="controls">C</button>
          <button className="controls">%</button>
          <button className="yellow">÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="yellow">x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="yellow">-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="yellow">+</button>
          <button className="zero">0</button>
          <button>.</button>
          <button className="yellow">=</button>
        </div>
      </div>
    </main>
  );
}

export default App;

import "./App.css";
import { Categories } from "./Components/mockdata";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Web-title">DISTIN-GUI MENU</p>
        {Categories.map((Cat) => (
          <p key={Cat.Order}>{Cat.Name}</p>
        ))}
        {/* <
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </> */}
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Home/>
      </body>
    </div>
  );
}

export default App;

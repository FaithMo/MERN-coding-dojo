import "./App.css";
import Header from "./Components/Header";
import User from "./Components/User";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="rowC">
          <User />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;

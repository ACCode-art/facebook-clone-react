import "./App.css";
import Header from "./components/Header";
import MainLeft from "./components/MainLeft";
import MainMiddle from "./components/MainMiddle";
import MainRight from "./components/MainRight";

function App() {
  return (
    <div className="App">
      <Header />
      <MainLeft />
      <MainMiddle />
      <MainRight />
    </div>
  );
}

export default App;

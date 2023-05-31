import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import portfolio from "./Components/portfolio";
import Aboutme from "./Components/Aboutme";
import myblog from "./Components/myblog";
import reviews from "./Components/reviews";
import contactme from "./Components/contactme";

function App() {
  return <div className="App">
    <Navbar/>
    <Header/>
  </div>;
}

export default App;

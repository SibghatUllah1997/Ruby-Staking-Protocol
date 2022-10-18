import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./screen/MainScreen";
import MintScreen from "./screen/MintScreen";
import BurnScreen from "./screen/BurnScreen";
import Header from "./component/Header";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className="container">
        <Route path="/"  component={MainScreen} exact />
        <Route path="/main" component={MintScreen} />
        <Route path="/burn" component={BurnScreen} />
      </div>
      </Router>
    </>
  );
}

export default App;

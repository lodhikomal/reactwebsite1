import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import Products from "./component/Pages/Products";
import Services from "./component/Pages/Services";
import SignUp from "./component/Pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

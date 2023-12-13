import Register from "./Register";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar />

    <div className="content">

     <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Register">
        <Register/>
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/Profile">
        <Profile />
      </Route>

     </Switch>

    </div>

    </div>
    </Router>
  );
}

export default App;

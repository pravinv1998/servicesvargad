import "./App.css";
import Home from "./Home";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Redirect to={"/"} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto"></div>
          </div>
        </div>
      </section> */
}

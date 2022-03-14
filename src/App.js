import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { SignUp, SignIn, Showcase, Navbar, Widget } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="app">
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route path="/widget/:id" component={Widget} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

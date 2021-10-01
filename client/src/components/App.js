import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import Home from "./Home";
const Login = () => <h2>Login</h2>;
const Instructions = () => <h2>Instructions</h2>;
const Team = () => <h2>Team</h2>;
const PlayerSelector = () => <h2>Player Selector</h2>;
const PlayerPicker = () => <h2>Player Picker</h2>;
const HeadToHead = () => <h2>Head To Head</h2>;
const PlayerSearch = () => <h2>Player Search</h2>;
const Settings = () => <h2>Settings</h2>;

const App = () => (
  <>
    <div>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/player-selector" component={PlayerSelector} />
          <Route exact path="/picker" component={PlayerPicker} />
          <Route exact path="/headtohead" component={HeadToHead} />
          <Route exact path="/search" component={PlayerSearch} />
          <Route exact path="/instructions" component={Instructions} />
          <Route exact path="/settings" component={Settings} />
        </main>
      </BrowserRouter>
    </div>
  </>
);
export default App;

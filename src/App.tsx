import React from "react";
import { LeftNav } from "./menu/leftNav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <LeftNav>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/adjustments" component={Adjustments} />
            <Route path="/efile" component={Efile} />
            <Route path="/reporting" component={Reporting} />
            <Route path="/collections" component={Collections} />
            <Route path="/billing" component={Billing} />
            <Route path="/map" component={Map} />
            <Route path="/settings" component={Settings} />
            <Route path="/reminders" component={Reminders} />
            <Route path="/virtualterminal" component={VirtualTerminal} />
            <Route path="/payments" component={Payments} />
            <Route path="/movein" component={MoveIn} />
            <Route path="/moveout" component={MoveOut} />
            <Route path="/transfer" component={Transfer} />
          </div>
        </LeftNav>
      </Router>
    </div>
  );
};

const Home = () => <h2>Home</h2>;
const Adjustments = () => <h2>Adjustments</h2>;
const Reporting = () => <h2>Reporting</h2>;
const Efile = () => <h2>eFile</h2>;
const Collections = () => <h2>eFile</h2>;
const Billing = () => <h2>Billing</h2>;
const Map = () => <h2>Map</h2>;
const Settings = () => <h2>Settings</h2>;
const Reminders = () => <h2>Reminders</h2>;
const VirtualTerminal = () => <h2>Virtual Terminal</h2>;
const Payments = () => <h2>Payments</h2>;
const MoveIn = () => <h2>MoveIn</h2>;
const MoveOut = () => <h2>MoveOut</h2>;
const Transfer = () => <h2>Transfer</h2>;

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetResult from './Functions/GetResults';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/:id/:pasteName/"
            render={(props) => <GetResult {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

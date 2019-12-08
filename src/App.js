import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import publications from './publications';
import Reader from './components/Reader';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/reader"
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Reader {...props} items={publications} />}
      />
      <Redirect to="/reader" />
    </Switch>
  </BrowserRouter>
);

export default App;

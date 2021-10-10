import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import mainTheme from 'theme/mainTheme';

import Home from 'views/Home';

const App = (): JSX.Element => (
  <Router>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;

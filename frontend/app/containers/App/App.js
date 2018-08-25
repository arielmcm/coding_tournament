import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../DashboardPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import EnsuredLogin from '../../components/EnsuredLogin';
import injectSheet from 'react-jss';

const styles = {
  wrapper: {
    height: '100vh',
  },
};

class App extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div>
        <Switch>
          <Route>
            <EnsuredLogin location={this.props.location}>
              <main className={classes.wrapper}>
                <Switch>
                  <Route path="/" component={Dashboard} />
                  <Route component={NotFoundPage} />
                </Switch>
              </main>
            </EnsuredLogin>
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default injectSheet(styles)(App);

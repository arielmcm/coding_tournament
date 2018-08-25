import React from 'react';
import injectSheet from 'react-jss';
import AppSidebar from '../../containers/Sidebar';
import Map from '../../containers/Map';
import { Segment, Sidebar } from 'semantic-ui-react'

const styles = {
  mainContent: {
    border: 'none !important',
    borderRadius: '0 !important',
  },
};

class DashboardPage extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <Sidebar.Pushable as={Segment} className={classes.mainContent}>
        <AppSidebar />

        <Sidebar.Pusher>
          <Map />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default injectSheet(styles)(DashboardPage);

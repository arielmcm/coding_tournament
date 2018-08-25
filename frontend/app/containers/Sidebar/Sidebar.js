import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Sidebar, Button } from 'semantic-ui-react'
import injectSheet from 'react-jss';
import { setCreatingNewEventValue } from '../App/actions';
import { makeSelectCreatingEventState } from '../App/selectors';
import NewEventForm from '../NewEvent';
import { createStructuredSelector } from "reselect";

const styles = {
  createEventButton: {
    boxShadow: '0 0 5px #333 !important',
    position: 'absolute',
    top: 10,
    left: 360,
    zIndex: 5
  }
};

class AppSidebar extends Component {

  toggleEventCreationState = () => {
    this.props.setCreatingNewEventValue(true);
  };

  renderEventCreationSteps = () => {
    if (this.props.isCreatingNewEvent) {
      return <NewEventForm />
    }
    return null;
  };

  render () {
    const { classes } = this.props;

    return (
      <Fragment>
        <Sidebar
          className={classes.sidebar}
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible
          width="wide"
        >
          {this.renderEventCreationSteps()}
        </Sidebar>
        <Button
          className={classes.createEventButton}
          onClick={this.toggleEventCreationState}
          circular
          color='google plus'
          icon='plus'
          size="huge"
        />
      </Fragment>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCreatingNewEvent: makeSelectCreatingEventState(),
});

function mapActionsToProps () {
  return {
    setCreatingNewEventValue,
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps()
)(injectSheet(styles)(AppSidebar));


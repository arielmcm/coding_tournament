import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment, Dimmer, Dropdown } from 'semantic-ui-react'
import injectSheet from 'react-jss';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { fetchCategories, submitEvent } from './actions';
import { setCreatingNewEventValue } from '../App/actions';
import { makeSelectSelectedGeoPoint } from '../Map/selectors';
import { makeSelectEventCategories } from './selectors';
import { createStructuredSelector } from 'reselect';
import { capitalize } from 'lodash';
import { toJS } from 'immutable';

const styles = {
  newEventWrapper: {
    padding: 15,
    textAlign: 'left'
  },
  newEventForm: {
  },
  dimmedMessage: {
    color: 'black !important',
  },
  datePicker: {
    width: '100% !important'
  }
};

class NewEventForm extends Component {
  state = {};

  componentDidMount () {
    this.props.fetchCategories();
  }

  submitNewEvent = () => {
    this.props.submitEvent({
      ...this.state,
      location: this.props.selectedGeoPoint,
    });
  };

  updateTitle = (data) => {
    this.setState({
      title: data.target.value,
    });
  };

  updateDescription = (data) => {
    this.setState({
      description: data.target.value,
    });
  };

  updateCategory = (event, data) => {
    this.setState({
      category: data.value,
    });
  };

  updateTime = (time) => {
    console.log(time);

  };

  updateDate = (date) => {
    console.log(date);
    this.setState({
      date,
    });
  };

  renderCategories = () => {
    return this.props.eventCategories.map(cat => {
      return <Dropdown.Item onClick={this.updateCategory} key={cat.key} text={cat.text} value={cat.value} />
    });
  };

  render () {
    const { classes, selectedGeoPoint } = this.props;
    const hasSelectedGeoPoint = !Boolean(selectedGeoPoint.lat);

    return (
      <div className={classes.newEventWrapper}>

        <Dimmer.Dimmable as={Segment} blurring dimmed={hasSelectedGeoPoint}>
          <h2>New event</h2>
          <Form className={classes.newEventForm}>
            <Form.Field>
              <label>Category</label>
              <Dropdown text={capitalize(this.state.category)} fluid selection>
                <Dropdown.Menu>
                  {this.renderCategories()}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input value={this.state.title || ''} placeholder='Title' onChange={this.updateTitle} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <textarea value={this.state.description || ''} placeholder='Description' onChange={this.updateDescription}  />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <DatePicker
                className={classes.datePicker}
                selected={this.state.date}
                onChange={this.updateDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
              />
            </Form.Field>
            <Button type='submit' onClick={this.submitNewEvent}>Submit</Button>
          </Form>

          <Dimmer inverted active={hasSelectedGeoPoint}>
            <span className={classes.dimmedMessage}>
              Pick a point on the map to proceed :)
            </span>
          </Dimmer>
        </Dimmer.Dimmable>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  eventCategories: makeSelectEventCategories(),
  selectedGeoPoint: makeSelectSelectedGeoPoint(),
});

function mapActionsToProps () {
  return {
    setCreatingNewEventValue,
    fetchCategories,
    submitEvent,
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps(),
)(injectSheet(styles)(NewEventForm));


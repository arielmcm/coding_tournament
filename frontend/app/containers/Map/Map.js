import React, {Component} from "react";
import { compose, withProps } from "recompose";
import {setCurrentCenter, setSelectedGeoPoint, fetchEvents} from './actions';
import {makeSelectCurrentCenter, makeSelectEvents} from './selectors';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { ReactMapboxGlCluster } from "react-mapbox-gl-cluster";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoid29vcDc3IiwiYSI6ImNqbDlzOWt2dzBnM3ozcW54enQ2cTM0dWUifQ.I_xm7wer3WAw-AGSwm3Cdg"
});

class MyFancyComponent extends Component {
  state = {
    isMarkerShown: false,
    data: {
      "type": "FeatureCollection",
      "features": [],
    },
  };

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position.coords));
    });
  };

  onMapClick = (map, event) => {
    this.props.setSelectedGeoPoint(event.lngLat);
  };

  async componentDidMount() {
    if (navigator.geolocation) {
      const coordinates = await this.getCurrentPosition();
      console.log(coordinates.latitude);
      this.props.setCurrentCenter({latitude: coordinates.latitude, longitude: coordinates.longitude});
    }
    this.props.fetchEvents();
  }

  getEventHandlers() {
    return {
      onClick: (properties, coords, offset) =>
        this.renderPopup(properties, coords, offset),
      onMouseEnter: (properties, coords, offset) =>
        console.log(
          `Receive event onMouseEnter at properties: ${properties}, coords: ${coords}, offset: ${offset}`
        ),
      onMouseLeave: (properties, coords, offset) =>
        console.log(
          `Receive event onMouseLeave at properties: ${properties}, coords: ${coords}, offset: ${offset}`
        ),
      onClusterClick: (properties, coords, offset) =>
        console.log(
          `Receive event onClusterClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`
        )
    };
  }

  static getDerivedStateFromProps (props, state) {
    if (props.events && props.events.length) {
      const data = {
        "type": "FeatureCollection",
        "features": []
      };

      props.events.forEach(event => {
        data.features.push({
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              event.location.lng,
              event.location.lat,
            ]
          }
        });
      });

      return {
        ...state,
        data,
      };
    }

    return {
      ...state,
    };
  }

  render() {
    const { currentCenter } = this.props;

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        center={[currentCenter.lng || 0, currentCenter.lat || 0]}
        zoom={[14]}
        onClick={this.onMapClick}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <ReactMapboxGlCluster data={this.state.data} {...this.getEventHandlers()} />
      </Map>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentCenter: makeSelectCurrentCenter(),
  events: makeSelectEvents(),
});

function mapActionsToProps () {
  return {
    setCurrentCenter,
    setSelectedGeoPoint,
    fetchEvents,
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps()
)(MyFancyComponent);


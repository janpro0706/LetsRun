/**
 * Created by janpr on 2016-12-18.
 */

import React, { Component } from 'react';
import { Spinner } from 'react-mdl';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';

const isNear = function(src, dest) {
    if ((src.lat - dest.lat) ** 2 + (src.lng - dest.lng) ** 2 <= 0.00000001) return true;
    return false;
}

const calcDistance = function calcDistance(coord1, coord2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = coord2.lat * Math.PI / 180 - coord1.lat * Math.PI / 180;
    var dLon = coord2.lng * Math.PI / 180 - coord1.lng * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
}

class ResultTrack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            directions: null,
            hud: {
                speed: 0,
                distance: 0,
                time: 0
            }
        };
    }

    componentDidMount() {
        const google = global.google;
        const DirectionsService = new google.maps.DirectionsService();

        // get track direction
        const origin = this.props.trackCoord[0];
        const dest = this.props.trackCoord[1];

        DirectionsService.route({
            origin: origin,
            destination: dest,
            travelMode: google.maps.TravelMode.TRANSIT,
        }, (res, status) => {
            console.dir(res);
            this.setState({
                directions: res
            });
        });
    }

    render() {
        if (!this.state.directions) {
            return <Spinner />;
        }

        return (
            <section style={{ borderRadius: '50%' }}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            {...this.props.containerElementProps}
                            style={{ width: '300px', height: '300px', margin: '0 auto', borderRadius: '50%' }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            options={{
                                draggable: false,
                                disableDefaultUI: true,
                                disableDoubleClickZoom: true
                            }}
                            ref={(map) => {}}
                            defaultZoom={this.props.zoom || 17}
                            defaultCenter={this.props.center || { lat: -25, lng: 10 }}
                        >
                            {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}

module.exports = ResultTrack;
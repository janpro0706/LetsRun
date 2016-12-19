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

class RaceTrack extends Component {
    flag = false

    constructor(props) {
        super(props);

        this.state = {
            coord: null,
            directions: null,
            startTime: new Date().getTime(),
            hud: {
                speed: 0,
                distance: 0,
                time: 0
            }
        };
    }

    testRace() {
        if (!this.state.coord) return;

        let destIdx = 0;
        const fps = 1;

        const originCoord = { lat: this.state.coord.lat, lng: this.state.coord.lng };
        let prevCoord = { lat: originCoord.lat, lng: originCoord.lng };
        const interval = setInterval(() => {
            const trackCoord = this.props.trackCoord;
            if (destIdx == trackCoord.length) {
                clearInterval(interval);
                this.props.onDestReached();
                return;
            }
            else if (!isNear(this.state.coord, trackCoord[destIdx])) {
                let { lat, lng } = this.state.coord;
                lat += (trackCoord[destIdx].lat - originCoord.lat) / 5 * fps;
                lng += (trackCoord[destIdx].lng - originCoord.lng) / 5 * fps;

                const moved = calcDistance(prevCoord, { lat, lng });
                const distance = this.state.hud.distance + moved;
                const speed = moved * fps;
                const time = (new Date().getTime() - this.state.startTime) / 1000;

                this.setState({
                    coord: { lat, lng },
                    hud: { distance, speed, time }
                });
                this.props.onPlayerChanged(this.state.hud);

                prevCoord = { lat, lng };
            } else {
                destIdx++;
            }
        }, 1000 / fps);
    }

    componentDidMount() {
        // get current position
        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({
                coord: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }
            });
            console.dir(this.state.coord);
        }, (err) => {
            console.dir(err);
        });

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
        if (!this.state.coord && ! this.state.directions) {
            return <Spinner />;
        }

        if (!this.flag) {
            this.flag = true
            this.testRace();
        }

        let currentPos = {
            key: '$' + this.state.coord.lat + this.state.coord.lng,
            position: this.state.coord
        };

        let playerMarker = <Marker {...currentPos} />

        const center = this.props.trackCoord.reduce((ctr, crd, idx) => {
            return {
                lat: (ctr.lat * idx + crd.lat) / (idx + 1),
                lng: (ctr.lng * idx + crd.lng) / (idx + 1)
            };
        });

        return (
            <section style={{ borderRadius: '50%' }}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            {...this.props.containerElementProps}
                            style={{ width: '200px', height: '200px', margin: '0 auto', borderRadius: '50%' }}
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
                            {playerMarker}
                            {this.state.directions && <DirectionsRenderer options={{ draggable: true }} directions={this.state.directions} />}
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}

module.exports = RaceTrack;
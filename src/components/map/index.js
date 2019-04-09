import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../App.css';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    static defaultProps = {
        center: {
            lat: 55.20,
            lng: 24.10
        },
        zoom: 8
    };
    render() {
        return (
            <div style={{ height: '180px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDXE7jkTghc56LrVXpz2vZlXxGncts95VA" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={54.881586}
                        lng={24.023245}
                        text="#1"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
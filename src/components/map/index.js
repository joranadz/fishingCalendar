import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
            // Important! Always set the container height explicitly
            <div style={{ height: '150px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: " " }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={55.2027849}
                        lng={24.1099317}
                        text="!"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
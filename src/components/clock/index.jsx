import React from 'react';
import Clock from 'react-live-clock';

class CurentTime extends React.Component {
    render() {
        return (
           <Clock format={'HH:mm:ss'} ticking={true} timezone={'local'}/>
        )
    }
}
export default CurentTime;

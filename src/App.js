import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CurentTime from './components/clock'
import 'bootstrap/dist/css/bootstrap.css';

const dateNow = () => {
    const date = new Date();
    return date.toLocaleDateString();
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Žvejybos dienoraštis
                    </p></header>
                <main>
                    <div className="card" style={{width: 250}}>
                        <div className="card-body">
                            <input type="date" className="card-title"/>
                            <input type="text" value="Įrašykite kur žvejojote"/>
                            <p className="card-text">Gaudžiau su plūdine ant batono.</p>
                            <h4>Pagauta</h4>
                            <input type="select"/>
                            <input type="number"/>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="btn btn-dark dateTime">{dateNow()}<CurentTime/></div>
                </footer>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurentTime from './components/clock';
import MainBar from './components/main/';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Žvejybos dienoraštis
                        </p></header>

                    <MainBar/>
                    <footer>
                        <div className="btn btn-dark dateTime"><CurentTime/></div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}

export default App;

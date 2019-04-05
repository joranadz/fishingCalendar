import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurentTime from './components/clock';
import MainBar from './components/main/';


class App extends Component <IAppProps, IAppState>{
    constructor(props: IAppProps) {
        super(props);

        this.state = { fishingCalendar: [] };
    }

    async componentWillMount() {
        let r = await fetch('/api/fishingCalendar');
        let fishingCalendar =await r.json();
        this.setState({ fishingCalendar })
    }
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
                    <ul>
                        {this.state.fishingCalendar.map(fishingCalendar=>{
                            return <li>{fishingCalendar.kur}</li>
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
interface IAppProps {

}

interface IAppState {
    fishingCalendar: Array <{kur: string}>;
}
export default App;

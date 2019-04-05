import React, {Component} from 'react';
import SimpleMap from "../../components/map";
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

class MainBar extends Component {

    constructor(props){
        super(props)
        this.state={
            data:'',
            kur:'',
            koki:'',
            ka:'',
            kiek:''
        }
    }
    formSubmit=(event)=>{
        event.preventDefault()
    }
    formChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        const{data}=this.state
        const{kur}=this.state
        const{koki}=this.state
        const{ka}=this.state
        const{kiek}=this.state
        return (
            <React.Fragment>
                <main>
                    <SimpleMap/>
                    <h4>Žvejybų duomenys lentelėje</h4>
                    <div>
                        <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Data</th>
                                <th scope="col">Vieta</th>
                                <th scope="col">Įranga/tipas/masalas</th>
                                <th scope="col">Rusis</th>
                                <th scope="col">Kiekis</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{data}</td>
                                <td>{kur}</td>
                                <td>{koki}</td>
                                <td>{ka}</td>
                                <td>{kiek}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="card" style={{width: 350}}>
                        <form onSubmit={this.formSubmit} className="form-group">
                            <p>Kada žvejojote</p><input type="date" name={'data'} onChange={this.formChange} className="card-title m-0 p-0"/>
                            <p>Kur žvejojte</p><input type="text" name={'kur'} onChange={this.formChange}/>
                            <p>Kokį naudojojote masalą</p><input type="text" name={'koki'} onChange={this.formChange}/>
                            <p>Ką pagavote</p><input type="text" name={'ka'} onChange={this.formChange}/>
                            <p>Kiek vientu ar kilogramu</p><input type="number" name={'kiek'} onChange={this.formChange}/>
                            <br/><button className="btn btn-light" >Issaugoti</button>
                        </form>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default MainBar;
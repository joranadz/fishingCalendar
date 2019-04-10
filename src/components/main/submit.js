import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import EnteredItems from "./import";

class SubmitData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      kur: [],
      koki: [],
      ka: [],
      kiek: []
    };
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit(e) {
    let newItem1 = {
      text: this._inputElement1.value,
      key: Date.now()
    };
    let newItem2 = {
      text: this._inputElement2.value,
      key: Date.now()
    };
    let newItem3 = {
      text: this._inputElement3.value,
      key: Date.now()
    };
    let newItem4 = {
      text: this._inputElement4.value,
      key: Date.now()
    };
    let newItem5 = {
      text: this._inputElement5.value,
      key: Date.now()
    };

    this.setState(prevState => {
      return {
        data: prevState.data.concat(newItem1),
        kur: prevState.kur.concat(newItem2),
        koki: prevState.koki.concat(newItem3),
        ka: prevState.ka.concat(newItem4),
        kiek: prevState.kiek.concat(newItem5)
      };
    });

    e.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <main>
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
                  <th scope="row">
                    <li className="list-group-item">#1</li>
                    <li className="list-group-item">#2</li>
                    <li className="list-group-item">#3</li>
                  </th>
                  <td>
                    <li className="list-group-item">2019 04 01</li>
                    <li className="list-group-item">2019 04 07</li>
                    <li className="list-group-item">2019 04 08</li>
                    <EnteredItems entries={this.state.data} />
                  </td>
                  <td>
                    <li className="list-group-item">
                      Kauno marios (pažaislis)
                    </li>
                    <li className="list-group-item">Kauno marios</li>
                    <li className="list-group-item">Neris (Jonava)</li>
                    <EnteredItems entries={this.state.kur} />
                  </td>
                  <td>
                    <li className="list-group-item">Plude/batonas</li>
                    <li className="list-group-item">Plude/batonas</li>
                    <li className="list-group-item">Plude/sliekas</li>
                    <EnteredItems entries={this.state.koki} />
                  </td>
                  <td>
                    <li className="list-group-item">nieko</li>
                    <li className="list-group-item">nieko</li>
                    <li className="list-group-item">šapaliukas, aukšlės</li>
                    <EnteredItems entries={this.state.ka} />
                  </td>
                  <td>
                    <li className="list-group-item">0</li>
                    <li className="list-group-item">0</li>
                    <li className="list-group-item">~10</li>
                    <EnteredItems entries={this.state.kiek} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <form onSubmit={this.formSubmit} className="form-group">
              <p>Kada žvejojote</p>
              <input
                type="text"
                name={"data"}
                ref={a => (this._inputElement1 = a)}
                className="card-title m-0 p-0"
              />
              <p>Kur žvejojte</p>
              <input
                type="text"
                name={"kur"}
                ref={a => (this._inputElement2 = a)}
              />
              <p>Kokį naudojojote masalą</p>
              <input
                type="text"
                name={"koki"}
                ref={a => (this._inputElement3 = a)}
              />
              <p>Ką pagavote</p>
              <input
                type="text"
                name={"ka"}
                ref={a => (this._inputElement4 = a)}
              />
              <p>Kiek vientu ar kilogramu</p>
              <input
                type="number"
                name={"kiek"}
                ref={a => (this._inputElement5 = a)}
              />
              <br />
              <button type="submit" className="btn btn-light">
                Issaugoti
              </button>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default SubmitData;

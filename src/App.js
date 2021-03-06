import React from "react";
import "./style.css";
import Message from "./Message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      surname: "",
      address1: "",
      city: "",
      telephone: ""
    };
  }
  render() {
    return (
      <div className="page">
        <div className="display">
          {this.state.firstname && (
            <Message
              firstname={this.state.firstname}
              surname={this.state.surname}
              email={this.state.email}
            />
          )}
        </div>
        <div className="formGroup">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                onChange={() =>
                  this.setState({ firstname: event.target.value })
                }
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Surname
              </label>
              <input
                type="text"
                class="form-control"
                id="inputSurname"
                onChange={() => this.setState({ surname: event.target.value })}
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                onChange={() => this.setState({ email: event.target.value })}
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Telephone Number
              </label>
              <input type="tel" class="form-control" id="inputTelephone" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;

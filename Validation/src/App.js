import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.targe.name] = event.targe.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.valdate()){
      console.log(this.state);

      let input = {};
      input["phone"] = "";
      this.setState({input:input});

      alert('Demo form is submitted');
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if(!input["phone"]) {
      isValid = false;
      errors.phone("Please enter your phone number");
    }

    if (typeof input["phone"] !== "undefined") {

      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number";
      }
    }

    if (!input["comment"]) {
      isValid =false;
      errors["comment"] = "Please enter your comment";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return(
      <div>
        <h1>React validation for phone number</h1>
        <form onSubmit={this.handleSubmit}>

          <div class = "form-group">
            <label for="phone">Phone :</label>
            <input
              type="text"
              name="number"
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter phone"
              id="email"
            />

            <div className="text-danger">{this.state.errors.phone}</div>
            </div>
            <input type="submit" value="submit" class="btn btn-success"/>
            </form>


      </div>
    )
  }
}

export default App;










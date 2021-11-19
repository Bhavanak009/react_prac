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
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.validate()){
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
      errors["phone"] ="Please enter your phone number";
    }

    if (typeof input["phone"] !== "undefined") {

      var pattern = new RegExp(/^[7-9]\d{9}]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number";
      }

      if (input["phone"].length != 10)
      {
        isValid = false;
        errors["phone"] = "Please enter 10 digit mobile number";
      }
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
              type="number"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form"
              placeholder="Enter phone"
              id="phone"
            />

            <div className="text-danger">{this.state.errors.phone}</div>
            </div>
            <input type="submit" value="submit" />
            </form>


      </div>
    )
  }
}

export default App;










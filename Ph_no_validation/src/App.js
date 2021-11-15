import './App.css';
import React, {useState} from 'react';
import Validation from './validation';

const App = () => {

  const [values, setValues] = useState({
    phoneno: "",

  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (event) => {
    setValues({
     ...values,
    [event.target.phoneno]: event.target.value, 

    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };


    return(
      <div>
      <h1>Form Validation</h1>
      <form className="form-wrapper">
      <label >Mobile no.</label>
      <input 
        type="number"
        name="no"
        placeholder="Enter phone"
        onChange={handleChange} pattern="[1-9]{1}[0-9]{9}" required/>
        {errors.phoneno && <p className="error">{errors.phoneno}</p>}
      <br/>
      <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
    
      </form>
      </div>
    )
  }

  
export default App;

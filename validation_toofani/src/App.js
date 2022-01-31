import logo from './logo.svg';
import './App.css';
import {appendErrors, useForm} from 'react-hook-form'
import classNames from 'classnames';


function App() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => console.log(data);

  const {formState: {errors}} = useForm();

  return (
    <div className="App">
     <form onSubmit={handleSubmit(onSubmit)}>
        <br/>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className={classNames("form-control" , {
              "is-invalid": errors.fullname})}
            id="fullname"
            placeholder="Enter Your Full Name"
            {...register('fullname', {
              required: "this field is required",
              minLength: {
                value: 4,
                message: "Please enter atleast 4 characters"
              }
            })}

            name="fullname"
          />
          {errors.fulname && (
            <div className="invalide-feedback">
              {errors.fulname.message}
            </div>
          )}

        </div> 
        <br />


        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
            {...register('email', {
              required: true,

            })}
            name="email"
          />
        </div>
        <br/>
        <button className="btn" type="submit">Submit</button>
        </form>


    </div>
  );
}

export default App;

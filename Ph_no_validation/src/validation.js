const Validation = (values) => {

    let errors={};

    if(values.phoneno.length < 10){
        errors.phoneno="Please enter 10 digit Mobile Number"
    }

    else if(values.phoneno.length > 10){
        errors.phoneno="Please enter"
    }

    else if(!values.phoneno){
        errors.phoneno="Number is required"
    }




    return errors;
}

export default Validation;
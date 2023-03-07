//we are extending Error class functionalities to our CustomAPIError class
class CustomAPIError extends Error { 
  constructor(message, statusCode) {//when we invoke new instance of class we call constructor with args 
    super(message);  //here we extending Error Class means we are settingup a child class,
                      //we need to call super method which invokes a constructor of a parent class
                      //in our case we pases message value, as a result we will have access to all 
                      //methods and properties of the parent.
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError}
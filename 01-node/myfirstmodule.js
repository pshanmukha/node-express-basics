
  //exporting function which returns current date and time
  const myDateTime = function () {
    return Date();
  };
  module.exports = {myDateTime}

  //exporting the object with the name of 'personObject'
  const person = {
    name:"shanmukha",
  }
  module.exports.personObject = person

  //exporting literal object 
  module.exports.listOfNames = ['john','lincon']

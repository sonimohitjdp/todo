//module.exports -> implicitly
//Function declaration done here is using lambda expression
exports.getDate = function()
{
  //Refer stackoverflow for date form in javascript
  const today = new Date();

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }
  return today.toLocaleDateString("en-IN",options)
    //toLocaleDateString - convert into String
}

//This function is just created to illustrate that multiple functions can be exported
//Just change the name exports.<constant through which the function can be accessed>
exports.getDay = function()
{
  const today = new Date();

  const options = {
    weekday:"long"
  }

  return today.toLocaleDateString("en-IN",options)
}

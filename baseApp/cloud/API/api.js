// Include libraries
// var utils = require("cloud/utils/utils.js");
var _ = require('underscore');

// Export Modules
module.exports = {
  listAccounts: function (request, response) {
    getAccounts(request, response);
  }
  // ,
  // thatfunction: function (request, response) {
  //   getComment(request, response);
  // },
};

function getAccounts(request, response) {
    // write your code here
    // var stuff = utils.callThisFunction(param); // This is the usage of another function in another file
    console.log('yeah log!');

    var query = new Parse.Query('account');
query.count({
  success: function(number) {
console.log(number);
response.success("test yeah!" + number);},
error: function(error) {
// error is an instance of Parse.Error.
}
});

     // or error but do not forget this



}

// function getComment(request, response) {
//     // write your code here
//     response.success("Got Comment"); // or error but do not forget this
// }

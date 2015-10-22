// Include all of the modules
var API = require('cloud/API/api.js');
Parse.Cloud.useMasterKey();

// var module2 = require('cloud/folder1/file2.js');
// var module3 = require('cloud/folder2/file1.js');
// var backgroundjob = require('cloud/backgroundjob/background.js');

// Parse.Cloud.job("startBackgroundJob", backgroundjob.startBackgroundJob);
Parse.Cloud.define("listAccounts", API.listAccounts);
// Parse.Cloud.define("do_this_stuff2", module1.notthisfunction);
// Parse.Cloud.define("do_that_stuff", module2.thatfunction);
// Parse.Cloud.define("do_dat_stuff", module3.datfunction);

//
// // Use Parse.Cloud.define to define as many cloud functions as you want.
// // For example:
// Parse.Cloud.define("hello", function(request, response) {
//   response.success("Hello world!");
// });

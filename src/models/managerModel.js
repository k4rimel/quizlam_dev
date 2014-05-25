

	'use strict';
/*
 * ManagerModel
 */

// a ManagerModel is where the data object is created.
var ManagerModel = function (data) {
	this.quizzes = data;

	// return the ManagerModel instance
	return this;
};
// a ManagerModel constructor might have a function that creates new ManagerModel instances.
ManagerModel.find = function () {
	// data used to create a new ManagerModel may come from anywhere
	// but in this example data comes from this inline object.
	var args = arguments[0];
	var managerData = this.getData(args);


	var manager = new ManagerModel(managerData)
	return manager;
};

ManagerModel.getData = function (args) {
	var outputData = [];
	for (var i = 0; i < args.length; i++) {
		$.ajax({
	  		type: 'GET',
	  		url: 'data/'+args[i]+'.json',
	  		dataType: 'json',
	  		async: false,
	  		success: function(data){
			 	outputData.push(data);
			 	console.log(data);		  	
	  		},
	  		error: function(xhr, type){
	  		}
		});
	};
	
	return outputData;
};
/*
 * View
 */

// a view is where the output is created.
var QuizView = function ( model ) {
	this.model = model;

	return this;
};

// a view might have a function that returns the rendered output.
QuizView.prototype.output = function () {
	// htmlData used to create a template may come from anywhere
	// but in this example template comes from this inline string.
	var htmlData;
	$.ajax({
		url: 'src/views/html/quiz.html',
		type: 'GET',
		dataType: 'html',
		async: false
	})
	.done(function(data) {
		htmlData = data;
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	// store this instance for reference in the replace function below
	var instance = this;

	//TEMPLATING
	console.log(instance.model);
	var data = instance.model;
	var template = htmlData;
	var tempFunc = doT.template(template);
	var html = tempFunc(data);
	return html;
	
	// // return the template using values from the model.
	// return htmlData.replace(/{{\s+(.*?)\s+}}/g, function (str, prop) {
	// 	var data = instance.model[prop];
	// 	console.log(data);
	// 	var output;
	// 	if(data.length > 1 && (data instanceof Object || data instanceof Array)) {
	// 		var tagName = Utils.getTagName(htmlData);
	// 		output = Utils.generateHtmlFromItems(data, tagName);
	// 	} else {
	// 		console.log(data);
	// 		output = data;
	// 	}
	// 	return output;
	// });
};

// a view might have a function that renders the output.
QuizView.prototype.render = function () {
	// this view renders to the element with the id of "output"
	var outputValue = this.output();
	console.log(outputValue);
	document.getElementById('quizContainer').innerHTML = outputValue;
};
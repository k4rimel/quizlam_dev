

	'use strict';
/*
 * QuizModel
 */

// a QuizModel is where the data object is created.
var QuizModel = function (data) {
	this.quizTitle = data.Quiz.title;
	this.questions = data.Quiz.Questions;
	this.currentQuestion = null;
	this.hasEnded = false;

	// return the QuizModel instance
	return this;
};

// a QuizModel constructor might have a function that creates new QuizModel instances.
QuizModel.find = function ( id ) {
	// data used to create a new QuizModel may come from anywhere
	// but in this example data comes from this inline object.
	var quizData = {};
	$.ajax({
		url: 'data/'+id+'.json',
		type: 'GET',
		dataType: 'json',
		async:false
	})
	.done(function(data) {
		quizData = data;
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	var quiz = new QuizModel(quizData);
	return quiz;
};
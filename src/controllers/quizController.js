/*
 * Controller
 */

// a controller is where the model and the view are used together.
var quizController = function () {
	return this;
};

// this function uses the Model and View together.
quizController.prototype.loadQuiz = function ( id ) {
	// get the model.
	var model = QuizModel.find(id);
	// get a new view.
	var view = new QuizView(model);

	// run the view's "render" function
	view.render();
};
quizController.prototype.nextQuestion = function ( id ) {
	
};

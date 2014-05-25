/*
 * Controller
 */

// a controller is where the model and the view are used together.
var QuizManagerController = function () {
	return this;
};

// this function uses the Model and View together.
QuizManagerController.prototype.loadQuizzes = function () {
	// get the model.
	
	var model = ManagerModel.find(arguments);
	// get a new view.
	var view = new QuizManagerView(model);

	// run the view's "render" function
	view.render();
};

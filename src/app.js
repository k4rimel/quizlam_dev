'use strict';
function bootstrapper() {
	var controller = new QuizManagerController();
	controller.loadQuizzes("QuizA", "QuizB");
	var el = document.getElementById('mainContainer');
	
}
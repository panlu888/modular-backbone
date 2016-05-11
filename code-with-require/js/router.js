define([
	'jquery',
	'underscore',
	'backbone',
	'views/firstPage',
	'views/secondPage',
	'views/thirdPage',
	'models/person'
], function($, _, Backbone, FirstPage, SecondPage, ThirdPage, PersonModel) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'first': 'showFirstPage',
			'second': 'showSecondPage',
			'third': 'showThirdPage',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		var personModel = new PersonModel(); 
		app_router.on('route:showFirstPage', function() {
			var firstPage = new FirstPage({ model: personModel });
			firstPage.render();
		});

		app_router.on('route:showSecondPage', function() {
			var secondPage = new SecondPage({ model: personModel });
			secondPage.render();
		});

		app_router.on('route:showThirdPage', function() {
			var thirdPage = new ThirdPage({ model: personModel });
			thirdPage.render();
		});
	
		app_router.on('route:defaultAction', function() {
			var firstPage = new FirstPage({ model: personModel });
			firstPage.render();
		});
	
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
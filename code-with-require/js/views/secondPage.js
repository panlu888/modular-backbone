define([
	'jquery',
	'underscore',
	'backbone',
	'models/person',
	'views/thirdPage',
	'text!templates/secondTemplate.html'
], function($, _, Backbone, PersonModel, ThirdPage, secondTemplate) {
	var secondPage = Backbone.View.extend({
		el: $('#content'),

		events: {
			'click #complete': 'gotoThirdPage'
		},

		render: function() {
    	var compiledTemplate = _.template(secondTemplate);
    	this.$el.html(compiledTemplate);
    },
	
    gotoThirdPage: function() {
    	this.model.set({ addOne: $('#addOne').val(), addTwo: $('#addTwo').val(), city: $('#city').val(), state: $('#state').val(), zipcode: $('#zipcode').val() });
    	window.location = '#/third';
    }
	});

	return secondPage;
});
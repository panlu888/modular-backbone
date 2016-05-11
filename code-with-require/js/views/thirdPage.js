define([
	'jquery',
	'underscore',
	'backbone',
	'models/person',
	'text!templates/thirdTemplate.html'
], function($, _, Backbone, PersonModel, thirdTemplate) {
	var thirdPage = Backbone.View.extend({
		el: $('#content'),
		
		render: function() {
    	var compiledTemplate = _.template(thirdTemplate);
    	this.$el.html(compiledTemplate(this.model.toJSON()));
    }
	});

	return thirdPage;
});
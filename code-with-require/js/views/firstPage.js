define([
	'jquery',
	'underscore',
	'backbone',
	'models/person',
	'views/secondPage',
	'text!templates/firstTemplate.html'
], function($, _, Backbone, PersonModel, SecondPage, firstTemplate) {
	var firstPage = Backbone.View.extend({
		el: $('#content'),

		events: {
      'click #nextpage': 'gotoSecondPage'
    }, 
		
    render: function() {
    	var compiledTemplate = _.template(firstTemplate);
    	this.$el.html(compiledTemplate);
    },
	
		gotoSecondPage: function() {
			this.model.set({ fname: $('#fname').val(), lname: $('#fname').val() });
			window.location.href = '#/second';
		}
	});

	return firstPage;

});
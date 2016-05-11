define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var PersonModel = Backbone.Model.extend({
		defaults: {
      fname: '',
      lname: '',
      addOne: '',
      addTwo: '',
      city: '',
      state: '',
      zipcode: ''      
    }
	});

	return PersonModel;
});
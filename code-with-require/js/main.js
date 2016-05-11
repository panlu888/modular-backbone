requirejs.config({
	paths: {
		jquery: 'node_modules/jquery/dist/jquery.min',
		underscore: 'node_modules/underscore/underscore-min',
		backbone: 'node_modules/backbone/backbone-min',
		text: 'node_modules/text/text',
		templates: '../templates'
	}
});

require(['app'], function(App) {
	App.initialize();
});
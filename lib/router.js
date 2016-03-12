Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//home Route
	this.route('questions', {
		path: '/',
		template: 'questions'
	});
})
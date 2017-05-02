define(function () {
	"use strict";

	return {

		bind: function () {
			this.on('click', 'body', this.onClick);
		},
		onClick: function (e) {
			window.allowAdmin = false;
			setTimeout(function () {
				// async code, would be a call to a server in real life
				require('atom').router.location('/');
			}, 100);
		},

		onInit: function (e, callback) {
			// read settings applied to element
			var settings = require('atom').data(e.target).settings;

			// replace text with navigation info
			e.target.find('strong').text('Not found: ' + settings.path);
			e.target.find('span').text(settings.url);
			callback();

			var develop= ['Caren','Ghiljoe','Valerie'];
			var mylist=""
			for (var i = 0; i < develop.length; i++) {
				mylist= mylist+ develop[i] + " --> ";

			}
			$("#results").text(mylist); 
			alert('test made by ' +develop[0]);
		},
	};
});
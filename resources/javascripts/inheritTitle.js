(function($, Craft) {
	
	window.ft_inheritTitle = function(settings) {
	
		var app = this;
	
		this.settings = settings;
	
		this.init = function() {
			// Hide our field / the title
			$("#fields-"+app.settings.pluginName+"-field,#title-field").hide();
			// Hook into form submit
			$("#entry-form").on("submit.inheritTitle", app.onSubmit);
		};
	
		this.onSubmit = function(e) {
			var form = $(this),
				data = app.dataToObject(form.serializeArray()),
				newTitle = app.parseTitle(data),
				newSlug = Craft.SlugGenerator("").generateTargetValue(Craft.SlugGenerator(newTitle));
		
		
			// Set new title
			$("#title",form).val(newTitle);
		
			// Set slug, if settings want us to
			if(app.settings.populateSlug){
				$("#slug",form).val(newSlug);
			}
		};
	
		this.parseTitle = function(data){
			var template = Handlebars.compile(app.settings.populateWith);
			return template(data);
		};
	
		this.dataToObject = function(data) {
			var o = {};
			$.each(data, function() {
				var key = (/^fields/.test(this.name)) ? this.name.replace(/fields\[(.+)]/, "$1") : this.name,
					val = this.value.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
				if (o[key]) {
					if (!o[key].push) {
						o[key] = [o[key]];
					}
					o[key].push(val || '');
				} else {
					o[key] = val || '';
				}
			});
			return o;
		};
	
		this.init();
	
	};
	
})(jQuery, Craft);
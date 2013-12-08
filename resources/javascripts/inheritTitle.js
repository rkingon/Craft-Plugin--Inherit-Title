$(function() {
	var settings = inheritTitleSettings,
		inheritTitle = {
			init: function() {
				// Hide our field / the title
				$("#fields-inheritTitle-field,#title-field").hide();
				// Hook into form submit
				$("#entry-form").on("submit.inheritTitle", inheritTitle.onSubmit);
			},
			onSubmit: function(e) {
				var form = $(this),
					data = inheritTitle.dataToObject(form.serializeArray()),
					newTitle = inheritTitle.parseTitle(data),
					newSlug = Craft.SlugGenerator("").generateTargetValue(Craft.SlugGenerator(newTitle));
				
				
				// Set new title
				$("#title",form).val(newTitle);
				
				// Set slug, if settings want us to
				if(settings.populateSlug){
					$("#slug",form).val(newSlug);
				}
			},
			parseTitle: function(data){
				var template = Handlebars.compile(settings.populateWith);
				return template(data);
			},
			dataToObject: function(data) {
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
			}
		};
	inheritTitle.init();
});
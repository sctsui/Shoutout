var vm = new Vue({
    el: "#app",
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    
		makeForm();
  	processForm();

		/*generates the form (Enter here text box)*/
		function makeForm ()
		{
  		filters: {
    	prettyJSON: function(json) {
    	if (json) {
         json = JSON.stringify(json, undefined, 4);
         json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
         return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?		|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
              var cls = 'number';
              if (/^"/.test(match)) {
                   if (/:$/.test(match)) {
                        cls = 'key';
                   }else {
                       cls = 'string';
                   }
               } else if (/true|false/.test(match)) {
                    cls = 'boolean';
               } else if (/null/.test(match)) {
                    cls = 'null';
               }
               return '<span class="' + cls + '">' + match + '</span>';
				});
	}}},
}
    
    function processForm()
    {
    	/*User input inside form populated to data variable displayed in model*/
    data: {
        model:{
        		message: "",
        },
        schema: {
            fields: [{
                type: "text",
                label: "Add a Message",
                model: "message",
                readonly: false,
                featured: true,
                required: false,
                disabled: false,
                placeholder: "Enter here",
               
         		}]
        },
    }
});


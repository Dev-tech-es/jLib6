/* ***************************************
 * CLASS: DOM -> DATA
 * ***************************************/
class Dom_DATA extends Dom_CSS
{
	constructor () 
	{
		let self = super();
		
		self.data 		= (key, val) => {

			// Start timing now
			console.time("EXECUTION_TIME_DATA");

			let returnAttr = false;

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element ) => {
		 		
		 		('undefined' == typeof element.dataset[key] && 'undefined' == typeof val) && console.error("This data '"+key+"' no exist in this element: " +element.nodeName);

		 		('undefined' == typeof element.dataset[key] && 'undefined' != typeof val) && (element.dataset[key]=val, returnAttr=true);
		 		
		 		('undefined' != typeof element.dataset[key]) && (returnAttr=element.dataset[key]);

		 	});


			// Start timing now
			console.timeEnd("EXECUTION_TIME_DATA");

			return returnAttr;
		}

		self.attr 		= (key, val) => {

			// Start timing now
			console.time("EXECUTION_TIME_ATTR");

			val = ('boolean' == typeof val && val == true) && 'true';

			let exe = (type) => {

				let returnAttr = '';

				(self.element.length >= 1 ) && 
			 	self.element.forEach(( element ) => {
			 		
			 		(!element.hasAttribute(key) && type == 'get') && console.error('This atribute not exist on element');
			 		
			 		returnAttr = element[type+"Attribute"](key,val);

			 	});

			 	return returnAttr;
			}


			('boolean' == typeof val && val == false) && exe('remove');

			('string' == typeof key && 'string' == typeof val) && exe('set');


			// Start timing now
			console.timeEnd("EXECUTION_TIME_ATTR");

			return ('string' == typeof key && 'undefined' == typeof val) && exe('get');
			
		} // val = string or bool
		self.prop 		= (key, val) => {

			// Start timing now
			console.time("EXECUTION_TIME_PROP");

			let returnVal = false;

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element ) => {
		 		
		 		('boolean' == typeof val) && (element[key]=val);
		 		returnVal = element[key];
		 	});

			// Start timing now
			console.timeEnd("EXECUTION_TIME_PROP");

			return returnVal;

		} // val = string or bool
		
		self.val 		= (val) => {

			// Start timing now
			console.time("EXECUTION_TIME_VAL");

			let returnVal = '';

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element ) => {
		 		
		 		returnVal = ('string' == typeof val) ? (element.value=val) : element.value;
		 	});

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_VAL");

		 	return returnVal;
		}

		return self;
	}
}
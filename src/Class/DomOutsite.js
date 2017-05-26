/* ***************************************
 * CLASS: DOM -> OUTSITE
 * ***************************************/
class Dom_OUTSITE extends Dom_INSITE
{
	constructor () 
	{
		let self = super();

		self.after 				= ( content ) => {
			
			// Start timing now
			console.time("EXECUTION_TIME_AFTER");

		 	(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('afterend',content);
		 		
		 	});

		 	return self;

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_AFTER");
		} //afterend

		self.before 			= ( content ) => {

			// Start timing now
			console.time("EXECUTION_TIME_BEFORE");

			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('beforebegin',content);
		 		
		 	});

		 	return self;

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_BEFORE");

		} //beforebegin
		
		self.insertAfter 		= ( content ) => {

			// Start timing now
			console.time("EXECUTION_TIME_INSERTAFTER");						

			let cacheContent 	= $(content);
			let html 			= cacheContent.html();
			cacheContent.remove();


			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('beforebegin',html);
		 		
		 	});
		 	
			// Start timing now
			console.timeEnd("EXECUTION_TIME_INSERTAFTER");
		}

		self.insertBefore 		= ( content ) => {

			// Start timing now
			console.time("EXECUTION_TIME_INSERTBEFORE");
			
			let cacheContent 	= $(content);
			let html 			= cacheContent.html();
			cacheContent.remove();


			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('afterend',html);
		 		
		 	});
		 	
		 	
			// Start timing now
			console.timeEnd("EXECUTION_TIME_INSERTBEFORE");
		}

		return self;
	}
}
/* ***************************************
 * CLASS: DOM
 * ***************************************/
 class Dom 	extends Forms
{
	constructor () 
	{
		let self = super();

		self.hover 		= ( over, out ) => {

			// Start timing now
			console.time("EXECUTION_TIME_HOVER");


			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element ) => {
		 		
		 		self.on('mouseover', over, false);  
		 		self.on('mouseout', out, false) ;

		 	});

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_HOVER");
		}
		
		self.remove = ()=>{

			// Start timing now
			console.time("EXECUTION_TIME_REMOVE");

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.remove();

		 	});

		 	return self;

		 	// Start timing now
			console.time("EXECUTION_TIME_REMOVE");
		}

		return self;
	}
}
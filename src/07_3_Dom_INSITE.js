/* ***************************************
 * CLASS: DOM -> INSITE
 * ***************************************/
class Dom_INSITE extends Dom_DATA
{
	constructor () 
	{
		let self = super();

		self.append 		= ( content ) => {

			// Start timing now
			console.time("EXECUTION_TIME_APPEND");

			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('beforeend',content);
		 		
		 	});

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_APPEND");
		} // beforeend

		self.appendTo 		= ( content ) => {
			
			// Start timing now
			console.time("EXECUTION_TIME_APPENDTO");
			
			let outerHTML;

			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		outerHTML = element.outerHTML;
		 		element.remove();

		 	});

			$(content).append(outerHTML);
		 	
			// Start timing now
			console.timeEnd("EXECUTION_TIME_APPENDTO");
		}

		self.prepend 		= ( content ) => {

			// Start timing now
			console.time("EXECUTION_TIME_PREPEND");

			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		element.insertAdjacentHTML('afterbegin',content);
		 		
		 	});

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_PREPEND");

		} // afterbegin

		self.prependTo 		= ( content ) => {
			// Start timing now
			console.time("EXECUTION_TIME_PREPENDTO");
			
			let outerHTML;

			(self.element.length >= 1) && 
		 	self.element.forEach(( element ) => {
		 		
		 		outerHTML = element.outerHTML;
		 		element.remove();

		 	});

			$(content).prepend(outerHTML);
		 	
			// Start timing now
			console.timeEnd("EXECUTION_TIME_PREPENDTO");
		}

		self.text 		    = ( text )=> {
			
			// Start timing now
			console.time("EXECUTION_TIME_TEXT");
					
			(self.element.length >= 1 ) &&
			self.element.forEach(( element ) =>{ 

				element.innerText = text;		 	
			 
			});			
			
		
			// ... and stop.
			console.timeEnd("EXECUTION_TIME_TEXT");
		}

		self.html 			= ( html )=> {
 
			// Start timing now
			console.time("EXECUTION_TIME_HTML");

			let returnHTML;

			(self.element.length >= 1 ) &&
			self.element.forEach(( element ) =>{ 		 	
			 
				('string' == typeof html ) ? (element.innerHTML = html) : (returnHTML=element.outerHTML);		 	
			 	
			});
			


			return returnHTML;
			// ... and stop.
			console.timeEnd("EXECUTION_TIME_HTML");
		}

		return self;
	}
}
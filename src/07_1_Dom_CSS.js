 /* ***************************************
 * CLASS: DOM -> CSS
 * ***************************************/
 class Dom_CSS 	extends Dom
 {
	constructor () 
	{
		let self = super();

		self.css 		 = (...properties) => {

			let cssObject = ()=>{

				if('object' === typeof properties[0]){


					(self.element.length >= 1 ) &&
					self.element.forEach(( element ) =>{ 		 	
					 
						for (let val in properties[0]){

							element.style[val] = properties[0][val];
						}		 	
					 
					});
					
				}
			} 

			let cssString = ()=>{


				(self.element.length >= 1 && 
				 typeof properties[0] =='string' &&
				 typeof properties[1] =='string') &&
				self.element.forEach(( element ) =>{ 		 	
				 	
				 	(element.length==undefined) ? (element.style[properties[0]] = properties[1]) :
				 	$.for(element,(i,obj)=>{
				 			obj.style[properties[0]] = properties[1];
				 	})
				 	
				 
				});
			}

			// Start timing now
			console.time("EXECUTION_TIME_CSS");

			(properties.length === 1) &&	cssObject();
			(properties.length === 2) &&	cssString();

			return self;
			// ... and stop.
			console.timeEnd("EXECUTION_TIME_CSS");
		}

		self.hasClass 	 = ( className ) => {

			// Start timing now
			console.time("EXECUTION_TIME_HASCLASS");

			let data = false, length = 0, el={};

		 	(self.element.length >= 1 && className) && 
		 	self.element.forEach(( element ) => {
		 		
		 		data = element.classList.contains(className);
		 		(data) && ( el[length]=element, length+=1);
		 	});

		 	el['length']=length;
		 	// ... and stop.
			console.timeEnd("EXECUTION_TIME_HASCLASS");

			return (length==0) ? false : el;
		}

		self.addClass 	 = ( className ) => {

			// Start timing now
			console.time("EXECUTION_TIME_ADDCLASS");

			(self.element.length >= 1 && className) && 
			 self.element.forEach(( element ) => 
			 element.classList.add(className));
			 
			 return self;

			 // ... and stop.
			console.timeEnd("EXECUTION_TIME_ADDCLASS");
		}

		self.removeClass = ( className ) => {

			// Start timing now
			console.time("EXECUTION_TIME_REMOVECLASS");

			(self.element.length >= 1 && className) && 
			 self.element.forEach(( element ) => 
			 element.classList.remove(className));

			 // ... and stop.
			console.timeEnd("EXECUTION_TIME_REMOVECLASS");
		}

		self.toggleClass = ( className ) => {

			// Start timing now
			console.time("EXECUTION_TIME_TOGGLECLASS");

			(self.element.length >= 1 && className) && 
			 self.element.forEach(( element ) =>{ 		 	
			 
			 	let exe = (element.classList.contains(className)) ? "remove" : "add";

			 	element.classList[exe](className);			 	
			 
			});

			// ... and stop.
			console.timeEnd("EXECUTION_TIME_TOGGLECLASS");
		}

		return self;
	}
}
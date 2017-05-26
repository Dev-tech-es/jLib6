/* ***************************************
 * CLASS: DOM -> TREE_TRANS
 * ***************************************/
class Dom_TREE_TRANS extends Dom_OUTSITE
{
	constructor () 
	{
		let self = super();

		self.parent 	= (filter) => {

			//console.dir(self.element);
			const regex = /^\./g;
			let newElement = [];

			("string" == typeof filter && regex.exec(filter)!=null) && (filter = filter.substr(1,filter.length));

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element, i ) => {
		 		
		 		//classList.contains(className);
		 		if("string" == typeof filter ){
		 		 	
		 		 	(element.parentNode.classList.contains(filter)) && (newElement[i]=element.parentNode);
		 		 	
		 		}else{

		 			newElement[i] = element.parentNode;
		 		}
		 		
		 	});

		 	self.element = newElement;

			return self;
		}

		self.parents 	= (filter) => {

			//console.dir(self.element);

			let newElement = [];

			let setCacheNewElement = (parent)=>{

				if(parent.parentElement!=null){
					newElement.push(parent.parentElement);
					setCacheNewElement(parent.parentElement);
				}
			}

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element, i ) => {
		 		
		 		if("string" == typeof filter ){
		 		 	
		 		 	(element.parentNode.classList.contains(filter)) && (newElement[i]=element.parentNode);
		 		 	
		 		}else{

		 			setCacheNewElement(element);
		 		}
		 		
		 	});

		 	self.element = newElement;

			return self;
		}

		self.map 		= (execute) => {
		
			return self.element.map(execute);
		}

		self.join = (separator)=>{

			return self.element.join(separator);
		}

		self.children 	= (filter) => {

			const regex = /^\./g;
			let newElement = [];

			("string" == typeof filter && regex.exec(filter)!=null) && (filter = filter.substr(1,filter.length));

			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element, i ) => {
		 		
		 				 		
		 		if("string" == typeof filter ){
		 	
		 		 	(element.children.length>=1) &&		
		 		 	$.for(element.children,(i, obj)=>{

		 		 		(obj.classList.contains(filter)) && (newElement[i]=obj);
		 		 			
		 		 	});
		 		 	

		 		 	
		 		}else{

		 			(element.children.length>=1) && (newElement[i] = element.children);
		 		 	
		 			
		 		}
		 		
		 	});

		 	self.element = newElement;
		 	

			return self;
		}

		self.find 		= (search) => {

			console.info('BUSCAMOS: ' + search);

			console.dir(search);

			/*self.element.forEach((element, index)=>{

				

			});*/
	 	

			return self;
		}	
		
		self.prev 		= () => {

			console.log('INIT_PREV');

			//self.element = self.element[0].previousElementSibling;

			return self;
		}

		
		self.next 		= () => {


			// Start timing now
			console.time("EXECUTION_TIME_NEXT");

			let newElement = [];
			
			(self.element.length >= 1 ) && 
		 	self.element.forEach(( element, i ) => {
		 		
		 		newElement[i] = element.nextElementSibling;

		 		
		 	});

		 	self.element = newElement;

		 	// Start timing now
			console.timeEnd("EXECUTION_TIME_NEXT");

		 	return self;
		}

		return self;
	}
}
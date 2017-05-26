/* ***************************************
 * CLASS: FORM
 * ***************************************/
 class Forms 	extends Ajax
{
	constructor () {

		let self = super();

		self.val 			=  val => {

			return (typeof val === 'undefined') ? self.element[0].value : self.element[0].value = val;
		}
		self.serialize		= ()=>{

			return $.serialize(self.element);
		}
		self.serializeArray	= ()=>{
			
			return $.serializeArray(self.element);
		}
		self.blur 			= ()=> self.element[0].blur();		
		self.focus 			= ()=> self.element[0].focus();
		self.submit = execute =>{

			(self.element.length >= 1 ) &&
			self.element.forEach(( element ) =>{ 		 	
					
				element.onsubmit = execute; 
					 
			});
		}
		
		

		return self;
	}
}

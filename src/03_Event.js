/* ***************************************
 * CLASS: EVENT
 * ***************************************/
 class Events extends Core 
{
	constructor () {

		let self = super();


		self.on 	= ( type, fun, bool=true )=>{

			if(bool){

		 	 	let nodes = self.element[0].childNodes;

		 	 	//MEJORA BUCLE 
		 	 	for(let i= 0; i< nodes.length; i++){

		 	 		try {
		 	 			
		 	 			nodes[i].style.pointerEvents = "none";

		 	 		}catch(e){
		 	 			
		 	 			//console.log(nodes[i]);
		 	 			//this.required("pointerEvent","warn", nodes[i].nodeName);
		 	 		}

		 	 	} // [ FIN DEL 'FOR']

		 	 } // [ FIN DEL 'IF']

		 	 (self.element.length == 1) && self.element[0].addEventListener(type, fun, false);	

		 	 if(self.element.length != 1)	{

		 	 	for (let i = 0; i < self.element.length; i++) {
		 	 		self.element[i].addEventListener(type, fun, false);
		 	 	}
		 	 }
		}

		
		return self;
	}
}
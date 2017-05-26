'use strict'

/* ***************************************
 * CLASS: CORE
 * ***************************************/

class Core 
{
	constructor () 
	{	
		//Objecto GLOBAL en la clase
		let self 	= {}

		// Inicializador
		self.ready = (execute) => {

			console.time("ON_READY") // Start timing now

			const 	regex_1 = /^function\([\w]+\)/g,
			 		regex_2 = /^[\w]+\=\>/g,
			 		regex_3 = /^\([\w]+\)\=\>/g

			let a = execute.toString().replace(/\s+|\s+/g, ""), // quitar todos los espacios
			 	b = regex_1.exec(a), // function(app)
			 	c = regex_2.exec(a), // app=>
			 	d = regex_3.exec(a) // (app)=>
						
			let init = () => {

				// document.readyState [loading, interactive, complete]

				(b!=null || c!=null || d!=null) ? execute(document.readyState) : 
				((document.readyState=='complete') && execute())
				
			}

			document.onreadystatechange = init			

			console.timeEnd("ON_READY") // Stop timing now
			
		}

		return self;
	}

	// Loop elements
	LOOP (fun){

		(this.element.length >= 2) ? this.element.forEach(fun) : fun(this.element[0]);

	}

	// Settear los elementos entrantes
	set element ( element )
	{
		const 	type  = typeof element,
			 	regex = /^\#/g;

		// Controlar el elemento entrante si esta vacio o indefinido
		if ( 'undefined' === type || element.length ==  0 && 'function'!=type && 'object'!=type ) { throw "Element not defined on function. Ex: $('#id')";};

		// Ejecuto si el tipo de elemento es una función
		( 'function' === type ) && this.ready ( element );
		
		// Asigno a la propiedad 'element' su valor asignado	
		this.element = 	( window === element ) ? 
						  window.event.target || window.event.src :
						( 'string' === type ) ? 
						  document.querySelectorAll ( element ) : 'ready';

		if ( regex.exec(element)!=null && this.element.length > 1 ){ throw "This ID: "+element+", is duplicate."};

		if ( this.element.length == 0 ){ throw "This element: "+element+", no exist on Dom."};
	
		
	}

	// Gettear el elemento insertado
	get element ()
	{
		return this.element;
	}



}
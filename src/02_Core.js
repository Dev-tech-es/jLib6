'use strict'

/* ***************************************
 * CLASS: CORE
 * ***************************************/

class Core 
{
	constructor () 
	{	
		//Objecto GLOBAL 
		let self 	= {}

		//Objecto solo lectura 
		self.about 	= {}		
				
		Object.defineProperties( self.about ,
		{
			"NAME" 				: { value: "LIB6" },
			"STANDARD_SCRIPT"	: { value: "ECMAScript 6" },
			"VERSION_LIB"		: { value: "1.1.0" },
			"VERSION_TYPE"		: { value: "Developer" },
			"VERSION_LIB_DATE"	: { value: "23/03/17" },
			"AUTHOR"			: { value: "Sergio Gonzalez Garrido" },
			"LOCATION"			: { value: "Spain (Barcelona)" },
			"CONTACT"			: { value: "info@dev-tech.es" }
		})

		//
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


	get element ()
	{
		return this.element;
	}



}
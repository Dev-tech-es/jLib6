/* ***************************************
 * PARAM: GLOBAL
 * ***************************************/

// Variable global para usar la libreria
window.$ = element => new Lib6( element );

//Información sobre el desarrollo de la libreria 
$.about = {}		
		
Object.defineProperties( $.about ,
{
	"NAME" 				: { value: "LIB6" },
	"STANDARD_SCRIPT"	: { value: "ECMAScript 6" },
	"VERSION_CURRENT"	: { value: "1.1.0" },
	"VERSION_TYPE"		: { value: "Developer - Alpha" },
	"VERSION_LIB_DATE"	: { value: "23/03/17" },
	"AUTHOR"			: { value: "Sergio Gonzalez Garrido" },
	"LOCATION"			: { value: "Spain (Barcelona)" },
	"CONTACT"			: { value: "info@dev-tech.es" }
});

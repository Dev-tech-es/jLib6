/* ***************************************
 * PROTOTYPE: AJAX
 * ***************************************/
 $.ajax = ( ...set ) => {

 	var event = new Event('success');

 	let config 	 = {}, // Configuración usuario
 		core 	 = {}, // Configuración default
 		coreRequest = {},
 		answer 	 = {}, // Respuesta
 		options  = {}; // Opciones del Fetch

 	// Propiedades por defecto	
 	let properties = {
 		
 		async:true,
 		beforeSend:false,
 		cache:true,
	 	contentType:'application/x-www-form-urlencoded; charset=UTF-8', 
	 	data:false,
	 	dataType:'text',
	 	headers:{'X-DATA-JLIB6':'Fetch'},
	 	method:'GET',
	 	url:false,
	 	complete:false, // código a ejecutar sin importar si la petición falló o no
	 	success:false, 	// código a ejecutar si la petición es satisfactoria;
    					// la respuesta es pasada como argumento a la función
	 	error:false,
	 	typeSend:'Promise'
	}

	// Propiedades por defecto [ SOLO PROMISE ]	 
	let propertiesRequest = {
		method:'GET',
		headers: null,
		mode:'cors',
		cache:'default',
		bodyUsed:false,
		credentials:"omit",
		redirect:"follow",		
		referrerPolicy:"",
		referrer:"about:client",
		integrity:"",
		url:""
	}

 	// METODO: Verificar las propiedades de configuración
 	let setConfig = set =>{

		switch (set.length) {
		
			case 1:
				('string' == typeof set[0]) ?  (config.url 	= set[0]):
				('object' == typeof set[0]) && (config 		= set[0]);
				break;
			
			case 2:
				('object' == typeof set[1]) && (config 		= set[1]);
				('string' == typeof set[0]) && (config.url 	= set[0]);
				break;
			
			default:
				throw 'Ajax requires sending data';
				break;
		}

		$.forIn(properties,(key,value)=>{

			core[key] = (config.hasOwnProperty(key)) ? config[key] : value;

		});


		return core;
	}

	// METODO: Configura la cabezera de envio
	let setHeader = (content, headers ) => {

		let header = new Headers();

		header.append("Content-Type", content );

		$.forIn(headers, (key, value) => {

			header.append(key, value);
		});

		(!header.has('X-JLIB6-DATA')) && header.append('X-JLIB6-DATA', 'Fetch');


		return header;
	}

	// METODO: Configura el paquete de datos [ SOLO PROMISE ]
	let setRequest = config => {

		// [[ ANALIZAR HEADERS PARA SU ENVIO ]]
		let headers = setHeader(config.contentType, config.headers );
		
		$.forIn(propertiesRequest,(key,value)=>{

			coreRequest[key] = (config.hasOwnProperty(key)) ? config[key] : value;

		});

		(!config.data) && (config.data='');

		(coreRequest.method.toLowerCase() === "get" ) ? (coreRequest.url = coreRequest.url + config.data) :
		(coreRequest.method.toLowerCase() === "post") && (coreRequest.body = setFormData(config.data));		

		
		return new Request(coreRequest.url, coreRequest );
	}

	// METODO: Formatear datos para el POST
	let setFormData = data => {

		let formData = new FormData();
		
		if('string' == typeof data){

			data = data.substring(1, data.length); // QUITO la ?
			data = data.split('&');	// Separo por bloques

			$.for(data,(a,b)=>{

				data = b.split('='); // Separo los bloques a pares
				formData.append(data[0],data[1]); // lo añador al dataform
				
			})

		}

		return formData;
	}

	// METODO: Devuelve los datos en bruto [ SOLO PROMISE ]
	let getResponse = response => {

		answer.error 		= false;
		answer.status 		= response.status;
		answer.statusText 	= response.statusText;

		switch(core.dataType){
			case 'JSON'	: return response.json(); break;
			case 'IMG'	: return response.blod(); break;
			default		: return response.text(); break;
		}
	}

	// METODO: Devuelve los datos al usuario [ SOLO PROMISE ]
	let getData = data => {

		answer.response = data; 		
		return answer;
	}

	// METODO: Devuelve los errores [ SOLO PROMISE ]
	let getError = error => {

		answer.error = error;
		return answer;
	}

	let eventSucces = (result)=>{

		document.addEventListener('success', function (e) {
			('function' == typeof core.success ) && core.success(result.response, result.statusText, result);
		 }, false);
		
	}

	// METODO: Inicia la promesa  [ SOLO PROMISE ]
	let init = config => {

		let request = setRequest(config);

		return  fetch(request).
				then(getResponse).
				then(getData).
				catch(getError);
	}

	// METODO: Inicia la consulta XMLHttpRequest [ SOLO XMLHttpRequest ]
	let initXML = config => {

		if (core.typeSend=='Promise'){ return init(set); };
		
		let request = setRequest(config);
		let xhr = new XMLHttpRequest();
		let data = null;
		
		if(config.method.toLowerCase() === "post")
			data = setFormData(config.data)
		else if (config.method.toLowerCase() === "get")
			config.url = config.url + config.data;
		

		xhr.addEventListener("load", data =>{
			
			('function' == typeof core.complete ) && core.complete(data.currentTarget.response);
				
		}, false);

		xhr.addEventListener("error", data =>{
			
			('function' == typeof core.complete ) && core.error(data.currentTarget);
		
		}, false);
		
		xhr.open(config.method,config.url);
		xhr.send(data);		


		return xhr;
	}
	
	// Configuración
	config  = setConfig(set);	

	// Validate Fetch
	let isFetch = (window.fetch && core.typeSend=='Promise');

	// EXECUTE AJAX
	let AJAX = isFetch ? init(config) : initXML(config);

	if(isFetch){

		AJAX.then( result => {

			(result) && eventSucces(result);
			
			// Callbacks
			('function' == typeof core.complete ) 	&& core.complete(result, result.statusText); 
			('function' == typeof core.error && result.error != false ) && core.error(result.error);
			//('function' == typeof core.success ) 	&& core.success(result.response);
			
			(result) && document.dispatchEvent(event);

		});

	}

	return AJAX;

	

}
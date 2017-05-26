/* ***************************************
 * PROTOTYPE: Serializar
 * ***************************************/
$.serialize = data =>{

	let serial = "?";

	//console.dir(data.target.elements);

	data = (data.target=="") ? data : data.target.elements;

	$.for(data,(a,b)=>{

		if(b.type != 'submit') {

			if(b.type == 'checkbox' || b.type == 'radio')
				serial += b.name + "=" + b.checked + "&"
			else
				serial += b.name + "=" + b.value + "&"
		};
		

	});

	return encodeURI(serial.substring( 0 , serial.length-1));
		
}
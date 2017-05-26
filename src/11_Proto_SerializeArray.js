/* ***************************************
 * PROTOTYPE: Serializar array
 * ***************************************/
$.serializeArray = data =>{

	let serial = [];

	data = (data.target=="") ? data : data.target.elements;

	$.for(data,(a,b)=>{

		if(b.type != 'submit') {

			if(b.type == 'checkbox' || b.type == 'radio')
				serial.push({'name':b.name,'value':b.checked});
			else
				serial.push({'name':b.name,'value':b.value});
		};
		

	});

	return serial;

}
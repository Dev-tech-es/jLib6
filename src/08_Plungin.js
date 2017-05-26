/* ***************************************
 * CLASS: PLUGIN
 * ***************************************/
 class Plugin 	extends Dom_FILTER
 {
	constructor ( plugin ) 
	{	let self = super();		
		
		('undefined' != typeof $.plugin.list && $.plugin.list.length >= 1 ) &&
		$.plugin.list.forEach(( element ) =>{ 

			$.forIn(element,(index, value)=>{

				var execute = value.toString().replace("\n","");

				let pos1 = execute.indexOf("(");
				let pos2 = execute.indexOf(")");
				var data = execute.substr(pos1+1, pos2+pos1-1);

				execute = execute.replace("("+data+")=>{","");
				execute = execute.substr(0, execute.length-1);

				data = data.replace(/\s+|\s+/g, "");

				window.self=self;

				let nFun = new Function(data, execute);

				self[index]=nFun;

				
			})
			 
		});			


		return self;
	}
}
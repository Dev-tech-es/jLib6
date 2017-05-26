/* ***************************************
 * PROTOTYPE: Constructor de los plugins
 * ***************************************/
$.plugin = ( execute )=>{

	('undefined' == typeof $.plugin.list) && ($.plugin.list=[])
	$.plugin.list.push(execute);
}
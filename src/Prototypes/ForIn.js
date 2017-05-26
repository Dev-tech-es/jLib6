/* ***************************************
 * PROTOTYPE: For in
 * ***************************************/
$.forIn = ( obj , execute )=>{

	for (let i in obj ) 
	{		
		execute(i, obj[i])
	}
	
}
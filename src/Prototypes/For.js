/* ***************************************
 * PROTOTYPE: For
 * ***************************************/
$.for = ( obj , execute )=>{

	for (let i = 0; i < obj.length; i++) 
	{		
		execute(i, obj[i])
	}
	
}
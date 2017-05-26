/* ***************************************
 * PROTOTYPE: For of
 * ***************************************/
$.forOf = ( obj , execute )=>{

	for (let i of obj) 
	{		
		execute(i)
	}
	
}
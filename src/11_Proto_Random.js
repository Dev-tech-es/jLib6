/* ***************************************
 * PROTOTYPE: Random
 * ***************************************/
$.random = ( init = 0 , end = 100 )=>{
	
	return Math.floor( ( Math.random() * end ) + init)
		
}
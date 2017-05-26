/* ***************************************
 * PROTOTYPE: WAIT FOR SECOND
 * ***************************************/
$.waitForSecond = ( execute, second = 1, view = true)=>{

	// Start timing now
	(view) && console.info("WAIT_FOR_SECOND: " + (second) + "s");

	let s = setTimeout(()=>{ 

		('function' == typeof execute) && execute();
		clearTimeout(s);		

	},(second*1000));
	
}

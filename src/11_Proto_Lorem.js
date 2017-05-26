/* ***************************************
 * PROTOTYPE: Lorem
 * ***************************************/
$.lorem = ( type = 'p' )=>{

	let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	(type=='h1'||type=='h2'||type=='h3'||type=='h4'||type=='h5') && (lorem='Lorem ipsum dolor sit amet consectetur adipiscing elit')

	return '<'+type+'>'+ lorem +'</'+type+'>';
		
}
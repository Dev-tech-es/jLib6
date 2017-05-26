/* ***************************************
 * PROTOTYPE: COOKIE
 * ***************************************/
 $.cookie = ( key, val, opt = {}) => {

	let type = typeof val;

	let set = ( key, val, opt) => {

		let expires = new Date(),
		a 		  	= (key 		== undefined) 	? false : true,
		b 			= (val 		== undefined) 	? false : true,
		time 		= (opt.time == undefined) 	? 31536000000 : opt.time;
		// domain
		// path
		// size
		// http
		// secure
		// sameSite		

		expires.setTime(expires.getTime() + time);

		let cookie 	= key + "=" + val + ";expires=" + expires.toUTCString();

		return (a && b) && (document.cookie = cookie);
	};

	let get = ( key ) => {

		let keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
		return (keyValue) ? keyValue[2] : null;
	};

	let remove = ( key ) =>	{
		return document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	return (type === "undefined") ? get(key) : 
	((type === "boolean" && val === false) ? remove(key) :
	set( key, val, opt ));
}
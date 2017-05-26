/* ***************************************
 * PROTOTYPE: STORAGE
 * ***************************************/
$.storage = ( key, val, opt = {})=>{

	// Validar funcionamiento Storage
	let isExist = ('function' === typeof Storage);

	// Metodo de inicio
	let init = () => {

		// Detectar objecto
		('object'== typeof key) && (opt=key);
		('object'== typeof val) && (opt=val);

		// Determinar el tipo de storage [local, session]
		opt.type = (opt.type == undefined) 	? 'local' : opt.type;	

		// Chekear el typo
		let type = (opt.type=='local' || opt.type=='session');

		if(!type){ throw 'The type storage is not valid. Options valid is: "local" or "session"'}


		let store = window[opt.type+'Storage'];

		let set 	= () => store.setItem( key, val ),
		 	get 	= () => { return store.getItem( key ) },
		 	remove 	= () => store.removeItem( key ),
		 	clear 	= () => store.clear();

		('undefined' == typeof key || 'boolean' == typeof key) && clear(); // CLEAR

		('boolean' == typeof val && false == val || 'object' == typeof key) && remove();

		('string' == typeof key && 'string' == typeof val ) && set();

		return ('undefined' == typeof val || 'object' == typeof val ) && get();



		// $.storage([,option]);
		// $.storage('key','value'[,option]);
		// $.storage('key'[,option]);
		// $.storage('key', false [,option]);

		/*return ('undefined' == typeof key) ? clear():
		("undefined" == typeof val) ? get() : 
		(("boolean" == typeof val && val === false) ? remove() :
		set());*/
	}

	// Si el funcionamiento de Storage es correcto
	return (isExist) && init();
}
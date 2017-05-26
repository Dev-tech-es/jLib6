 /* ***************************************
 * CLASS: DOM -> CSS
 * ***************************************/
 class Dom_CSS 	extends Dom
 {
	constructor () 
	{
		let self = super();

		self.css 		 = (...properties) => {

			// Funcion 'cssObject'
			let cssObject = prop =>	super.LOOP( e => $.forIn( prop, val => e.style[val] = prop[val] ) );
			
			// Funcion 'cssString'
			let cssString = (key, val)=>
				super.LOOP( e => ( e.length==undefined ) ? ( e.style[key] = val) :
								   $.for( e,( i , obj ) => obj.style[key] = val) );
			

			(properties.length === 1 && 'object' === typeof properties[0]) && cssObject( properties[0] );
			
			(properties.length === 2 && 
				typeof properties[0] =='string'  &&
				typeof properties[1] =='string') && cssString(properties[0],properties[1]);

			return self;
		}

		// [[ MEJORAR CODIGO HASCLASS ]]
		self.hasClass 	 = className => {

			let data 	= false, 
				length  = 0,
				el 		= {};

		 	(className) && super.LOOP( e => {
		 		data = e.classList.contains(className);
		 		(data) && ( el[length] = e, length+=1);
		 	} );

		 	el['length']=length;

			return (length==0) ? false : el;
		}

		self.addClass 	 = className => {

			(className) && super.LOOP( e => e.classList.add(className) );
			 
			return self; 
		}

		self.removeClass = className => {

			(className) && super.LOOP( e => e.classList.remove(className) );

			return self;
		}

		self.toggleClass = className => {

			(className) && super.LOOP( e => {
				let exe = (e.classList.contains(className)) ? "remove" : "add";
			 	e.classList[exe](className);
			});

			return self;
		}

		return self;
	}
}
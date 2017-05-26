/* ***************************************
 * CLASS: AJAX
 * ***************************************/
 class Ajax extends Events
{
	constructor () {

		let self = super();

		//LOAD
		self.load = (url) => $.ajax(url,{
			success:(a,b)=>{
				console.dir(b);
				self.html(a);
			}
		});

		return self;
	}
}

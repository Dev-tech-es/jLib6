/* ***************************************
 * CLASS: DOM -> FILTER
 * ***************************************/
class Dom_FILTER extends Dom_TREE_TRANS
{
	constructor () 
	{
		let self = super();

		self.first 		= () => {

			let newElement = [];

			for(let call of self.element) 
			{			   
			    newElement[0]=call;
			    break;			    
			}

			self.element=newElement;

		 	return self;
		}

		return self;
	}
}
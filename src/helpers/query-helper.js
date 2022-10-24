module.exports = {
	prepare: async function(req) {
		let f = '*', fields = '';
		if ( typeof req.query.fields !== 'undefined' || !req.query.fields) {
			f = req.query.fields
			fields = this.toFields(f)
		}
		req.query.page = req.query.page || 1;
		req.query.paginate = parseInt(req.query.paginate) || 0;
		const per_page =  parseInt(req.query.per_page) || 5;
		const page = parseInt(req.query.page) < 1 ? 1 : parseInt(req.query.page);
		const position = parseInt((per_page * page) - per_page) 

		req.query.order_by = req.query.order_by || '';
		req.query.order = req.query.order || 'ASC';

		return {
			fields: fields,
			currentPage: page,
			perPage: per_page,
			position: position,
			limit: `LIMIT ${position}, ${per_page}`,
			paginate: req.query.paginate,
			order_by: req.query.order_by,
			order: req.query.order,
		};
	},

	// Input: 
    toFields: function( text, seperator = ',', toArray = false ) {
		seperator = seperator || ' ';
		text = text || '*';
		text = text.replace(/,/g, seperator, -1);
	
		if ( toArray ) text = text ? text.split( seperator ) : [] ;
	
		return text;
	},

	getPaginationInfo: function( count, params ) {
        const total = count[0] !== undefined && count[0].total !== undefined ? parseInt(count[0].total) : 0
		let to = parseInt(params.perPage * Math.ceil((params.position + params.perPage) / params.perPage))
		if (to > total) {
			to = parseInt(total)
		}

		return pagination = {
			total_rows: total,
			total_page: Math.ceil(total / params.perPage),
			page: params.currentPage,
			per_page: params.perPage
		}
    }
}
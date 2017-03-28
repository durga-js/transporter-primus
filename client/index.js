'use strict';


module.exports = class DurgaTransporterPrimus {
	constructor(primus) {
		this.primus = primus;
	}

	init(client) {

		this.primus.on('data', data => client.dispatch(data));
		client.listen(data => this.primus.write(data));
		//this.primus.on('end', () => client.destroy());
		this.primus.on('reconnected', () => client.trigger('reconnect'));
	}
};

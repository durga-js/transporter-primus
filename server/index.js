'use strict';


module.exports = class DurgaTransporterPrimus {
	constructor(primus) {
		this.primus = primus;
	}

	init(server) {
		this.primus.on('connection', (socket) => {
			let con = server.createConnection();

			socket.on('data', data => con.dispatch(data));
			con.listen(data => socket.write(data));
			socket.on('end', () => con.destroy());
		});
	}
};

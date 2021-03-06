var config = require('../config'),
	dataUtils = require('./common/dataUtils'),
	converter = require('./common/converter');

function Context() {
	var self = this,
		dbConn,
		services = {};

	this.init = function (params) {
		var envType = params.envType;

		self.envConfig = config[envType];

		// Initialize database connection
		dbConn = require('./db/conn.js')(self);

		// Add to services
		self.addService('db', dbConn);
		self.addService('dataUtils', dataUtils);
		self.addService('converter', converter);
	};

	this.addService = function (serviceName, service) {
		services[serviceName] = service;
	};

	this.getService = function (service) {
		return services[service];	
	};
}

var context = new Context();

module.exports = context;
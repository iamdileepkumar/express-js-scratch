module.exports = {
	listener: {
		port: 'LISTENER_PORT',
		auth: {
			// provide secret _or_ publicKey, if both are provided secret will take precedence!
			secret: 'LISTENER_AUTH_SECRET',
			publicKey: 'LISTENER_AUTH_PUBLIC_KEY'
		}
	}
}

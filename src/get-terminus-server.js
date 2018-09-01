import http from 'http'
import terminus from '@godaddy/terminus'
import debug from '@watchmen/debug'

const dbg = debug(__filename)

export default ({app}) => {
	const server = http.createServer(app)

	terminus(server, {
		signal: 'SIGINT',
		healthChecks: {
			'/': async () => {}
		},
		onSignal: () => {
			dbg('on-signal')
			return Promise.all([
				// cleanup logic here in the form of promises/async functions
			])
		}
	})

	return server
}

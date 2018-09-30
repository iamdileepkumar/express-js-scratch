// eslint-disable-next-line import/no-unassigned-import
import 'babel-polyfill'
import _ from 'lodash'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'
import express from 'express'
import jwt from 'express-jwt'
import {webHelpr} from '@watchmen/web-helpr'
import debug from '@watchmen/debug'
import {assert} from '@watchmen/helpr'
import healthzRouter from './routers/healthz'
import getTerminusServer from './get-terminus-server'

const dbg = debug(__filename)

const app = express()

let secretOrPublicKey = _.get(config, 'listener.auth.secret', 's3cret')
if (!secretOrPublicKey) {
	const key = _.get(config, 'listener.auth.publicKey')
	assert(key, 'secret or public-key required')
	secretOrPublicKey = webHelpr.formatPublicKey({key})
}
// dbg('secret-or-public-key=%o', secretOrPublicKey)

const credentialsRequired = !_.get(config, 'listener.auth.relaxCredentials')
const whitelist = _.get(config, 'listener.auth.whitelist')

credentialsRequired || dbg('WARNING: configured without strictly requiring credentials')

process.on('unhandledRejection', err => {
	dbg('unhandled-rejection: %o', err)
	process.exit(1)
})

export default (async function() {
	// keep jwt filter early!
	app.use((req, res, next) => {
		dbg('user=%o, auth=%o, secret=%o', req.user, req.get('authorization'), secretOrPublicKey)
		next()
	})
	app.use(
		jwt({secret: secretOrPublicKey, credentialsRequired}).unless({
			path: whitelist
		}),
		(req, res, next) => {
			const {user} = req
			if (user) {
				// can tweak standardUser here if required
				req.standardUser = user
			}
			next()
		}
	)
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(cors({exposedHeaders: 'x-total-count'}))
	app.use((req, res, next) => {
		res.setHeader('Content-Security-Policy', 'default-src "none"; connect-src "self" https:;')
		next()
	})

	app.use('/healthz', healthzRouter)

	const port = _.get(config, 'listener.port', 3000)

	const server = getTerminusServer({app})

	server.listen(port, () => {
		dbg('listening on port=%o', port)
	})
})()

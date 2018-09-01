import express from 'express'
import debug from '@watchmen/debug'
/* eslint-disable import/extensions */
import {version} from '../../package.json'
import {sha} from '../../git.json'

const dbg = debug(__filename)
const router = express.Router()

export default router.get('/', async (req, res, next) => {
	try {
		const response = {
			version,
			sha
		}
		res.status((response.status = 200))
		res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
		res.header('Pragma', 'no-cache')
		res.header('Expires', 0)
		res.send(response)
		dbg('response=%o', response)
	} catch (err) {
		next(err)
	}
})

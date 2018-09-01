import {defineSupportCode} from 'cucumber'
import debug from '@watchmen/debug'
import {initState} from '@watchmen/test-helpr'

const dbg = debug(__filename)
dbg('loaded hooks')

// eslint-disable-next-line no-unused-expressions
require('../../../../src').default

defineSupportCode(({setDefaultTimeout}) => {
	setDefaultTimeout(15 * 1000)
})

defineSupportCode(({Before}) => {
	Before(async testCase => {
		try {
			dbg('before: feature=%o, scenario=%o', testCase.sourceLocation.uri, testCase.pickle.name)
			initState()
		} catch (err) {
			dbg('before: caught=%o', err)
			throw err
		}
	})
})

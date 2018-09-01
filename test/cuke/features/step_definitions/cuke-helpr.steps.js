// import fs from 'fs'
// import _ from 'lodash'
import cukeHelprSteps from '@watchmen/cuke-helpr'
import config from 'config'
// import jwt from 'jsonwebtoken'
// import debug from 'debug'
//
// const dbg = debug(__filename)
//
// const payload = config.get('listener.auth.payload')
//
// let token
// const secret = _.get(config, 'listener.auth.secret')
// if (secret) {
//   token = jwt.sign(payload, secret)
// } else {
//   // https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9
//   const cert = fs.readFileSync('jwtRS256.key')
//   token = jwt.sign(payload, cert, {algorithm: 'RS256'})
// }
//
// dbg('token=%o', token)

export default cukeHelprSteps({config})

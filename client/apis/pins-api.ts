import request from 'superagent'

const rootUrl = '/api/v1'

export function getPins(): Promise<string[]> {
  return request.get(rootUrl + '/pins').then((res) => {
    return res.body.pins
  })
}


import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeUvIndexSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreeUvIndexSDK.test()
    equal(testsdk instanceof FreeUvIndexSDK, true,
      'FreeUvIndexSDK.test() must return a client synchronously')
  })

})

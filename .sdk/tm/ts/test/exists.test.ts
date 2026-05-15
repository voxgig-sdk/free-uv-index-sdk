
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeUvIndexSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreeUvIndexSDK.test()
    equal(null !== testsdk, true)
  })

})

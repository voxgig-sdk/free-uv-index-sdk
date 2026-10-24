

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeUvIndexSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('UviEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_UV_INDEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_UV_INDEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeUvIndexSDK.test()
    const ent = testsdk.Uvi()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('uvi hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of FreeUvIndexSDK.test(offline).Uvi().stream('list')) { }
    }, /offline/)

    for await (const _item of FreeUvIndexSDK.test(offline).Uvi()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = FreeUvIndexSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Uvi().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of FreeUvIndexSDK.test().Uvi().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new FreeUvIndexSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Uvi().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Uvi().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = FreeUvIndexSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Uvi().list({"latitude":"x","longitude":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_UV_INDEX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'uvi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"forecast":{"a":true,"h":"Forecast","n":"forecast","r":true,"sh":"Forecast for the next ~120 hours.","t":"`$ARRAY`","key$":"forecast","index$":0},"history":{"a":true,"h":"History","n":"history","r":true,"sh":"Forecast for the past upto 24 hours.","t":"`$ARRAY`","key$":"history","index$":1},"latitude":{"a":true,"h":"Latitude","n":"latitude","r":true,"sh":"Same as the latitude passed in the request.","t":"`$NUMBER`","key$":"latitude","index$":2},"longitude":{"a":true,"h":"Longitude","n":"longitude","r":true,"sh":"Same as the longitude passed in the request.","t":"`$NUMBER`","key$":"longitude","index$":3},"now":{"a":true,"h":"Now","n":"now","r":true,"sh":"Forecast for the current hour.","t":"`$OBJECT`","key$":"now","index$":4},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$ANY`","key$":"ok","index$":5}},"name":"uvi","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /uvi","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":40.6943,"k":"query","n":"latitude","or":"latitude","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":-73.9249,"k":"query","n":"longitude","or":"longitude","r":true,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"GET","o":"/uvi","q":{"exist":["latitude","longitude"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"uvi"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"uvi","name__orig":"uvi","Name":"Uvi","name_":"uvi","name-":"uvi","NAME":"UVI","index$":0}, {"active":true,"entity":"uvi","key$":"BasicUviFlow","kind":"basic","name":"BasicUviFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"uvi_ref01"}}],"index$":0}]}, 'Uvi', {"GET /uvi":{"protocol":"http","parameters":[{"name":"latitude","in":"query","description":"The latitude of the location for which you want the UV Index.","required":true,"schema":{"type":"number","minimum":-90,"maximum":90},"example":40.6943,"index$":0},{"name":"longitude","in":"query","description":"The longitude of the location for which you want the UV Index.","required":true,"schema":{"type":"number","minimum":-180,"maximum":180},"example":-73.9249,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let uvi_ref01_data = Object.values(setup.data.existing.uvi)[0] as any

    // LIST
    const uvi_ref01_ent = client.Uvi()
    const uvi_ref01_match: any = {}

    const uvi_ref01_list = (await uvi_ref01_ent.list(uvi_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/uvi/UviTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreeUvIndexSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['uvi01','uvi02','uvi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_UV_INDEX_TEST_UVI_ENTID': idmap,
    'FREE_UV_INDEX_TEST_LIVE': 'FALSE',
    'FREE_UV_INDEX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_UV_INDEX_TEST_UVI_ENTID']

  const live = 'TRUE' === env.FREE_UV_INDEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_UV_INDEX_TEST_UVI_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreeUvIndexSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREE_UV_INDEX_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

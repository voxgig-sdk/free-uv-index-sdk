

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeUvIndexSDK, BaseFeature, stdutil } from '../../..'

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_UV_INDEX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'uvi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"forecast","req":true,"short":"Forecast for the next ~120 hours.","type":"`$ARRAY`","index$":0},{"active":true,"name":"history","req":true,"short":"Forecast for the past upto 24 hours.","type":"`$ARRAY`","index$":1},{"active":true,"name":"latitude","req":true,"short":"Same as the latitude passed in the request.","type":"`$NUMBER`","index$":2},{"active":true,"name":"longitude","req":true,"short":"Same as the longitude passed in the request.","type":"`$NUMBER`","index$":3},{"active":true,"name":"now","req":true,"short":"Forecast for the current hour.","type":"`$OBJECT`","index$":4},{"active":true,"name":"ok","req":true,"type":"`$ANY`","index$":5}],"name":"uvi","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":40.6943,"kind":"query","name":"latitude","orig":"latitude","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"example":-73.9249,"kind":"query","name":"longitude","orig":"longitude","reqd":true,"type":"`$NUMBER`","index$":1}]},"contract":{"id":"GET /uvi","json":"{\"parameters\":[{\"description\":\"The latitude of the location for which you want the UV Index.\",\"example\":40.6943,\"in\":\"query\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"description\":\"The longitude of the location for which you want the UV Index.\",\"example\":-73.9249,\"in\":\"query\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"forecast\":{\"description\":\"Forecast for the next ~120 hours.\",\"items\":{\"properties\":{\"date\":{\"format\":\"date-time\",\"type\":\"string\"},\"uvi\":{\"examples\":[8.5],\"type\":\"number\"}},\"required\":[\"date\",\"uvi\"],\"type\":\"object\"},\"type\":\"array\"},\"history\":{\"description\":\"Forecast for the past upto 24 hours.\",\"items\":{\"properties\":{\"date\":{\"format\":\"date-time\",\"type\":\"string\"},\"uvi\":{\"examples\":[7.5],\"type\":\"number\"}},\"required\":[\"date\",\"uvi\"],\"type\":\"object\"},\"type\":\"array\"},\"latitude\":{\"description\":\"Same as the latitude passed in the request.\",\"examples\":[40.6943],\"type\":\"number\"},\"longitude\":{\"description\":\"Same as the longitude passed in the request.\",\"examples\":[-73.9249],\"type\":\"number\"},\"now\":{\"description\":\"Forecast for the current hour.\",\"properties\":{\"date\":{\"format\":\"date-time\",\"type\":\"string\"},\"uvi\":{\"examples\":[6.7],\"type\":\"number\"}},\"required\":[\"date\",\"uvi\"],\"type\":\"object\"},\"ok\":{\"enum\":[true]}},\"required\":[\"ok\",\"latitude\",\"longitude\",\"now\",\"forecast\",\"history\"],\"type\":\"object\"}}},\"description\":\"Successful operation\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message.\",\"examples\":[\"missing latitude\",\"missing longitude\",\"invalid latitude\",\"invalid longitude\"],\"type\":\"string\"},\"ok\":{\"enum\":[false]}},\"type\":\"object\"}}},\"description\":\"Invalid latitude or longitude\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/uvi","segments":[{"lit":"uvi"}],"select":{"exist":["latitude","longitude"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"uvi","name__orig":"uvi","Name":"Uvi","name_":"uvi","name-":"uvi","NAME":"UVI","index$":0}, {"active":true,"entity":"uvi","key$":"BasicUviFlow","kind":"basic","name":"BasicUviFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"uvi_ref01"}}],"index$":0}]}, 'Uvi')
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
  

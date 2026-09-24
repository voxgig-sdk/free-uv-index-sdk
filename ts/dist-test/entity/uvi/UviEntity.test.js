"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UviEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FREE_UV_INDEX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FREE_UV_INDEX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FreeUvIndexSDK.test();
        const ent = testsdk.Uvi();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FREE_UV_INDEX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'uvi.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "forecast": { "a": true, "h": "Forecast", "n": "forecast", "r": true, "sh": "Forecast for the next ~120 hours.", "t": "`$ARRAY`", "key$": "forecast", "index$": 0 }, "history": { "a": true, "h": "History", "n": "history", "r": true, "sh": "Forecast for the past upto 24 hours.", "t": "`$ARRAY`", "key$": "history", "index$": 1 }, "latitude": { "a": true, "h": "Latitude", "n": "latitude", "r": true, "sh": "Same as the latitude passed in the request.", "t": "`$NUMBER`", "key$": "latitude", "index$": 2 }, "longitude": { "a": true, "h": "Longitude", "n": "longitude", "r": true, "sh": "Same as the longitude passed in the request.", "t": "`$NUMBER`", "key$": "longitude", "index$": 3 }, "now": { "a": true, "h": "Now", "n": "now", "r": true, "sh": "Forecast for the current hour.", "t": "`$OBJECT`", "key$": "now", "index$": 4 }, "ok": { "a": true, "h": "Ok", "n": "ok", "r": true, "t": "`$ANY`", "key$": "ok", "index$": 5 } }, "name": "uvi", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /uvi", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 40.6943, "k": "query", "n": "latitude", "or": "latitude", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": -73.9249, "k": "query", "n": "longitude", "or": "longitude", "r": true, "t": "`$NUMBER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/uvi", "q": { "exist": ["latitude", "longitude"] }, "r": {}, "s": [{ "lit": "uvi" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "uvi", "name__orig": "uvi", "Name": "Uvi", "name_": "uvi", "name-": "uvi", "NAME": "UVI", "index$": 0 }, { "active": true, "entity": "uvi", "key$": "BasicUviFlow", "kind": "basic", "name": "BasicUviFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "uvi_ref01" } }], "index$": 0 }] }, 'Uvi', { "GET /uvi": { "protocol": "http", "responses": { "200": { "description": "Successful operation", "content": { "application/json": { "schema": { "type": "object", "properties": { "ok": { "enum": [true], "key$": "ok" }, "latitude": { "description": "Same as the latitude passed in the request.", "examples": [40.6943], "key$": "latitude", "type": "number" }, "longitude": { "description": "Same as the longitude passed in the request.", "examples": [-73.9249], "key$": "longitude", "type": "number" }, "now": { "description": "Forecast for the current hour.", "key$": "now", "properties": { "date": { "format": "date-time", "type": "string" }, "uvi": { "examples": [6.7], "type": "number" } }, "required": ["date", "uvi"], "type": "object" }, "forecast": { "description": "Forecast for the next ~120 hours.", "items": { "properties": { "date": { "format": "date-time", "type": "string" }, "uvi": { "examples": [8.5], "type": "number" } }, "required": ["date", "uvi"], "type": "object" }, "key$": "forecast", "type": "array" }, "history": { "description": "Forecast for the past upto 24 hours.", "items": { "properties": { "date": { "format": "date-time", "type": "string" }, "uvi": { "examples": [7.5], "type": "number" } }, "required": ["date", "uvi"], "type": "object" }, "key$": "history", "type": "array" } }, "required": ["ok", "latitude", "longitude", "now", "forecast", "history"], "index$": 0 } } } }, "400": { "description": "Invalid latitude or longitude", "content": { "application/json": { "schema": { "type": "object", "properties": { "ok": { "enum": [false] }, "message": { "type": "string", "description": "Error message.", "examples": ["missing latitude", "missing longitude", "invalid latitude", "invalid longitude"] } } } } } } }, "parameters": [{ "name": "latitude", "in": "query", "description": "The latitude of the location for which you want the UV Index.", "required": true, "schema": { "type": "number", "minimum": -90, "maximum": 90 }, "example": 40.6943, "index$": 0 }, { "name": "longitude", "in": "query", "description": "The longitude of the location for which you want the UV Index.", "required": true, "schema": { "type": "number", "minimum": -180, "maximum": 180 }, "example": -73.9249, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let uvi_ref01_data = Object.values(setup.data.existing.uvi)[0];
        // LIST
        const uvi_ref01_ent = client.Uvi();
        const uvi_ref01_match = {};
        const uvi_ref01_list = (await uvi_ref01_ent.list(uvi_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/uvi/UviTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FreeUvIndexSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['uvi01', 'uvi02', 'uvi03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FREE_UV_INDEX_TEST_UVI_ENTID': idmap,
        'FREE_UV_INDEX_TEST_LIVE': 'FALSE',
        'FREE_UV_INDEX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FREE_UV_INDEX_TEST_UVI_ENTID'];
    const live = 'TRUE' === env.FREE_UV_INDEX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FREE_UV_INDEX_TEST_UVI_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FreeUvIndexSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=UviEntity.test.js.map
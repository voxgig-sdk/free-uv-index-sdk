"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "uvi",
        "accessor": "Uvi",
        "op": "list",
        "method": "GET",
        "path": "/uvi",
        "args": [],
        "select": {
            "latitude": 40.6943,
            "longitude": -73.9249
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "latitude",
            "longitude"
        ],
        "queryArgs": [
            {
                "name": "latitude",
                "wire": "latitude"
            },
            {
                "name": "longitude",
                "wire": "longitude"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "ok": true,
            "latitude": 1,
            "longitude": 1,
            "now": {
                "date": "2026-01-01T00:00:00Z",
                "uvi": 1
            },
            "forecast": [
                {
                    "date": "2026-01-01T00:00:00Z",
                    "uvi": 1
                }
            ],
            "history": [
                {
                    "date": "2026-01-01T00:00:00Z",
                    "uvi": 1
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map
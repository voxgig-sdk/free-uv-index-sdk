# FreeUvIndex SDK configuration


def make_config():
    return {
        "main": {
            "name": "FreeUvIndex",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://currentuvindex.com/api/v1",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "uvi": {},
            },
        },
        "entity": {
      "uvi": {
        "fields": [
          {
            "active": True,
            "name": "forecast",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "history",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "latitude",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "longitude",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "ok",
            "req": True,
            "type": "`$ANY`",
            "index$": 5,
          },
        ],
        "name": "uvi",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 40.6943,
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "active": True,
                      "example": -73.9249,
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/uvi",
                "parts": [
                  "uvi",
                ],
                "select": {
                  "exist": [
                    "latitude",
                    "longitude",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

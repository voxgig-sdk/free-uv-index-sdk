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
            "name": "forecast",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "history",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "latitude",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "longitude",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$ANY`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "uvi",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 40.6943,
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -73.9249,
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

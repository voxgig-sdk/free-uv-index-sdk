# FreeUvIndex SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
          },
          {
            "name": "history",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "latitude",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$ANY`",
          },
        ],
        "name": "uvi",
        "op": {
          "list": {
            "input": "data",
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
                    },
                    {
                      "example": -73.9249,
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

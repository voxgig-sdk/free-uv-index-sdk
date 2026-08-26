
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FreeUvIndex',
        slug: "free-uv-index",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://currentuvindex.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      uvi: {
      },

    }
  }


  entity = {
    "uvi": {
      "fields": [
        {
          "name": "forecast",
          "req": true,
          "short": "Forecast for the next ~120 hours.",
          "type": "`$ARRAY`"
        },
        {
          "name": "history",
          "req": true,
          "short": "Forecast for the past upto 24 hours.",
          "type": "`$ARRAY`"
        },
        {
          "name": "latitude",
          "req": true,
          "short": "Same as the latitude passed in the request.",
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "req": true,
          "short": "Same as the longitude passed in the request.",
          "type": "`$NUMBER`"
        },
        {
          "name": "now",
          "req": true,
          "short": "Forecast for the current hour.",
          "type": "`$OBJECT`"
        },
        {
          "name": "ok",
          "req": true,
          "type": "`$ANY`"
        }
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
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": -73.9249,
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/uvi",
              "parts": [
                "uvi"
              ],
              "select": {
                "exist": [
                  "latitude",
                  "longitude"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


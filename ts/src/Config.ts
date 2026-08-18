
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


  main = {
    name: 'FreeUvIndex',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "history",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "now",
          "req": true,
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


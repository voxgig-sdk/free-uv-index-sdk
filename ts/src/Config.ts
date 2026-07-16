
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
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://currentuvindex.com/api/v1',

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
          "active": true,
          "name": "forecast",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "history",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "now",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 4
        },
        {
          "active": true,
          "name": "ok",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        }
      ],
      "name": "uvi",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": 40.6943,
                    "kind": "query",
                    "name": "latitude",
                    "orig": "latitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": -73.9249,
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  }
                ]
              },
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
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


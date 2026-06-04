
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

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
    }

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
          "name": "forecast",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "history",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 3
        },
        {
          "name": "now",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "ok",
          "req": true,
          "type": "`$ANY`",
          "active": true,
          "index$": 5
        }
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
                    "reqd": true,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": -73.9249,
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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


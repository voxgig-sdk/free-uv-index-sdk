-- FreeUvIndex SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeUvIndex",
      slug = "free-uv-index",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://currentuvindex.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["uvi"] = {},
      },
    },
    entity = {
      ["uvi"] = {
        ["fields"] = {
          {
            ["name"] = "forecast",
            ["title"] = "Forecast",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Forecast for the next ~120 hours.",
          },
          {
            ["name"] = "history",
            ["title"] = "History",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Forecast for the past upto 24 hours.",
          },
          {
            ["name"] = "latitude",
            ["title"] = "Latitude",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Same as the latitude passed in the request.",
          },
          {
            ["name"] = "longitude",
            ["title"] = "Longitude",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Same as the longitude passed in the request.",
          },
          {
            ["name"] = "now",
            ["title"] = "Now",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Forecast for the current hour.",
          },
          {
            ["name"] = "ok",
            ["title"] = "Ok",
            ["type"] = "`$ANY`",
            ["req"] = true,
          },
        },
        ["name"] = "uvi",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/uvi",
                ["segments"] = {
                  {
                    ["lit"] = "uvi",
                  },
                },
                ["parts"] = {
                  "uvi",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = 40.6943,
                    },
                    {
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = -73.9249,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "latitude",
                    "longitude",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

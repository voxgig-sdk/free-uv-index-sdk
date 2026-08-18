-- FreeUvIndex SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeUvIndex",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "history",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "latitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "now",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ok",
            ["req"] = true,
            ["type"] = "`$ANY`",
          },
        },
        ["name"] = "uvi",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 40.6943,
                      ["kind"] = "query",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = -73.9249,
                      ["kind"] = "query",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/uvi",
                ["parts"] = {
                  "uvi",
                },
                ["select"] = {
                  ["exist"] = {
                    "latitude",
                    "longitude",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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

-- ProjectName SDK configuration

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
      auth = {
        prefix = "Bearer",
      },
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
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "history",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "latitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "longitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "now",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "ok",
            ["req"] = true,
            ["type"] = "`$ANY`",
            ["active"] = true,
            ["index$"] = 5,
          },
        },
        ["name"] = "uvi",
        ["op"] = {
          ["list"] = {
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
                      ["active"] = true,
                    },
                    {
                      ["example"] = -73.9249,
                      ["kind"] = "query",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                      ["active"] = true,
                    },
                  },
                },
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
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
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

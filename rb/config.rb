# FreeUvIndex SDK configuration

module FreeUvIndexConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "FreeUvIndex",
        "slug" => "free-uv-index",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://currentuvindex.com/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "uvi" => {},
        },
      },
      "entity" => {
        "uvi" => {
          "fields" => [
            {
              "name" => "forecast",
              "req" => true,
              "short" => "Forecast for the next ~120 hours.",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "history",
              "req" => true,
              "short" => "Forecast for the past upto 24 hours.",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "latitude",
              "req" => true,
              "short" => "Same as the latitude passed in the request.",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "req" => true,
              "short" => "Same as the longitude passed in the request.",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "now",
              "req" => true,
              "short" => "Forecast for the current hour.",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "ok",
              "req" => true,
              "type" => "`$ANY`",
            },
          ],
          "name" => "uvi",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 40.6943,
                        "kind" => "query",
                        "name" => "latitude",
                        "orig" => "latitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -73.9249,
                        "kind" => "query",
                        "name" => "longitude",
                        "orig" => "longitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/uvi",
                  "segments" => [
                    {
                      "lit" => "uvi",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "latitude",
                      "longitude",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "uvi",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreeUvIndexFeatures.make_feature(name)
  end
end

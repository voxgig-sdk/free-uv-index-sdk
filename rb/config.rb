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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$ARRAY`",
            },
            {
              "name" => "history",
              "req" => true,
              "type" => "`$ARRAY`",
            },
            {
              "name" => "latitude",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "req" => true,
              "type" => "`$NUMBER`",
            },
            {
              "name" => "now",
              "req" => true,
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
                  "parts" => [
                    "uvi",
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

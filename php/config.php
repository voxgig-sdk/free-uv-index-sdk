<?php
declare(strict_types=1);

// FreeUvIndex SDK configuration

class FreeUvIndexConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeUvIndex",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://currentuvindex.com/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "uvi" => [],
                ],
            ],
            "entity" => [
        'uvi' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'forecast',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'history',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'latitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'longitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'now',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'ok',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 5,
            ],
          ],
          'name' => 'uvi',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 40.6943,
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => -73.9249,
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/uvi',
                  'parts' => [
                    'uvi',
                  ],
                  'select' => [
                    'exist' => [
                      'latitude',
                      'longitude',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreeUvIndexFeatures::make_feature($name);
    }
}

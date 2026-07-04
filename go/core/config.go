package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FreeUvIndex",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://currentuvindex.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"uvi": map[string]any{},
			},
		},
		"entity": map[string]any{
			"uvi": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "forecast",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "history",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "latitude",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "longitude",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "now",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "ok",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
				},
				"name": "uvi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": 40.6943,
											"kind": "query",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"example": -73.9249,
											"kind": "query",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
								},
								"method": "GET",
								"orig": "/uvi",
								"parts": []any{
									"uvi",
								},
								"select": map[string]any{
									"exist": []any{
										"latitude",
										"longitude",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

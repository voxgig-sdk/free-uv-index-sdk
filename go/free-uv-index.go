package voxgigfreeuvindexsdk

import (
	"github.com/voxgig-sdk/free-uv-index-sdk/core"
	"github.com/voxgig-sdk/free-uv-index-sdk/entity"
	"github.com/voxgig-sdk/free-uv-index-sdk/feature"
	_ "github.com/voxgig-sdk/free-uv-index-sdk/utility"
)

// Type aliases preserve external API.
type FreeUvIndexSDK = core.FreeUvIndexSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreeUvIndexEntity = core.FreeUvIndexEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreeUvIndexError = core.FreeUvIndexError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewUviEntityFunc = func(client *core.FreeUvIndexSDK, entopts map[string]any) core.FreeUvIndexEntity {
		return entity.NewUviEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreeUvIndexSDK = core.NewFreeUvIndexSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

# FreeUvIndex SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreeUvIndexUtility.registrar = ->(u) {
  u.clean = FreeUvIndexUtilities::Clean
  u.done = FreeUvIndexUtilities::Done
  u.make_error = FreeUvIndexUtilities::MakeError
  u.feature_add = FreeUvIndexUtilities::FeatureAdd
  u.feature_hook = FreeUvIndexUtilities::FeatureHook
  u.feature_init = FreeUvIndexUtilities::FeatureInit
  u.fetcher = FreeUvIndexUtilities::Fetcher
  u.make_fetch_def = FreeUvIndexUtilities::MakeFetchDef
  u.make_context = FreeUvIndexUtilities::MakeContext
  u.make_options = FreeUvIndexUtilities::MakeOptions
  u.make_request = FreeUvIndexUtilities::MakeRequest
  u.make_response = FreeUvIndexUtilities::MakeResponse
  u.make_result = FreeUvIndexUtilities::MakeResult
  u.make_point = FreeUvIndexUtilities::MakePoint
  u.make_spec = FreeUvIndexUtilities::MakeSpec
  u.make_url = FreeUvIndexUtilities::MakeUrl
  u.param = FreeUvIndexUtilities::Param
  u.prepare_auth = FreeUvIndexUtilities::PrepareAuth
  u.prepare_body = FreeUvIndexUtilities::PrepareBody
  u.prepare_headers = FreeUvIndexUtilities::PrepareHeaders
  u.prepare_method = FreeUvIndexUtilities::PrepareMethod
  u.prepare_params = FreeUvIndexUtilities::PrepareParams
  u.prepare_path = FreeUvIndexUtilities::PreparePath
  u.prepare_query = FreeUvIndexUtilities::PrepareQuery
  u.result_basic = FreeUvIndexUtilities::ResultBasic
  u.result_body = FreeUvIndexUtilities::ResultBody
  u.result_headers = FreeUvIndexUtilities::ResultHeaders
  u.transform_request = FreeUvIndexUtilities::TransformRequest
  u.transform_response = FreeUvIndexUtilities::TransformResponse
}

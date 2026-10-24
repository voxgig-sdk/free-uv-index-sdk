# FreeUvIndex SDK utility: prepare_body
require_relative 'media'
module FreeUvIndexUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FreeUvIndexUtilities.raw_body(ctx.reqdata) if FreeUvIndexUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

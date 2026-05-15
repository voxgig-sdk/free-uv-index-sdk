# FreeUvIndex SDK utility: make_context
require_relative '../core/context'
module FreeUvIndexUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreeUvIndexContext.new(ctxmap, basectx)
  }
end

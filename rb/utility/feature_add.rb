# FreeUvIndex SDK utility: feature_add
module FreeUvIndexUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

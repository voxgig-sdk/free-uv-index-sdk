# FreeUvIndex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreeUvIndexFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeUvIndexBaseFeature.new
    when "ratelimit"
      FreeUvIndexRatelimitFeature.new
    when "retry"
      FreeUvIndexRetryFeature.new
    when "test"
      FreeUvIndexTestFeature.new
    when "timeout"
      FreeUvIndexTimeoutFeature.new
    else
      FreeUvIndexBaseFeature.new
    end
  end
end

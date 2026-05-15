# FreeUvIndex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreeUvIndexFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeUvIndexBaseFeature.new
    when "test"
      FreeUvIndexTestFeature.new
    else
      FreeUvIndexBaseFeature.new
    end
  end
end

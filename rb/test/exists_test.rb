# FreeUvIndex SDK exists test

require "minitest/autorun"
require_relative "../FreeUvIndex_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreeUvIndexSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

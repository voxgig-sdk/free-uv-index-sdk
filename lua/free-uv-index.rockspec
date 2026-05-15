package = "voxgig-sdk-free-uv-index"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/free-uv-index-sdk.git"
}
description = {
  summary = "FreeUvIndex SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["free-uv-index_sdk"] = "free-uv-index_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

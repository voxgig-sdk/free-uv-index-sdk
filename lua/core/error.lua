-- FreeUvIndex SDK error

local FreeUvIndexError = {}
FreeUvIndexError.__index = FreeUvIndexError


function FreeUvIndexError.new(code, msg, ctx)
  local self = setmetatable({}, FreeUvIndexError)
  self.is_sdk_error = true
  self.sdk = "FreeUvIndex"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreeUvIndexError:error()
  return self.msg
end


function FreeUvIndexError:__tostring()
  return self.msg
end


return FreeUvIndexError

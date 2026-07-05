-- Typed models for the FreeUvIndex SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Uvi
---@field forecast table
---@field history table
---@field latitude number
---@field longitude number
---@field now table
---@field ok any

---@class UviListMatch
---@field forecast? table
---@field history? table
---@field latitude? number
---@field longitude? number
---@field now? table
---@field ok? any

local M = {}

return M

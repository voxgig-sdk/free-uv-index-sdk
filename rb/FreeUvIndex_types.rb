# frozen_string_literal: true

# Typed models for the FreeUvIndex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Uvi entity data model.
#
# @!attribute [rw] forecast
#   @return [Array]
#
# @!attribute [rw] history
#   @return [Array]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] now
#   @return [Hash]
#
# @!attribute [rw] ok
#   @return [Object]
Uvi = Struct.new(
  :forecast,
  :history,
  :latitude,
  :longitude,
  :now,
  :ok,
  keyword_init: true
)

# Request payload for Uvi#list.
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
UviListMatch = Struct.new(
  :latitude,
  :longitude,
  keyword_init: true
)


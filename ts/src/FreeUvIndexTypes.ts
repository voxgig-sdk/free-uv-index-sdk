// Typed models for the FreeUvIndex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Uvi {
  forecast: any[]
  history: any[]
  latitude: number
  longitude: number
  now: Record<string, any>
  ok: any
}

export type UviListMatch = Partial<Uvi>


# Typed models for the FreeUvIndex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Uvi:
    forecast: list
    history: list
    latitude: float
    longitude: float
    now: dict
    ok: Any


@dataclass
class UviListMatch:
    forecast: Optional[list] = None
    history: Optional[list] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    now: Optional[dict] = None
    ok: Optional[Any] = None


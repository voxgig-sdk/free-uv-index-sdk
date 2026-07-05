<?php
declare(strict_types=1);

// Typed models for the FreeUvIndex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Uvi entity data model. */
class Uvi
{
    public array $forecast;
    public array $history;
    public float $latitude;
    public float $longitude;
    public array $now;
    public mixed $ok;
}

/** Request payload for Uvi#list. */
class UviListMatch
{
    public ?array $forecast = null;
    public ?array $history = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?array $now = null;
    public mixed $ok = null;
}


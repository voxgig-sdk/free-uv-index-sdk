<?php
declare(strict_types=1);

// FreeUvIndex SDK utility: feature_add

class FreeUvIndexFeatureAdd
{
    public static function call(FreeUvIndexContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

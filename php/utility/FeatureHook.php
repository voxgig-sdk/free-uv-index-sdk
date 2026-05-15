<?php
declare(strict_types=1);

// FreeUvIndex SDK utility: feature_hook

class FreeUvIndexFeatureHook
{
    public static function call(FreeUvIndexContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}

<?php
declare(strict_types=1);

// FreeUvIndex SDK base feature

class FreeUvIndexBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreeUvIndexContext $ctx, array $options): void {}
    public function PostConstruct(FreeUvIndexContext $ctx): void {}
    public function PostConstructEntity(FreeUvIndexContext $ctx): void {}
    public function SetData(FreeUvIndexContext $ctx): void {}
    public function GetData(FreeUvIndexContext $ctx): void {}
    public function GetMatch(FreeUvIndexContext $ctx): void {}
    public function SetMatch(FreeUvIndexContext $ctx): void {}
    public function PrePoint(FreeUvIndexContext $ctx): void {}
    public function PreSpec(FreeUvIndexContext $ctx): void {}
    public function PreRequest(FreeUvIndexContext $ctx): void {}
    public function PreResponse(FreeUvIndexContext $ctx): void {}
    public function PreResult(FreeUvIndexContext $ctx): void {}
    public function PreDone(FreeUvIndexContext $ctx): void {}
    public function PreUnexpected(FreeUvIndexContext $ctx): void {}
}

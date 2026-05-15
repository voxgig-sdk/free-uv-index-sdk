package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewUviEntityFunc func(client *FreeUvIndexSDK, entopts map[string]any) FreeUvIndexEntity


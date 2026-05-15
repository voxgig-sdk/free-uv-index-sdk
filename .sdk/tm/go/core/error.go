package core

type FreeUvIndexError struct {
	IsFreeUvIndexError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreeUvIndexError(code string, msg string, ctx *Context) *FreeUvIndexError {
	return &FreeUvIndexError{
		IsFreeUvIndexError: true,
		Sdk:              "FreeUvIndex",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreeUvIndexError) Error() string {
	return e.Msg
}

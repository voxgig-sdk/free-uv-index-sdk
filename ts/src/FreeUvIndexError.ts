
import { Context } from './Context'


class FreeUvIndexError extends Error {

  isFreeUvIndexError = true

  sdk = 'FreeUvIndex'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreeUvIndexError
}


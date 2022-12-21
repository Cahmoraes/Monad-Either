class Left<L, R> {
  readonly value: L
  constructor(value: L) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return true
  }

  isRight(): this is Right<L, R> {
    return false
  }
}

class Right<L, R> {
  readonly value: R
  constructor(value: R) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return false
  }

  isRight(): this is Right<L, R> {
    return true
  }
}

export type EitherType<L, R> = Left<L, R> | Right<L, R>
export const left = <L, R>(left: L) => new Left<L, R>(left)
export const right = <L, R>(right: R) => new Right<L, R>(right)

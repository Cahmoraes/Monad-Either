declare class Left<L, R> {
    readonly value: L;
    constructor(value: L);
    isLeft(): this is Left<L, R>;
    isRight(): this is Right<L, R>;
}
declare class Right<L, R> {
    readonly value: R;
    constructor(value: R);
    isLeft(): this is Left<L, R>;
    isRight(): this is Right<L, R>;
}
type EitherType<L, R> = Left<L, R> | Right<L, R>;
declare const left: <L, R>(left: L) => Left<L, R>;
declare const right: <L, R>(right: R) => Right<L, R>;

type Either_EitherType<L, R> = EitherType<L, R>;
declare const Either_left: typeof left;
declare const Either_right: typeof right;
declare namespace Either {
  export {
    Either_EitherType as EitherType,
    Either_left as left,
    Either_right as right,
  };
}

export { Either, EitherType };

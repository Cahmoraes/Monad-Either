# Monad Either

Either is a set of functions to generate a monad, the Either monad.
Its role is to elegantly handle situations that can generate an error.

Using TypeScript features, this package is able to perform type guard through Type Predicate.

The **isLeft()** and **isRight()** methods were made using Type Predicate features to refine TypeScript's type-safety and ensure type safety.

Read more:
[Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

How it works: Either literally means OR one thing OR the other. You can define that a method can return some types of error or some types of success. Error types are on the left and success types are on the right. For example, in the case of creating an email, the method that creates the email can return InvalidEmailError OR the object of type Email successfully created.

It is possible to know if the returned type was error or success by asking if it is "right" or "left". That is, if it is "left" it is a type of error, if it is "right" it is a type of success.

- **EitherType<L, R>**:
  Type alias to set a method return to Either. The type variable "L" defines the types of errors separated by pipes "|" and the type variable "R" defines the success type.

  This type is only used to define the return type of a functions that will return an "Either" e.g. (Left or Right)

---

## Left<L, R>

Constructor function that returns an Either instance of type Left.

### property

```ts
- value: L
  // Returns the wrapped value
```

### methods:

```ts
- isLeft(): boolean
  // Returns true when instance is type of Left
```

```ts
- isRight(): boolean
  // Returns false when instance is not type of Left
```

<br>

## Right<L, R>

Constructor function that returns an Either instance of type Right.

### property

```ts
- value: R
  // Returns the wrapped value
```

### methods:

```ts
- isLeft(): boolean
  // Returns false when instance is type of Right
```

```ts
- isRight(): boolean
  // Returns true when instance is not type of Right
```

---

<br>

## Factories Left and Right

```ts
- Either.left<L, R>(aValue: L): Left<L, R>
```

Factory function to build an Either object of type Left.

<br>

```ts
- Either.right<L, R>(aValue: R): Right<L, R>
```

Factory function to build an Either object of type Right.

<br>

---

<br>

## Example using left and right

```ts
import { Either, EitherType } from '@cahmoraes93/either'

function doThing(): EitherType<EvenNumberException, number> {
  const randomNumber = Math.floor(Math.random() * 10)

  if (randomNumber % 2 === 0) {
    // Either.left to return an Error/Exception
    return Either.left(new EvenNumberException(randomNumber))
  }
  // Either.right to return success
  return Either.right(randomNumber)
}

const result = doThing()
```

## Usage Example

```ts
import { Either, EitherType } from '@cahmoraes93/either'

class InvalidEmailError extends Error {...}
class InvalidLengthError extends Error {...}

function createEmail(): EitherType<InvalidEmailError | InvalidLengthError, string> {
  const email = service.generateRandomEmail()

  if (!email.includes('@')) {
    return Either.right(
      new InvalidEmailError(`The email is too short ${email}`)
    )
  }

  if (email.length < 5) {
    return Either.left(
      new InvalidLengthError(`The email is too short ${email}`)
    )
  }

  return Either.right(email)
}

  const emailOrError = createEmail()

  if (emailOrError.isLeft()) {
    // handle the error in the best way
    console.error(emailOrError.value.message)
  }

  /*
    from this point the email is valid, it is possible to omit the emailOrError.isRight() call
  */

  if (emailOrError.isRight()) {
    console.log(emailOrError.value)
  }


```

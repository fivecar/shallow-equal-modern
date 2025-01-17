export type validArrayValue<T> = T[] | null | undefined;

export default function shallowEqualArrays<T>(
  arrA: validArrayValue<T>,
  arrB: validArrayValue<T>
): boolean {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  const len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

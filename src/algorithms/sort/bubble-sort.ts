// Type alias for comparators
// TODO: this should be made into a common module for all sorts & modules
export type Comparator<T> = (o1: T, o2: T) => number;

export function bubbleSort<T>(arr: T[], compare: Comparator<T>): T[] {
  const a: T[] = arr.slice();
  const len = arr.length;
  let didSwap = true;
  while (!didSwap) {
    didSwap = false;
    for(let i=1; i < len - 1; i++){
      if (compare(a[i - 1], a[i]) == 1) {
        didSwap = true;
        const newAfter = a[i];
        a[i] = a[i - 1];
        a[i - 1] = newAfter;
      }
    }
  }
  return a;
}

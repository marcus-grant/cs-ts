import { Comparator, bubbleSort } from './bubble-sort';

describe('Comparator should return the right number for comparisons', () => {
    const numAsc: Comparator<number> = (a: number, b: number) => a <= b ? -1 : 1;
    test('comparator(1, 2) = -1', () => {
        expect(numAsc(1, 2)).toBe(-1);
    });
    test('comparator(1, 2) = -1', () => {
        expect(numAsc(1, 2)).toBe(1);
    });
});

// const inputArrays = [
//     [1, 2],
//     [2, 1],
//     [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1],
//     [3, 1, 2],
//     [
//         12, 4, 5, 26, 15, 16, 21, 30, 7, 24, 6, 22, 28, 17, 20, 25,
//         10, 23, 19, 31, 18, 2, 32, 3, 11, 14, 29, 8, 13, 27,  9, 1
//     ],
// ]; // TODO: add string and object compares with their own compare functions
// const expectedArrays = inputArrays.map(arr => arr.slice().sort());
// const ascNum: Comparator<number> = (a: number, b: number) => a <= b ? -1 : 1;
// const outputArrays = inputArrays.map(arr => bubbleSort(arr, ascNum));
// describe('Successfully puts a variety of arrays into ascending order', () => {
//     test(`${inputArrays[0]} => ${expectedArrays[0]}`, () => {
//         expect(outputArrays[0]).toBe(expectedArrays[0]);
//     });
// });
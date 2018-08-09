/*
import {
  append,
  ILinkedList,
  insertNodeAt,
  nodeAt,
  removeNodeAt,
} from '../src/singly-linked-list';

import { expect } from 'chai';

type AnyList = ILinkedList<any>;
type NumList = ILinkedList<number>;
const emptyList: AnyList = {};
const thirdNode: NumList = { data: 27, next: undefined };
const secondNode: NumList = { data: 13, next: thirdNode };
const firstNode: NumList = { data: 42, next: secondNode };
const ll: NumList = firstNode;
describe('linkedlist.nodeAt()', () => {
  it('should get the correct node, when in range', () => {
    const firstResult = nodeAt(ll, 0);
    expect(firstResult).to.eql(firstNode);
    const secondResult = nodeAt(ll, 1);
    expect(secondResult).to.eql(secondNode);
    const thirdResult = nodeAt(ll, 2);
    expect(thirdResult).to.equal(thirdNode);
  });
  it('should return undef if out of range index given', () => {
    expect(nodeAt(ll, 100)).to.equal(undefined);
  });
  it('should return undef if negative index given', () => {
    expect(nodeAt(ll, -1)).to.equal(undefined);
  });
  it('should return undef if start of empty list given', () => {
    expect(nodeAt(undefined, 0)).to.equal(undefined);
  });
});

describe('linkedlist.insertNodeAt()', () => {
  let testList: NumList;
  const expectedList0: NumList = undefined; // empty
  it('should return undefined if inserting below 0 index', () => {
    // const list1 = insertNodeIntoListAtIndex(testList, testNode1, -1);
    expect(insertNodeAt(testList, { data: -13, next: undefined }, -1)).to.eql(undefined);
  });
  // [] -> [12]
  it('should add a node to an empty list', () => {
    // insert @ 0 -> [12]
    testList = insertNodeAt(testList, { data: 12, next: undefined }, 0);
    expect(testList).to.eql({ data: 12, next: undefined });
  });
  // [10] -> [10, 12]
  it('should add a node to a single member list @ beginning', () => {
    // insert @ 0 -> [10, 12]
    // console.log(testList);
    testList = insertNodeAt(testList, { data: 10, next: undefined }, 0);
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!! RESULT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(testList);
    expect(testList).to.eql({
      data: 10, next: {
        data: 12, next: undefined,
      },
    });
  });
  // [10, 12] -> [10, 12, 13]
  it('should add a node to end of list', () => {
    // insert @ 1 -> [10, 12, 13]
    testList = insertNodeAt(testList, { data: 13, next: undefined }, 2);
    expect(testList).to.eql({
      data: 10, next: {
        data: 12, next: {
          data: 13, next: undefined,
        },
      },
    });
  });
  // [10, 12, 13] -> [10, 11, 12, 13]
  it('should add a node in the middle of the list', () => {
    // insert @ 1 -> [10, 11, 12, 13]
    expect(
      insertNodeAt(testList, { data: 11, next: undefined }, 1))
      .to.eql({
        data: 10, next: {
          data: 11, next: {
            data: 12, next: {
              data: 13, next: undefined,
            },
          },
        },
      });
  });
  it('should return undefined if out of maximum range', () => {
    // insert @ 5 -> [10, 11, 12, 13]
    expect(insertNodeAt(testList, { data: 14, next: undefined }, 5))
      .to.equal(undefined);
  });
});

describe('linkedlist.removeNodeAt()', () => {
  let testList: NumList = {
    data: 10, next: {
      data: 11, next: {
        data: 12, next: {
          data: 13, next: undefined,
        },
      },
    },
  };
  it('should return same list if index < 0', () => {
    expect(removeNodeAt(testList, -1)).to.eql(testList);
  });
  it('should return correct list after removing 1st node', () => {
    testList = removeNodeAt(testList, 0);
    expect(testList).to.eql({
      data: 11, next: {
        data: 12, next: {
          data: 13, next: undefined,
        },
      },
    });
  });
  it('should return correct list after removing a surrounded node', () => {
    testList = removeNodeAt(testList, 1);
    expect(testList).to.eql({
      data: 11, next: {
        data: 13, next: undefined,
      },
    });
  });
  it('should return correct list after removing end node', () => {
    testList = removeNodeAt(testList, 1);
    expect(testList).to.eql({
      data: 11, next: undefined,
    });
  });
  it('should return same list after trying to remove a node after end node', () => {
    testList = removeNodeAt(testList, 1);
    expect(testList).to.eql({
      data: 11, next: undefined,
    });
  });
  it('should return undefined after removing only remaining node', () => {
    testList = removeNodeAt(testList, 0);
    expect(testList).to.eql(undefined);
  });

  describe('linkedlist.append()', () => {
    const testA: ILinkedList<string> = {
      data: 'a', next: {
        data: 'bc', next: undefined,
      },
    };
    const testB: ILinkedList<string> = {
      data: 'x', next: {
        data: 'y', next: {
          data: 'z', next: undefined,
        },
      },
    };
    it('should return undefined if both params are', () => {
      expect(append(undefined, undefined)).to.equal(undefined);
    });
    it('should return 1st arg if 2nd is undefined', () => {
      expect(append(Object.assign(testA), undefined)).to.eql(testA);
    });
    it('should return 2nd arg if 1st is undefined', () => {
      expect(append(undefined, Object.assign(testB))).to.eql(testB);
    });
    it('should be able to combine two lists in order', () => {
      const expectedAppend: ILinkedList<string> = {
        data: 'a', next: {
          data: 'bc', next: {
            data: 'x', next: {
              data: 'y', next: {
                data: 'z', next: undefined,
              },
            },
          },
        },
      };
      expect(append(testA, testB)).to.eql(expectedAppend);
    });
  });
});
*/
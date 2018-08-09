export interface ILinkedList<T> {
  data?: T;
  next?: ILinkedList<T>;
}

type LL<T> = ILinkedList<T>;
type LLO<T> = LL<T> | undefined;

function traverse<T>(list: LL<T>, tillIndex?: number, hiddenIter = 0): LLO<T> {
  if (list.next === undefined) {
    if (!tillIndex) return list;
    if (hiddenIter < tillIndex) return undefined;
    return list;
  }
  if (hiddenIter === tillIndex) return list;
  return traverse(list.next, tillIndex, hiddenIter + 1);
}

export function nodeAt<T>(list: LL<T>, index: number) {
  // low range exception
  if (index < 0) return undefined;

  // empty list
  if (!list) return undefined;

  // handles the normal cases and above range case
  return traverse(list, index);
}

function lastNode<T>(list: LL<T>): LLO<T> {
  return traverse(list);
}

export function append<T>(a: LLO<T>, b: LLO<T>): LLO<T> {
  // if the first portion is missing, then appending just returns the other part.
  if (!a) return b;
  if (!b) return a; // vice versa

  const lastA = lastNode(a);
  lastA.next = b;
  return a;
}

export function insertNodeAt<T>(
  list: LL<T>,
  node: LL<T>,
  index: number,
): LLO<T> {

  // below range exception, just return old list
  if (index < 0) return undefined;

  // get index -= 1 to link node before new one with
  const nodeBefore = nodeAt<T>(list, index - 1);
  // index is the location of the node that will follow the new one
  const nodeAfter = nodeAt<T>(list, index);

  // if index == 0, then this will go to the beginning
  if (index === 0) {
    // ... and if there's already something at index 0...
    // ... move current node there to follow the new node being placed there.
    if (nodeAfter) {
      node.next = nodeAfter;
      return node;
    } // otherwise this is an empty list, just return the node as the start of it.
    return node;
  }

  // now index is definetely > 0
  // but we could still be out of the maximum range, in which case return undefined
  if (!nodeBefore) return undefined;

  // now there's definately a node before the new one to link to the new one
  nodeBefore.next = node;

  // and if there is a node where this one is being put, set it after the new one
  // if it's undefined the new node will have it's 'next' undefined and it will be...
  // ...the last element in the list
  node.next = nodeAfter;

  return list;
}

export function removeNodeAt<T>(list: LL<T>, index: number): LLO<T> {
  if (index < 0) return list;
  // we're interested in the two nodes around the node at the index.
  const nodeBefore = nodeAt<T>(list, index - 1);
  const nodeAfter = nodeAt<T>(list, index + 1);

  if  (!nodeBefore) { // no node before index...
    if (nodeAfter) { // then 'nodeAfter' is the new start of the list
      return nodeAfter;
    } // if there's no node before or after, then the last node is being removed
    return undefined;
  }

  // now there's definitely a node before the index.
  // so we definitely need to link the node before to the node after.
  // if it exists, it will be linked, if not it will just be the end of the list
  nodeBefore.next = nodeAfter;
  return list;
}

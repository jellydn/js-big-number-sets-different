/**
 * Return the differet between set1 with set2
 * @param set1 
 * @param set2 
 */
export function different(set1, set2) {
  const { fromNumber, toNumber } = set1;
  const { fromNumber: fromNumber2, toNumber: toNumber2 } = set2;
  // no intersect
  if (toNumber < fromNumber2 || fromNumber > toNumber2) {
    return set1;
  }
  // set2 is superset set1
  if (fromNumber >= fromNumber2 && toNumber <= toNumber2) {
    return setBuilder(0, 0);
  }
  // set1 is superset of set2
  if (fromNumber < fromNumber2 && toNumber > toNumber2) {
    return [
      setBuilder(fromNumber, fromNumber2 - 1),
      setBuilder(toNumber2 + 1, toNumber)
    ];
  }
  // otherwise, intersect
  // left overlapse
  if (fromNumber < fromNumber2) {
    return setBuilder(fromNumber, fromNumber2 - 1);
  } else {
    // right overlapse
    return setBuilder(toNumber2 + 1, toNumber);
  }

  throw Error(`missing for case`, set1, set2);
}

/**
 * union two sets
 * @param set1 
 * @param set2 
 */
export function union(set1, set2) {
  const { fromNumber, toNumber } = set1;
  const { fromNumber: fromNumber2, toNumber: toNumber2 } = set2;
  // no intersect
  if (toNumber < fromNumber2 - 1 || fromNumber > toNumber2 + 1) {
    return [set1, set2];
  }
  // set2 is superset set1
  if (fromNumber >= fromNumber2 && toNumber <= toNumber2) {
    return set2;
  }
  // set1 is superset of set2
  if (fromNumber < fromNumber2 && toNumber > toNumber2) {
    return set1;
  }
  // otherwise, intersect
  // left overlapse
  if (fromNumber < fromNumber2) {
    return setBuilder(fromNumber, Math.max(toNumber, toNumber2));
  } else {
    // right overlapse
    return setBuilder(fromNumber2, Math.max(toNumber, toNumber2));
  }

  throw Error(`missing for case`, set1, set2);
}

/**
 * check set2 is superset of set1
 * @param object set1 
 * @param object set2 
 */
export function isSuperset(set1, set2) {
  const { fromNumber, toNumber } = set1;
  const { fromNumber: fromNumber2, toNumber: toNumber2 } = set2;
  const result = fromNumber >= fromNumber2 && toNumber <= toNumber2;
  return result;
}

/**
 * Set builder
 * @param int fromNumber 
 * @param init toNumber 
 * @return object
 */
export function setBuilder(fromNumber, toNumber) {
  return {
    fromNumber: fromNumber > 0 ? fromNumber : 0,
    toNumber: toNumber > 0 ? toNumber : 0
  };
}

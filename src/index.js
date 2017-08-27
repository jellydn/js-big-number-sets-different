import { different, union, isSuperset, setBuilder } from "./set";
/**
 * Result is firstArray thatr emove intersect with secondArray
 * @param array firstArray 
 * @param array secondArray 
 * @return array
 */
export function substract(firstArray, secondArray) {
  const result = [];
  for (let item of firstArray) {
    let currrentItem;
    let tempSets = [];
    for (let negativeItem of secondArray) {
      if (tempSets.length) {
        const newSets = [];
        for (let existItem of flattened(tempSets)) {
          newSets.push(different(existItem, negativeItem));
        }
        tempSets = flattened(newSets);
      } else {
        tempSets.push(different(item, negativeItem));
      }
    }
    result.push(unionAllSets(tempSets));
  }

  return unionAllSets(result);
}

/**
 * Union all sets
 * @param array items 
 */
function unionAllSets(items) {
  let unionSets = [];
  flattened(items).forEach(item => {
    unionSets = orderSetsBy(flattened(unionSets));
    if (unionSets.length) {
      if (!isExist(unionSets, item)) {
        for (let currrentItem of unionSets) {
          const newSets = union(currrentItem, item);
          if (Array.isArray(newSets)) {
            for (let newItem of newSets) {
              if (!isExist(unionSets, newItem)) {
                unionSets.push(newItem);
              }
            }
            unionSets = orderSetsBy(flattened(unionSets));
          } else {
            if (!isExist(unionSets, newSets)) {
              unionSets.push(newSets);
              unionSets = flattened(unionSets);
            }
          }
        }
      }
    } else {
      if (!isExist(unionSets, item)) {
        unionSets.push(item);
        unionSets = orderSetsBy(flattened(unionSets));
      }
    }
  });
  const result = [];
  for (let item of unionSets) {
    if (!isExist(result, item)) result.push(item);
  }
  return orderSetsBy(result, false);
}

/**
 * Check findItem is exist on sets or not
 * @param array sets 
 * @param object findItem 
 */
function isExist(sets, findItem) {
  const found = sets.find(
    item =>
      item.fromNumber === findItem.fromNumber &&
      item.toNumber === findItem.toNumber
  );
  const hasSupperset = sets.find(item => isSuperset(findItem, item));

  return found || hasSupperset;
}

/**
 * flatten all array
 * @param array items 
 */
function flattened(items) {
  return items.reduce((a, b) => {
    return a.concat(b);
  }, []);
}

/**
 * Sort array by toNumber desc/asc
 * @param array items 
 * @param bool asc 
 */
function orderSetsBy(items, asc = true) {
  return items.sort((a, b) => {
    if (asc) {
      return a.toNumber <= b.toNumber;
    } else {
      return a.toNumber >= b.toNumber;
    }
  });
}

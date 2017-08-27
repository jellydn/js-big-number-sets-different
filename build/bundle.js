/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.substract = substract;

var _set = __webpack_require__(1);

/**
 * Result is firstArray thatr emove intersect with secondArray
 * @param array firstArray 
 * @param array secondArray 
 * @return array
 */
function substract(firstArray, secondArray) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = firstArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      var currrentItem = void 0;
      var tempSets = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = secondArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var negativeItem = _step2.value;

          if (tempSets.length) {
            var newSets = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = flattened(tempSets)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var existItem = _step3.value;

                newSets.push((0, _set.different)(existItem, negativeItem));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            tempSets = flattened(newSets);
          } else {
            tempSets.push((0, _set.different)(item, negativeItem));
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      result.push(unionAllSets(tempSets));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return unionAllSets(result);
}

/**
 * Union all sets
 * @param array items 
 */
function unionAllSets(items) {
  var unionSets = [];
  flattened(items).forEach(function (item) {
    unionSets = orderSetsBy(flattened(unionSets));
    if (unionSets.length) {
      if (!isExist(unionSets, item)) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = unionSets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var currrentItem = _step4.value;

            var newSets = (0, _set.union)(currrentItem, item);
            if (Array.isArray(newSets)) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = newSets[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var newItem = _step5.value;

                  if (!isExist(unionSets, newItem)) {
                    unionSets.push(newItem);
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
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
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
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
  var result = [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = unionSets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var item = _step6.value;

      if (!isExist(result, item)) result.push(item);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return orderSetsBy(result, false);
}

/**
 * Check findItem is exist on sets or not
 * @param array sets 
 * @param object findItem 
 */
function isExist(sets, findItem) {
  var found = sets.find(function (item) {
    return item.fromNumber === findItem.fromNumber && item.toNumber === findItem.toNumber;
  });
  var hasSupperset = sets.find(function (item) {
    return (0, _set.isSuperset)(findItem, item);
  });

  return found || hasSupperset;
}

/**
 * flatten all array
 * @param array items 
 */
function flattened(items) {
  return items.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

function orderSetsBy(items) {
  var asc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return items.sort(function (a, b) {
    if (asc) {
      return a.toNumber <= b.toNumber;
    } else {
      return a.toNumber >= b.toNumber;
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.different = different;
exports.union = union;
exports.isSuperset = isSuperset;
exports.setBuilder = setBuilder;
/**
 * Return the differet between set1 with set2
 * @param set1 
 * @param set2 
 */
function different(set1, set2) {
  var fromNumber = set1.fromNumber,
      toNumber = set1.toNumber;
  var fromNumber2 = set2.fromNumber,
      toNumber2 = set2.toNumber;
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
    return [setBuilder(fromNumber, fromNumber2 - 1), setBuilder(toNumber2 + 1, toNumber)];
  }
  // otherwise, intersect
  // left overlapse
  if (fromNumber < fromNumber2) {
    return setBuilder(fromNumber, fromNumber2 - 1);
  } else {
    // right overlapse
    return setBuilder(toNumber2 + 1, toNumber);
  }

  throw Error("missing for case", set1, set2);
}

/**
 * union two sets
 * @param set1 
 * @param set2 
 */
function union(set1, set2) {
  var fromNumber = set1.fromNumber,
      toNumber = set1.toNumber;
  var fromNumber2 = set2.fromNumber,
      toNumber2 = set2.toNumber;
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

  throw Error("missing for case", set1, set2);
}

/**
 * check set2 is superset of set1
 * @param object set1 
 * @param object set2 
 */
function isSuperset(set1, set2) {
  var fromNumber = set1.fromNumber,
      toNumber = set1.toNumber;
  var fromNumber2 = set2.fromNumber,
      toNumber2 = set2.toNumber;

  var result = fromNumber >= fromNumber2 && toNumber <= toNumber2;
  return result;
}

/**
 * Set builder
 * @param int fromNumber 
 * @param init toNumber 
 * @return object
 */
function setBuilder(fromNumber, toNumber) {
  return {
    fromNumber: fromNumber > 0 ? fromNumber : 0,
    toNumber: toNumber > 0 ? toNumber : 0
  };
}

/***/ })
/******/ ]);
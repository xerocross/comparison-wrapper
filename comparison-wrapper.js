module.exports.getComparisonWrapper = function (compareFunction) {
  return function(leftElement, comparisonString, rightElement) {
    switch (comparisonString) {
      case "<":
        return compareFunction(leftElement, rightElement) < 0;
        break;
      case "<=":
        return compareFunction(leftElement, rightElement) <= 0;
        break;
      case ">":
        return compareFunction(leftElement, rightElement) > 0;
        break;
      case ">=":
        return compareFunction(leftElement, rightElement) >= 0;
        break;
      return undefined;
    }
  }
}

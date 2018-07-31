# Comparison Wrapper

A wrapper for JavaScript arrays useful for making comparison functions more readable.

## Usage

Given an array `arr` and a comparison function `compareFunction` we generate the
wrapper by executing for example
```
var e = getComparisonWrapper(compareFunction);
```
You can assign the result of `getComparisonWrapper` to any variable you want.  
However, consider this example we could use it as follows
```
if (e(arr[i], "<=", arr[j])) {
  //do something
}
if (e(arr[i], "<", arr[j])) {
  //do something
}
if (e(arr[i], ">", arr[j])) {
  //do something
}
if (e(arr[i], ">=", arr[j])) {
  //do something
}
```

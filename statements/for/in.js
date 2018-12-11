#!/usr/bin/env js52

//
// Iterating over array
//
var a = ['foo', 'bar', 'baz']
for (i in a) {
  print(i);
  // 0
  // 1
  // 2
}

//
// Iterating over keys in an associative array (hash / dict):
//
var d = {x: 'eggs', y: 'why'}

for (k in d) {
  print('d[' + k + '] = ' + d[k])
  // d[x] = eggs
  // d[y] = why
}

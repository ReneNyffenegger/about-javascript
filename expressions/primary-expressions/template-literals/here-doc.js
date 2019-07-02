function hereDoc(text) { // http://stackoverflow.com/a/5571069/180275
  return text.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

multilineString = hereDoc(function() {/*!        1st line

    3rd line

    5th line

    7ht line*/}
);

console.log(multilineString);

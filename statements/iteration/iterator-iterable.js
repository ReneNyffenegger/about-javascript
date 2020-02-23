let iterator = {
   vals  :['one', 'two', 'three', 'four', 'five'],
   cur   : 0 ,
   next: function() {
      return {
        value: this.vals[this.cur],
        done : this.cur ++ >= this.vals.length
      }
   }
};

let iterable = {
   [Symbol.iterator]: function() {
      return iterator;
   }
};

for (let num of iterable) {
   print(num);
}

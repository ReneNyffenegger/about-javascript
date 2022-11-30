function print(line) {
   document.getElementById('out').insertAdjacentText('beforeend', line+"\n");
}


class clsOne {
   constructor(num) {
      print("constructor of clsOne, num = " + num);
   }
}


class clsTwo {
   constructor(txt) {
      print("constructor of clsTwo, txt = " + txt);
   }
}


export { clsOne as default, clsTwo };

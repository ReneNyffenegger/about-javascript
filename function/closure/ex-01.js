function createClosure(arg_1, arg_2) {

   var txtVar = 'txt (var)';
   let txtLet = 'txt (let)';

   function func() {
      console.log('txtVar = ' + txtVar);
      console.log('txtLet = ' + txtLet);
      console.log('arg_1  = ' + arg_1 );
      console.log('arg_2  = ' + arg_2 );
   }

   txtVar = 'txt (var) has changed';
   txtLet = 'txt (let) has changed';

   return func;
}

function main() {

   var a1 = 'one';
   let a2 = 'two';

   var f1 = createClosure(a1, a2);

   a1 = 'ONE';
   a2 = 'TWO';

   var f2 = createClosure(a1, a2);

   f1();
   console.log('----');
   f2();

}

main();

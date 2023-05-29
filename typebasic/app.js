console.log("this is a ts file");
var fun1 = function () {
    var a = 10;
    var b = '12';
    var add = a + b;
    console.log(add);
    return add;
};
// const returnAdd:string = fun1();
// console.log('returnAdd', returnAdd);
var addFun = function (a, b) { return a + parseInt(b); };
var addfunReturn = addFun(1, '2').toString();
console.log(addfunReturn);

console.log("this is a ts file");
const fun1 = () => {
let a:number = 10;
let b:string = '12';
const add:string = a+b
console.log(add);

return add;
}
// const returnAdd:string = fun1();
// console.log('returnAdd', returnAdd);

const addFun = (a:any,b:string) =>  a+parseInt(b); 
 const addfunReturn:string = addFun(1,'2').toString();
console.log(addfunReturn);

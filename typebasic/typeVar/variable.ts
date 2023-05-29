const typeVar = () =>{

//premitiv type
const string1:string = "test string";
const number:number = 7;
const booleanType:boolean = false;
const undifineType:undefined = undefined;
const nullType:null = null;

//complex type
const emptyArr:[] = [];

const arr1:string[] = ['sanket'];

const numArr:number[] = [1,2,3,4,5,6,7,8];

const stingAndnumberArr: (string | number)[] = ['abc', 5];

type sub = 'sub';
type add = 'add';
type mul = 'mul';
type divi = 'divi';

const arrCustoms:(add | sub | mul | divi)[] = ['add','mul','divi','sub'];

// objects
//Should not do this

let obj1:{} = {};

obj1 = 'string';
obj1 = 123;

//should not do this

let objUser:
{
name: string,
age: number,
city?:string,
mob:number | undefined,
statusOfadd: sub | mul | divi | add,
nullOrString: string | null


}

={
name:'Sanket',
age:25,
city: 'Nagpur',
mob:undefined,
statusOfadd:'sub',
nullOrString:null

};

//objUser.test1 = 'test' not possible due to type checking

}
typeVar();
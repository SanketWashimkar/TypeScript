const addValue = (a:string , b:string):string =>{
const aValue:string = a.trim();
const bValue:string = b.trim().toUpperCase();

const newValue:string = aValue + bValue;

return newValue;

}
//const newValueReturn:string = addValue('Sanket', 'washimkar');

//console.log('newValueReturn',newValueReturn);

//complex

type userType ={
email:string,
name:string

}
type addUserReturnType = {
    email:string;
    name:string;
    id:number;
    date:any;

}

const addNewUser = (newUser:userType):addUserReturnType => {

    const id:number = Math.random();
    const newDate:any = new Date();


    return {

       name:newUser.name,
       email:newUser.email,
       id:id,
       date:newDate

    }

};


const userObj:userType = {
    email: 'arc@y.com',
    name: 'arc'
}
const newUser: addUserReturnType = addNewUser(userObj);

console.log('newUser',newUser)



const printUserUpperCase = (name:string):void  => {
    console.log(name.toUpperCase())
};

printUserUpperCase('vigo')
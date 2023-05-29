const checkType = () => {

type STATUSADD = 'status-add';

type STATUSSUB = 'status-sub';

let status: 'add' | 'sub' | 'mul' | 'div'|STATUSADD | STATUSSUB = 'add';
status = 'add';
status = 'sub';
status = 'div';
status = 'mul';
status = 'status-add';
status = 'status-sub';

let string1 = 'string1';

console.log('status',status,typeof status);
console.log('string1',string1, typeof string1);


//if (typeof status)
//status = mul; // will give type error 














}
checkType ();
var addValue = function (a, b) {
    var aValue = a.trim();
    var bValue = b.trim().toUpperCase();
    var newValue = aValue + bValue;
    return newValue;
};
var addNewUser = function (newUser) {
    var id = Math.random();
    var newDate = new Date();
    return {
        name: newUser.name,
        email: newUser.email,
        id: id,
        date: newDate
    };
};
var userObj = {
    email: 'arc@y.com',
    name: 'arc'
};
var newUser = addNewUser(userObj);
console.log('newUser', newUser);
var printUserUpperCase = function (name) {
    console.log(name.toUpperCase());
};
printUserUpperCase('vigo');

var typeVar = function () {
    //premitiv type
    var string1 = "test string";
    var number = 7;
    var booleanType = false;
    var undifineType = undefined;
    var nullType = null;
    //complex type
    var emptyArr = [];
    var arr1 = ['sanket'];
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8];
    var stingAndnumberArr = ['abc', 5];
    var arrCustoms = ['add', 'mul', 'divi', 'sub'];
    // objects
    //Should not do this
    var obj1 = {};
    obj1 = 'string';
    obj1 = 123;
    //should not do this
    var objUser = {
        name: 'Sanket',
        age: 25,
        city: 'Nagpur',
        mob: undefined,
        statusOfadd: 'sub',
        nullOrString: null
    };
    //objUser.test1 = 'test' not possible due to type checking
};
typeVar();

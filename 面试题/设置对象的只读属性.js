var myObj = {
    a: 10,
    get readOnlyProperty(){
        return {
            b: 20
        }
    }
};


console.log(myObj.a = 20);
console.log(myObj.readOnlyProperty.b = 30);
console.log(myObj.readOnlyProperty);





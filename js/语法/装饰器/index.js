@testable
class MyClass {

}

function testable(target) {
    target.isTest = true;
}



console.log(MyClass.isTest);


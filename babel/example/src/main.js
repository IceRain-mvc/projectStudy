import '@babel/polyfill'
const name = 'wang';
const add = (a, b) => a + b;
const arr = [...[1,2,3]];

function Out(Wrapp){
    return Wrapp
}
@Out
class Home{
    name = 'wang';
    age = 23;
    sayname = () => {
        console.log(this.name);
    }
}

const arr1 = [1,2,3].findIndex(item => item === 3);
console.log([1,2,3].findIndex);
console.log(arr1);
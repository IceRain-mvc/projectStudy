function fn(a) {
    console.log(a)
    var a = 2;
    function a() {
    }
    console.log(a);
}

fn(1);

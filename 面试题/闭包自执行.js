var func = (function (a) {
    console.log(a);

    this.a = a;
    console.log(this.a);
    return function (a) {

        console.log(a);
        return a
    }(function () {
        console.log(1111);
    })
})(1, 2);

func(4);
// func(function (a) {
//
// });



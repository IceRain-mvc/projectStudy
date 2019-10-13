class Promise1 {
    constructor(fn) {
        // 执行队列
        this.__watchList = [];
        // 成功结果
        this.__success_res = null;
        // 失败结果
        this.__error_res = null;
        // 状态
        this.__status = "";
        fn((...args) => {
            // 保存成功数据
            this.__success_res = args;
            // 状态改为成功
            this.__status = "success";
            // 若为异步则回头执行then成功方法
            this.__watchList.forEach(element => {
                element.fn1(...args);
            });
        }, (...args) => {
            // 保存失败数据
            this.__error_res = args;
            // 状态改为失败
            this.__status = "error";
            // 若为异步则回头执行then失败方法
            this.__watchList.forEach(element => {
                element.fn2(...args);
            });
        });
    }

    // then 函数
    then(fn1, fn2) {
        if (this.__status === "success") {
            fn1(...this.__success_res);
        } else if (this.__status === "error") {
            fn2(...this.__error_res);
        } else {
            this.__watchList.push({
                fn1,
                fn2
            })
        }
    }
}

Promise1.all = function (arr) {
    // 存放结果集
    let result = [];
    return Promise1(function (resolve, reject) {
        let i = 0;

        // 进行迭代执行
        function next() {
            arr[i].then(function (res) {
                // 存放每个方法的返回值
                result.push(res);
                i++;
                // 若全部执行完
                if (i === result.length) {
                    // 执行then回调
                    resolve(result);
                } else {
                    // 继续迭代
                    next();
                }
            }, reject)
        }
    })
};

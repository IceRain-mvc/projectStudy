let longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
        sum += i;
    }
    return sum;

};

/*msg:主进程发送过来的信息*/
process.on("message",msg=>{
    console.log(msg, process.pid);
    const num = longComputation();

    //发送给主进程
    process.send(num);
});

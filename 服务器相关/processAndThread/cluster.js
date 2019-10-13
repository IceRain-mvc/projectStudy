var cluster = require('cluster');

if (cluster.isMaster) {
    console.log('I am master');

    var numCPUs = require('os').cpus().length;
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (var id in cluster.workers) {
        cluster.workers[id].on('message', function(msg){
            console.log('[master] ' + 'message ' + msg);
        });
    }

    setTimeout(function () {
        for (var id in cluster.workers) {
            cluster.workers[id].send('[master] ' + 'send message to worker' + id);
        }
    }, 3000);

} else if (cluster.isWorker) {
    console.log('I am worker #' + cluster.worker.id);

    process.on('message', function(msg) {
        console.log('[worker] '+msg);
        process.send('[worker] worker'+cluster.worker.id+' received!');
    });
}

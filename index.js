var w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("./jsworker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Ops seu browser não suporta WEB WORKERS...";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}
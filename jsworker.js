self.onmessage = function (event) {
    this.setInterval(function () {
        self.postMessage(new Date().toLocaleString());
    }, 1000);
}
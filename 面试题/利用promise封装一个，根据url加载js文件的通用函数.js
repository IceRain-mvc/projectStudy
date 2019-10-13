function loadJsFile(url) {
    return new Promise((reslove, reject) => {
        try {
            const script = document.createElement('script')
            script.src = url;
            script.async = 'async';
            document.body.appendChild(script);
            script.onload = function () {
                reslove();
            }

        } catch (e) {
            reject();
        }
    })
}

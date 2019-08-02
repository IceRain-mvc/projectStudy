function loadJsFile(url){
    new Promise((reslove, reject) => {
        const script = document.createElement('script')
        script.src = url;
        script.async='async';
        document.body.appendChild(script);
        script.onload=function(){
            reslove();
        }

    })
}
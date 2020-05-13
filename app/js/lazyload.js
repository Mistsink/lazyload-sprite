/**
 * 
 * @param {string} targetClass 目标加载的类名
 */
function lazyload(targetClass) {
    let imgs = document.querySelectorAll('.'+targetClass);console.log(imgs);
    const len = imgs.length;
    let n = 0; //利用闭包记录加载图片的个数，防止从头加载
    return function() {
        const sightHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = n; i < len; i++) {
            if(imgs[i].offsetTop < sightHeight+ scrollTop){
                if(imgs[i].getAttribute('src') === null ){
                    imgs[i].src = imgs[i].getAttribute('data-src');
                }
                
                n++;
            }
        }
    };
}

export default lazyload;
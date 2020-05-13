// import '../images/partner.png';
// import '../styles/base.css';
// import lazyload from './lazyload.js';
// const lazyload = require('./lazyload.js');
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
let lazyImgs = lazyload('partner-img');

lazyImgs();
window.addEventListener('scroll', lazyImgs, false);
// 浏览器宽度一改变，自动刷新
 window.onresize=function(){
    location=location
};

window.addEventListener('load', (e) => {
    let focus = document.querySelector('.focus');
    let ol = document.querySelector('ol');
    let ul = focus.children[0];
    let w = focus.offsetWidth;
    // console.log(w)

    let index = 0;

    let timer = setInterval(() => {
        index++;
        let translatex = -w * index;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';

    }, 2000)

    ul.addEventListener('transitionend', (e) => {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            let translatex = -w * index;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            let translatex = -w * index;
            ul.style.transform = 'translateX(' + translatex + 'px)';

        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    // 手指滑动
    let [startx, movex, flag] = [0, 0, false];
    ul.addEventListener('touchstart', (e) => {
        startx = e.targetTouches[0].pageX;
        // 手指触摸时停止定时器
        clearInterval(timer);
    })
    ul.addEventListener('touchmove', (e) => {
        movex = e.targetTouches[0].pageX - startx;
        ul.style.transition = 'none';
        let translatex = -w * index + movex;
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
    })
    ul.addEventListener('touchend', (e) => {
        if (flag) {
            if (Math.abs(movex) > 50) {
                if (movex > 0) {
                    index--;
                } else {
                    index++;
                }
                ul.style.transition = 'all .3s';
                let translatex = -w * index;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                movex = e.targetTouches[0].pageX - startx;
                ul.style.transition = 'all .1s';
                let translatex = -w * index;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开重新开启定时器
        clearInterval(timer);
        timer = setInterval(() => {
            index++;
            let translatex = -w * index;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
    
        }, 2000)
    
    })
})

// 手指点击底部导航栏效果
document.body.addEventListener('touchstart', function () {
});
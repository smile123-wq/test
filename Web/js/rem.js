// rem.js
// 获得屏幕的宽度
// console.dir(document.documentElement.clientWidth);

//2.设置fontSize值
//屏幕宽度等于html宽度/25
// document.documentElement.style.fontSize = 
// document.documentElement.clientWidth / 25 + 'px'

//自调用函数
(function (win,doc){
let docEl = doc.documentElement;
function scalc(){
    let width = docEl.clientWidth;
    docEl.style.fontSize = width / 25 + 'px';
}

win.addEventListener('resize',scalc);
win.addEventListener('load',scalc);
})(window,document)

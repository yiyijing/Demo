window.addEventListener('load',function(){
    var focus=this.document.querySelector('.focus');
    var ul=focus.children[0];
    var w=focus.offsetWidth;
    var ol=focus.children[1];
    var index=0;
    var timer=this.setInterval(function(){
        index++;
        var translatex=-index * w;
        ul.style.transition='all .3s';
        ul.style.transform='translateX('+translatex+'px)';
    },2000)
    ul.addEventListener('transitionend',function(){
        if(index>=3){
            index=0;
            ul.style.transition='none';
            var translatex=-index * w;
            ul.style.transform='translateX('+translatex+'px)';
        }else if(index<0){
            index=2;
            ul.style.transition='none';
            var translatex=-index * w;
            ul.style.transform='translateX('+translatex+'px)';
        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    var startx=0;
    ul.addEventListener('touchstart',function(e){
        startx=e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    var movex=0;
    ul.addEventListener('touchmove',function(e){
        movex=e.targetTouches[0].pageX-startx;
        translatex=-index*w+movex;
        ul.style.transition='none';
        

    })// 4. 手指滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault(); // 阻止滚动屏幕的行为
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
    var goback=this.document.querySelector('.goback');
    var nav=this.document.querySelector('.nav');
    this.window.addEventListener('scroll',function(){
        if(window.pageYOffset>=nav.offsetTop){
            goback.style.display='block';
        }else{
            goback.style.display='none';
        }
    })
    goback.addEventListener('click',function(){
        window.scroll(0,0);
    })
})

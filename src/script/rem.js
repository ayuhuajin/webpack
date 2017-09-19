//REM布局 基准单位计算
!(function(){
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var recalc = function(){
            var clientWidth = document.documentElement.clientWidth;

            if(!clientWidth){
                return false;
            }

            if(clientWidth >= 640) {
                document.documentElement.style.fontSize = '100px';
            } else {
                document.documentElement.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if(!document.addEventListener){
        return false;
    }

    // 添加事件句柄
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();
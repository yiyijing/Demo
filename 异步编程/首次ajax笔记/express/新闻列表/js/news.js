$(function(){
    // 补零操作
    function padZero(n){
        if(n<10){
            return '0'+n;
        }else{
            return n;
        }
    }





    // 定义时间的过滤器
    template.defaults.imports.dateFormat = function(dtstr){
        var dt=new Date(dtstr);

        var y=dt.getFullYear()
        var m=padZero(dt.getMonth()+1)
        var d=padZero(dt.getDate())

        var hh=padZero(dt.getHours())
        var mm=padZero(dt.getMinutes())
        var ss=padZero(dt.getSeconds())
        return y + '-' + m + '-' + d +' ' + hh + ':' + mm + ':' + ss
    }
    // 定义格式化时间的过滤器
//   template.defaults.imports.dateFormat = function (dtStr) {

//     var dt = new Date(dtStr)

//     var y = dt.getFullYear()
//     var m = dt.getMonth() + 1
//     var d = dt.getDate()

//     var hh = dt.getHours()
//     var mm =dt.getMinutes()
//     var ss = dt.getSeconds()

//     return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
//   }





    
    // 获取新闻列表函数
    function getNewsList(){
        $.get('http://www.liulongbin.top:3006/api/news',
        function(res){
            if(res.status !==200){
                return alert('获取新闻列表失败');
            }
            // 把数组的tags属性划字符串数组
            for(var i=0;i<res.data.length;i++){
                res.data[i].tags=res.data[i].tags.split(',');
            }
            var htmlstr=template('tpl-news',res);
            $('#news-list').html(htmlstr);
        }
        )
        
    }
    getNewsList();
})
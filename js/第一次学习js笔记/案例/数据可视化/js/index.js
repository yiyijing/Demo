(function(){
    $(".monitor .tabs").on("click","a",function(){
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
})

// 克隆行
$(".marquee-view .marquee").each(function(){
    var rows=$(this).children().clone();
    $(this).append(rows);
})


})();


// 点位分布统计开始
(function(){
    var myChart = echarts.init(document.querySelector(".pie"));
    option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '点位分布',
            type: 'pie',
            radius: ["10%", "60%"],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }
            ],
            label:{
                fontSize: 10
            },labelLine:{
                length: 6,
                length2: 8
            }
          }
        ]
      };
      myChart.setOption(option);
})()
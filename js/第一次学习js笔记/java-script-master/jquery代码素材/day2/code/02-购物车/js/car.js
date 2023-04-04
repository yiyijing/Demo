$(function() {
    // 全选全不选
    $(".checkall").change(function(){
        // console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
        // 背景颜色修改
        if($(this).prop("checked")){
            $(".cart-item ").addClass("check-cart-item ");
        }else{
            $(".cart-item ").removeClass("check-cart-item ");
        }
    })
    $(".j-checkbox").change(function(){
        if($(".j-checkbox:checked").length===$(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
        // 背景颜色修改
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item ");
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item ");
        }
    })
    // 实现+操作
    $(".increment").click(function(){
        var n=$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
        getSum();

    })
    // 实现-操作
    $(".decrement").click(function(){
        var n=$(this).siblings(".itxt").val();
        if(n==1){
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        // $(this).parent().parent().siblings(".p-sum").html("￥"+p*n);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
        getSum();
    })
    // 当发生改变时价格改变
    $(".itxt").change(function(){
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
        getSum();
    })
    // 得到数量和价格
    function getSum(){
        var count=0;
        var money=0;
        $(".itxt").each(function(i,ele){
            count+=parseInt($(ele).val());
        })
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i,ele){
            money+=parseFloat($(ele).text().substr(1));
        })
        $(".price-sum").text("￥"+money.toFixed(2));
    }
    $(".p-action a").click(function(){
        $(this).parents(".cart-item").remove();
        getSum();
    });
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    $(".clear-all").click(function(){
        $(".cart-item").remove();
        getSum();
    })
    

})
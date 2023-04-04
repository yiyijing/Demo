$(function() {
    $(".checkall").change(function(){
        console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
    })
    $(".j-checkbox").change(function(){
        if($(".j-checkbox:checked").length===$(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
    })
    $(".increment").click(function(){
        var n=$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));

    })
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
    })
    $(".itxt").change(function(){
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    })
})
$(function(){
    load();
    $("#title").on("keydown",function(event){
        if(event.keyCode===13){
            if($(this).val()===""){
                alert("请输入你想要的操作");
            }else{
                var local=getData();
                local.push({title:$(this).val(),done:false});
                savaData(local);
                load();
                $(this).val("");
            }
        }
    })
    // 删除操作
    $("ol,ul").on("click","a",function(){
        var data=getData();
        var index=$(this).attr("id");
        data.splice(index,1);
        savaData(data);
        load();
    })

    
    // 正在进行和正在完成模块
    $("ul,ol").on("click","input",function(){
        var data=getData();
        var index=$(this).siblings("a").attr("id");
        data[index].done=$(this).prop("checked");
        console.log(data);
        savaData(data);
        load();
    })
     


    function getData(){
        var data=localStorage.getItem("todolist");
        if(data!==null){
            return JSON.parse(data);
        }else{
            return [];
        }
    }
    function savaData(data){
        localStorage.setItem("todolist",JSON.stringify(data));
    }

    重新加载
    function load(){
        var data=getData();
        $("ol,ul").empty();
        var todocount=0;
        var donecount=0;
        $.each(data,function(i,n){
            if(n.done){
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                donecount++;
            }else{
                $("ol").prepend("<li><input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todocount++;
            }
            $("#donecount").text(donecount);
            $("#todocount").text(todocount);
           
        })
    }


    
})
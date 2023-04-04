function getCommentList(){
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function(res){
            if(res.status!==200) return alert('获取评论失败');
            var rows=[];
            $.each(res.data,function(i,item){
                var str=' <li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">'+
                item.time+'</span><span class="badge" style="background-color: #5BC0DE;">'+
                item.username+'</span>'+item.content+'</li>';
                rows.push(str);
            })
            $(".list-group").empty().append(rows.join(''));
        }
        
    })
}
getCommentList();


$(function(){
    $('#formAddcmt').submit(function(e){
        e.preventDefault();
        var data=$(this).serialize();
        console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt'
        ,data,function(res){
            // if(res.status !== 201){
            //   return  alert('发表评论失败');
            // } 
            getCommentList();
            $('#formAddcmt')[0].reset();
        })
    })

})

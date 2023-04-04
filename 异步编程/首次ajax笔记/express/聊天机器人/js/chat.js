$(function(){
  resetui();
  // 发送数据时候点击按钮
  $('#btnSend').on('click',function(){
    var text=$('#ipt').val().trim();
    if(text.length<=0){
      return $('#ipt').val('');
    }  

    // 发布的消息显示在聊天框中
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'+
    text+'</span></li>');
    $('#ipt').val('');
    resetui();
    getMes(text);
  })

  // 聊天机器人发送回来的数据
  function getMes(text){
    $.ajax(
      {
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/robot',
        data:{
          spoken:text
        },
        success: function(res){
          console.log(res);
          if(res.message==='success'){
            var meg=res.data.info.text
            $("#talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>'+meg+'</span></li>')
            resetui();
            getVoice(meg)
          }
        }
      }
    )
  }

  // 聊天机器人语音自动播放
  function getVoice(text){
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text:text
      },
      success:function(res){
        if(res.status===200){
          $('#voice').attr('src',res.voiceUrl);
        }
      }
    })
  }


  // 使用回车键发送消息
  $('#ipt').on('keyup',function(e){
    if(e.keyCode===13){
      $('#btnSend').click();
    }
  })

})
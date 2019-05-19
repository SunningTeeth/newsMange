//解决单选框,多选框,无法显示的问题
layui.use('form', function () {
  var form = layui.form;
  form.render();
})

$(function () {

  //回车事件
  $(document).keypress(function (event) {
    if (event.keyCode == '13') {
      $('.loginBtn').click();
    }
  })

  // 登录验证接口
  $('.loginBtn').on("click", function () {
    //用户名
    var userName = $('[name="userName"]').val();
    //密码
    var userPwd = $('[name="userPwd"]').val();
    $.ajax({
      url: '/login/verifyLogin',
      type: 'post',
      datType: 'json',
      data: {
        userName: userName,
        userPwd: userPwd,
        userPhone: userName
      },
      success: function (res) {

        if (res.success) {

          layer.msg(res.message, {icon: 1, time: 1500});

          //power为权限标志，默认值为0(String类型)--普通用户
          // 1--> 管理员  9-->超级管理员
          var power = res.power;

          if (power == "0" || power == "1") {

            setInterval(function () {

              sessionStorage.setItem('userName', userName);

              sessionStorage.setItem('power', power);

              window.location.href = '/webApp/index';

            }, 1800)
          }else if(power == "9"){

            sessionStorage.setItem('userName', userName);

            sessionStorage.setItem('power', power);

            window.location.href = '/webSystem/index';

          }


        } else {

          layer.msg(res.message, {icon: 2, time: 1500});

          $('[name="userPwd"]').focus();
        }
      },
      error: function () {

        layer.msg("用户名或者密码错误！", {icon: 2, time: 2000});

        $('[name="userPwd"]').focus();
      }
    })
  })


})
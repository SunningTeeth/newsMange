//解决单选框,多选框,无法显示的问题
layui.use('form', function () {
  var form = layui.form;
  form.render();
})

layui.use(['element'], function () {
  //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
  var element = layui.element;
});

$(function () {

  //获取当前用户信息
  $.ajax({
    url: "/users/getUsers",
    type: "post",
    dataType: "json",
    data: {
      userId: parseInt($.cookie("userId"))
    },
    success: function (res) {
      if (res.userId) {//表示请求成功

        //用户名
        $(".userName").html(res.userName)
        //渲染的input里面
        $(".userNameInp").val(res.userName)

        //用户昵称
        $(".userNickname").html(res.userNickname)
        //渲染的input里面
        $(".userNicknameInp").val(res.userNickname)

        //用户性别
        var userSex = res.userSex

        if (userSex === 1) {//男

          userSex = "男"
        } else if (userSex === 0) {//女

          userSex = "女"

        }
        $("input[type=radio]").each(function () {

          if ($(this).attr('title') == userSex) {

            $(this).attr("checked", true)

          }

        })

        //用户图像地址
        var src = "/static/uploads/" + $.cookie("userImageUrl")

        $(".userImg").attr("src", src)

        //邮箱
        $(".userEmail").html(res.userEmail)
        $(".userEmailInp").val(res.userEmail)

        //手机
        $(".userPhone").html(res.userPhone)
        $(".userPhoneInp").val(res.userPhone)

        //地址
        $(".userAddress").html(res.userAddress)
        $(".userAddressInp").val(res.userAddress)

        //生日
        $(".userBirthdayInp").val(res.userBirthday)

        //QQ
        $(".userQqInp").val(res.userQq)

        //用户积分 userMarkInp
        $(".userMarkInp").val(res.userMarkInp)

        //用户等级
        $(".userRankIdInp").val(res.userMarkInp)

        //学校  userSchool
        $(".userSchoolInp").val(res.userSchool)

        //个性签名
        $(".userDescriptionInp").val(res.userDescription)

        //密保  userEncrypted
        var userEncrypted = res.userEncrypted
        var userEncryptedQuestion = userEncrypted.substr(0, userEncrypted.indexOf("*"))
        $(".userEncrypted").html(userEncryptedQuestion)

        //用户权限
        var power = res.userPower;

        if (power === '0') {//  0--->普通用户

          $(".power").html("普通用户")

        } else if (power === '1') {// 1--> 系统管理员

          $(".power").html("系统管理员")

        } else if (power === '9') {// 9-->超级管理员   默认所有权限都有

          $(".power").html("超级管理员")
        }
      }
    }
  })


  //编辑资料
  $(".updateBtn").on("click", function () {

    var str = ' <div class="layui-form user-info-form">\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">用户名:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userNameInp_layerOpen" readonly disabled lay-verify="required"/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">用户昵称:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userNicknameInp_layerOpen"  lay-verify="required"/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">性别:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input sex" />\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">手机:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userPhoneInp_layerOpen" />\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">QQ:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userQqInp_layerOpen"  lay-verify="required" required/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">邮箱:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userEmailInp_layerOpen"  required/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">出生日期:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" lay-verify="required"  class="layui-input userBirthdayInp_layerOpen"/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">地址:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userAddressInp_layerOpen"  required/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">毕业学校:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userSchoolInp_layerOpen"  required/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="layui-form-item">\n' +
      '                    <label class="layui-form-label">个性签名:</label>\n' +
      '                    <div class="layui-input-block">\n' +
      '                      <input type="text" class="layui-input userDescriptionInp_layerOpen"  required/>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                </div>'

    layer.open({
      title: "编辑资料",
      area: ["726px", "424px"],
      offset: '48px',
      content: str,
      btn: ["修改"],
      yes: function () {

        //id
        var userId = parseInt($.cookie("userId"))

        //用户名
        var userName = $(".userNameInp_layerOpen").val()

        //用户昵称
        var userNickname = $(".userNicknameInp_layerOpen").val()

        //性别
        var userSex = $("input[type=radio][name=sex]:checked").val()

        //邮箱
        var userEmail = $('.userEmailInp_layerOpen').val()

        //出生日期
        var userBirthday = $('.birthday_layerOpen').val()

        //手机号
        var userPhone = $(".userPhoneInp_layerOpen").val()

        //用户图像地址
        var src = $(".userImg").attr("src")
        var userImageUrl = src.substr(src.lastIndexOf("/") + 1)

        //地址
        var userAddress = $(".userAddressInp_layerOpen").val()

        //QQ
        var userQq = $(".userQqInp_layerOpen").val()

        //学校  userSchool
        var userSchool = $(".userSchoolInp_layerOpen").val()

        //个性签名
        var userDescription = $(".userDescriptionInp_layerOpen").val()

        //修改用户信息接口
        $.ajax({
          url: "/users/updateUsers",
          type: "post",
          dataType: "json",
          data: {
            userId: userId,
            userName: userName,
            userNickname: userNickname,
            userSex: userSex,
            userImageUrl: userImageUrl,
            userPhone: userPhone,
            userBirthdays: userBirthday,
            userQq: userQq,
            userEmail: userEmail,
            userAddress: userAddress,
            userDescription: userDescription,
            userSchool: userSchool,
          },
          success: function (res) {

            if (res.msg == "修改用户信息成功！") {

              layer.msg(res.msg, {icon: 1, time: 1200})

              window.location.reload()

            } else {

              layer.msg("修改失败！", {icon: 2, time: 1200})
            }
          }
        })

      },
      success: function () {

        //解决单选框,多选框,无法显示的问题
        layui.use('form', function () {
          var form = layui.form;
          form.render();
        })

        //回显数据当前用户信息
        $.ajax({
          url: "/users/getUsers",
          type: "post",
          dataType: "json",
          data: {
            userId: parseInt($.cookie("userId"))
          },
          success: function (res) {

            if (res.userId) {//表示请求成功

              //用户名
              $(".userName_layerOpen").html(res.userName)
              //渲染的input里面
              $(".userNameInp_layerOpen").val(res.userName)

              //用户昵称
              $(".userNickname_layerOpen").html(res.userNickname)
              //渲染的input里面
              $(".userNicknameInp_layerOpen").val(res.userNickname)

              //用户性别
              var userSex = res.userSex

              if (userSex === 1) {//男

                userSex = "男"
              } else if (userSex === 0) {//女

                userSex = "女"

              }
              $(".sex").val(userSex)

              //用户图像地址
              var src = "/static/uploads/" + $.cookie("userImageUrl")

              $(".userImg").attr("src", src)

              //邮箱
              $(".userEmailInp_layerOpen").val(res.userEmail)

              //手机
              $(".userPhoneInp_layerOpen").val(res.userPhone)

              //地址
              $(".userAddressInp_layerOpen").val(res.userAddress)

              //生日
              $(".userBirthdayInp_layerOpen").val(res.userBirthday)

              //QQ
              $(".userQqInp_layerOpen").val(res.userQq)

              //学校  userSchool
              $(".userSchoolInp_layerOpen").val(res.userSchool)

              //个性签名
              $(".userDescriptionInp_layerOpen").val(res.userDescription)

              //密保  userEncrypted
              var userEncrypted = res.userEncrypted
              var userEncryptedQuestion = userEncrypted.substr(0, userEncrypted.indexOf("*"))
              $(".userEncryptedInp_layerOpen").val(userEncryptedQuestion)

              //用户权限
              var power = res.userPower;

              if (power === '0') {//  0--->普通用户

                $(".power").html("普通用户")

              } else if (power === '1') {// 1--> 系统管理员

                $(".power").html("系统管理员")

              } else if (power === '9') {// 9-->超级管理员   默认所有权限都有

                $(".power").html("超级管理员")
              }
            } else {

              layer.msg("请求数据失败", {icon: 2, time: 1200})
            }
          }
        })

        //检查手机号是否重复
        $('.userPhoneInp_layerOpen').blur(function () {

          var userPhone = $('.userPhoneInp_layerOpen').val();

          if (userPhone == '') {

            layer.msg("手机号不能为空！", {icon: 2, time: 1500});

            $('.userPhoneInp_layerOpen').focus();

            return false;

          } else if (!((/^[1-9][0-9]{10}$/g).test(userPhone))) {

            layer.msg("请输入正确的手机号！", {icon: 2, time: 1500});

            $('.userPhoneInp_layerOpen').focus();

            return false;
          } else {

            $.ajax({
              url: '/login/getNoByUserName',
              type: 'post',
              data: {
                userPhone: userPhone
              },
              datatype: 'json',
              success: function (res) {
                if (res == "1") {//1表示用户名已经存在

                  $('.userPhoneInp_layerOpen').val('手机号已被注册！')
                  $('.userPhoneInp_layerOpen').focus().css("color", "red");

                  return false;

                }
              }
            })
          }


        })

      }
    })


  })

  //密保修改
  $(".userEncryptedUpdate").on("click", function () {

    var str = '<div class="layui-form">' +
      '<div class="layui-form-item">\n' +
      '<select name="encrypted" class="userEncryptedInp_question">\n' +
      '<optgroup label="城市记忆">\n' +
      '<option value="工作的第一个城市?" selected>工作的第一个城市？</option>\n' +
      '</optgroup>\n' +
      '<optgroup label="学生时代">\n' +
      '<option value="你的工号?">你的工号？</option>\n' +
      '<option value="大学最喜欢的老师?">最喜欢的老师？</option>\n' +
      '<option value="大学暗恋的女孩？">大学暗恋的女孩？</option>\n' +
      '<option value="大学最怪的室友？">大学最怪的室友？</option>\n' +
      '<option value="大学最好的学科？">大学最好的学科？</option>\n' +
      '<option value="大学get到什么新技能？">大学get到什么新技能？</option>\n' +
      '</optgroup>\n' +
      '<optgroup label="社会人生">\n' +
      '<option value="最向往的职位?">最向往的职位？</option>\n' +
      '<option value="觉得社会生存必备技能">觉得社会生存必备技能？</option>\n' +
      '</optgroup>\n' +
      '</select>\n' +
      '</div>' +
      '<div class="layui-form-item">' +
      '<div class="layui-input-block" style="margin-left: 0px;">' +
      '<input type="text" placeholder="请输入密码答案" class="layui-input userEncryptedInp_answer">' +
      '</div>' +
      '</div>' +
      '</div>'

    layer.open({
      title: '修改密保',
      content: str,
      area: ["465px", "320px"],
      btn: ["确认"],
      yes: function () {

        //密保问题
        var userEncryptedInp_question = $(".userEncryptedInp_question").find("option:selected").val()
        //密保答案
        var userEncryptedInp_answer = $(".userEncryptedInp_answer").val()

        var userEncrypted = userEncryptedInp_question + "*" + userEncryptedInp_answer

        //修改用户信息接口
        $.ajax({
          url: "/users/updateUsers",
          type: "post",
          dataType: "json",
          data: {
            userId: parseInt($.cookie("userId")),
            userEncrypted: userEncrypted,

          },
          success: function (res) {

            if (res.msg == "修改用户信息成功！") {

              layer.msg(res.msg, {icon: 1, time: 1200})

              window.location.reload()

            } else {

              layer.msg("修改失败！", {icon: 2, time: 1200})
            }
          }
        })


      },
      success: function () {

        //解决单选框,多选框,无法显示的问题
        layui.use('form', function () {
          var form = layui.form;
          form.render();
        })

      }
    })


  })

})
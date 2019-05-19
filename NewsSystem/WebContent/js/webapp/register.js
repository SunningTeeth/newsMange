$(function () {

  //头像上传路径
  let uploadSrc = '';

  layui.use(['form', 'upload', 'laydate', 'layer'], function () {
    //解决单选框,多选框,无法显示的问题
    var form = layui.form;
    form.render();

    var layer = layui.layer;

    //时间插件
    var laydate = layui.laydate;

    var date = new Date();
    //执行一个laydate实例
    laydate.render({
      elem: '.birthday',//指定元素
      // type:'datetime',//可选择：年、月、日、时、分、秒
      format: 'yyyy-MM-dd',
      //calendar: true,//是否显示公历节日,里面有一些公历重要节日
      // theme: 'grid',//设置主题  grid格子主题
      //value: new Date(),//设置初始值
      max: 'new Date()',//设置最大日期
      mark: {
        '0-10-6': '生日',
        '0-12-31': '跨年',//每年12月31日   0--代表每年
        '0-0-10': '工资',//每个月10号   0-0代表没年每月
        '2018-8-15': '', //具体日期
        '2018-8-20': '预发', //如果为空字符，则默认显示数字+徽章
        '2018-8-21': '发布',
      },
      done: function (value, date) {
        if (date.year === 2017 && date.month === 8 && date.date === 15) { //点击2017年8月15日，弹出提示语
          layer.alert('中国人民抗日战争胜利72周年', {icon: 6});
        }
      }
    });

    //上传照片
    var upload = layui.upload;

    //执行实例
    var uploadInst = upload.render({
      elem: '#userImageUrl',//绑定元素
      url: '/upload', //上传接口
      done: function (res) {
        //上传完毕回调
        uploadSrc = res.object;
        layer.msg("上传成功！", {icon: 1, time: 500});
      },
      error: function () {
        layer.msg("上传失败！", {icon: 2, time: 500});
      }
    });

  })

  //返回按钮
  $(".cancel").on("click", function () {

    // window.history.go(-1)

    window.location.href = "/login"
  })

  //注册按钮
  $('.registerBtn').on('click', function () {
    //昵称
    var userNickname = $('[name="userNickname"]').val();
    //用户名（只能是英文或者数字或者组合）
    var userName = $('[name="userName"]').val();

    //密码
    var userPwd = $('[name="userPwd"]').val();

    if (userNickname == '' || userName == '' || userPwd == '') {

      layer.msg("请填写用户名或密码！", {icon: 2, time: 1000});

      return false;
    }

    if (userPwd.length < 6 || userPwd.length > 15) {

      layer.msg("密码为6到15位！", {icon: 2, time: 1000});

      $('[name="userPwd"]').focus();

      return false;
    }
    //手机号
    var userPhone = $('[name="userPhone"]').val();

    if (!((/^[1-9][0-9]{10}$/g).test(userPhone))) {

      layer.msg("请填写正确的手机号！", {icon: 2, time: 1000});

      $('[name="userPhone"]').focus();

      return false;
    }

    //qq
    var userQq = $('[name="userQq"]').val();

    if (!((/^[1-9][0-9]{4,9}$/g).test(userQq))) {

      layer.msg("请输入企鹅帝国QQ格式！", {icon: 2, time: 1000});

      $('[name="userQq"]').focus();

      return false;
    }

    //邮箱
    var userEmail = $('[name="userEmail"]').val();

    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9])+$/.test(userEmail))) {

      layer.msg("请输入正确的邮箱！", {icon: 2, time: 1000});

      $('[name="userEmail"]').focus();

      return false;
    }
    //住址
    var userAddress = $('[name="userAddress"]').val();

    //学校
    var userSchool = $('[name="userSchool"]').val();

    //性别
    var userSex = parseInt($('[name="sex"]:checked').val());

    //个性签名
    var userDescription = $('[name="userDescription"]').val();

    //生日
    //string类型时间转时间戳
    var userBirthday = $('[name="userBirthday"]').val();
    if (userBirthday == '') {
      userBirthday = 0;
    } else if (userBirthday != '') {
      // userBirthday.substr(0);//eg:'2019-3-17 15:57:340.0'
      userBirthday = userBirthday.replace(/-/g, '/');
      userBirthday = new Date(userBirthday).getTime();//获取毫秒数
      userBirthday = userBirthday.toString().substring(0, 10);
      // userBirthday = parseInt(userBirthday);
    }


    //头像url地址  C:\Donne\githubBlog\springbootBlog\Dan\uploads\4.jpg
    uploadSrc = (uploadSrc.substr(uploadSrc.indexOf('uploads') + 'uploads'.length + 1)).replace(/\\/g, '/');

    //密保问题
    var encrypted = $('[name="encrypted"]').find('option:selected').val();

    //密保答案
    var encryptedAnswer = $('[name="encryptedAnswer"]').val();

    if (!((/^[\u4e00-\u9fa5a-zA-Z0-9]+$/).test(encryptedAnswer))) {

      layer.msg("密保答案是中英文或数字！", {icon: 2, time: 1000});

      $('[name="encryptedAnswer"]').focus();

      return false;
    }

    var userEncrypted = encrypted + "*" + encryptedAnswer;

    $.ajax({
      url: '/login/addRegister',
      type: 'post',
      data: {
        userNickname: userNickname,
        userName: userName,
        userPwd: userPwd,
        userPhone: userPhone,
        userQq: userQq,
        userEmail: userEmail,
        userAddress: userAddress,
        userSchool: userSchool,
        userSex: userSex,
        userDescription: userDescription,
        userBirthdays: userBirthday,
        userImageUrl: uploadSrc,
        userEncrypted: userEncrypted
      },
      dataType: 'json',
      success: function (res) {
        if (res.flag) {

          layer.msg(res.msg, {icon: 1, time: 500});

          setInterval(function () {
            window.location.href = '/login';
          }, 2000)

        } else {
          layer.msg("注册失败！", {icon: 2, time: 1000});
        }
      }
    })
  })

  //检查用户名是否重复
  $('[name="userName"]').blur(function () {

    let userName = $('[name="userName"]').val();

    if (userName.length < 0 || userName.length > 12) {

      layer.msg("用户名为1~12位字母或者数字！", {icon: 2, time: 1000});

      $('[name="userName"]').val('')

      $('[name="userName"]').focus();



      return false;

    } else if (!((/^[0-9a-zA-Z]+$/g)).test(userName)) {

      layer.msg("用户名只能是字母或者数字！", {icon: 2, time: 1000});

      $('[name="userName"]').focus();

      return false;

    }

    $.ajax({
      url: '/login/getNoByUserName',
      type: 'post',
      data: {
        userName: userName
      },
      datatype: 'json',
      success: function (res) {
        if (res == "1") {//1表示用户名已经存在

          layer.msg("用户名已经存在！", {icon: 2, time: 1000});

          $('[name="userName"]').focus();

          return false;

        }
      }
    })
  })

  //检查手机号是否重复
  $('[name="userPhone"]').blur(function () {

    var userPhone = $('[name="userPhone"]').val();

    if (userPhone == '') {

      layer.msg("手机号不能为空！", {icon: 2, time: 1500});

      $('[name="userPhone"]').focus();

      return false;

    } else if (!((/^[1-9][0-9]{10}$/g).test(userPhone))) {

      layer.msg("请输入正确的手机号！", {icon: 2, time: 1500});

      $('[name="userPhone"]').focus();

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

            layer.msg("手机号已被注册！", {icon: 2, time: 1500});

            $('[name="userPhone"]').focus();

            return false;

          }
        }
      })
    }


  })

})
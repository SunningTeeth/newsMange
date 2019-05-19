layui.use('flow', function () {
  var flow = layui.flow;

  flow.load({
    elem: '#ms_flow' //流加载容器
    , scrollElem: '#LAY_demo2' //滚动条所在元素，一般不用填，此处只是演示需要。
    , isAuto: false
    , isLazyimg: true
    , done: function (page, next) { //加载下一页

      //模拟数据插入
      setTimeout(function () {
        var lis = [];
        for (var i = 0; i < 8; i++) {
          lis.push('<li>' + ((page - 1) * 8 + i + 1) + '</li>')
        }

        //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
        //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
        next(lis.join(''), page < 10); //假设总页数为 10
      }, 500);
    }
  });



});
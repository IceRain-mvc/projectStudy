let str = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<script>
    // console.log(["1", "2", "3"].map(parseInt));
    // var a = 10;
    // (function () {
    //     console.log(a);
    //     a = 5;
    //     console.log(window.a);
    //     var a = 20;
    //     console.log(a);
    // })();


    function myCallback(data) {
      console.log(data)
    }
      if (typeof data === 'string') {
        callback = data;
        data = {}
      }
      var hasParams = url.indexOf('?');
      url += hasParams ? '&' : '?' + 'callback=' + callback;
      var params;
      for (var i in data) {
        params += '&' + i + '=' + data[i];
      }
      url += params;

      var script = document.createElement('script');
      script.setAttribute('src', url);
      document.querySelector('head').appendChild(script)

    }

    jsonp('http://cdnbbbd.shoujiduoduo.com/bb/book/20002215/20002215_s.jpg', {}, 'myCallback');


</script>

</body>
</html>
`;
// console.log(tokenizer(str));

// module.exports = tokenizer;
function tokenizer(content) {
  //结果数组
  var result = [];

  //特殊符号的集合
  var symbol = ['{', '}', ':', ';', ',', '(', ')', '.', '#', '~', , '<', '>', '*', '+', '[', ']', '=', '|', '^'];

  //是否在字符串中，如果是的话，要保留换行、缩进、空格
  var isInString = false;

  //当前的单词栈
  var tmpString = '';

  for (var i = 0; i < content.length; i++) {
    //逐个读取字符
    var t = content[i];

    //当读取到引号时，进入字符串状态
    if (t == '\'' || t == '\"') {
      if (isInString) {
        tmpString += t;
        isInString = false;
        result.push(tmpString);
        tmpString = '';
      } else {
        tmpString += t;
        isInString = true;
      }
      continue;
    }


    if (isInString) {
      //字符串状态
      tmpString += t;
    } else {
      //非字符串状态

      if (t == '\n' || t == ' ' || t == '    ') {
        //如果读到了换行、空格或者tab，那么把当前单词栈中的字符作为一个单词push到结果数组中，并清零单词栈
        if (tmpString.length != 0) {
          result.push(tmpString);
          tmpString = '';
        }
        continue;
      }
      if (symbol.indexOf(t) != -1) {
        //如果读到了特殊符号，那么把当前单词栈中的字符作为一个单词push到结果数组中，清零单词栈，再把这个特殊符号放进结果数组
        if (tmpString.length != 0) {
          result.push(tmpString);
          tmpString = '';
        }
        result.push(t);
        continue;
      }
      //否则把字符推入单词栈中
      tmpString += t;
    }
  }
  return result;
}

// module.exports = parser;
function parser(tokenArray) {

  //等下我们要从单词序列中过滤出HTML标签
  var tagArray = [];

  //节点组成的栈，用于记录状态
  var nodeStack = [];

  //根节点
  var nodeTree = {
    name: 'root',
    children: []
  };

  //是否在script、style标签内部
  var isInScript = false,
    isInStyle = false;

  //先把根节点推入节点栈
  nodeStack.push(nodeTree);

  //一大堆单词序列中过滤出HTML标签，注意这里没有考虑到script、style中的特殊字符
  tokenArray.forEach(function (item, index) {
    if (item == '<') {
      tagArray.push(tokenArray[index + 1]);
    }
  });

  //HTML标准中自封闭的标签
  var selfEndTags = ['img', 'br', 'hr', 'col', 'area', 'link', 'meta', 'frame', 'input', 'param'];


  tagArray.forEach(function (item, index) {
    //逐个读取标签
    if (item[0] == '!' || selfEndTags.indexOf(item) != -1) {
      //自封闭标签、注释、!DOCTYPE
      nodeStack[nodeStack.length - 1].children.push({
        name: item[0] == '!' && item[1] == '-' && item[2] == '-' ? '<!--comment-->' : item,
        children: []
      });
    } else {
      //普通标签
      if (item[0] != '/') {
        //普通标签头
        if (!isInScript && !isInStyle) {
          //如果不在script或者style标签中，向节点栈尾部的children中加入这个节点，并推入这个节点，让它成为节点栈的尾部
          var newNode = {
            name: item,
            children: []
          }
          nodeStack[nodeStack.length - 1].children.push(newNode);
          nodeStack.push(newNode);
        }

        //如果是script或者style标签，那么进入相应的状态
        if (item == 'script') {
          isInScript = true;
        }
        if (item == 'style') {
          isInStyle = true;
        }
      } else {
        //普通标签尾
        if (item.split('/')[1] == nodeStack[nodeStack.length - 1].name) {
          //如果这个标签和节点栈尾部的标签相同，那么认为这个节点终止，节点栈推出。
          nodeStack.pop();
        }

        //如果是script或者style标签，那么进入相应的状态
        if (item.split('/')[1] == 'script') {
          isInScript = false;
        }
        if (item.split('/')[1] == 'style') {
          isInStyle = false;
        }
      }
    }
  });
  return nodeTree;
}

console.log(parser(tokenizer(str)));

 1. **常用部分**
 -  var                 variable或者是variation的简写，是JS中定义变量的关键字，如果定义变量时不使var关键字，则此变量为全局变量
 -  window              是指浏览器对象，是JS编程中的顶级作用域，JS中的一切方法和属性，都是这个对象的后代
 -  document            文档或文档对象，通俗的讲就是：凡是我们能看的见编码，就属于文档。是window的子对象
 -  alert               警告框
 -  prompt              输入框
 -  confirm             确认框 
 -  document.write()    窗口或框架中输出
 -  console.log         控制台输出 
 
 2. **变量类型**
 -  undefined   未定义
 -  boolean     布尔类型，其中true为逻辑值中的真，false为逻辑值中的假
 -  string      字符串
 -  number      数字
 -  object      对象
 -  null        空

 3. **基本语法**
 -  object      对象，通俗的讲把一个东东当成一个整体来看待，可称做一个对象
 -  switch      JS的基础语法之一，和case配合使用，表示判断的那个条件（请详见示例的解释）
 -  case        原意为情况、实例的意思，在JS中和switch配合使用完成一个判断。
 -  break       中断当前语句体的执行，执行下一个语句体
 -  continue    语句中断（循环中）的一个迭代，如果发生指定的条件。然后继续循环中的下一个迭代。
 -  return      中断程序的执行并返回。
 -  while()     循环语法之一，和之相对应的有do{ }while

 4. **全局方法**
 -  eval        将字符串转成js代码
 -  isNaN       不是一个数字
 -  Number      强制转换成数字
 -  parseFloat  强制转换成小数
 -  parseInt    强制转换成整数
 -  String      强制转换成字符串

 5.  **获取元素**
 -  document.getElementById()                    通过id来获取一个HTML元素，以便我们用JS来控制操作
 -  document.getElementsByTagName()              在整个网页内通过标签名（tagName)获得一组HTML元素的集合对象
 -  document.getElementsByTagName(‘div’).item(3) 从得到的一组div中取得第四个div元素，item中的是索引值
 -  document.getElementsByTagName(‘div’).length  获取到的这一组div的个数

 6.  **字符串方法**
 -  charAt()	        返回指定索引位置的字符
 -  charCodeAt()	    返回指定索引位置字符的 Unicode 值
 -  concat()	        连接两个或多个字符串，返回连接后的字符串
 -  fromCharCode()	    将 Unicode 转换为字符串
 -  indexOf()	        返回字符串中检索指定字符第一次出现的位置
 -  lastIndexOf()	    返回字符串中检索指定字符最后一次出现的位置
 -  localeCompare()	    用本地特定的顺序来比较两个字符串
 -  match()	            找到一个或多个正则表达式的匹配
 -  replace()	        替换与正则表达式匹配的子串
 -  search()	        检索与正则表达式相匹配的值
 -  slice()	            提取字符串的片断，并在新的字符串中返回被提取的部分
 -  split()	            把字符串分割为子字符串数组
 -  substr()	        从起始索引号提取字符串中指定数目的字符
 -  substring()	        提取字符串中两个指定的索引号之间的字符
 -  toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 -  toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 -  toLowerCase()	    把字符串转换为小写
 -  toString()	        返回字符串对象值
 -  toUpperCase()	    把字符串转换为大写
 -  trim()	            移除字符串首尾空白
 -  valueOf()	        返回某个字符串对象的原始值

 7. **数字对象的属性和方法**
 -  constructor	        返回对创建此对象的 Number 函数的引用
 -  MAX_VALUE           可表示的最大的数
 -  MIN_VALUE           可表示的最小的数
 -  NaN	                Not a Number非数字值
 -  NEGATIVE_INFINITY   负无穷大，溢出时返回该值
 -  POSITIVE_INFINITY   正无穷大，溢出时返回该值
 -  prototype           使您有能力向对象添加属性和方法
 -  toString            把数字转换为字符串，使用指定的基数
 -  toLocaleString      把数字转换为字符串，使用本地数字格式顺序
 -  toFixed	            把数字转换为字符串，结果的小数点后有指定位数的数字
 -  toExponential	    把对象的值转换为指数计数法
 -  toPrecision	        把数字格式化为指定的长度
 -  valueOf             返回一个Number对象的基本数字值

 8. **Array对象的属性和方法**
 -  Array               数组，最常用的JS数据对象，可以存放多个值，一般用 new Array()或一对[]来定义
 -  constructor         返回对创建此对象的数组函数的引用
 -  length              设置或返回数组中元素的数目
 -  prototype           使您有能力向对象添加属性和方法
 -  concat()	        连接两个或更多的数组，并返回结果
 -  join()	            把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔
 -  pop()	            删除并返回数组的最后一个元素
 -  push()	            向数组的末尾添加一个或更多元素，并返回新的长度
 -  reverse()	        颠倒数组中元素的顺序
 -  shift()	            删除并返回数组的第一个元素
 -  slice()	            从某个已有的数组返回选定的元素
 -  sort()	            对数组的元素进行排序
 -  splice()            删除元素，并向数组添加新元素
 -  toSource()	        返回该对象的源代码
 -  toString()	        把数组转换为字符串，并返回结果
 -  toLocaleString()    把数组转换为本地数组，并返回结果
 -  unshift()           向数组的开头添加一个或更多元素，并返回新的长度
 -  valueOf()           返回数组对象的原始值

 9. **函数和事件**
 -  function        函数，是定义方法的关键字
 -  typeof          用来计算变量类型的运算符
 -  arguments       函数的实参副本，是一个对象，必须使用在函数体中，当参数个数不确定时，可以使用其来接收所有实参
 -  innerHTML       属性设置或返回表格行的开始和结束标签之间的 HTML，用法：对象.innerHTML="内容" 设置内容 
 -  onload          某个页面或图像被完成加载
 -  onunload        用户退出页面
 -  onerror         当加载文档或图像时发生某个错误
 -  onabort         图像加载被中断
 -  onclick         鼠标单击
 -  ondblclick      鼠标双击
 -  onmousedown     鼠标按下
 -  onmouseup       鼠标抬起
 -  onmouseover     鼠标移入
 -  onmouseout      鼠标移出
 -  onmouseenter    鼠标移入
 -  onmouseleave    鼠标移出
 -  onmousemove     鼠标移动
 -  oncontext       鼠标右键单击
 -  onchange        用户改变域的内容(一般用于下拉列表)
 -  onblur          元素失去焦点
 -  onfocus         元素获得焦点
 -  onkeydown	    某个键盘的键被按下
 -  onkeypress	    某个键盘的键被按下或按住
 -  onkeyup	        某个键盘的键被松开
 -  onreset	        重置按钮被点击
 -  onresize        窗口或框架被调整尺寸
 -  onselect        文本被选定
 -  onsubmit        提交按钮被点击

 10.**Data对象的方法**
 -  Date()	                返回当日的日期和时间。
 -  getDate()	            从 Date 对象返回一个月中的某一天 (1 ~ 31)。
 -  getDay()	            从 Date 对象返回一周中的某一天 (0 ~ 6)。
 -  getMonth()	            从 Date 对象返回月份 (0 ~ 11)。
 -  getFullYear()	        从 Date 对象以四位数字返回年份。
 -  getYear()	            请使用 getFullYear() 方法代替。
 -  getHours()	            返回 Date 对象的小时 (0 ~ 23)。
 -  getMinutes()	        返回 Date 对象的分钟 (0 ~ 59)。
 -  getSeconds()	        返回 Date 对象的秒数 (0 ~ 59)。
 -  getMilliseconds()	    返回 Date 对象的毫秒(0 ~ 999)。
 -  getTime()	            返回 1970 年 1 月 1 日至今的毫秒数。
 -  getTimezoneOffset()	    返回本地时间与格林威治标准时间 (GMT) 的分钟差。
 -  getUTCDate()	        根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
 -  getUTCDay()	            根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
 -  getUTCMonth()	        根据世界时从 Date 对象返回月份 (0 ~ 11)。
 -  getUTCFullYear()	    根据世界时从 Date 对象返回四位数的年份。
 -  getUTCHours()	        根据世界时返回 Date 对象的小时 (0 ~ 23)。
 -  getUTCMinutes()	        根据世界时返回 Date 对象的分钟 (0 ~ 59)。
 -  getUTCSeconds()	        根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
 -  getUTCMilliseconds()	根据世界时返回 Date 对象的毫秒(0 ~ 999)。
 -  parse()	                返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
 -  setDate()	            设置 Date 对象中月的某一天 (1 ~ 31)。
 -  setMonth()	            设置 Date 对象中月份 (0 ~ 11)。
 -  setFullYear()	        设置 Date 对象中的年份（四位数字）。
 -  setYear()	            请使用 setFullYear() 方法代替。
 -  setHours()	            设置 Date 对象中的小时 (0 ~ 23)。
 -  setMinutes()	        设置 Date 对象中的分钟 (0 ~ 59)。
 -  setSeconds()	        设置 Date 对象中的秒钟 (0 ~ 59)。
 -  setMilliseconds()	    设置 Date 对象中的毫秒 (0 ~ 999)。
 -  setTime()	            以毫秒设置 Date 对象。
 -  setUTCDate()	        根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
 -  setUTCMonth()	        根据世界时设置 Date 对象中的月份 (0 ~ 11)。
 -  setUTCFullYear()	    根据世界时设置 Date 对象中的年份（四位数字）。
 -  setUTCHours()	        根据世界时设置 Date 对象中的小时 (0 ~ 23)。
 -  setUTCMinutes()	        根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
 -  setUTCSeconds()	        根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
 -  setUTCMilliseconds()	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
 -  toSource()	            返回该对象的源代码。
 -  toString()	            把 Date 对象转换为字符串。
 -  toTimeString()	        把 Date 对象的时间部分转换为字符串。
 -  toDateString()	        把 Date 对象的日期部分转换为字符串。
 -  toGMTString()	        请使用 toUTCString() 方法代替。
 -  toUTCString()	        根据世界时，把 Date 对象转换为字符串。
 -  toLocaleString()	    根据本地时间格式，把 Date 对象转换为字符串。
 -  toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
 -  toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
 -  UTC()	                根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
 -  valueOf()	            返回 Date 对象的原始值

 11. **Math对象的属性和方法**
 -  E	            返回算术常量 e，即自然对数的底数（约等于2.718）
 -  LN2	            返回 2 的自然对数（约等于0.693）
 -  LN10	        返回 10 的自然对数（约等于2.302）
 -  LOG2E	        返回以 2 为底的 e 的对数（约等于 1.414）
 -  LOG10E	        返回以 10 为底的 e 的对数（约等于0.434）
 -  PI	            返回圆周率（约等于3.14159）
 -  SQRT1_2	        返回返回 2 的平方根的倒数（约等于 0.707）
 -  SQRT2	        返回 2 的平方根（约等于 1.414）
 -  abs(x)	        返回数的绝对值
 -  acos(x)	        返回数的反余弦值
 -  asin(x)	        返回数的反正弦值
 -  atan(x)	        以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值
 -  atan2(y,x)	    返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）
 -  ceil(x)	        对数进行上舍入
 -  cos(x)	        返回数的余弦
 -  exp(x)	        返回 e 的指数
 -  floor(x)	    对数进行下舍入
 -  log(x)	        返回数的自然对数（底为e）
 -  max(x,y)	    返回 x 和 y 中的最高值
 -  min(x,y)	    返回 x 和 y 中的最低值
 -  pow(x,y)	    返回 x 的 y 次幂
 -  random()	    返回 0 ~ 1 之间的随机数
 -  round(x)	    把数四舍五入为最接近的整数
 -  sin(x)	        返回数的正弦
 -  sqrt(x)	        返回数的平方根
 -  tan(x)	        返回角的正切
 -  toSource()	    返回该对象的源代码
 -  valueOf()	    返回 Math 对象的原始值

 12. **Window对象的属性和方法**
 -  closed	        返回窗口是否已被关闭
 -  defaultStatus	设置或返回窗口状态栏中的默认文本
 -  document	    对 Document 对象的只读引用。请参阅 Document 对象
 -  history	        对 History 对象的只读引用。请参数 History 对象
 -  innerheight	    返回窗口的文档显示区的高度
 -  innerwidth	    返回窗口的文档显示区的宽度
 -  length	        设置或返回窗口中的框架数量
 -  location	    用于窗口或框架的 Location 对象。请参阅 Location 对象
 -  name	        设置或返回窗口的名称
 -  Navigator	    对 Navigator 对象的只读引用。请参数 Navigator 对象
 -  opener	        返回对创建此窗口的窗口的引用
 -  outerheight	    返回窗口的外部高度
 -  outerwidth	    返回窗口的外部宽度
 -  pageXOffset	    设置或返回当前页面相对于窗口显示区左上角的 X 位置
 -  pageYOffset	    设置或返回当前页面相对于窗口显示区左上角的 Y 位置
 -  parent	        返回父窗口
 -  Screen	        对 Screen 对象的只读引用。请参数 Screen 对象
 -  self	        返回对当前窗口的引用。等价于 Window 属性
 -  status	        设置窗口状态栏的文本
 -  top	            返回最顶层的先辈窗口
 -  alert()	        显示带有一段消息和一个确认按钮的警告框
 -  blur()	        把键盘焦点从顶层窗口移开
 -  clearInterval()	取消由 setInterval() 设置的 timeout
 -  clearTimeout()	取消由 setTimeout() 方法设置的 timeout
 -  close()	        关闭浏览器窗口
 -  confirm()	    显示带有一段消息以及确认按钮和取消按钮的对话框
 -  createPopup()	创建一个 pop-up 窗口
 -  focus()	        把键盘焦点给予一个窗口
 -  moveBy()	    可相对窗口的当前坐标把它移动指定的像素
 -  moveTo()	    把窗口的左上角移动到一个指定的坐标
 -  open()	        打开一个新的浏览器窗口或查找一个已命名的窗口
 -  print()	        打印当前窗口的内容
 -  prompt()	    显示可提示用户输入的对话框
 -  resizeBy()	    按照指定的像素调整窗口的大小
 -  resizeTo()	    把窗口的大小调整到指定的宽度和高度
 -  scrollBy()	    按照指定的像素值来滚动内容
 -  scrollTo()	    把内容滚动到指定的坐标
 -  setInterval()	按照指定的周期（以毫秒计）来调用函数或计算表达式
 -  setTimeout()	在指定的毫秒数后调用函数或计算表达式

 13. **Navigator对象属性和方法**
 -  appCodeName	    返回浏览器的代码名。
 -  appMinorVersion	返回浏览器的次级版本。
 -  appName	        返回浏览器的名称。
 -  appVersion	    返回浏览器的平台和版本信息。
 -  browserLanguage	返回当前浏览器的语言。
 -  cookieEnabled	返回指明浏览器中是否启用 cookie 的布尔值。
 -  cpuClass	    返回浏览器系统的 CPU 等级。
 -  onLine	        返回指明系统是否处于脱机模式的布尔值。
 -  platform	    返回运行浏览器的操作系统平台。
 -  systemLanguage	返回 OS 使用的默认语言。
 -  userAgent	    返回由客户机发送服务器的 user-agent 头部的值。
 -  userLanguage	返回 OS 的自然语言设置。
 -  javaEnabled()	规定浏览器是否启用 Java。
 -  taintEnabled()	规定浏览器是否启用数据污点 (data tainting)。

 14. **Screen 对象属性**
 -  availHeight	            返回显示屏幕的高度 (除 Windows 任务栏之外)。
 -  availWidth	            返回显示屏幕的宽度 (除 Windows 任务栏之外)。
 -  bufferDepth	            设置或返回调色板的比特深度。
 -  colorDepth	            返回目标设备或缓冲器上的调色板的比特深度。
 -  deviceXDPI	            返回显示屏幕的每英寸水平点数。
 -  deviceYDPI	            返回显示屏幕的每英寸垂直点数。
 -  fontSmoothingEnabled    返回用户是否在显示控制面板中启用了字体平滑。
 -  height	                返回显示屏幕的高度。
 -  logicalXDPI	            返回显示屏幕每英寸的水平方向的常规点数。
 -  logicalYDPI	            返回显示屏幕每英寸的垂直方向的常规点数。
 -  pixelDepth	            返回显示屏幕的颜色分辨率（比特每像素）。
 -  updateInterval	        设置或返回屏幕的刷新率。
 -  width	                返回显示器屏幕的宽度。

 15. **History 对象方法
 -  back()	    加载 history 列表中的前一个 URL。
 -  forward()	加载 history 列表中的下一个 URL。
 -  go()	    加载 history 列表中的某个具体页面。

 16. **Location 对象属性和方法**
 -  hash	    设置或返回从井号 (#) 开始的 URL（锚）。
 -  host	    设置或返回主机名和当前 URL 的端口号。
 -  hostname	设置或返回当前 URL 的主机名。
 -  href	    设置或返回完整的 URL。
 -  pathname	设置或返回当前 URL 的路径部分。
 -  port	    设置或返回当前 URL 的端口号。
 -  protocol	设置或返回当前 URL 的协议。
 -  search	    设置或返回从问号 (?) 开始的 URL（查询部分）。
 -  assign()	加载新的文档。
 -  reload()	重新加载当前文档。
 -  replace()	用新的文档替换当前文档。
 
 17. **Document 对象集合属性和方法**
 -  all[]	                        提供对文档中所有 HTML 元素的访问。
 -  anchors[]	                    返回对文档中所有 Anchor 对象的引用。
 -  applets	                        返回对文档中所有 Applet 对象的引用。
 -  forms[]	                        返回对文档中所有 Form 对象引用。
 -  images[]	                    返回对文档中所有 Image 对象引用。
 -  links[]	                        返回对文档中所有 Area 和 Link 对象引用。
 -  cookie	                        设置或返回与当前文档有关的所有 cookie。
 -  domain	                        返回当前文档的域名。
 -  lastModified	                返回文档被最后修改的日期和时间。
 -  referrer	                    返回载入当前文档的文档的 URL。
 -  title	                        返回当前文档的标题。
 -  URL	                            返回当前文档的 URL。
 -  close()	关闭用 document.open()   方法打开的输出流，并显示选定的数据。
 -  getElementById()	            返回对拥有指定 id 的第一个对象的引用。
 -  getElementsByName()	            返回带有指定名称的对象集合。
 -  getElementsByTagName()	        返回带有指定标签名的对象集合。
 -  open()	                        打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。
 -  write()	                        向文档写 HTML 表达式 或 JavaScript 代码。
 -  writeln()	                    等同于 write() 方法，不同的是在每个表达式之后写一个换行符。

 18. **Element 对象属性和方法**
 -  element.accessKey	                设置或返回元素的快捷键。
 -  element.appendChild()	            向元素添加新的子节点，作为最后一个子节点。
 -  element.attributes	                返回元素属性的 NamedNodeMap。
 -  element.childNodes	                返回元素子节点的 NodeList。
 -  element.className	                设置或返回元素的 class 属性。
 -  element.clientHeight	            返回元素的可见高度。
 -  element.clientWidth	                返回元素的可见宽度。
 -  element.cloneNode()	                克隆元素。
 -  element.compareDocumentPosition()	比较两个元素的文档位置。
 -  element.contentEditable	            设置或返回元素的文本方向。
 -  element.dir	                        设置或返回元素的内容是否可编辑。
 -  element.firstChild	                返回元素的首个子。
 -  element.getAttribute()	            返回元素节点的指定属性值。
 -  element.getAttributeNode()	        返回指定的属性节点。
 -  element.getElementsByTagName()	    返回拥有指定标签名的所有子元素的集合。
 -  element.getFeature()	            返回实现了指定特性的 API 的某个对象。
 -  element.getUserData()	            返回关联元素上键的对象。
 -  element.hasAttribute()	            如果元素拥有指定属性，则返回true，否则返回 false。
 -  element.hasAttributes()	            如果元素拥有属性，则返回 true，否则返回 false。
 -  element.hasChildNodes()	            如果元素拥有子节点，则返回 true，否则 false。
 -  element.id	                        设置或返回元素的 id。
 -  element.innerHTML	                设置或返回元素的内容。
 -  element.insertBefore()	            在指定的已有的子节点之前插入新节点。
 -  element.isContentEditable	        设置或返回元素的内容。
 -  element.isDefaultNamespace()	    如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
 -  element.isEqualNode()	            检查两个元素是否相等。
 -  element.isSameNode()	            检查两个元素是否是相同的节点。
 -  element.isSupported()	            如果元素支持指定特性，则返回 true。
 -  element.lang	                    设置或返回元素的语言代码。
 -  element.lastChild	                返回元素的最后一个子元素。
 -  element.namespaceURI	            返回元素的 namespace URI。
 -  element.nextSibling	                返回位于相同节点树层级的下一个节点。
 -  element.nodeName	                返回元素的名称。
 -  element.nodeType	                返回元素的节点类型。
 -  element.nodeValue	                设置或返回元素值。
 -  element.normalize()	                合并元素中相邻的文本节点，并移除空的文本节点。
 -  element.offsetHeight	            返回元素的高度。
 -  element.offsetWidth	                返回元素的宽度。
 -  element.offsetLeft	                返回元素的水平偏移位置。
 -  element.offsetParent	            返回元素的偏移容器。
 -  element.offsetTop	                返回元素的垂直偏移位置。
 -  element.ownerDocument	            返回元素的根元素（文档对象）。
 -  element.parentNode	                返回元素的父节点。
 -  element.previousSibling	            返回位于相同节点树层级的前一个元素。
 -  element.removeAttribute()	        从元素中移除指定属性。
 -  element.removeAttributeNode()	    移除指定的属性节点，并返回被移除的节点。
 -  element.removeChild()	            从元素中移除子节点。
 -  element.replaceChild()	            替换元素中的子节点。
 -  element.scrollHeight	            返回元素的整体高度。
 -  element.scrollLeft	                返回元素左边缘与视图之间的距离。
 -  element.scrollTop	                返回元素上边缘与视图之间的距离。
 -  element.scrollWidth	                返回元素的整体宽度。
 -  element.setAttribute()	            把指定属性设置或更改为指定值。
 -  element.setAttributeNode()	        设置或更改指定属性节点。	
 -  element.setUserData()	            把对象关联到元素上的键。
 -  element.style	                    设置或返回元素的 style 属性。
 -  element.tabIndex	                设置或返回元素的 tab 键控制次序。
 -  element.tagName	                    返回元素的标签名。
 -  element.textContent	                设置或返回节点及其后代的文本内容。
 -  element.title	                    设置或返回元素的 title 属性。
 -  element.toString()	                把元素转换为字符串。
 -  nodelist.item()	                    返回 NodeList 中位于指定下标的节点。
 -  nodelist.length	                    返回 NodeList 中的节点数。

 19. **HTML DOM Attribute 对象的属性和方法**
 -  attr.isId	                如果属性是 id 类型，则返回 true，否则返回 false。
 -  attr.name	                返回属性的名称。
 -  attr.value	                设置或返回属性的值。
 -  attr.specified	            如果已指定属性，则返回 true，否则返回 false。
 -  nodemap.getNamedItem()	    从 NamedNodeMap 返回指定的属性节点。
 -  nodemap.item()	            返回 NamedNodeMap 中位于指定下标的节点。
 -  nodemap.length	            返回 NamedNodeMap 中的节点数。
 -  nodemap.removeNamedItem()	移除指定的属性节点。
 -  nodemap.setNamedItem()	    设置指定的属性节点（通过名称）。

 20. **HTML DOM Event 对象属性和方法**
 -  altKey	            返回当事件被触发时，"ALT" 是否被按下。
 -  button	            返回当事件被触发时，哪个鼠标按钮被点击。
 -  clientX	            返回当事件被触发时，鼠标指针的水平坐标。
 -  clientY	            返回当事件被触发时，鼠标指针的垂直坐标。
 -  ctrlKey	            返回当事件被触发时，"CTRL" 键是否被按下。
 -  metaKey	            返回当事件被触发时，"meta" 键是否被按下。
 -  relatedTarget	    返回与事件的目标节点相关的节点。
 -  screenX	            返回当某个事件被触发时，鼠标指针的水平坐标。
 -  screenY	            返回当某个事件被触发时，鼠标指针的垂直坐标。
 -  shiftKey	        返回当事件被触发时，"SHIFT" 键是否被按下。
 -  cancelBubble	    如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。
 -  fromElement	        对于 mouseover 和 mouseout 事件，fromElement 引用移出鼠标的元素。
 -  offsetX,offsetY	    发生事件的地点在事件源元素的坐标系统中的 x 坐标和 y 坐标。
 -  returnValue	        如果设置了该属性，它的值比事件句柄的返回值优先级高。把这个属性设置为 fasle，可以取消发生事件的源元素的默认动作。
 -  srcElement	        对于生成事件的 Window 对象、Document 对象或 Element 对象的引用。
 -  toElement	        对于 mouseover 和 mouseout 事件，该属性引用移入鼠标的元素。
 -  bubbles	            返回布尔值，指示事件是否是起泡事件类型。
 -  cancelable	        返回布尔值，指示事件是否可拥可取消的默认动作。
 -  currentTarget	    返回其事件监听器触发该事件的元素。
 -  eventPhase	        返回事件传播的当前阶段。
 -  target	            返回触发此事件的元素（事件的目标节点）。
 -  timeStamp	        返回事件生成的日期和时间。
 -  type	            返回当前 Event 对象表示的事件的名称。
 -  initEvent()	        初始化新创建的 Event 对象的属性。
 -  preventDefault()	通知浏览器不要执行与事件关联的默认动作。
 -  stopPropagation()	不再派发事件。

 21. **常见错误**
    解决错误前，首先要学会阅读报错信息
    eg:Uncaught TypeError: ... is not a function
    Uncaught 表示没有被catch语句捕获到的错误
    TypeError 是错误类型
    ... is not a function 是消息体
    整体意思就是： 代码尝试将...当作函数来使用，但是该...并不是一个函数
 -  Uncaught TypeError: Cannot read property '' of undefined    property：属性
    常见的一种是在渲染 UI 组件时对于状态的初始化操作不当,当你读取一个未定义的对象的属性或调用其方法时，这个错误会在 Chrome 中出现，简单来说就是属性或方法所属的对象有问题。
 -  TypeError: ‘undefined’is not an object
    这是在 Safari 中读取属性或调用未定义对象上的方法时发生的错误,Safari 使用了不同的错误消息提示语。
 -  TypeError: 'null' is not an object
    这是在 Safari 中读取属性或调用空对象上的方法时发生的错误,Safari 使用了不同的错误消息提示语。
    undefined 通常是一个尚未分配的变量，而 null 表示该值为空。 要验证它们不相等，请尝试使用严格的相等运算符 ===
    这种错误可能发生场景是：在加载元素之前尝试在 JavaScript 中使用元素。 因为 DOM API 对于空白的对象引用返回值为 null。
 -  (unknown): Script error
    当未捕获的 JavaScript 错误（通过window.onerror处理程序引发的错误，而不是捕获在try-catch中）被浏览器的跨域策略限制时，会产生这类的脚本错误。这是一种浏览器安全措施，旨在防止跨域传递数据，否则将不允许进行通信。
 -  TypeError: Object doesn’t support property   support：支持
    这是您在调用未定义的方法时发生在 IE 中的错误。 您可以在 IE 开发者控制台中进行测试。
 -  TypeError: ... is not a function
    调用未定义的函数时，在 Chrome 中产生的错误
 -  Uncaught RangeError: Maximum call stack    Range：范围  stack：堆栈
    当你调用一个不终止的递归函数时或者将值传递给超出范围的函数，会报出的错,检查函数的递归调用，确保函数不是无限递归的
 -  TypeError: Cannot read property ‘length’of undefined 
    因为读取未定义变量的长度属性,通常会在数组中找到定义的长度，但是如果数组未初始化或者变量名称在另一个上下文中隐藏，则可能会遇到此错误。
    var testArray = ["Test"];
    function testFunction(testArray) {
        for (var i = 0; i < testArray.length; i++) {
            console.log(testArray[i]);
        }
    }
    testFunction();
    当你用参数声明一个函数时，这些参数变成了函数作用域内的本地参数。这意味着即使你函数外有名为 testArray 的变量，在一个函数中具有相同名字的参数也会被视为本地参数。
 -  Uncaught TypeError: Cannot set property ... of undefined
    尝试访问一个未定义的变量时，它总是返回 undefined，我们不能获取或设置任何未定义的属性。
 -  ReferenceError: ... is not defined    Reference：引用
    当您尝试访问未定义的变量或超出当前范围的变量时，会引发此错误。
 -  Uncaught exception: ReferenceError: Cannot assign to ‘this’     assign：分配，赋值
    尝试给一个不能被赋值的变量赋值时将发生该错误，确保不给函数函数的返回值或 this 关键字赋值。
 -  Uncaught TypeError: Converting circular structure toJSON    Converting:转化  circular：圆形的 structure：结构
    该错误总是发生在使用 JSON.stringify 序列化一个存在循环引用的对象时,移除将要被转换为 JSON 字符串对象内部的循环引用。
 -  Unexpected token ;
    通常发生在缺少括号或分号时,该错误提示的行号有时并不能指向正确的位置
 -  Uncaught SyntaxError: Unexpected token ILLEGAL      Syntax：句法   illegal：不合法
    字符串字面量缺少闭合的引号,确保所有字符串都包含闭合的引号。
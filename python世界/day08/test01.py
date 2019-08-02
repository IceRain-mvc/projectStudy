# 元组   没有太多的方法
t = (1, 32, 4, "字符串")
# 字典:
demo_dict = {"name": "张三", "age": 18}
# 列表
# print("%s %d", ("a", 10))
list_name = ["张三", "李四", "王五", "找妞", demo_dict]
print(dir(list))
# ['__add__',
# '__class__', '__
# contains__',
#  '__delattr__',
#  '__delitem__', '__dir__',
# '__doc__', '__eq__',
#  '__format__', '__ge__',
# '__getattribute__', '__getitem__',
#  '__gt__', '__hash__', '__iadd__',
#  '__imul__', '__init__',
#  '__init_subclass__',
#  '__iter__', '__le__', '__len__', '__lt__',
#  '__mul__', '__ne__', '__new__', '__reduce__',
#  '__reduce_ex__', '__repr__', '__reversed__',
#  '__rmul__', '__setattr__', '__setitem__',
#  '__sizeof__', '__str__', '__subclasshook__',
#  'append', 'clear', 'copy', 'count', 'extend',
# 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']

# append : 追加
# remove : 移除
# clear : 全部清除
# copy : 复制
# count: 属性
# insert : 第一条
# pop 最后一条
# reverse: 翻转
# sort : 排序


for item in list_name:
    print(item)
    if type(item) == dict:
        print(demo_dict["name"])
        print(demo_dict["age"])


# 面向过程 : 直接写代码 面向我们的 过程: 做什么?
# 面向对象 : 调用 功能                  谁来做?

# 类:工厂  方法:车间
# 飞机大战: 移动 射击 不同型号 载弹量  移动的距离
# class FeiJi(首字母大写)  驼峰式命名   属性 和方法 :匈牙利命名法 name  person_info
abc = 10
#  属性 : 名词   型号   载弹量  距离
#  方法 : 动作   移动move()   射击()

# dir  内置函数   dir(abc)

print(dir(abc))

